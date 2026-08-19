import { useEffect, useState } from 'react';

/**
 * Scroll progress chizig'i (yuqorida) + "tepaga qaytish" tugmasi (pastda o'ngda).
 * Ikkalasi ham foydalanuvchi sahifani aylanib chiqqanda paydo bo'ladi.
 */
export function ScrollTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0);
      setVisible(scrollTop > 480);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <button
        type="button"
        className={`scroll-top-btn ${visible ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Sahifa boshiga qaytish"
      >
        ↑
      </button>
    </>
  );
}
