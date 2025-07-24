import { Route, Routes } from "react-router-dom"
import AdminRoutes from "./admin/AdminRoutes"
import PlayerRoutes from "./player/PlayerRoutes"
import GuestRoutes from "./guest/GuestRoutes"
import LandingPage from "../pages/landing"

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            {AdminRoutes()}
            {PlayerRoutes()}
            {GuestRoutes()}
        </Routes>
    )
}

export default AllRoutes;