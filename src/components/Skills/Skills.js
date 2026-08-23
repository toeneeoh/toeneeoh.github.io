import './Skills.css';

const groups = [
  { number:'01', title:'Languages', items:['JavaScript','TypeScript','Python','Java','Go','C#','C','Lua'] },
  { number:'02', title:'Product engineering', items:['React','Responsive UI','REST APIs','Mobile development','Accessibility'] },
  { number:'03', title:'Ways of working', items:['Agile collaboration','Technical leadership','System design','Rapid learning','Problem solving'] },
];

export default function Skills() {
  return <section className="section" id="skills" aria-labelledby="skills-title">
    <h2 className="index-heading" id="skills-title">Toolkit</h2>
    <div className="skill-groups">{groups.map(group => <article className="skill-group" key={group.title}><span>{group.number}</span><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
  </section>;
}
