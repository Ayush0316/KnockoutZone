import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import Button from "../components/common/Buttons/ButtonComponent";

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <FaLock className="text-red-500 text-6xl mb-4" />
      <h2 className="text-4xl font-bold text-gray-800 mb-2">403 - Unauthorized</h2>
      <p className="text-gray-600 mb-6">You don’t have permission to view this page.</p>

      <div className="flex gap-4">
        <Button onClick={() => navigate("/")}>Go to Home</Button>
        <Button onClick={() => navigate("/login")} variant="secondary">Login</Button>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
