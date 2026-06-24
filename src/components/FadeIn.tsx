'use client';

import { useEffect, useRef, CSSProperties, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
};

export default function FadeIn({ children, className = '', delay = 0, direction = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translate(0,0)';
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const initial: CSSProperties = {
    opacity: 0,
    transform: direction === 'up' ? 'translateY(40px)' : direction === 'left' ? 'translateX(-40px)' : 'translateX(40px)',
    transition: 'opacity 0.7s ease, transform 0.7s ease',
  };

  return (
    <div ref={ref} className={className} style={initial}>
      {children}
    </div>
  );
}
