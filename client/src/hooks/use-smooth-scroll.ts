import { useCallback } from 'react';

export function useSmoothScroll() {
  const scrollToSection = useCallback((sectionId: string) => {
    // Add a small delay to ensure all animations and layout changes are complete
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const currentScrollY = window.pageYOffset;
        const targetPosition = rect.top + currentScrollY - 120; // Account for navbar
        
        window.scrollTo({
          top: Math.max(0, targetPosition), // Ensure we don't scroll to negative position
          behavior: 'smooth'
        });
      }
    }, 50);
  }, []);

  return scrollToSection;
}
