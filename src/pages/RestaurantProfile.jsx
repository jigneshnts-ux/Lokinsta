import React from "react";

export default function RestaurantProfile() {
  return (
    <div className="max-w-xl mx-auto pt-4 pb-20 px-4">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-20 h-20 bg-gray-300 rounded-full" />
        <div>
          <div className="font-bold text-xl">Spice Villa</div>
          <div className="text-gray-500">Restaurant</div>
        </div>
      </div>
      <div className="mb-4">
        <div className="text-sm text-gray-600">123 Main St, Your City</div>
        <div className="w-full h-40 bg-gray-200 rounded-lg mt-2" />
      </div>
      <h2 className="text-lg font-bold mb-2 text-orange-500">Special Dishes</h2>
      <div className="flex gap-2 overflow-x-auto">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="min-w-[120px] bg-white rounded-lg shadow p-2">
            <div className="w-full h-20 bg-gray-200 rounded mb-2" />
            <div className="font-bold">Dish Name</div>
            <div className="text-sm text-gray-500">$12</div>
          </div>
        ))}
      </div>
      <h2 className="text-lg font-bold mt-6 mb-2 text-orange-500">User Moments</h2>
      <div className="grid grid-cols-2 gap-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="aspect-square rounded-lg overflow-hidden bg-gray-200 animate-pulse" />
        ))}
      </div>
    </div>
  );
}