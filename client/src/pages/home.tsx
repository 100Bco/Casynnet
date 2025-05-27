import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ProductOfferings } from '@/components/product-offerings';
import { AffiliatePartnerships } from '@/components/affiliate-partnerships';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { StatisticsCounter } from '@/components/statistics-counter';
import { RevealAnimation } from '@/components/reveal-animation';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <RevealAnimation delay={200}>
          <StatisticsCounter />
        </RevealAnimation>
        <RevealAnimation delay={400}>
          <ProductOfferings />
        </RevealAnimation>
        <RevealAnimation delay={600}>
          <AffiliatePartnerships />
        </RevealAnimation>
        <RevealAnimation delay={800}>
          <ContactSection />
        </RevealAnimation>
      </main>
      <Footer />
    </div>
  );
}
