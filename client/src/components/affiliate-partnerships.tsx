import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Monitor, TrendingUp, Gamepad2, Handshake, Megaphone, Hand, ArrowRight, Users } from 'lucide-react';

export function AffiliatePartnerships() {
  const partners = [
    {
      icon: Monitor,
      title: 'KIOSK Information Systems',
      description: 'Leading provider of self-service kiosks for the gaming industry',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: TrendingUp,
      title: 'CMD & ProSys',
      description: 'Top-rated casino management systems and player tracking solutions',
      color: 'bg-accent/20 text-foreground'
    },
    {
      icon: Gamepad2,
      title: '1xBet',
      description: 'Global sports betting platform with comprehensive coverage',
      color: 'bg-gradient-to-r from-primary/20 to-accent/20 text-primary'
    },
    {
      icon: Handshake,
      title: 'PartnerMatrix',
      description: 'iGaming affiliate and agent management system',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Megaphone,
      title: 'Affilka',
      description: 'Casino affiliate marketing software and management tools',
      color: 'bg-accent/20 text-foreground'
    },
    {
      icon: Hand,
      title: 'Elo Touchscreens',
      description: 'Premium touchscreen solutions for interactive gaming experiences',
      color: 'bg-gradient-to-r from-primary/20 to-accent/20 text-primary'
    }
  ];

  return (
    <section id="partnerships" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Our <span className="text-primary">Partnership</span> Network
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Casyn collaborates with top-tier affiliate programs to expand its reach and offer clients a diverse range of gaming solutions.
          </p>
        </div>

        {/* Featured Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${partner.color}`}>
                  <partner.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-foreground mb-3">
                  {partner.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {partner.description}
                </p>
                <Button variant="link" className="text-primary hover:text-primary/80 font-semibold p-0">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-montserrat font-bold mb-4">Ready to Join Our Network?</h3>
          <p className="text-xl mb-8 opacity-90">
            Partner with Casyn and expand your reach in the gaming industry
          </p>
          <Button className="bg-white text-foreground hover:bg-gray-100 px-8 py-4 font-semibold">
            <Users className="mr-2 h-5 w-5" />
            Join Our Affiliate Network
          </Button>
        </div>
      </div>
    </section>
  );
}
