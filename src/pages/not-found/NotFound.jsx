import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212]">
      <div
        className="text-center p-8 rounded-lg shadow-xl 
        bg-gradient-to-r from-neutral-800 via-neutral-800 to-neutral-700 
        max-w-md w-full backdrop-blur-xl bg-opacity-30"
      >
        <h1 className="text-6xl text-white font-bold mb-4">404</h1>
        <p className="text-white mb-6 opacity-80 text-lg">
          Oops! The page you are looking for does not exist.
        </p>
        <button
          onClick={handleGoHome}
          className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500 transition-all duration-300 focus:outline-none"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
