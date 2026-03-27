import './App.css'

function App() {
  return (
    <div className="app">
      <div className="bg-grid" aria-hidden />
      <div className="shell">
        <header className="nav">
          <div className="brand">
            <span className="brand-mark" aria-hidden />
            Nexus
          </div>
          <nav className="nav-links" aria-label="Primary">
            <a href="#start">Start</a>
            <a href="#features">Features</a>
          </nav>
        </header>

        <section className="hero" id="start">
          <span className="eyebrow">Local workspace</span>
          <h1>A calm home for what you are building</h1>
          <p className="hero-lede">
            This is your Vite + React app: open it in the browser, edit
            components, and see changes instantly. No API keys or auth required.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#features">
              Explore layout
            </a>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() =>
                document.getElementById('commands')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
            >
              Dev commands
            </button>
          </div>
        </section>

        <section className="panel" id="commands" aria-labelledby="commands-heading">
          <div className="panel-header">
            <div>
              <h2 id="commands-heading">Run from the Nexus folder</h2>
              <p>
                Use these in the terminal at your Nexus project root (this repo).
              </p>
            </div>
            <span className="pill">Vite</span>
          </div>
          <pre className="code-block">
            <span className="cmt"># Install once</span>
            {'\n'}
            npm install{'\n\n'}
            <span className="cmt"># This UI (opens browser)</span>
            {'\n'}
            npm run dev{'\n\n'}
            <span className="cmt"># Optional: gstack browse API (not this page)</span>
            {'\n'}
            npm run dev:gstack
          </pre>
        </section>

        <section className="features" id="features" aria-label="Features">
          <article className="card">
            <div className="card-icon">1</div>
            <h3>Typography &amp; color</h3>
            <p>
              Fraunces for display type and Source Sans 3 for UI copy, with a
              mint accent that respects light and dark system preferences.
            </p>
          </article>
          <article className="card">
            <div className="card-icon">2</div>
            <h3>Layout rhythm</h3>
            <p>
              Centered shell, generous spacing, and cards that lift slightly on
              hover so the page feels tactile without noisy motion.
            </p>
          </article>
          <article className="card">
            <div className="card-icon">3</div>
            <h3>Fast refresh</h3>
            <p>
              Change <code>src/App.tsx</code> or <code>src/App.css</code> and
              watch the UI update in milliseconds.
            </p>
          </article>
        </section>

        <footer className="footer">
          <p>
            Edit <a href="https://vite.dev/guide/">web/</a> in this repo — this
            is your canvas.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
