import { Navigate, useNavigate } from "react-router-dom";
import { GUEST_PATH } from "../routes/guest/GuestPaths";

import {useToast} from "../store/toastSlice.jsx";
const LandingPage = () => {
    const navigate = useNavigate();
    const { showToast } = useToast();
    const btnHandle = () => {
        //navigate(GUEST_PATH.LOGIN);
        showToast({ message: "Login Successful!", type: "success" });
    }
    return <>
        <div>
            Landing page
        </div>
            <button onClick={btnHandle}>login</button>
    </>
}

export default LandingPage;