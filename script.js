document.addEventListener('DOMContentLoaded', () => {
    // Check which page we are on and run the appropriate function
    if (document.body.classList.contains('auth-page')) {
        handleAuthPage();
    } else if (document.body.classList.contains('restaurant-page')) {
        handleRestaurantPage();
    } else {
        handleIndexPage();
    }
});

// --- Data Management (using localStorage) ---

// Placeholder for our data. We'll use localStorage to save it.
let appData = JSON.parse(localStorage.getItem('appData')) || {
    users: [],
    restaurants: []
};

function saveData() {
    localStorage.setItem('appData', JSON.stringify(appData));
}

// --- Auth Page Logic ---
function handleAuthPage() {
    const loginFormContainer = document.getElementById('login-form-container');
    const signupFormContainer = document.getElementById('signup-form-container');

    const showLoginLink = document.getElementById('show-login');
    const showSignupLink = document.getElementById('show-signup');

    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        signupFormContainer.style.display = 'none';
        loginFormContainer.style.display = 'block';
    });

    showSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginFormContainer.style.display = 'none';
        signupFormContainer.style.display = 'block';
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const accountType = document.getElementById('account-type').value;

        // Check if username already exists
        if (appData.users.some(user => user.username === username)) {
            alert('Username already taken!');
            return;
        }

        const newUser = { username, email, password, accountType };
        appData.users.push(newUser);
        saveData();
        alert(`Account created successfully for ${username}!`);
        // Redirect to login form
        showLoginLink.click();
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const user = appData.users.find(u => u.username === username && u.password === password);

        if (user) {
            alert(`Welcome back, ${user.username}!`);
            // Here you would set a session or token. For this example, we just store the logged-in user.
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = 'index.html'; // Redirect to the main page
        } else {
            alert('Invalid username or password.');
        }
    });
}

// --- Index Page Logic ---
function handleIndexPage() {
    const restaurantList = document.getElementById('restaurant-list');

    function renderRestaurantList() {
        restaurantList.innerHTML = ''; // Clear existing cards
        appData.restaurants.forEach(restaurant => {
            const card = document.createElement('a');
            card.href = `restaurant.html?id=${restaurant.id}`;
            card.classList.add('restaurant-card');
            card.innerHTML = `
                <h3>${restaurant.name}</h3>
                <p>Location: ${restaurant.location}</p>
                <p>Rating: ${calculateAverageRating(restaurant.reviews).toFixed(1)} / 5</p>
            `;
            restaurantList.appendChild(card);
        });
    }

    // A dummy restaurant for demonstration purposes
    if (appData.restaurants.length === 0) {
        appData.restaurants.push({
            id: '1',
            name: 'The Cozy Corner Cafe',
            location: 'Downtown',
            photos: [],
            reviews: []
        });
        saveData();
    }
    
    renderRestaurantList();
}

// --- Restaurant Page Logic ---
function handleRestaurantPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantId = urlParams.get('id');
    const restaurant = appData.restaurants.find(r => r.id === restaurantId);

    if (!restaurant) {
        alert('Restaurant not found!');
        window.location.href = 'index.html';
        return;
    }

    const restaurantNameEl = document.getElementById('restaurant-name');
    const photosContainer = document.getElementById('photos-container');
    const addPhotoButton = document.getElementById('add-photo-button');
    const photoUploadInput = document.getElementById('photo-upload-input');
    const reviewForm = document.getElementById('review-form');
    const commentsList = document.getElementById('comments-list');
    const ratingsSummary = document.getElementById('ratings-summary');

    restaurantNameEl.textContent = restaurant.name;

    function renderPhotos() {
        photosContainer.innerHTML = '';
        restaurant.photos.forEach(photoUrl => {
            const img = document.createElement('img');
            img.src = photoUrl;
            photosContainer.appendChild(img);
        });
    }

    function renderReviews() {
        commentsList.innerHTML = '';
        if (restaurant.reviews.length === 0) {
            commentsList.innerHTML = '<p>No reviews yet. Be the first!</p>';
        } else {
            restaurant.reviews.forEach(review => {
                const commentCard = document.createElement('div');
                commentCard.classList.add('comment-card');
                commentCard.innerHTML = `
                    <h4>${review.username} <span class="comment-rating">${'★'.repeat(review.rating)}</span></h4>
                    <p>${review.comment}</p>
                `;
                commentsList.appendChild(commentCard);
            });
        }
    }

    function updateRatingsSummary() {
        const averageRating = calculateAverageRating(restaurant.reviews);
        ratingsSummary.innerHTML = `<p><strong>Average Rating:</strong> ${averageRating.toFixed(1)} / 5 (${restaurant.reviews.length} reviews)</p>`;
    }

    function calculateAverageRating(reviews) {
        if (reviews.length === 0) return 0;
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        return totalRating / reviews.length;
    }

    // Event Listeners
    addPhotoButton.addEventListener('click', () => {
        photoUploadInput.click();
    });

    photoUploadInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const photoUrl = event.target.result;
                restaurant.photos.push(photoUrl);
                saveData();
                renderPhotos();
            };
            reader.readAsDataURL(file);
        }
    });

    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (!currentUser) {
            alert('Please log in to leave a review.');
            window.location.href = 'auth.html';
            return;
        }

        const comment = document.getElementById('comment-input').value;
        const rating = document.querySelector('input[name="rating"]:checked');

        if (!rating) {
            alert('Please select a star rating.');
            return;
        }

        const newReview = {
            username: currentUser.username,
            comment: comment,
            rating: parseInt(rating.value)
        };

        restaurant.reviews.push(newReview);
        saveData();
        renderReviews();
        updateRatingsSummary();
        reviewForm.reset();
    });

    // Initial render
    renderPhotos();
    renderReviews();
    updateRatingsSummary();
}
