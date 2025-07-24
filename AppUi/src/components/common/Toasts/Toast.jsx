import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";

const typeStyles = {
  success: "bg-gradient-success border border-game-success/20 text-primary-foreground",
  error: "bg-gradient-danger border border-destructive/20 text-destructive-foreground",
  warning: "bg-gradient-secondary border border-secondary/20 text-secondary-foreground",
  info: "bg-gradient-primary border border-primary/20 text-primary-foreground",
};

const glowStyles = {
  success: "shadow-[0_0_8px_hsl(var(--game-success)/0.35)]",
  error: "shadow-[0_0_8px_hsl(var(--destructive)/0.35)]",
  warning: "shadow-[0_0_8px_hsl(var(--destructive)/0.35)]",
  info: "shadow-[0_0_8px_hsl(var(--primary)/0.35)]",
};

const icons = {
  success: <CheckCircle className="h-5 w-5" />,
  error: <AlertCircle className="h-5 w-5" />,
  warning: <AlertTriangle className="h-5 w-5" />,
  info: <Info className="h-5 w-5" />,
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
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -50, scale: 0.9 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
        className={`flex items-center px-4 py-3 rounded-lg mb-2 min-w-[220px] max-w-xs ${typeStyles[type]} ${glowStyles[type]} transition-all duration-300 dark:bg-opacity-90 dark:backdrop-blur`}
        role="alert"
        aria-live="assertive"
      >
        <span className="mr-2">{icons[type]}</span>
        <span className="flex-1 text-sm font-bold tracking-wide">{message}</span>
        {dismissible && (
          <button
            onClick={onClose}
            className="ml-2 p-1 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-300"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast;