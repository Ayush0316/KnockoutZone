# Background & Effects Guide (Markdown Version)

## 1. Global Animated Background

The animated background is a global component that runs once and persists across all pages. **Do not add it to individual pages.**

**Implementation in `App.js`:**

```javascript
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './routes';
import Background from './components/Background/background';
import './components/Background/Background.css';

function App() {
  return (
    <BrowserRouter>
      {/* Background is rendered here, globally */}
      <Background/>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
```

- **Key point**: Place `` at the top level so it wraps the whole application.

## 2. Glassmorphic Pane Effect

To give content boxes a frosted glass look, use the `light-glass-pane` utility class. This adds a semi-transparent background and blur.

**Usage:**

Replace any background utility classes (like `bg-card`) with `light-glass-pane`.

**Before:**

```jsx
<div className="p-6 bg-card rounded-lg border">
  ...your content
</div>

```

**After:**

```jsx
<div className="p-6 light-glass-pane rounded-lg">
  ...your content
</div>
```

## 3. Revealing the Background

For the animated background to be visible, the main layout container of your page component **must be transparent**.

**Hides Animation:**

Using `bg-background` results in an opaque layer that covers the animation.

```jsx
// This page's main div will HIDE the animation

<div className="min-h-screen bg-background ...">
  ...
</div>

```

**Shows Animation:**

Using `bg-transparent` keeps the background visible.

```jsx
// This page's main div will SHOW the animation

<div className="min-h-screen bg-transparent ...">
  ...
</div>

```

**Rule of thumb:**  
- The top-level `div` in your page components should use `bg-transparent`.
- Smaller, non-glassmorphic content boxes can use opaque backgrounds (like `bg-card`) if needed.

> **Live Demo:**  
> The documentation page is a live demo. Its main container uses `bg-transparent`, and its content boxes use the `light-glass-pane` class.