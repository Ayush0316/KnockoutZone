import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { isLoading } = useSelector((state) => state.auth);

    const handleLogin = async () => {
        setError("");

        if (!email || !password) {
            setError("Email and password are required");
            return;
        }

        try {
            await dispatch(
                login({
                    user: { name: "Mock User", email },
                    role: "admin",
                })
            );
            navigate("/dashboard");
        } catch (err) {
            setError("Login failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-400 to-purple-400">
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl shadow-2xl p-12 w-full max-w-md">
                <h2 className="text-4xl font-light text-center mb-12 tracking-[0.2em] text-white">
                    LOGIN
                </h2>
                <div className="space-y-6">
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200"
                        />
                    </div>
                    {error && (
                        <p className="text-red-100 text-sm text-center">
                            {error}
                        </p>
                    )}
                    <div className="text-right">
                        <button
                            type="button"
                            className="text-white/70 hover:text-white text-sm transition-colors duration-200 bg-transparent border-none cursor-pointer"
                        >
                            Forgot password?
                        </button>
                    </div>
                    <button
                        type="button"
                        onClick={handleLogin}
                        disabled={isLoading}
                        className="cursor-pointer w-full py-4 mt-1 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {isLoading ? "Logging in..." : "Login"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
