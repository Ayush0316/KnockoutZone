import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../../utils/utils';

// Glassmorphism card variants for non-interactive elements
const glassCardVariants = {
  // Basic glassmorphism card
  default: "backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300",
  
  // Feature card with hover effects
  feature: "group relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-2",
  
  // Stats/metric card
  stat: "backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 min-w-[120px] hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center",
  
  // Badge/pill style
  badge: "inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium",
  
  // Large content card
  content: "backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300",
  
  // Small card for lists/items
  item: "p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300",
  
  // Icon container
  icon: "w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300",
};

const GlassCard = ({ 
  variant = 'default', 
  className = '', 
  children, 
  as: Component = 'div',
  ...props 
}) => {
  const baseClasses = glassCardVariants[variant] || glassCardVariants.default;
  
  return (
    <Component 
      className={cn(baseClasses, className)} 
      {...props}
    >
      {children}
    </Component>
  );
};

GlassCard.propTypes = {
  variant: PropTypes.oneOf([
    'default',
    'feature', 
    'stat',
    'badge',
    'content',
    'item',
    'icon'
  ]),
  className: PropTypes.string,
  children: PropTypes.node,
  as: PropTypes.elementType,
};

export default GlassCard;
