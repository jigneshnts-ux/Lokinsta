import React from "react";

export default function Feed() {
  // Fetch feed data here
  return (
    <div className="max-w-xl mx-auto pt-4 pb-20">
      <h2 className="text-2xl font-bold mb-4 text-orange-500 px-4">Popular Food Moments</h2>
      <div className="grid grid-cols-2 gap-2 px-2">
        {/* Map over posts */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="aspect-square rounded-lg overflow-hidden bg-gray-200 animate-pulse" />
        ))}
      </div>
    </div>
  );
}