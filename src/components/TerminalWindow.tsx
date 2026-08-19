import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio';

/**
 * Signature element: "typed" JSON obyekt sifatida taqdim etiladigan hero terminali.
 * Har bir qator sintaksis rangida, matn animatsion tarzda "yoziladi".
 */
const lines = [
  { key: 'name', value: profile.name },
  { key: 'role', value: profile.role },
  { key: 'location', value: profile.location },
  { key: 'yearsExperience', value: String(profile.yearsExperience), isNum: true },
  { key: 'availability', value: profile.availability },
];

export function TerminalWindow() {
  const [typedCount, setTypedCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setTypedCount(lines.length);
      setDone(true);
      return undefined;
    }
    if (typedCount >= lines.length) {
      setDone(true);
      return undefined;
    }
    const timer = setTimeout(() => setTypedCount((c) => c + 1), 260);
    return () => clearTimeout(timer);
  }, [typedCount]);

  return (
    <div className="terminal glass">
      <div className="terminal-bar">
        <span className="terminal-dot" style={{ background: '#ff5f57' }} />
        <span className="terminal-dot" style={{ background: '#febc2e' }} />
        <span className="terminal-dot" style={{ background: '#28c840' }} />
        <span className="terminal-title">whoami.json</span>
      </div>
      <div className="terminal-body">
        <div>
          <span className="tk-func">const</span> <span className="tk-key">developer</span>{' '}
          <span className="tk-punct">=</span> <span className="tk-punct">{'{'}</span>
        </div>
        {lines.slice(0, typedCount).map((line) => (
          <div key={line.key} style={{ paddingLeft: 20 }}>
            <span className="tk-key">{line.key}</span>
            <span className="tk-punct">: </span>
            {line.isNum ? (
              <span className="tk-num">{line.value}</span>
            ) : (
              <span className="tk-string">"{line.value}"</span>
            )}
            <span className="tk-punct">,</span>
          </div>
        ))}
        <div>
          <span className="tk-punct">{'}'}</span>
          {done && <span className="caret" />}
        </div>
        {done && (
          <div style={{ marginTop: 14 }}>
            <span className="tk-comment">// scroll qiling — batafsil ma'lumot pastda ↓</span>
          </div>
        )}
      </div>
    </div>
  );
}
