import { experience } from '../data/portfolio';
import { Reveal } from './Reveal';

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <div className="section-eyebrow mono">cat education.md</div>
          <h2 className="section-title">Ta'lim</h2>
          <p className="section-desc">
            O'quv yo'lim — har bir bosqich commit sifatida aks ettirilgan.
          </p>
        </Reveal>

        <div className="git-log">
          {experience.map((entry, idx) => (
            <Reveal key={entry.hash} delay={idx * 90}>
              <div className="commit">
                <span className="commit-node" />
                <div className="commit-header">
                  <span className="commit-hash mono">{entry.hash}</span>
                  <span className="commit-message mono">{entry.message}</span>
                </div>
                <div className="commit-meta">
                  <span className="role">{entry.role}</span> · {entry.company} · {entry.period}
                </div>
                <ul className="commit-details">
                  {entry.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
