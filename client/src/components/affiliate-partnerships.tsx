import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Shield, Users, Handshake, Crown, Star, ArrowRight, DollarSign } from 'lucide-react';

export function AffiliatePartnerships() {
  const benefits = [
    {
      icon: Shield,
      title: 'Trusted Brand Recognition',
      description: 'Leverage the established Casyn brand name and reputation in the casino tech industry',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: TrendingUp,
      title: 'High Commission Rates',
      description: 'Competitive commission structure with performance-based bonuses and incentives',
      color: 'bg-accent/20 text-foreground'
    },
    {
      icon: Users,
      title: 'Dedicated Support Network',
      description: 'Access to our experienced team and comprehensive training resources',
      color: 'bg-gradient-to-r from-primary/20 to-accent/20 text-primary'
    },
    {
      icon: Crown,
      title: 'Premium Product Portfolio',
      description: 'Represent industry-leading CMD and ProSys solutions with proven track records',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Star,
      title: 'Marketing Infrastructure',
      description: 'Professional marketing materials, leads generation, and brand assets',
      color: 'bg-accent/20 text-foreground'
    },
    {
      icon: DollarSign,
      title: 'Flexible Business Model',
      description: 'Multiple revenue streams and partnership structures to fit your business goals',
      color: 'bg-gradient-to-r from-primary/20 to-accent/20 text-primary'
    }
  ];

  return (
    <section id="partnerships" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6 animate-fade-in-up">
            Join the <span className="gradient-text">Casyn</span> Affiliate Network
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up stagger-1">
            Partner with the #1-ranked distributor for CMD & ProSys. Work under our trusted brand name and infrastructure to grow your business.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className={`bg-white hover-lift card-hover animate-scale-in stagger-${index + 2}`}>
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${benefit.color} animate-float`}>
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-montserrat font-bold mb-4">Start Building Your Success Today</h3>
          <p className="text-xl mb-8 opacity-90">
            Run smarter. Grow faster. Stay invisible with Casyn's trusted network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-foreground hover:bg-gray-100 px-8 py-4 font-semibold">
              <Handshake className="mr-2 h-5 w-5" />
              Become an Affiliate
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-foreground px-8 py-4 font-semibold">
              <Users className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
