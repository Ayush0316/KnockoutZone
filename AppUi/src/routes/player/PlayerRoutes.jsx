import { Route } from "react-router-dom";
import PlayerDashboard from "../../pages/player/PlayerDashboard";
import ProtectedRoutes from "../../components/ProtectedRoute";
import { ROLES } from "../../utils/constants/roles";
import { PLAYER_PATH } from "./PlayerPaths";

const PlayerRoutes = () => {
    return (
        <Route path={PLAYER_PATH.DASHBOARD} element={
            <ProtectedRoutes allowedRoles={[ROLES.PLAYER]}>
                <PlayerDashboard />
            </ProtectedRoutes>
        }
        />
    )
}

export default PlayerRoutes;