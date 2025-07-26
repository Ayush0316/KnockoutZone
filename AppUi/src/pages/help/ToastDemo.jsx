import React from "react";
import { useDispatch } from "react-redux";
import { showToast } from "../../store/slices/toastSlice";
import Button from "../../components/common/Buttons/ButtonComponent";

const ToastDemo = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Toast System Demo</h2>
      <Button
        variant="success"
        className="w-full"
        onClick={() => dispatch(showToast({ message: "Success Toast!", type: "success" }))}
      >
        Success
      </Button>
      <Button
        variant="secondary"
        className="w-full"
        onClick={() => dispatch(showToast({ message: "Warning Toast!", type: "warning" }))}
      >
        Warning
      </Button>
      <Button
        variant="danger"
        className="w-full"
        onClick={() => dispatch(showToast({ message: "Error Toast!", type: "error" }))}
      >
        Error
      </Button>
      <Button
        variant="primary"
        className="w-full"
        onClick={() => dispatch(showToast({ message: "Info Toast!", type: "info" }))}
      >
        Info
      </Button>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => dispatch(showToast({ message: "Custom Duration Toast! (7s)", type: "info", duration: 7000 }))}
      >
        Custom Duration (7s)
      </Button>
      <Button
        variant="ghost"
        className="w-full"
        onClick={() => dispatch(showToast({ message: "Non-dismissible Toast!", type: "info", dismissible: false }))}
      >
        Non-dismissible
      </Button>
    </div>
  );
};

export default ToastDemo;
