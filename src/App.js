import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

const navigation = [['work', 'Work'], ['skills', 'Skills'], ['about', 'About']];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const section = { '/projects': 'work', '/skills': 'skills' }[window.location.pathname];
    if (section) window.requestAnimationFrame(() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' }));
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#main" aria-label="Back to top">&lt;/&gt;</a>
        <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">Toggle navigation</span>{menuOpen ? 'Close' : 'Menu'}
        </button>
        <nav id="site-navigation" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
          {navigation.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
      </header>

      <main id="main">
        <Projects />
        <Skills />
        <About />
      </main>
      <footer><a href="#main">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
