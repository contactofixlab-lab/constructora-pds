'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-accent z-[70] pointer-events-none"
      style={{ width: `${pct}%`, transition: 'width 0.08s linear' }}
    />
  );
}
