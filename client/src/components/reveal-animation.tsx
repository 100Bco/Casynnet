import { useEffect, useRef, useState } from 'react';

interface RevealAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function RevealAnimation({ children, className = '', delay = 50 }: RevealAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Fallback timer to ensure content loads even if intersection doesn't trigger
    const fallbackTimer = setTimeout(() => {
      if (!hasTriggered) {
        setHasTriggered(true);
        setIsVisible(true);
      }
    }, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [delay, hasTriggered]);

  return (
    <div
      ref={elementRef}
      className={`${className} ${isVisible ? 'animate-reveal-up' : 'reveal-hidden'}`}
    >
      {children}
    </div>
  );
}