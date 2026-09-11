import { Trophy, Scissors, Clock, Heart, type LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  text: string;
}

const features: Feature[] = [
  { icon: Trophy, text: 'Eleita Melhor Barbearia de Sinop' },
  { icon: Scissors, text: 'Visagismo · Dia de Noivo · Hora Marcada' },
  { icon: Clock, text: 'Seg a Sáb · 8h às 19h' },
  { icon: Heart, text: 'Experiência premium masculina' },
];

export default function Features() {
  return (
    <section className="bg-black py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map(({ icon: Icon, text }) => (
            <div key={text} className="flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/80 text-sm font-medium leading-snug tracking-wide">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
