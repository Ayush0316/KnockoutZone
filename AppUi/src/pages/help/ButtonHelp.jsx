import React from 'react';
import Button from '../../components/common/Buttons/ButtonComponent';
import { Play, Download, Settings, Trash2 } from "lucide-react";

const ButtonHelp = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Button Component Documentation</h1>
          <p className="text-lg text-muted-foreground">
            A highly customizable, gaming-themed button designed for the KnockoutZone application.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Live Examples</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Button Variants</h3>
            <div className="flex flex-wrap gap-4 p-6 bg-card rounded-lg border">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="success">Success</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="disabled">Disabled</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Button Sizes</h3>
            <div className="flex flex-wrap items-center gap-4 p-6 bg-card rounded-lg border">
              <Button size="sm" variant="primary">Small</Button>
              <Button size="default" variant="primary">Default</Button>
              <Button size="lg" variant="primary">Large</Button>
              <Button size="icon" variant="primary">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Buttons with Icons</h3>
            <div className="flex flex-wrap gap-4 p-6 bg-card rounded-lg border">
              <Button variant="primary">
                <Play className="mr-2 h-4 w-4" />
                Start Game
              </Button>
              <Button variant="secondary">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
              <Button variant="danger">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Loading States</h3>
            <div className="flex flex-wrap gap-4 p-6 bg-card rounded-lg border">
              <Button variant="primary" isLoading>
                Loading...
              </Button>
              <Button variant="secondary" isLoading>
                Processing
              </Button>
              <Button variant="success" isLoading>
                Saving
              </Button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Disabled States</h3>
            <div className="flex flex-wrap gap-4 p-6 bg-card rounded-lg border">
              <Button variant="primary" disabled>
                Disabled Primary
              </Button>
              <Button variant="secondary" disabled>
                Disabled Secondary
              </Button>
              <Button variant="outline" disabled>
                Disabled Outline
              </Button>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Polymorphic Rendering (asChild)</h3>
            <div className="flex flex-wrap gap-4 p-6 bg-card rounded-lg border">
              <Button asChild variant="primary">
                <a href="#demo" className="no-underline">
                  Link as Button
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="#test" className="no-underline">
                  <Play className="mr-2 h-4 w-4" />
                  Link with Icon
                </a>
              </Button>
              <Button asChild variant="outline">
                <span role="button" tabIndex={0}>
                  Span as Button
                </span>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              These buttons render as different HTML elements while maintaining button styling.
            </p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-primary">Features</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>🎮 Gaming-themed design with neon colors and effects</li>
            <li>🎨 8 different variants for various use cases</li>
            <li>📏 4 size options from compact to large</li>
            <li>⚡ Loading states with spinner animation</li>
            <li>🔄 Hover effects with scale and glow animations</li>
            <li>✨ Shine effect that slides across on hover</li>
            <li>♿ Accessibility with proper focus states</li>
            <li>🔧 Polymorphic - can render as different elements</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-primary">Installation</h2>
          <div className="bg-card p-4 rounded-lg border mb-6">
            <code className="text-sm">
              import Button from '../utils/ButtonComponent';
            </code>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-primary">Props</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Prop</th>
                  <th className="border border-border p-3 text-left">Type</th>
                  <th className="border border-border p-3 text-left">Default</th>
                  <th className="border border-border p-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3"><code>variant</code></td>
                  <td className="border border-border p-3">string</td>
                  <td className="border border-border p-3">"primary"</td>
                  <td className="border border-border p-3">Button style variant</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code>size</code></td>
                  <td className="border border-border p-3">string</td>
                  <td className="border border-border p-3">"default"</td>
                  <td className="border border-border p-3">Button size</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code>isLoading</code></td>
                  <td className="border border-border p-3">boolean</td>
                  <td className="border border-border p-3">false</td>
                  <td className="border border-border p-3">Show loading spinner</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code>disabled</code></td>
                  <td className="border border-border p-3">boolean</td>
                  <td className="border border-border p-3">false</td>
                  <td className="border border-border p-3">Disable button</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code>asChild</code></td>
                  <td className="border border-border p-3">boolean</td>
                  <td className="border border-border p-3">false</td>
                  <td className="border border-border p-3">Render as child element</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-primary">Gaming Effects</h2>
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Hover Animations</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Scale Effect:</strong> Buttons scale to 105% on hover</li>
                <li><strong>Active Effect:</strong> Buttons scale to 95% when pressed</li>
                <li><strong>Glow Effect:</strong> Shadow increases on hover</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Shine Effect</h3>
              <p>A subtle white overlay slides across the button on hover, creating a gaming-style shine effect.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Loading Animation</h3>
              <p>When isLoading is true, a spinner icon appears with pulsing glow animation.</p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> This is a development help page for testing the Button component. 
              The component is located at <code>/src/components/common/Button/ButtonComponent.jsx</code> and uses default export.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonHelp;
