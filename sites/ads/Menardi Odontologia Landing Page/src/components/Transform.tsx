import { Sparkles, Sun, Eye, Heart, LucideIcon } from 'lucide-react';

interface Procedure {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const procedures: Procedure[] = [
  {
    Icon: Sparkles,
    iconClass: 'lucide lucide-sparkles',
    title: 'Lentes de Contato Dental',
    description: 'Lâminas ultrafinas de porcelana para um sorriso perfeito e natural',
  },
  {
    Icon: Sun,
    iconClass: 'lucide lucide-sun',
    title: 'Clareamento Dental',
    description: 'Dentes mais brancos e brilhantes com técnicas seguras e eficazes',
  },
  {
    Icon: Eye,
    iconClass: 'lucide lucide-eye',
    title: 'Invisalign',
    description: 'Alinhe seus dentes discretamente com alinhadores estéticos invisíveis',
  },
  {
    Icon: Heart,
    iconClass: 'lucide lucide-heart',
    title: 'Harmonização Facial',
    description: 'Botox, preenchimento labial e PRF para realçar sua beleza',
  },
];

export default function Transform() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(0,87,101)] mb-4">
            Transforme Seu Sorriso
          </h2>
          <p className="text-lg md:text-xl text-[rgb(42,42,42)] max-w-3xl mx-auto">
            Procedimentos estéticos avançados para resultados naturais e surpreendentes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {procedures.map((procedure) => (
            <div
              key={procedure.title}
              className="relative bg-gradient-to-br from-[rgb(107,218,229)] to-[rgb(0,182,204)] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all text-center group hover:transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6">
                  <procedure.Icon size={40} className={`${procedure.iconClass} text-[rgb(0,87,101)]`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{procedure.title}</h3>
                <p className="text-white leading-relaxed">{procedure.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
