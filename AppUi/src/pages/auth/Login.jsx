import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { ROLES } from "../../utils/constants/roles";
import { ADMIN_PATH } from "../../routes/admin/AdminPaths";
import Button from "../../components/common/Buttons/ButtonComponent";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(
      login({
        user: { name: "Ayush" },
        role: ROLES.ADMIN,
      })
    );
    navigate(ADMIN_PATH.DASHBOARD);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Login Page</h2>
      <p>Staus: {isAuthenticated ? `Logged in as ${role}` : "Not Logged In"}</p>
      
      {/* Login Button */}
      <Button variant="primary" onClick={handleLogin}>
        Login as Admin
      </Button>

      <div />

      {/* Logout Button */}
      <Button variant="secondary" onClick={handleLogout}>
        Logout
      </Button>

      <div />

      {/* Register Link */}
      <p className="mt-4 text-sm text-blue-500 cursor-pointer" onClick={() => navigate("/register")}>
        Don't have an account? <span className="underline">Register</span>
      </p>
    </div>
  );
};

export default LoginPage;
