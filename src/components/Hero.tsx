import { profile } from '../data/portfolio';
import { TerminalWindow } from './TerminalWindow';

export function Hero() {
  return (
    <section id="top" className="section hero">
      <div>
        <div className="hero-kicker">
          <span className="dot" /> {profile.availability}
        </div>
        <h1 className="hero-title">
          Men {profile.name}<br />
          <span className="accent">{profile.role}</span>
        </h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-fill">
            Loyihalarni ko'rish →
          </a>
          <a href="#contact" className="btn btn-ghost">
            Bog'lanish
          </a>
        </div>
        <div className="hero-meta">
          {profile.stats.map((stat) => (
            <div className="hero-meta-item" key={stat.label}>
              <div className="num mono">{stat.num}</div>
              <div className="label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <TerminalWindow />
    </section>
  );
}
