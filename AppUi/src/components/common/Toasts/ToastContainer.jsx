import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Toast from "./Toast";
import { removeToast } from "../../../store/slices/toastSlice";

const ToastContainer = () => {
  const { toasts } = useSelector((state) => state.toast);
  const dispatch = useDispatch();

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col items-end gap-2">
      {[...toasts].reverse().map((toast) => (
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
