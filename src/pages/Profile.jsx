import React from "react";

export default function Profile() {
  return (
    <div className="max-w-xl mx-auto pt-4 pb-20 px-4">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-20 h-20 bg-gray-200 rounded-full" />
        <div>
          <div className="font-bold text-xl">@foodie_user</div>
          <div className="text-gray-500">Food Lover</div>
        </div>
      </div>
      <h2 className="text-lg font-bold mb-2 text-orange-500">Your Posts</h2>
      <div className="grid grid-cols-2 gap-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-square rounded-lg overflow-hidden bg-gray-200 animate-pulse" />
        ))}
      </div>
      <h2 className="text-lg font-bold mt-6 mb-2 text-orange-500">Badges</h2>
      <div className="flex gap-2">
        <span className="bg-yellow-100 text-yellow-800 rounded-full px-4 py-2 text-sm font-bold">🏅 Food Explorer</span>
      </div>
    </div>
  );
}