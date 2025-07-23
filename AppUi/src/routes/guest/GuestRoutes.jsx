import { Route } from "react-router-dom";
import GuestDashboard from "../../pages/guest/dashboard";
import LoginPage from "../../pages/auth/Login";
import UnauthorizedPage from "../../pages/unauthorized";
import LandingPage from "../../pages/landing";
import { GUEST_PATH } from "./GuestPaths";

const GuestRoutes = () => {
    return (
        <>
            <Route path="/" element={<LandingPage />} />
            <Route path={GUEST_PATH.DASHBOARD} element={
                <GuestDashboard />
            }
            />
            <Route path={GUEST_PATH.LOGIN} element={
                <LoginPage />
            }
            />
            <Route path={GUEST_PATH.UNAUTHORIZED} element={
                <UnauthorizedPage />
            }
            />
            <Route path={GUEST_PATH.LANDING} element={
                    <LandingPage />
                }
            />
        </>
    )
}

export default GuestRoutes;