import { profile } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} {profile.name} — Barcha huquqlar himoyalangan · <span className="tk-comment"></span>
      </div>
    </footer>
  );
}
