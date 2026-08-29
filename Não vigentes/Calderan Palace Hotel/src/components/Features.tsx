import { MapPin, Clock, Wifi, Coffee, type LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
}

const features: Feature[] = [
  { icon: MapPin, title: 'Localização Estratégica', text: 'Perto do centro e de Bonito-MS' },
  { icon: Clock, title: 'Recepção 24 Horas', text: 'Acomodações prontas a qualquer momento' },
  { icon: Wifi, title: 'Wi-Fi Gratuito', text: 'Conexão de qualidade em todos os ambientes' },
  { icon: Coffee, title: 'Café da Manhã Incluso', text: 'Inicie seu dia com sabor e energia' },
];

export default function Features() {
  return (
    <section className="bg-[#F09100] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center lg:border-r lg:last:border-r-0 border-white/30 px-4"
              >
                <Icon size={28} className="text-white mb-3" />
                <h3 className="text-white text-sm font-semibold uppercase tracking-wide mb-1">
                  {f.title}
                </h3>
                <p className="text-white/90 text-xs sm:text-sm">{f.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
