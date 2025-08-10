import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Buttons/ButtonComponent";
import { Input } from "../../components/common/Form/FormComponents";
import { ROLES } from "../../utils/constants/roles";
import { ADMIN_PATH } from "../../routes/admin/AdminPaths";

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
                    role: ROLES.ADMIN,
                })
            );
            navigate(ADMIN_PATH.DASHBOARD);
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
                    <div
                        className="[&_.light-glass-input]:bg-white/10 [&_.light-glass-input]:backdrop-blur-sm [&_.light-glass-input]:border-white/20 [&_.light-glass-input]:text-white [&_.light-glass-input]:px-6 [&_.light-glass-input]:py-4 [&_.light-glass-input]:rounded-2xl
                    [&_.light-glass-pane]:rounded-2xl [&_.light-glass-input]:h-auto [&_.light-glass-input]:placeholder-white/60 [&_.light-glass-input]:focus:outline-none [&_.light-glass-input]:focus:ring-2 [&_.light-glass-input]:focus:ring-white/30 [&_.light-glass-input]:focus:border-white/40 [&_.light-glass-input]:transition-all [&_.light-glass-input]:duration-200 [&_.light-glass-input]:border [&_.light-glass-pane]:bg-transparent [&_label]:hidden [&_.text-red-600]:text-red-100 [&_button[type='button']]:text-white/60 [&_button[type='button']:hover]:text-white"
                    >
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            name="email"
                        />
                    </div>

                    <div className="[&_.light-glass-input]:bg-white/10 [&_.light-glass-pane]:rounded-2xl [&_.light-glass-input]:backdrop-blur-sm [&_.light-glass-input]:border-white/20 [&_.light-glass-input]:text-white [&_.light-glass-input]:px-6 [&_.light-glass-input]:py-4 [&_.light-glass-input]:rounded-2xl [&_.light-glass-input]:h-auto [&_.light-glass-input]:placeholder-white/60 [&_.light-glass-input]:focus:outline-none [&_.light-glass-input]:focus:ring-2 [&_.light-glass-input]:focus:ring-white/30 [&_.light-glass-input]:focus:border-white/40 [&_.light-glass-input]:transition-all [&_.light-glass-input]:duration-200 [&_.light-glass-input]:border [&_.light-glass-pane]:bg-transparent [&_label]:hidden [&_.text-red-600]:text-red-100 [&_button[type='button']]:text-white/60 [&_button[type='button']:hover]:text-white [&_button[type='button']:focus]:!ring-transparent [&_button[type='button']:focus]:!ring-0">
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            name="password"
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
                    <Button
                        onClick={handleLogin}
                        disabled={isLoading}
                        className="cursor-pointer w-full py-4 mt-1 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {isLoading ? "Logging in..." : "Login"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
