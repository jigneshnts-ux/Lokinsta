import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Feed from "./pages/Feed";
import Search from "./pages/Search";
import Post from "./pages/Post";
import Rewards from "./pages/Rewards";
import Profile from "./pages/Profile";
import RestaurantProfile from "./pages/RestaurantProfile";
import Onboarding from "./pages/Onboarding";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route element={<MainLayout />}> 
          <Route path="/feed" element={<Feed />} />
          <Route path="/search" element={<Search />} />
          <Route path="/post" element={<Post />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/restaurant/:id" element={<RestaurantProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;