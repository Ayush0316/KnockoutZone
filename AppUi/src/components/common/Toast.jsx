import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const typeStyles = {
  success: "bg-green-500 text-white",
  error: "bg-red-500 text-white",
  warning: "bg-yellow-400 text-black",
  info: "bg-blue-500 text-white",
};

const icons = {
  success: "✅",
  error: "❌",
  warning: "⚠️",
  info: "ℹ️",
};

const Toast = ({
  message,
  type = "info",
  duration = 4000,
  onClose,
  dismissible = true,
}) => {
  const timer = useRef();

  useEffect(() => {
    timer.current = setTimeout(onClose, duration);
    return () => clearTimeout(timer.current);
  }, [onClose, duration]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.3 }}
        className={`flex items-center px-4 py-2 rounded shadow-lg mb-2 min-w-[220px] max-w-xs ${typeStyles[type]} dark:bg-opacity-90 dark:backdrop-blur`}
        role="alert"
        aria-live="assertive"
      >
        <span className="mr-2 text-xl">{icons[type]}</span>
        <span className="flex-1">{message}</span>
        {dismissible && (
          <button
            onClick={onClose}
            className="ml-2 text-lg font-bold focus:outline-none"
            aria-label="Close"
          >
            ×
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast;