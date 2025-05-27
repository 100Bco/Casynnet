import { useState, useEffect } from 'react';
import { CasynLogo } from './casyn-logo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToSection = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', href: 'solutions' },
    { label: 'Affiliates', href: 'partnerships' },
    { label: 'Contact Us', href: 'contact' }
  ];

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full top-4 z-50 transition-all duration-300 px-4`}>
      <div className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg border border-white/20' : 'bg-white/70 backdrop-blur-md shadow-md'
      }`}>
        <div className="px-6">
          <div className="flex justify-between items-center h-16">
            <CasynLogo />
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.slice(0, -1).map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <Button 
                  onClick={() => handleNavClick('contact')}
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary p-2 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50">
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 w-full text-left transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}