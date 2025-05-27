import { useEffect, useRef, useState } from 'react';

interface RevealAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function RevealAnimation({ children, className = '', delay = 0 }: RevealAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`${className} ${isVisible ? 'animate-reveal-up' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}