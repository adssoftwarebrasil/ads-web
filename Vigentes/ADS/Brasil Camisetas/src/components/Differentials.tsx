import { Factory, Cpu, Palette, Award, Truck, Users, LucideIcon } from 'lucide-react';

interface Diff {
  Icon: LucideIcon;
  title: string;
  desc: string;
  delay: number;
}

const items: Diff[] = [
  { Icon: Factory, title: 'Produção do Início ao Fim', desc: 'Controlamos cada etapa para garantir excelência', delay: 0 },
  { Icon: Cpu, title: 'Tecnologia de Ponta', desc: 'Equipamentos modernos para melhor acabamento', delay: 100 },
  { Icon: Palette, title: 'Personalização Sob Medida', desc: 'Criamos exatamente o que você imagina', delay: 200 },
  { Icon: Award, title: 'Matéria-Prima Premium', desc: 'Tecidos selecionados para maior durabilidade', delay: 300 },
  { Icon: Truck, title: 'Entrega Rápida Nacional', desc: 'Enviamos para todo o Brasil com agilidade', delay: 400 },
  { Icon: Users, title: 'Quase 30 Anos de Expertise', desc: 'Atendimento humanizado e consultoria especializada', delay: 500 },
];

export default function Differentials() {
  return (
    <section id="differentials" className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4" style={{ color: 'rgb(0, 45, 100)' }}>
            Por Que Escolher a Brasil Camisetas?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Diferenciais que nos colocam à frente no mercado
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map(({ Icon, title, desc, delay }) => (
            <div
              key={title}
              className="animate-on-scroll opacity-0 bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-l-4 transition-all duration-300 hover:shadow-xl group animate-fade-in-up"
              style={{ borderLeftColor: 'rgb(6, 138, 80)', animationDelay: `${delay}ms` }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: 'rgba(6, 138, 80, 0.1)' }}
              >
                <Icon size={32} style={{ color: 'rgb(6, 138, 80)' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'rgb(0, 45, 100)' }}>
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
