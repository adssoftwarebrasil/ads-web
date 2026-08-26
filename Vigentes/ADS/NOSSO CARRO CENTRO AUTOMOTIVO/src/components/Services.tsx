import { Wrench, Paintbrush, Sparkles, Droplets, Car, Shield, type LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  iconCls: string;
  tag: string;
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    icon: Wrench,
    iconCls: 'lucide lucide-wrench text-[#6D94BE]',
    tag: 'Bancada de alinhamento',
    title: 'Funilaria',
    desc: 'Reparos estruturais e de carroceria com precisão milimétrica. Restauramos a geometria original do seu veículo usando equipamentos de última geração.',
  },
  {
    icon: Paintbrush,
    iconCls: 'lucide lucide-paintbrush text-[#6D94BE]',
    tag: 'Cabine USI ITALIA',
    title: 'Pintura Automotiva',
    desc: 'Cabine de pintura profissional USI ITALIA com laboratório próprio de tinta. Ajuste de cor em tempo real, sem retrabalhos, com acabamento de fábrica.',
  },
  {
    icon: Sparkles,
    iconCls: 'lucide lucide-sparkles text-[#6D94BE]',
    tag: 'Brilho espelhado',
    title: 'Polimento Cristalizado',
    desc: 'Processo que remove imperfeições e microarranhões, deixando a pintura espelhada. Resultado duradouro com proteção e brilho incomparáveis.',
  },
  {
    icon: Droplets,
    iconCls: 'lucide lucide-droplets text-[#6D94BE]',
    tag: 'Proteção nanotec',
    title: 'Vitrificação',
    desc: 'Proteção nanotecnológica que cria uma camada de vidro sobre a pintura. Repele sujeira, água e raios UV, preservando seu investimento por anos.',
  },
  {
    icon: Car,
    iconCls: 'lucide lucide-car text-[#6D94BE]',
    tag: 'Padrão showroom',
    title: 'Estética Automotiva',
    desc: 'Higienização completa, descontaminação, polimento e cera. Devolvemos ao seu carro o estado de showroom com atenção aos mínimos detalhes.',
  },
  {
    icon: Shield,
    iconCls: 'lucide lucide-shield text-[#6D94BE]',
    tag: 'Oficina referenciada',
    title: 'Seguradoras',
    desc: 'Oficina referenciada pelas principais seguradoras do mercado. Atendemos seu seguro com agilidade, transparência e qualidade garantida.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#04152D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#174C7E]/30 border border-[#6D94BE]/20 text-[#6D94BE] text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Serviços que Transformam
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
            Do reparo de colisão ao polimento estético, cada serviço é executado com os mais altos
            padrões técnicos e equipamentos profissionais.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative bg-gradient-to-br from-[#031B3A] to-[#04152D] border border-white/5 rounded-2xl p-6 hover:border-[#174C7E]/50 hover:shadow-xl hover:shadow-[#174C7E]/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#174C7E]/20 group-hover:bg-[#174C7E]/40 transition-colors duration-300">
                    <Icon size={22} className={s.iconCls} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#6D94BE]/70 block mb-0.5">
                      {s.tag}
                    </span>
                    <h3 className="text-lg font-bold text-white">{s.title}</h3>
                  </div>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#174C7E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a
            href="http://wa.me/557991950295"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#174C7E] hover:bg-[#6D94BE] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-0.5"
          >
            Solicitar Orçamento Agora
          </a>
        </div>
      </div>
    </section>
  );
}
