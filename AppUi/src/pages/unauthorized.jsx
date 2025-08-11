import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Buttons/ButtonComponent";
import { GUEST_PATH } from "../routes/guest/GuestPaths";
import retouchImage from "../assets/images/retouch_2025072802203165.png";

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-[linear-gradient(151deg,rgba(14,60,133,0.98)_0%,rgba(37,73,137,1)_32%,rgba(75,193,255,1)_100%)]">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl rounded-2xl p-10 max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
        
        {/* Text Content */}
        <div className="flex-1 text-white text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">We are Sorry...</h1>
          <p className="text-sm font-light mb-8">
            The page you are trying to access has restricted access.<br />
            Please refer to your system administrator.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              onClick={() => navigate(GUEST_PATH.LOGIN)}
              className="w-40"
            >
              Dashboard
            </Button>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="flex-1">
          <img
            src={retouchImage}
            alt="403 illustration"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
