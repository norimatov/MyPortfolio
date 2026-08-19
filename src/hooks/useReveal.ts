import { useEffect, useRef, useState } from 'react';

/**
 * Element ekranga kirganda "is-visible" holatini true qiladi (IntersectionObserver).
 * Reduced-motion foydalanuvchilar uchun ham to'g'ri ishlaydi (CSS darajasida hurmat qilinadi).
 */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}
