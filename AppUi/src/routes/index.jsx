import { Route, Routes } from "react-router-dom"
import LandingPage from "../pages/landing"
import LoginPage from "../pages/auth/Login"
import AdminDashboard from "../pages/admin/dashboard"
import PlayerDashboard from "../pages/player/dashboard"
import GuestDashboard from "../pages/guest/dashboard"
import UnauthorizedPage from "../pages/unauthorized"

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
            <Route path="/player/*" element={<PlayerDashboard />} />
            <Route path="/dashboard" element={<GuestDashboard />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
        </Routes>
    )
}

export default AllRoutes;