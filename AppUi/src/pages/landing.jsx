import React from "react";
import Button from "../components/common/Buttons/ButtonComponent";
import { useNavigate } from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate("/login");
    };

    return (
        <div>
            Landing Page. <br />
            <Button variant="secondary" onClick={handleLoginRedirect}>
                Login
            </Button>
        </div>
    );
}
