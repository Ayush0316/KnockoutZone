# Toast Component

## Overview

The `Toast` system provides animated notifications with customizable positions and animations. It supports multiple types, durations, and uses Redux for state management.

## Features

- ⚡ **Animated** with customizable animations (top-down, side-to-side)
- 🎨 **4 types**: success, error, warning, info with matching gradients
- ⏱️ **Auto-dismiss** with configurable duration
- 🎮 **Gaming-themed** with glow effects and modern UI
- 🪟 **Accessible** with proper ARIA attributes
- 📍 **Customizable position** (top, bottom, center, corners)

## Usage

1. **The ToastContainer is already set up** at the root level in `main.jsx`:

```jsx
// Already configured in main.jsx
import { Provider } from 'react-redux'
import Store from './store/store.jsx'
import ToastContainer from './components/common/Toasts/ToastContainer.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
    <ToastContainer />
  </Provider>
)
```

2. **Use Redux to show a toast** in any component:

```jsx
import { useDispatch } from "react-redux";
import { showToast } from "../store/slices/toastSlice";

function MyComponent() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showToast({
      message: "Action completed!",
      type: "success", // 'success' | 'error' | 'warning' | 'info'
      duration: 4000, // optional (ms)
      dismissible: true, // optional
    }));
  };

  return <button onClick={handleClick}>Show Toast</button>;
}
```

## Toast Options

| Option        | Type     | Default | Description                      |
| ------------- | -------- | ------- | -------------------------------- |
| `message`     | string   | —       | Toast message text               |
| `type`        | string   | 'info'  | Type: success, error, warning, info |
| `duration`    | number   | 4000    | Auto-dismiss time (ms)           |
| `dismissible` | boolean  | true    | Show close button                |

## Toast Types

- `success`: Green gradient with success glow effect
- `error`: Red gradient with danger glow effect
- `warning`: Orange gradient with warning glow effect
- `info`: Blue gradient with info glow effect

## Customizing Position & Animation

### Position

Edit the container's position classes in `ToastContainer.jsx`:

```jsx
// Current: Top center
<div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2">

// Other options:
// Top right: "fixed top-4 right-4 z-50 flex flex-col gap-2"
// Bottom center: "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2"
```

### Animation

Edit the animation properties in `Toast.jsx`:

```jsx
// Current: Top-to-bottom animation
initial={{ opacity: 0, y: -50, scale: 0.9 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
exit={{ opacity: 0, y: -50, scale: 0.9 }}

// For side-to-side animation:
initial={{ opacity: 0, x: 100, scale: 0.9 }}
animate={{ opacity: 1, x: 0, scale: 1 }}
exit={{ opacity: 0, x: 100, scale: 0.9 }}
```

See `POSITION_ANIMATION.md` for more detailed customization options.
