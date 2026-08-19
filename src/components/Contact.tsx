import { profile } from '../data/portfolio';
import { Reveal } from './Reveal';

const socials = [
  { href: profile.github, label: 'GH' },
  { href: profile.telegram, label: 'TG' },
].filter((s) => Boolean(s.href));

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className="glass contact-panel">
            <div className="section-eyebrow mono" style={{ justifyContent: 'center' }}>
              ./contact.sh
            </div>
            <h2 className="contact-title">Loyihangiz bormi? Suhbatlashaylik</h2>
            <p className="contact-desc">
              Yangi imkoniyatlar, hamkorlik takliflari yoki savollaringiz bo'lsa — Telegram orqali yozing, tez orada javob beraman.
            </p>
            <div className="contact-actions">
              <a href={profile.telegram} className="btn btn-fill">
                ✈ Telegram orqali yozish
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="btn btn-ghost">
                📞 {profile.phone}
              </a>
            </div>
            <div className="social-row">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="social-link" aria-label={s.label}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
