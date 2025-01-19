// WinnerPage.tsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Utility to extract query parameters
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const WinnerPage: React.FC = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const prize = query.get("prize"); // Get the prize value from the query string

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-4xl font-bold text-green-600 mb-4">🎉 Hurray! 🎉</h1>
      <p className="text-xl mb-6">You have won a prize of <strong>${prize}</strong>!</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
      >
        Back to Home
      </button>
    </div>
  );
};

export default WinnerPage;
