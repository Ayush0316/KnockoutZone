import { AnimatePresence } from "framer-motion";

const glassStyles =
  "backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-lg border border-white/20 dark:border-black/20";

const Loader = ({
  size = 48,
  fullScreen = false,
//   variant = "spinner", you can add more variants if needed
  text = "Loading...",
  glass = true,
}) => {
  const spinner = (
    <svg
      className="animate-spin"
      width={size}
      height={size}
      viewBox="0 0 50 50"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
      />
      <circle
        className="opacity-75"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeDasharray="90"
        strokeDashoffset="30"
      />
    </svg>
  );

  const content = (
    <div
      className={`flex flex-col items-center justify-center ${
        fullScreen
          ? `fixed inset-0 z-50 ${glass ? glassStyles : "bg-white/80 dark:bg-black/80"}`
          : ""
      }`}
      role="status"
      aria-live="polite"
    >
      <span
        className={`text-primary-500 dark:text-primary-400`}
        style={{ color: "inherit" }}
      >
        {spinner}
      </span>
      <span className="mt-3 text-base font-medium text-gray-700 dark:text-gray-200 sr-only sm:not-sr-only">
        {text}
      </span>
    </div>
  );

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        {content}
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;