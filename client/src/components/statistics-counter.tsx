import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Building, Award } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ end, duration = 2000, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="stat-number animate-counter">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

export function StatisticsCounter() {
  const stats = [
    {
      icon: Building,
      value: 150,
      suffix: '+',
      label: 'Casinos Powered',
      description: 'Gaming establishments worldwide'
    },
    {
      icon: Users,
      value: 500000,
      suffix: '+',
      label: 'Active Players',
      description: 'Daily active gaming users'
    },
    {
      icon: TrendingUp,
      value: 99.9,
      suffix: '%',
      label: 'Uptime Reliability',
      description: 'System availability guarantee'
    },
    {
      icon: Award,
      value: 25,
      suffix: '+',
      label: 'Industry Awards',
      description: 'Recognition for excellence'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold mb-4 text-gray-800 dark:text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Our numbers speak for themselves. See why gaming professionals worldwide choose Casyn.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="premium-card hover-tilt">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mb-6">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <Counter 
                  end={stat.value} 
                  suffix={stat.suffix}
                  duration={2500}
                />
                <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mt-2 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}