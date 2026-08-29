import { Sparkles, Globe, Heart, ShieldCheck } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: Sparkles,
      title: '20+',
      description: 'anos de experiência'
    },
    {
      icon: Globe,
      title: '98%',
      description: 'relatam dormir melhor'
    },
    {
      icon: Heart,
      title: '100%',
      description: 'de satisfação dos clientes'
    },
    {
      icon: ShieldCheck,
      title: '5000+',
      description: 'produtos vendidos'
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-primary to-primary-hover">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center text-center">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-white text-3xl font-bold mb-2">
                  {advantage.title}
                </h3>

                <p className="text-white/90 text-sm uppercase font-medium tracking-wide">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;