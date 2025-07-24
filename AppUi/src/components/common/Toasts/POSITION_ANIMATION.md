# Toast Position and Animation Customization

## Current Configuration

The toast notifications are currently configured to:

1. **Position**: Centered at the top of the screen
   - Implemented in `ToastContainer.jsx` with the class `fixed top-4 left-1/2 -translate-x-1/2`

2. **Animation**: Top-to-bottom drop animation
   - Implemented in `Toast.jsx` with Framer Motion animation properties
   - Uses a spring animation for a natural bouncy effect

## How to Customize

### Changing Position

To change the position of toast notifications, modify the container's position classes in `ToastContainer.jsx`:

```jsx
// In ToastContainer.jsx
<div className="fixed [POSITION_CLASSES] z-50 flex flex-col gap-2">
```

Common position options:

- **Top Center** (current): `top-4 left-1/2 -translate-x-1/2`
- **Top Right**: `top-4 right-4`
- **Top Left**: `top-4 left-4`
- **Bottom Right**: `bottom-4 right-4`
- **Bottom Left**: `bottom-4 left-4`
- **Bottom Center**: `bottom-4 left-1/2 -translate-x-1/2`

### Changing Animation

To change the animation of toast notifications, modify the Framer Motion properties in `Toast.jsx`:

```jsx
// In Toast.jsx
<motion.div
  initial={{ opacity: 0, y: -50, scale: 0.9 }} // Starting position
  animate={{ opacity: 1, y: 0, scale: 1 }}     // End position
  exit={{ opacity: 0, y: -50, scale: 0.9 }}    // Exit animation
  transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
>
```

Common animation options:

- **Top to Bottom** (current):
  ```jsx
  initial={{ opacity: 0, y: -50, scale: 0.9 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: -50, scale: 0.9 }}
  ```

- **Bottom to Top**:
  ```jsx
  initial={{ opacity: 0, y: 50, scale: 0.9 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: 50, scale: 0.9 }}
  ```

- **Right to Left**:
  ```jsx
  initial={{ opacity: 0, x: 100, scale: 0.9 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  exit={{ opacity: 0, x: 100, scale: 0.9 }}
  ```

- **Left to Right**:
  ```jsx
  initial={{ opacity: 0, x: -100, scale: 0.9 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  exit={{ opacity: 0, x: -100, scale: 0.9 }}
  ```

- **Fade In/Out (No Movement)**:
  ```jsx
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.9 }}
  ```

### Animation Timing

You can also customize the animation timing and physics:

```jsx
transition={{ 
  duration: 0.3,       // Animation duration in seconds
  type: "spring",      // Animation type ("spring" or "tween")
  stiffness: 300,      // Spring stiffness (higher = more rigid)
  damping: 25          // Spring damping (higher = less bouncy)
}}
```

For a more subtle animation, try:
```jsx
transition={{ duration: 0.2, type: "tween", ease: "easeOut" }}
```

## Examples

### Toast at Bottom Right with Slide-up Animation

```jsx
// In ToastContainer.jsx
<div className="fixed bottom-4 right-4 z-50 flex flex-col-reverse gap-2">
```

```jsx
// In Toast.jsx
<motion.div
  initial={{ opacity: 0, y: 50, scale: 0.9 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: 50, scale: 0.9 }}
  transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
>
```

Note: Using `flex-col-reverse` in the container makes new toasts appear at the bottom of the stack.