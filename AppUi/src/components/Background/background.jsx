import React, { useMemo } from 'react';

// --- Component Configuration ---
const SHAPE_COUNT = 15; // Set the number of shapes

const Background = () => {
  // useMemo will generate the shapes' random properties only once.
  // This is great for performance as it avoids recalculating on every re-render.
  const shapes = useMemo(() => {
    return Array.from({ length: SHAPE_COUNT }).map((_, index) => {
      const size = Math.random() * 120 + 10;
      const position = Math.random() * 95;
      const delay = Math.random() * 10;
      const duration = Math.random() * 20 + 10;
      
      // The style object that will be applied to each <li>
      const style = {
        width: `${size}px`,
        height: `${size}px`,
        left: `${position}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      };

      return <li key={index} style={style} />;
    });
  }, []); // The empty dependency array [] ensures this runs only once.

  return (
    <div id="animated-background">
      <ul className="circles">
        {shapes}
      </ul>
    </div>
  );
};

export default Background;