import React from 'react';

const BackgroundHelp = () => {
  return (
    // This main container must be transparent to see the global background
    <div className="min-h-screen bg-transparent text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Background & Effects Guide</h1>
          <p className="text-lg text-muted-foreground">
            How to use the global animated background and apply the glassmorphic effect to content panes.
          </p>
        </div>

        {/* Section for the Global Background */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">1. Global Animated Background</h2>
          <div className="p-6 space-y-4 light-glass-pane rounded-lg">
            <p className="text-base">
              The animated background is a global component designed to run once and persist across all pages. It is implemented in your main <code>App.js</code> file to ensure it wraps all application routes.
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-2">Implementation in `App.js`</h3>
              <div className="bg-card/50 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto"><code className="language-jsx">
                  {`function App() {
  return (
    <BrowserRouter>
      {/* Background is rendered here, globally */}
      <Background/>
      <AllRoutes />
    </BrowserRouter>
  );
}`}
                </code></pre>
              </div>
            </div>
          </div>
        </div>

        {/* Section for the Glassmorphic Effect */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">2. Glassmorphic Pane Effect</h2>
          <div className="p-6 space-y-4 light-glass-pane rounded-lg">
            <p className="text-base">
              To make content boxes appear as frosted glass, use the <code>light-glass-pane</code> utility class. This class applies a semi-transparent background and a blur effect.
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-2">How to Use</h3>
              <p className="mb-4">
                Replace any background utility classes (like <code>bg-card</code>) on a container with <code>light-glass-pane</code>.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-card/50 p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Before:</p>
                  <pre className="text-sm overflow-x-auto"><code className="language-jsx">
                    {`<div className="p-6 bg-card rounded-lg border">
  ...your content
</div>`}
                  </code></pre>
                </div>
                <div className="bg-card/50 p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">After:</p>
                  <pre className="text-sm overflow-x-auto"><code className="language-jsx">
                    {`<div className="p-6 light-glass-pane rounded-lg">
  ...your content
</div>`}
                  </code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* NEW SECTION: Explaining bg-transparent vs bg-background */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">3. Revealing the Background</h2>
          <div className="p-6 space-y-4 light-glass-pane rounded-lg">
            <p className="text-base">
              For the global animated background to be visible, the main layout container of your page component must be transparent.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card/50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Hides Background</h3>
                <p className="text-sm mb-2">Using <code>bg-background</code> creates an opaque layer that will cover the global animation.</p>
                <pre className="text-sm overflow-x-auto"><code className="language-jsx">
                  {`// This page's main div will HIDE the animation
<div className="min-h-screen bg-background ...">
  ...
</div>`}
                </code></pre>
              </div>
              <div className="bg-card/50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Shows Background</h3>
                <p className="text-sm mb-2">Using <code>bg-transparent</code> on the main page container allows the global animation to be seen.</p>
                <pre className="text-sm overflow-x-auto"><code className="language-jsx">
                  {`// This page's main div will SHOW the animation
<div className="min-h-screen bg-transparent ...">
  ...
</div>`}
                </code></pre>
              </div>
            </div>
             <p className="text-sm text-muted-foreground mt-4">
              <strong>Rule of thumb:</strong> The top-level `div` in your page components should use `bg-transparent`. Smaller, non-glassmorphic content boxes within the page can continue to use opaque backgrounds like `bg-card` if needed.
            </p>
          </div>
        </div>
        
        <div className="mt-8 p-4 rounded-lg light-glass-pane">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> This very page is a live demonstration. Its main container is using <code>bg-transparent</code>, while the content boxes you are reading use the <code>light-glass-pane</code> class.
            </p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundHelp;