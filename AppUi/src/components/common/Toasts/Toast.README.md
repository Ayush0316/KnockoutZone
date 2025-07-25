# Toast Component

## Overview

The `Toast` system provides animated notifications for your app. It supports multiple types, durations, and uses Redux for state management. Toasts are styled for a modern, gaming-inspired UI and appear at the top-right of the screen.

## Features

- ⚡ **Animated** with smooth pop and drop effects
- 🎨 **4 types**: success, error, warning, info (with matching gradients)
- ⏱️ **Auto-dismiss** with configurable duration
- 🎮 **Gaming-themed** with glow effects and modern UI
- 🪟 **Accessible** with proper ARIA attributes

## Usage

1. **ToastContainer** is already set up at the root level (see `main.jsx`).

2. **Try the live demo:**

   [Toast Demo – http://localhost:5173/dev/help/toast](http://localhost:5173/dev/help/toast)

   This page lets you try all toast types and options interactively.

3. **Show a toast** in any component using Redux:

```jsx
import { useDispatch } from "react-redux";
import { showToast } from "../store/slices/toastSlice";

function MyComponent() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      showToast({
        message: "Action completed!",
        type: "success", // 'success' | 'error' | 'warning' | 'info'
        duration: 4000, // optional (ms)
        dismissible: true, // optional
      })
    );
  };

  return <button onClick={handleClick}>Show Toast</button>;
}
```

## Toast Options

| Option        | Type    | Default | Description                         |
| ------------- | ------- | ------- | ----------------------------------- |
| `message`     | string  | —       | Toast message text                  |
| `type`        | string  | 'info'  | Type: success, error, warning, info |
| `duration`    | number  | 4000    | Auto-dismiss time (ms)              |
| `dismissible` | boolean | true    | Show close button                   |

## Toast Types

- `success`: Green gradient with success glow effect
- `error`: Red gradient with danger glow effect
- `warning`: Orange gradient with warning glow effect
- `info`: Blue gradient with info glow effect

---

Toasts are always shown at the top-right of the screen and use a consistent animation. For custom notification needs, consider building your own component.
