import './About.css';
import GitHubIcon from '../../assets/svg/github.svg';
import LinkedInIcon from '../../assets/svg/linkedin.svg';
import EmailIcon from '../../assets/svg/gmail.svg';

const socials = [
  { href:'https://github.com/toeneeoh', label:'GitHub', icon:GitHubIcon },
  { href:'https://linkedin.com/in/tony-pl', label:'LinkedIn', icon:LinkedInIcon },
  { href:'mailto:toeneeoh@gmail.com', label:'Email', icon:EmailIcon },
];

export default function About() {
  return <section className="section about-section" id="about" aria-label="About">
    <div className="about-copy"><p className="about-lead">I’m a George Mason University alumnus who enjoys building applications that are both useful and enjoyable to use.</p><p>The projects I value most require deeper thinking: understanding an unfamiliar system, making a complicated idea feel simple, or helping a team move from uncertainty to a working product. I’m energized by new technologies, candid collaboration, and the moment a difficult problem finally clicks.</p><div className="social-row">{socials.map(social => <a href={social.href} key={social.label} target={social.href.startsWith('http')?'_blank':undefined} rel="noreferrer"><img src={social.icon} alt=""/><span>{social.label}</span><b aria-hidden="true">↗</b></a>)}</div></div>
  </section>;
}
