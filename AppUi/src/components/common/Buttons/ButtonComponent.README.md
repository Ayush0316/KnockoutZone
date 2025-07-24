# Button Component Documentation

## Overview

The `Button` component is a highly customizable, gaming-themed button designed for the KnockoutZone application. It features multiple variants, sizes, loading states, and special gaming effects like hover animations and shine overlays.

## Features

- 🎮 **Gaming-themed design** with neon colors and effects
- 🎨 **8 different variants** for various use cases
- 📏 **4 size options** from compact to large
- ⚡ **Loading states** with spinner animation
- 🔄 **Hover effects** with scale and glow animations
- ✨ **Shine effect** that slides across on hover
- ♿ **Accessibility** with proper focus states
- 🔧 **Polymorphic** - can render as different elements

## Installation

```jsx
import Button from './ButtonComponent';
```

## Basic Usage

### Simple Button
```jsx
<Button>Click me</Button>
```

### With Variant
```jsx
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="danger">Delete Item</Button>
<Button variant="success">Save Changes</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `string` | `"primary"` | Button style variant |
| `size` | `string` | `"default"` | Button size |
| `className` | `string` | `undefined` | Additional CSS classes |
| `asChild` | `boolean` | `false` | Render as child element |
| `isLoading` | `boolean` | `false` | Show loading spinner |
| `disabled` | `boolean` | `false` | Disable button |
| `children` | `ReactNode` | `undefined` | Button content |

## Variants

### Primary (Default)
Electric blue gaming theme for main actions.
```jsx
<Button variant="primary">Start Game</Button>
```

### Secondary
Muted colors for less prominent actions.
```jsx
<Button variant="secondary">Settings</Button>
```

### Danger
Red destructive styling for dangerous actions.
```jsx
<Button variant="danger">Delete Account</Button>
```

### Success
Green gaming success color for positive actions.
```jsx
<Button variant="success">Level Complete!</Button>
```

### Outline
Transparent with border, fills on hover.
```jsx
<Button variant="outline">Learn More</Button>
```

### Ghost
Minimal styling with subtle hover effects.
```jsx
<Button variant="ghost">Cancel</Button>
```

### Disabled
Muted gaming colors, no interactions.
```jsx
<Button variant="disabled">Unavailable</Button>
```

### Link
Text-only styling with underline effects.
```jsx
<Button variant="link">View Details</Button>
```

## Sizes

### Default
Standard gaming button size (48px height).
```jsx
<Button size="default">Standard Button</Button>
```

### Small
Compact size for tight spaces (36px height).
```jsx
<Button size="sm">Small Button</Button>
```

### Large
Large size for prominent actions (56px height).
```jsx
<Button size="lg">Large Button</Button>
```

### Icon
Square size for icon-only buttons (48x48px).
```jsx
<Button size="icon">
  <IconComponent />
</Button>
```

## Special States

### Loading State
Shows a spinner and applies pulsing glow effect.
```jsx
<Button isLoading>
  Processing...
</Button>
```

### Disabled State
Automatically applied when `disabled={true}`, `isLoading={true}`, or `variant="disabled"`.
```jsx
<Button disabled>
  Cannot Click
</Button>
```

## Advanced Usage

### Polymorphic Rendering
Render the button as a different element (like a link).
```jsx
<Button asChild>
  <a href="/game">
    Play Now
  </a>
</Button>
```

### Custom Styling
Add additional classes for customization.
```jsx
<Button 
  className="w-full mt-4 shadow-lg" 
  variant="primary"
>
  Full Width Button
</Button>
```

### With Icons
Combine with icon libraries like Lucide React.
```jsx
import { Play, Settings, Trash } from 'lucide-react';

<Button variant="primary">
  <Play className="mr-2 h-4 w-4" />
  Start Game
</Button>

<Button variant="secondary" size="icon">
  <Settings className="h-4 w-4" />
</Button>

<Button variant="danger">
  <Trash className="mr-2 h-4 w-4" />
  Delete
</Button>
```

## Gaming Effects

### Hover Animations
- **Scale Effect**: Buttons scale to 105% on hover
- **Active Effect**: Buttons scale to 95% when pressed
- **Glow Effect**: Shadow increases on hover

### Shine Effect
A subtle white overlay slides across the button on hover, creating a gaming-style shine effect.

### Loading Animation
When `isLoading` is true:
- Spinner icon appears on the left
- Button content remains visible
- Pulsing glow animation is applied

## Accessibility

- Proper focus states with visible ring
- Disabled state prevents interactions
- Screen reader friendly with proper button semantics
- Keyboard navigation support

## Demo & Examples

> **Note**: The `tem.jsx` file in `/src/pages/tem.jsx` is for display and demonstration purposes only. It showcases the Button component in action and is not part of the core component logic.

### Game Menu
```jsx
<div className="space-y-4">
  <Button variant="primary" size="lg" className="w-full">
    Start New Game
  </Button>
  <Button variant="secondary" size="lg" className="w-full">
    Continue Game
  </Button>
  <Button variant="outline" size="lg" className="w-full">
    Settings
  </Button>
  <Button variant="ghost" size="lg" className="w-full">
    Exit Game
  </Button>
</div>
```

### Action Bar
```jsx
<div className="flex gap-2">
  <Button variant="success">Save</Button>
  <Button variant="secondary">Cancel</Button>
  <Button variant="danger">Delete</Button>
</div>
```

### Loading States
```jsx
const [isLoading, setIsLoading] = useState(false);

<Button 
  variant="primary" 
  isLoading={isLoading}
  onClick={() => setIsLoading(true)}
>
  {isLoading ? 'Processing...' : 'Submit'}
</Button>
```

## Styling Notes

- Uses Tailwind CSS classes with custom gaming theme
- CSS variables defined in `src/index.css`
- Supports both light and dark themes
- Gaming colors: `--game-success`, `--game-warning`, `--game-disabled`
- Custom gradients and glow effects available

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- CSS custom properties (CSS variables) support required
- Tested in Chrome, Firefox, Safari, and Edge

## Contributing

When modifying the Button component:
1. Update prop types for new props
2. Add examples to this README
3. Test all variants and sizes
4. Ensure accessibility compliance
5. Test in both light and dark themes
