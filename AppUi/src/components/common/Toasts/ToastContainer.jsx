import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Toast from "./Toast";
import { removeToast } from "../../../store/slices/toastSlice";

const ToastContainer = () => {
  const { toasts } = useSelector((state) => state.toast);
  const dispatch = useDispatch();

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => dispatch(removeToast(toast.id))}
        />
      ))}
    </div>
  );
};

export default ToastContainer;