import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ProductOfferings } from '@/components/product-offerings';
import { AffiliatePartnerships } from '@/components/affiliate-partnerships';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProductOfferings />
        <AffiliatePartnerships />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
