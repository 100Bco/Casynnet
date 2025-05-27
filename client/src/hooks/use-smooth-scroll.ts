import { useCallback } from 'react';

export function useSmoothScroll() {
  const scrollToSection = useCallback((sectionId: string) => {
    console.log('Attempting to scroll to:', sectionId);
    const element = document.getElementById(sectionId);
    console.log('Found element:', element);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Account for fixed navbar and padding
      console.log('Scrolling to position:', offsetTop);
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    } else {
      console.log('Element not found with ID:', sectionId);
    }
  }, []);

  return scrollToSection;
}
