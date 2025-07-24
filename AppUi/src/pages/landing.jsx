import React from "react";
import Button from "../components/common/Buttons/ButtonComponent";
import { useDispatch } from "react-redux";
import { showToast } from "../store/slices/toastSlice";

export default function Landing() {
  const dispatch = useDispatch();
  const btnHandle = () => {
    dispatch(showToast({ 
        message: "Login Successful!", 
        type: "" }));
  };
  return (
    <div>
      Landing Page. <br/>
      <Button variant="secondary" onClick={btnHandle}>
        Login
      </Button>
    </div>
  );
}
