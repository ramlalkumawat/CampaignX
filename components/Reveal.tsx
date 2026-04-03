"use client";

import type { CSSProperties, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: number;
  once?: boolean;
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 28,
  scale = 0.98,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.18,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once]);

  const style = {
    transitionDelay: `${delay}ms`,
    ['--reveal-y' as string]: `${y}px`,
    ['--reveal-scale' as string]: `${scale}`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      data-visible={visible}
      className={`reveal-on-scroll ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
