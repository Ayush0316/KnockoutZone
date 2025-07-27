
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { GUEST_PATH } from "../routes/guest/GuestPaths";

const ProtectedRoutes = ({children, allowedRoles}) => {
    const {isAuthenticated, role} = useSelector((state) => state.auth);

    if(!isAuthenticated)return <Navigate to={GUEST_PATH.LOGIN} />;
    if(!allowedRoles.includes(role)) return <Navigate to={GUEST_PATH.UNAUTHORIZED} />;
    return children;
}

export default ProtectedRoutes;

