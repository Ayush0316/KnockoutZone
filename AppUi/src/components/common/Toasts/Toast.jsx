import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";
import Button from "../Buttons/ButtonComponent";

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
        initial={{ opacity: 0, y: -60, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{
          opacity: 0,
          y: 0,
          scale: [1, 1.18, 0.7, 1.22, 0.5],
          rotate: [0, 10, -10, 0, 0],
          transition: { duration: 0.45, ease: [0.4, 0.7, 0.2, 1] }
        }}
        transition={{ duration: 0.32, type: "spring", stiffness: 320, damping: 22 }}
        className={`flex items-center px-3 py-2 rounded-lg mb-2 min-w-[160px] max-w-[320px] ${typeStyles[type]} ${glowStyles[type]} transition-all duration-300 dark:bg-opacity-90 dark:backdrop-blur`}
        role="alert"
        aria-live="assertive"
      >
        <span className="mr-2">{icons[type]}</span>
        <span className="flex-1 text-sm font-bold tracking-wide">{message}</span>
        {dismissible && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close"
            className="ml-2 p-1 rounded-full"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast;
