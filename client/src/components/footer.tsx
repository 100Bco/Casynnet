import { CasynLogo } from './casyn-logo';
import { Button } from '@/components/ui/button';
import { SiFacebook, SiTiktok, SiInstagram } from 'react-icons/si';

export function Footer() {
  const solutionLinks = [
    { label: 'CMD Dashboard', href: '#' },
    { label: 'ProSys Management', href: '#' },
    { label: 'Sports Betting Kiosks', href: '#' },
    { label: 'Hardware Solutions', href: '#' }
  ];

  const companyLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Partnerships', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Support', href: '#' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' }
  ];

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <CasynLogo size="md" className="mb-6" />
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner in casino software, hardware, and affiliate solutions. Powering the future of gaming technology.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" className="bg-primary hover:bg-primary/90 p-3 hover-lift">
                <SiFacebook className="h-4 w-4" />
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90 p-3 hover-lift">
                <SiTiktok className="h-4 w-4" />
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90 p-3 hover-lift">
                <SiInstagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-300">
              {solutionLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Casyn. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legalLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-gray-400 hover:text-accent text-sm transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
