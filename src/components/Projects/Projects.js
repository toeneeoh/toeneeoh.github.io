import { useEffect, useState } from 'react';
import './Projects.css';
import dashboard from '../../assets/png/budget-buddy/dashboard.png';
import visualizer from '../../assets/png/music-visualizer/interface.png';

const projects = [
  { number:'01', title:'Curse of Time: Nevermore', label:'Game systems · Legacy modernization', summary:'An actively maintained action RPG built inside Warcraft III, carrying forward nearly two decades of community development.', contribution:'Co-maintain a large inherited codebase, modernizing its architecture from vJASS to Lua while extending gameplay systems and preserving compatibility with an established player experience.', tags:['Lua','vJASS','Game systems','Legacy migration','Collaboration'], url:'https://github.com/toeneeoh/curse-of-time', visual:'CoT', visualDetail:'719+ commits · Warcraft III RPG' },
  { number:'02', title:'COBOL to Python', label:'Compiler engineering · Developer tools', summary:'A typed, staged transpiler that converts a documented subset of COBOL into readable Python.', contribution:'Designed a compiler pipeline spanning lexical analysis, parsing, typed AST construction, semantic validation, and code generation—with automated tests and a Pyodide-powered browser interface.', tags:['Python','Compilers','Typed AST','Pyodide','Automated testing'], url:'https://toeneeoh.github.io/cobol-to-python/', linkLabel:'Open live site', visual:'COBOL → Python', visualDetail:'Lexer · Parser · Semantics · Generator' },
  { number:'03', title:'Music Visualizer', label:'Audio engineering · Desktop', summary:'A Java audio player that transforms live frequency data into a responsive visual experience.', contribution:'Explored digital signal processing, implemented Fast Fourier Transform-based frequency analysis, and handled multiple audio file formats in a focused desktop application.', tags:['Java','FFT','Audio processing','Desktop UI'], url:'https://github.com/toeneeoh/java-music-visualizer', image:visualizer, imageAlt:'Music Visualizer interface showing colorful audio bands' },
  { number:'04', title:'Budget Buddy', label:'Full-stack product', summary:'A cross-platform expense tracker that turns financial data into clear, AI-assisted recommendations.', contribution:'Helped lead a four-person Agile team, guided technical decisions, and built core experiences spanning user data, financial visualization, and LLM-powered recommendations.', tags:['React','Mobile','APIs','LLM integration','Agile'], url:'https://github.com/toeneeoh/Expense-Tracker', image:dashboard, imageAlt:'Budget Buddy financial dashboard' },
];

export default function Projects() {
  const [lightbox, setLightbox] = useState(null);
  useEffect(() => {
    if (!lightbox) return undefined;
    const close = ({ key }) => key === 'Escape' && setLightbox(null);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [lightbox]);
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <h2 className="index-heading" id="work-title">Selected work</h2>
      <div className="project-list">
        {projects.map((project) => <article className="project-card" key={project.title}>
          {project.image ? <button className="project-visual" onClick={() => setLightbox({ src:project.image, alt:project.imageAlt })} aria-label={`Enlarge ${project.title} screenshot`}><img src={project.image} alt={project.imageAlt}/><span>View screenshot ↗</span></button> : <div className="project-visual project-visual-type" aria-hidden="true"><strong>{project.visual}</strong><span>{project.visualDetail}</span></div>}
          <div className="project-info"><div className="project-meta"><span>{project.number}</span><span>{project.label}</span></div><h3>{project.title}</h3><p className="project-summary">{project.summary}</p><p className="project-contribution">{project.contribution}</p><ul className="tag-list" aria-label={`${project.title} technologies`}>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><a className="project-link" href={project.url} target="_blank" rel="noreferrer">{project.linkLabel || 'View source on GitHub'} <span aria-hidden="true">↗</span></a></div>
        </article>)}
      </div>
      {lightbox && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Project screenshot" onClick={() => setLightbox(null)}><button onClick={() => setLightbox(null)}>Close</button><img src={lightbox.src} alt={lightbox.alt}/></div>}
    </section>
  );
}
