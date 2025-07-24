import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { ROLES } from "../../utils/constants/roles";
import { ADMIN_PATH } from "../../routes/admin/AdminPaths";
import Button from "../../components/common/Buttons/ButtonComponent";

const LoginPage = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispath(
      login({
        user: { name: "Ayush" },
        role: ROLES.ADMIN,
      })
    );
    navigate(ADMIN_PATH.DASHBOARD);
  };

  const handleLogout = () => {
    dispath(logout());
  };

  return (
    <div>
      <h2>Login Page</h2>
      <p>Staus: {isAuthenticated ? `Logged in as ${role}` : "Not Logged In"}</p>
      <Button variant="primary" onClick={handleLogin}>
        Login as Admin
      </Button>
      <div />
      <Button variant="secondary" onClick={handleLogout}>
        Logout
      </Button>
      <div />
    </div>
  );
};

export default LoginPage;
