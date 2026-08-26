import { Clock, Car, Coffee, ChefHat, Wifi, ShieldCheck, Building2, Briefcase } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Apartamentos Completos',
    desc: 'Sala de estar e cozinha equipada em cada unidade. Espaço para você se sentir em casa, mesmo longe dela.',
  },
  {
    icon: Clock,
    title: 'Recepção 24 Horas',
    desc: 'Nossa equipe está disponível a qualquer hora do dia ou da noite para atender às suas necessidades.',
  },
  {
    icon: Car,
    title: 'Estacionamento Próprio',
    desc: 'Estacionamento privativo no hotel para a segurança do seu veículo durante toda a sua estadia.',
  },
  {
    icon: Coffee,
    title: 'Café da Manhã',
    desc: 'Comece o dia com energia. Café da manhã variado para uma manhã produtiva e saborosa.',
  },
  {
    icon: ChefHat,
    title: 'Cozinha Equipada',
    desc: 'Ideal para longas estadias. Prepare suas refeições com toda comodidade e praticidade.',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi de Alta Velocidade',
    desc: 'Internet de qualidade em todo o hotel para você trabalhar ou se entreter com total conectividade.',
  },
  {
    icon: Briefcase,
    title: 'Ideal para Negócios',
    desc: 'Localização central em Linhares, perfeito para executivos e representantes em viagem de trabalho.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança e Tranquilidade',
    desc: 'Ambiente seguro e monitorado para que sua estadia seja tranquila do início ao fim.',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#fef5e6] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#b82626] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            Por que escolher o Treviso
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#212042] leading-tight">
            Estrutura completa para<br className="hidden sm:block" /> uma estadia perfeita
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-[#b82626] rounded-full" />
          </div>
          <p className="mt-5 text-[#a08f95] max-w-xl mx-auto text-base leading-relaxed">
            O Treviso Apart Hotel oferece muito mais do que um quarto. Aqui você encontra
            o conforto de um lar aliado à conveniência de um hotel moderno.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={i}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl border border-[#a08f95]/10 hover:border-[#b82626]/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[#212042] group-hover:bg-[#b82626] rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon size={22} className="text-[#fef5e6]" />
                </div>
                <h3 className="text-[#212042] font-bold text-base mb-2">{feat.title}</h3>
                <p className="text-[#a08f95] text-sm leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
