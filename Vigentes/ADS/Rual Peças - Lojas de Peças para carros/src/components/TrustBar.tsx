import { useEffect, useState } from 'react';
import { Trophy, Shield, Globe } from 'lucide-react';

export default function TrustBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('trust-bar');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const items = [
    {
      icon: Trophy,
      number: '37',
      label: 'Anos de Experiência',
    },
    {
      icon: Shield,
      label: 'Peças Originais',
    },
    {
      icon: Globe,
      label: 'Atendimento América Latina',
    },
  ];

  return (
    <section
      id="trust-bar"
      className="py-12"
      style={{ backgroundColor: '#f2eb97' }}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center transition-opacity duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <item.icon size={48} style={{ color: '#2b2d91' }} className="mb-4" />
              {item.number && (
                <div className="text-5xl font-bold mb-2" style={{ color: '#2b2d91' }}>
                  {item.number}
                </div>
              )}
              <div className="text-xl font-semibold" style={{ color: '#0a0d00' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
