import React from "react";
import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-yellow-200">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-4 text-center text-orange-500">Lokinsta</h1>
        <p className="mb-6 text-center text-gray-600">
          Discover, share, and celebrate amazing food experiences!
        </p>
        <button 
          className="w-full mb-4 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
          onClick={() => navigate("/signup?type=restaurant")}
        >
          I am a Restaurant Owner
        </button>
        <button 
          className="w-full py-3 bg-yellow-400 text-white rounded-lg shadow hover:bg-yellow-500 transition"
          onClick={() => navigate("/signup?type=user")}
        >
          I am a Food Lover
        </button>
      </div>
      <p className="mt-6 text-xs text-gray-400 text-center">
        Already have an account? <a href="/login" className="underline text-orange-600">Sign In</a>
      </p>
    </div>
  );
}