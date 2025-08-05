import React from "react";

export default function Rewards() {
  return (
    <div className="max-w-xl mx-auto pt-4 pb-20 px-4">
      <h2 className="text-2xl font-bold mb-4 text-orange-500">Your Rewards</h2>
      <div className="flex flex-col gap-4">
        {/* List of earned points/badges */}
        <div className="bg-yellow-100 text-yellow-800 rounded-lg p-4 shadow flex items-center">
          <span className="text-3xl mr-4">🏅</span>
          <div>
            <div className="font-bold">Food Explorer</div>
            <div className="text-sm">Earned by posting your first food photo!</div>
          </div>
        </div>
      </div>
    </div>
  );
}