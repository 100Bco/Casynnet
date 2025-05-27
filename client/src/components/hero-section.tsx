import { Button } from '@/components/ui/button';
import { CasynLogo } from './casyn-logo';
import { ChevronDown, Rocket, Play } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';
import heroImage from '@assets/image_1748377233939.png';

export function HeroSection() {
  const scrollToSection = useSmoothScroll();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Sleek casino cards and roulette wheel with modern dark theme" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-primary/25"></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="particles" style={{left: '10%', animationDelay: '0s'}}></div>
          <div className="particles" style={{left: '20%', animationDelay: '0.5s'}}></div>
          <div className="particles" style={{left: '30%', animationDelay: '1s'}}></div>
          <div className="particles" style={{left: '40%', animationDelay: '1.5s'}}></div>
          <div className="particles" style={{left: '50%', animationDelay: '2s'}}></div>
          <div className="particles" style={{left: '60%', animationDelay: '2.5s'}}></div>
          <div className="particles" style={{left: '70%', animationDelay: '3s'}}></div>
          <div className="particles" style={{left: '80%', animationDelay: '3.5s'}}></div>
          <div className="particles" style={{left: '90%', animationDelay: '4s'}}></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-scale-in animate-float">
          <CasynLogo size="xl" className="mx-auto mb-6 drop-shadow-2xl" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6 leading-tight animate-fade-in-up stagger-1">
          <span className="gradient-text animate-pulse-slow">Powering Smart Gaming</span><br/>
          Solutions
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-inter animate-fade-in-up stagger-2">
          Your trusted partner in casino tech.<br/>
          Built to simplify and optimize gaming operations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
          <Button 
            size="lg"
            onClick={() => scrollToSection('solutions')}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold btn-primary hover-lift shadow-xl"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Explore Our Solutions
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="glass border-2 border-white text-white hover:bg-white hover:text-foreground px-8 py-4 text-lg font-semibold hover-lift transition-all"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('solutions')}
          className="text-white hover:text-accent transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}
