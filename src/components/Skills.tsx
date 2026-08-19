import { skillGroups } from '../data/portfolio';
import { Reveal } from './Reveal';

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <div className="section-eyebrow mono">cat package.json</div>
          <h2 className="section-title">Ko'nikmalar</h2>
          <p className="section-desc">
            Ishlab chiqarish muhitida sinovdan o'tgan texnologiyalar — dependencies sifatida tartiblangan.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, idx) => (
            <Reveal key={group.category} delay={idx * 80}>
              <div className="glass skill-card">
                <div className="skill-card-header">
                  <span className="skill-card-title">{group.packageName}</span>
                  <span className="skill-card-version">{group.version}</span>
                </div>
                <div className="skill-chips">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
