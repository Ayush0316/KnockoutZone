import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa"; // Make sure react-icons is installed

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <FaLock className="text-red-500 text-6xl mb-4" />
      <h2 className="text-4xl font-bold text-gray-800 mb-2">403 - Unauthorized</h2>
      <p className="text-gray-600 mb-6">You don’t have permission to view this page.</p>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Go to Home
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
