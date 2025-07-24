import React from "react";
import Button from "../components/common/Buttons/ButtonComponent";

 feature/toast-notification
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

export default function Landing() {
  return <div>
    Landing Page.
    <Button variant='secondary'>Login</Button>
    </div>;
 main
}
