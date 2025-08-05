import React from "react";

export default function Search() {
  return (
    <div className="max-w-xl mx-auto pt-4 pb-20 px-4">
      <h2 className="text-2xl font-bold mb-4 text-orange-500">Search</h2>
      <input
        type="text"
        placeholder="Search for restaurants, dishes, or places..."
        className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-400"
      />
      {/* AI-powered suggestions and results here */}
      <div className="mt-6 text-gray-400 text-center">No results yet.</div>
    </div>
  );
}