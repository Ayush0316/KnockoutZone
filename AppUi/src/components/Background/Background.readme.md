
---

# Background & Effects Guide (Updated for Brighter PS Shapes)

## 1. Global Animated Background

The **animated PS shapes background** is a global component that runs once and persists across all pages.
**Do not add it to individual pages.**

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
      <Background />
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
```

* **Key point:** Place `<Background />` at the top level so it sits *behind* your entire app.
* The background contains large, brightened PS shapes with smooth bouncing motion and subtle glowing dots.

---

## 2. Glassmorphic Pane Effect

Use the `light-glass-pane` utility class to give content boxes a **frosted glass** look.
This adds:

* Semi-transparent white background
* Soft blur
* Slight border glow for contrast against the animated background.

**Usage Example:**

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

---

## 3. Making Sure the Background is Visible

For the animated PS shapes to be visible, your page’s **main container must be transparent**.

### ❌ Hides the Animation

Opaque backgrounds like `bg-background` will cover the animation:

```jsx
<div className="min-h-screen bg-background">
  ...
</div>
```

### ✅ Shows the Animation

Transparent backgrounds let the animation show through:

```jsx
<div className="min-h-screen bg-transparent">
  ...
</div>
```

---

## 4. Rule of Thumb

* **Top-level page containers** → always use `bg-transparent` so the background can be seen.
* **Individual content boxes** → use `light-glass-pane` for a frosted glass effect or `bg-card` for opaque panels if necessary.
* **Never** re-import `<Background />` inside individual pages — it should be global.

---

> **Live Demo Tip:**
> The documentation page itself uses `bg-transparent` for its main container, while its cards use `light-glass-pane` so the brighter, bouncing PS symbols glow softly behind them.

---

If you want, I can also add **an example preview screenshot** in this doc showing how the brighter shapes look under a glass pane. That would make this guide visually clearer.
