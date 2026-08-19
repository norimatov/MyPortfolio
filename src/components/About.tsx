import { aboutParagraphs, profile } from '../data/portfolio';
import { Reveal } from './Reveal';

function initials(name: string): string {
  return name.split(' ').map((p) => p[0]).join('').toUpperCase();
}

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <div className="section-eyebrow mono">cat about.md</div>
          <h2 className="section-title">Men haqimda</h2>
          <p className="section-desc">
            Kod yozishdan tashqari, muammoni tushunish va uni to'g'ri arxitektura bilan yechish — men uchun eng qiziqarli qism.
          </p>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={80}>
            <div className="glass about-card">
              <div className="avatar-ring">{initials(profile.name)}</div>
              <div className="about-info-row">
                <span className="k mono">joylashuv</span>
                <span>{profile.location}</span>
              </div>
              <div className="about-info-row">
                <span className="k mono">tajriba</span>
                <span>{profile.yearsExperience}+ yil</span>
              </div>
              <div className="about-info-row">
                <span className="k mono">telefon</span>
                <span>{profile.phone}</span>
              </div>
              <div className="about-info-row">
                <span className="k mono">til</span>
                <span>Ingliz — {profile.english}</span>
              </div>
              <div className="status-line">
                <span className="status-dot" /> {profile.availability}
              </div>
            </div>
          </Reveal>

          <Reveal delay={160} className="about-text">
            {aboutParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
