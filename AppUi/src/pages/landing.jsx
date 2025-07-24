import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to KnockoutZone</h1>

      {/* ✅ Add Register Button */}
      <button
        onClick={() => navigate("/register")}
        className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition"
      >
        Register
      </button>
    </div>
  );
};

export default LandingPage;
