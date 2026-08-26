import { Sparkles } from 'lucide-react';

export default function SocialProof() {
  const stats = [
    { value: '500+', label: 'Veículos Restaurados' },
    { value: '3+', label: 'Anos de Experiência' },
    { value: '100%', label: 'Clientes Satisfeitos' },
    { value: '✓', label: 'Garantia de Serviço' }
  ];

  return (
    <section className="bg-[#fafe05] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-black">{stat.value}</div>
                <div className="text-sm md:text-base font-bold text-black/80">{stat.label}</div>
              </div>
              {index < stats.length - 1 && (
                <Sparkles className="hidden sm:block text-black/30" size={20} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
