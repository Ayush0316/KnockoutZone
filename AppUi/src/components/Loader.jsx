import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12", 
  lg: "w-20 h-20",
  xl: "w-32 h-32"
};

const LoaderSpinner = forwardRef(
  ({ size = "md", variant = "default", fullScreen = false, text, className }, ref) => {
    const baseClasses = cn(
      "relative flex items-center justify-center",
      sizeClasses[size],
      className
    );

    if (variant === "pulse") {
      return (
        <div 
          ref={ref}
          className={cn(
            baseClasses,
            fullScreen && "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          )}
        >
          <div className="flex flex-col items-center gap-3">
            <div className={cn("rounded-full bg-loader-primary animate-pulse", sizeClasses[size])} />
            {text && (
              <span className="text-sm font-medium text-muted-foreground animate-pulse">
                {text}
              </span>
            )}
          </div>
        </div>
      );
    }

    if (variant === "dots") {
      return (
        <div 
          ref={ref}
          className={cn(
            "flex items-center justify-center gap-1",
            fullScreen && "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex-col"
          )}
        >
          <div className="flex items-center gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={cn(
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
          {text && fullScreen && (
            <span className="text-sm font-medium text-muted-foreground mt-4">
              {text}
            </span>
          )}
        </div>
      );
    }

    // Default glassmorphism loader
    return (
      <div 
        ref={ref}
        className={cn(
          fullScreen && "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center"
        )}
      >
        <div className="flex flex-col items-center gap-4">
          {/* Main loader container */}
          <div className={cn("relative", sizeClasses[size])}>
            {/* Primary circle */}
            <div 
              className={cn(
                "absolute inset-0 rounded-full bg-loader-primary animate-loader-slide",
                sizeClasses[size]
              )}
            />
            
            {/* Glassmorphism circle */}
            <div 
              className={cn(
                "absolute inset-0 rounded-full backdrop-blur-[10px] border border-white/10 animate-loader-slide-delayed z-10",
                sizeClasses[size]
              )}
              style={{
                background: "rgba(89, 137, 255, 0.05)"
              }}
            />
          </div>
          
          {/* Loading text */}
          {text && (
            <div className="text-center">
              <span className="text-sm font-medium text-muted-foreground">
                {text}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
);

LoaderSpinner.displayName = "LoaderSpinner";

export { LoaderSpinner as Loader };