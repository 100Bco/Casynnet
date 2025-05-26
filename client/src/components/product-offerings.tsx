import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, Users, CreditCard, Download, Shield, Fingerprint, Ticket, Crown, History, Smartphone, Lock, Settings, Scale } from 'lucide-react';

export function ProductOfferings() {
  const cmdFeatures = [
    { icon: BarChart3, title: 'Live Metrics', description: 'Real-time performance and reporting' },
    { icon: Users, title: 'Staff Management', description: 'Comprehensive team tracking tools' },
    { icon: CreditCard, title: 'Payout Systems', description: 'Integrated bonus and reward management' },
    { icon: Download, title: 'Export Data', description: 'Customizable dashboard exports' }
  ];

  const prosysFeatures = [
    { icon: Fingerprint, title: 'Biometric Verification', description: 'Face and palm recognition' },
    { icon: Ticket, title: 'Ticket Tracking', description: 'Real-time refund processing' },
    { icon: Crown, title: 'VIP Management', description: 'Segmentation and access controls' },
    { icon: History, title: 'Activity Logs', description: 'Comprehensive member tracking' }
  ];

  const kioskFeatures = [
    { icon: Smartphone, title: 'User-Friendly Interface', description: 'Real-time odds and betting' },
    { icon: Lock, title: 'Secure Transactions', description: 'Protected payment processing' },
    { icon: Settings, title: 'Customizable Hardware', description: 'Tailored to your space' },
    { icon: Scale, title: 'Regulatory Compliance', description: 'Meets regional requirements' }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Our <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive casino management and sports betting solutions designed for the modern gaming industry
          </p>
        </div>

        {/* CMD - Casino Management Dashboard */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-primary text-white px-4 py-2 rounded-full inline-block mb-4">
                <BarChart3 className="inline mr-2 h-4 w-4" />
                Featured Solution
              </div>
              <h3 className="text-3xl font-montserrat font-bold text-foreground mb-6">
                CMD – Casino Management Dashboard
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                CMD offers a comprehensive solution for casino operations, integrating real-time analytics, machine management, and staff performance tracking into a single, user-friendly dashboard.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {cmdFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <BarChart3 className="mr-2 h-4 w-4" />
                Request a Demo
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern dashboard interface with analytics and charts" 
                  className="rounded-xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* ProSys - Advanced Player Management */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Security biometric scanning interface with fingerprint recognition" 
                  className="rounded-xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-xl"></div>
              </div>
            </div>
            <div>
              <div className="bg-accent text-foreground px-4 py-2 rounded-full inline-block mb-4">
                <Shield className="inline mr-2 h-4 w-4" />
                Security First
              </div>
              <h3 className="text-3xl font-montserrat font-bold text-foreground mb-6">
                ProSys – Advanced Player Management
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                ProSys provides advanced tools for player tracking and management, utilizing biometric verification and detailed analytics to enhance security and operational efficiency.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {prosysFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-accent/20 p-2 rounded-lg">
                      <feature.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="bg-accent hover:bg-accent/90 text-foreground">
                <Shield className="mr-2 h-4 w-4" />
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Sports Betting Kiosk Solutions */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full inline-block mb-4">
                <Smartphone className="inline mr-2 h-4 w-4" />
                Sports Betting
              </div>
              <h3 className="text-3xl font-montserrat font-bold text-foreground mb-6">
                Sports Betting Kiosk Solutions
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Partnering with leading manufacturers, Casyn offers state-of-the-art sports betting kiosks that provide secure, self-service betting experiences for customers.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {kioskFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-2 rounded-lg">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
                <Smartphone className="mr-2 h-4 w-4" />
                Explore Kiosk Solutions
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern interactive digital kiosk in a commercial setting" 
                  className="rounded-xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
