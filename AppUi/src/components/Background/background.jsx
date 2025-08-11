import React, { useEffect, useRef } from 'react';

const SHAPES = [
  { class: 'triangle' },
  { class: 'cross' },
  { class: 'square' },
  { class: 'circle' },
];

const Background = () => {
  const shapeRefs = useRef([]);

  useEffect(() => {
    // Faster speed: range ~ -3 to 3
    const velocities = SHAPES.map(() => ({
      x: (Math.random() - 0.5) * 6,
      y: (Math.random() - 0.5) * 6,
    }));

    let animationId;

    const moveShapes = () => {
      shapeRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const parent = el.parentElement.getBoundingClientRect();

        let left = rect.left - parent.left;
        let top = rect.top - parent.top;

        left += velocities[i].x;
        top += velocities[i].y;

        // Bounce off edges
        if (left <= 0 || left + rect.width >= parent.width) {
          velocities[i].x *= -1;
        }
        if (top <= 0 || top + rect.height >= parent.height) {
          velocities[i].y *= -1;
        }

        el.style.left = `${left}px`;
        el.style.top = `${top}px`;
      });

      animationId = requestAnimationFrame(moveShapes);
    };

    animationId = requestAnimationFrame(moveShapes);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div id="ps-background">
      {SHAPES.map((shape, i) => (
        <div
          key={i}
          ref={(el) => (shapeRefs.current[i] = el)}
          className={`ps-shape ${shape.class}`}
          style={{
            position: 'absolute',
            width: '140px', // bigger size
            height: '140px',
            left: `${Math.random() * 70}%`,
            top: `${Math.random() * 70}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
