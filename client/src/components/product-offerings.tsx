import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, Users, CreditCard, Download, Shield, Fingerprint, Ticket, Crown, History, Smartphone, Lock, Settings, Scale } from 'lucide-react';
import cmdImage from '@assets/image_1748378029121.png';
import prosysImage from '@assets/image_1748378112895.png';
import kioskImage from '@assets/image_1748377308069.png';

export function ProductOfferings() {
  const cmdFeatures = [
    { icon: BarChart3, title: 'Live Metrics', description: 'Real-time performance and reporting' },
    { icon: Users, title: 'Staff Management', description: 'Comprehensive team tracking tools' },
    { icon: CreditCard, title: 'Financial Reports', description: 'Financial transactions and match performance' },
    { icon: Download, title: 'Export Data', description: 'Customizable dashboard exports' }
  ];

  const prosysFeatures = [
    { icon: Fingerprint, title: 'Biometric Verification', description: 'Face and palm recognition' },
    { icon: BarChart3, title: 'Match Tracking', description: 'Real-time match reports with user ID and timestamps' },
    { icon: Crown, title: 'VIP Management', description: 'Segmentation and access controls' },
    { icon: CreditCard, title: 'Bonus Rewards', description: 'New reward system with high roller settings separate' }
  ];

  const kioskFeatures = [
    { icon: Smartphone, title: 'User-Friendly Interface', description: 'Real-time odds and betting' },
    { icon: BarChart3, title: 'Daily Reporting', description: 'Simplified compliance with easy scan of winning tickets for fast, clear reports' },
    { icon: Settings, title: 'Customizable Hardware', description: 'Tailored to your space' },
    { icon: Scale, title: 'Regulatory Compliance', description: 'Meets regional requirements' }
  ];

  return (
    <section id="solutions" className="py-20 gradient-bg-1 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-800 dark:text-white mb-6 animate-fade-in-up">
            Our <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up stagger-1">
            Comprehensive casino management and sports betting solutions designed for the modern gaming industry
          </p>
        </div>

        {/* CMD - Casino Management Dashboard */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <div className="bg-primary text-white px-4 py-2 rounded-full inline-block mb-4 shimmer">
                <BarChart3 className="inline mr-2 h-4 w-4" />
                Featured Solution
              </div>
              <h3 className="text-3xl font-montserrat font-bold text-gray-800 dark:text-white mb-6 animate-fade-in-up stagger-1">
                CMD – Casino Management Dashboard
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 animate-fade-in-up stagger-2">
                Trusted solutions for small casino management and player tracking. Built to simplify and protect casino operations.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {cmdFeatures.map((feature, index) => (
                  <div key={index} className={`flex items-start space-x-3 animate-fade-in-up card-hover p-2 rounded-lg stagger-${index + 3}`}>
                    <div className="bg-primary/10 p-2 rounded-lg animate-pulse-slow">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-white btn-primary hover-lift">
                <BarChart3 className="mr-2 h-4 w-4" />
                Request a Demo
              </Button>
            </div>
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <div className="relative hover-lift hover-tilt neon-border rounded-xl">
                <img 
                  src={cmdImage}
                  alt="CMD Casino Management Dashboard with analytics and reporting" 
                  className="rounded-xl shadow-2xl w-full object-cover h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-xl"></div>
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  CMD
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ProSys - Advanced Player Management */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative hover-lift hover-tilt morphing-shape">
                <img 
                  src={prosysImage}
                  alt="ProSys Advanced Player Management System" 
                  className="rounded-xl shadow-2xl w-full object-cover h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent rounded-xl"></div>
                <div className="absolute top-4 right-4 bg-accent/90 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  ProSys
                </div>
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
                Trusted solutions for small casino management and player tracking. Enhanced security and operational efficiency with advanced analytics.
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
              
              <Button className="bg-accent hover:bg-accent/90 text-black">
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
              <div className="relative hover-lift hover-tilt">
                <img 
                  src={kioskImage}
                  alt="Sports Betting Kiosks with modern touch interfaces" 
                  className="rounded-xl shadow-2xl w-full object-cover h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Sports Betting Kiosks
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
