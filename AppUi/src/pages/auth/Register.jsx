import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Buttons/ButtonComponent";

const roles = ["Player", "Organizer", "Admin"];

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword, role } = formData;

    if (!fullName || !email || !password || !confirmPassword || !role) {
      setError("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#1E3C72] via-[#2A5298] to-[#6DD5FA]">
      <div className="w-full max-w-md p-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 shadow-lg">
        <h2 className="text-3xl font-semibold text-white text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/60"
            onChange={handleChange}
            value={formData.fullName}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/60"
            onChange={handleChange}
            value={formData.email}
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/60"
              onChange={handleChange}
              value={formData.password}
            />
            <span
              className="absolute right-4 top-3 text-white/60 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/60"
            onChange={handleChange}
            value={formData.confirmPassword}
          />

          <select
            name="role"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/60"
            onChange={handleChange}
            value={formData.role}
          >
            <option value="" className="text-white/70">
              Select Role
            </option>
            {roles.map((role) => (
              <option key={role} value={role} className="text-black">
                {role}
              </option>
            ))}
          </select>

          {error && <p className="text-red-300 text-sm">{error}</p>}

          <Button
            type="submit"
            isLoading={loading}
            className="w-full bg-gradient-to-r from-[#6DD5FA] to-[#2980B9] text-white py-3 rounded-lg hover:opacity-90 transition-all duration-300"
          >
            Register
          </Button>

          <p className="text-sm text-white/70 text-center mt-4">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="underline cursor-pointer text-white"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
