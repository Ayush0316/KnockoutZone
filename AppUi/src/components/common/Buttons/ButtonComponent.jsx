import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { Loader2 } from "lucide-react"
import PropTypes from "prop-types"

import { cn } from "../../../utils/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-bold tracking-wide uppercase ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        primary: 
          "bg-gradient-primary text-primary-foreground hover:shadow-glow-primary hover:scale-105 active:scale-95 border border-primary/20",
        secondary:
          "bg-gradient-secondary text-secondary-foreground hover:shadow-glow-secondary hover:scale-105 active:scale-95 border border-secondary/20",
        danger:
          "bg-gradient-danger text-destructive-foreground hover:shadow-glow-danger hover:scale-105 active:scale-95 border border-destructive/20",
        success:
          "bg-gradient-success text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--game-success)/0.5)] hover:scale-105 active:scale-95 border border-game-success/20",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow-primary hover:scale-105 active:scale-95",
        ghost: 
          "hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95",
        disabled: 
          "bg-game-disabled text-muted-foreground cursor-not-allowed opacity-60",
        link: 
          "text-primary underline-offset-4 hover:underline hover:text-primary/80",
        // New glassmorphism variants
        glass:
          "backdrop-blur-md bg-white/5 border border-white/10 text-foreground hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95",
        "glass-social":
          "backdrop-blur-lg bg-white/5 border border-white/10 text-lg hover:bg-white/10 hover:border-white/20 hover:scale-110 active:scale-95 rounded-lg",
        "glass-nav":
          "text-foreground/80 hover:text-primary rounded-xl hover:bg-white/10 hover:backdrop-blur-lg hover:shadow-lg",
        "glass-outline":
          "bg-white/5 backdrop-blur-md border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60 hover:scale-105 active:scale-95",
        "glass-accent":
          "bg-white/5 backdrop-blur-md border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/60 hover:scale-105 active:scale-95",
        "glass-card":
          "backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-2",
        "glass-badge":
          "inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium",
        "glass-stat":
          "backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 min-w-[120px] hover:bg-white/10 hover:border-white/20 transition-all duration-300",
      },
      size: {
        default: "h-12 px-6 py-3 text-sm",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-14 rounded-xl px-8 text-base",
        icon: "h-12 w-12",
        "social-icon": "w-10 h-10 p-0",
        "nav": "px-4 py-2 text-base font-bold h-auto",
        "footer-link": "p-0 h-auto font-normal justify-start text-left",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, isLoading = false, disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const isDisabled = disabled || isLoading || variant === "disabled"
    
    // Only pass disabled prop to button elements, not to other elements when using asChild
    const componentProps = {
      className: cn(
        buttonVariants({ 
          variant: isDisabled ? "disabled" : variant, 
          size, 
          className 
        }),
        isLoading && "animate-pulse-glow"
      ),
      ref,
      ...props
    }
    
    // Only add disabled prop for button elements
    if (!asChild) {
      componentProps.disabled = isDisabled
    }
    
    if (asChild) {
      // For asChild, we need to clone the child and merge props
      return (
        <Slot {...componentProps}>
          {React.cloneElement(children, {
            className: cn(children.props.className, componentProps.className)
          })}
        </Slot>
      )
    }
    
    return (
      <Comp {...componentProps}>
        {isLoading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {children}
        {/* Gaming button shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
      </Comp>
    )
  }
)

Button.displayName = "Button"

// PropTypes for runtime type checking
Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "primary",
    "secondary", 
    "danger",
    "success",
    "outline",
    "ghost",
    "disabled",
    "link",
    "glass",
    "glass-social",
    "glass-nav",
    "glass-outline",
    "glass-accent",
    "glass-card",
    "glass-badge",
    "glass-stat"
  ]),
  size: PropTypes.oneOf(["default", "sm", "lg", "icon", "social-icon", "nav", "footer-link"]),
  asChild: PropTypes.bool,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
}

export default Button
