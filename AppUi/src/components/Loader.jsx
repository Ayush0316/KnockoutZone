import { forwardRef } from "react";

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12", 
  lg: "w-20 h-20",
  xl: "w-32 h-32"
};

// Simple utility to combine class names
const combineClasses = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const LoaderSpinner = forwardRef(
  ({ size = "md", variant = "default", fullScreen = false, className }, ref) => {
    const baseClasses = combineClasses(
      "relative flex items-center justify-center",
      sizeClasses[size],
      className
    );

    if (variant === "pulse") {
      return (
        <div 
          ref={ref}
          className={combineClasses(
            baseClasses,
            fullScreen && "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          )}
        >
        </div>
      );
    }

    if (variant === "dots") {
      return (
        <div 
          ref={ref}
          className={combineClasses(
            "flex items-center justify-center gap-1",
            fullScreen && "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex-col"
          )}
        >
          <div className="flex items-center gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={combineClasses(
                  "rounded-full bg-loader-primary animate-bounce",
                  size === "sm" && "w-1 h-1",
                  size === "md" && "w-2 h-2",
                  size === "lg" && "w-3 h-3",
                  size === "xl" && "w-4 h-4"
                )}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      );
    }

    return (
      <div 
        ref={ref}
        className={combineClasses(
          fullScreen && "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center"
        )}
      >
        <div className="flex flex-col items-center gap-4">
          <div className={combineClasses("relative", sizeClasses[size])}>
            <div 
              className={combineClasses(
                "absolute inset-0 rounded-full bg-loader-primary animate-loader-slide",
                sizeClasses[size]
              )}
            />
            
            <div 
              className={combineClasses(
                "absolute inset-0 rounded-full backdrop-blur-[10px] border border-white/10 animate-loader-slide-delayed z-10",
                sizeClasses[size]
              )}
              style={{
                background: "rgba(89, 137, 255, 0.05)"
              }}
            />
          </div>
          
        </div>
      </div>
    );
  }
);

LoaderSpinner.displayName = "LoaderSpinner";

export { LoaderSpinner as Loader };