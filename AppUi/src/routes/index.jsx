import { Route, Routes } from "react-router-dom"
import AdminRoutes from "./admin/AdminRoutes"
import PlayerRoutes from "./player/PlayerRoutes"
import GuestRoutes from "./guest/GuestRoutes"
import DevRoutes from "./dev/DevRoutes"
import LandingPage from "../pages/landing"
import Register from "../pages/auth/Register";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
            {AdminRoutes()}
            {PlayerRoutes()}
            {GuestRoutes()}
            {DevRoutes()}
        </Routes>
    )
}

export default AllRoutes;