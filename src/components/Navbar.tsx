import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="navbar">
      <div
        className="navbar-inner glass"
        style={{ boxShadow: scrolled ? '0 20px 50px -30px rgba(0,0,0,0.6)' : 'none' }}
      >
        <a href="#top" className="brand">
          <span className="prompt">&gt;_</span> {profile.name.split(' ')[0].toLowerCase()}
        </a>
        <nav className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a href={profile.resumeUrl} className="nav-cta">
            Resume ↓
          </a>
        </nav>
        <button
          className="nav-toggle"
          aria-label="Menyuni ochish"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav glass">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={profile.resumeUrl} className="nav-cta" style={{ textAlign: 'center', marginLeft: 0, marginTop: 4 }}>
            Resume ↓
          </a>
        </nav>
      )}
    </header>
  );
}
