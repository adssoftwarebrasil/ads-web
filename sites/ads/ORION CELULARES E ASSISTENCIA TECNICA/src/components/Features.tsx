import { Award, Shield, Users, type LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

const features: Feature[] = [
  { Icon: Award, title: 'Assistência Técnica Especializada', desc: 'Reparos completos em todas as marcas e modelos' },
  { Icon: Shield, title: 'Garantia e confiança', desc: 'Segurança e autenticidade em todos os produtos' },
  { Icon: Users, title: 'Atendimento presencial e on-line', desc: 'Rápido e humanizado de segunda a sábado' },
];

export default function Features() {
  return (
    <section className="bg-[rgb(254,254,252)] py-16 md:py-20 px-4 md:px-8 lg:px-16 fade-in">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map(({ Icon, title, desc }) => (
          <div
            key={title}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:scale-105 transition-transform duration-300 hover:shadow-xl"
          >
            <Icon className="w-10 h-10 stroke-[rgb(231,189,44)] mb-4" strokeWidth={1.5} />
            <h3 className="font-bold text-lg mb-2 text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
