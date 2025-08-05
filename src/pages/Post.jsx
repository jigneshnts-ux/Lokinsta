import React from "react";

export default function Post() {
  return (
    <div className="max-w-xl mx-auto pt-4 pb-20 px-4">
      <h2 className="text-2xl font-bold mb-4 text-orange-500">New Post</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Restaurant or Stall Name" className="py-2 px-4 rounded-lg border border-gray-300" />
        <textarea placeholder="Describe your food experience..." rows={3} className="py-2 px-4 rounded-lg border border-gray-300" />
        <input type="file" className="py-2" accept="image/*,video/*" />
        <button className="bg-orange-500 text-white py-2 rounded-lg font-bold hover:bg-orange-600 transition">Post</button>
      </form>
    </div>
  );
}