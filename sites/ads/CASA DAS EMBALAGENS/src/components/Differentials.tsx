import { Truck, Star, ShieldCheck, ThumbsUp, MapPin, Clock } from 'lucide-react';

const items = [
  {
    icon: Star,
    title: 'Maior Variedade',
    description: 'A maior variedade em embalagens de toda a região para qualquer tipo de negócio.',
    color: 'bg-brand-yellow',
    textColor: 'text-brand-blue',
  },
  {
    icon: Truck,
    title: 'Entregas Rápidas',
    description: 'Realizamos entregas em toda a região de Trindade e Goiânia com agilidade.',
    color: 'bg-brand-red',
    textColor: 'text-white',
  },
  {
    icon: ShieldCheck,
    title: '+7 Anos de Experiência',
    description: 'Mais de 7 anos no mercado de embalagens com tradição e confiança.',
    color: 'bg-brand-blue',
    textColor: 'text-white',
  },
  {
    icon: ThumbsUp,
    title: 'Atendimento de Qualidade',
    description: 'Equipe dedicada a ajudar você a encontrar a embalagem certa para o seu negócio.',
    color: 'bg-brand-yellow',
    textColor: 'text-brand-blue',
  },
  {
    icon: MapPin,
    title: 'Fácil Localização',
    description: 'Localizada no Parque dos Buritis, Trindade-GO — fácil de encontrar.',
    color: 'bg-brand-red',
    textColor: 'text-white',
  },
  {
    icon: Clock,
    title: 'Horário Amplo',
    description: 'Seg. a Sex. das 08h às 19h e Sábados até 18h para melhor atendê-lo.',
    color: 'bg-brand-blue',
    textColor: 'text-white',
  },
];

export default function Differentials() {
  return (
    <section className="py-20 md:py-28 bg-brand-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-yellow rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-red rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-yellow/20 text-brand-yellow font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Por que escolher a gente
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Nossos <span className="text-brand-yellow">diferenciais</span>
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg max-w-xl mx-auto">
            Comprometidos em oferecer o melhor em embalagens para o seu negócio crescer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`${item.color} rounded-xl p-3 inline-flex mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={22} className={item.textColor} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
