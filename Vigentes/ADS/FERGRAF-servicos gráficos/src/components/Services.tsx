import { Printer, Zap, Monitor, Shirt, Stamp, Gift, Copy, BookOpen, Maximize, Store } from 'lucide-react';

const SERVICES = [
  {
    icon: Printer,
    title: 'Impressão Gráfica',
    desc: 'Cartões de visita, folders, panfletos, banners e materiais gráficos com acabamento profissional.',
    color: 'rgb(53,80,155)',
    bg: 'rgba(53,80,155,0.08)',
  },
  {
    icon: Zap,
    title: 'Gráfica Rápida',
    desc: 'Produção ágil para quem não pode esperar. Qualidade sem abrir mão da velocidade de entrega.',
    color: 'rgb(236,71,137)',
    bg: 'rgba(236,71,137,0.08)',
  },
  {
    icon: Monitor,
    title: 'Impressão Digital',
    desc: 'Tecnologia digital de ponta para impressões vibrantes, nítidas e com cores exatas.',
    color: 'rgb(0,180,215)',
    bg: 'rgba(0,180,215,0.08)',
  },
  {
    icon: Shirt,
    title: 'Fardamentos',
    desc: 'Camisetas, bonés e uniformes personalizados para sua equipe com identidade visual marcante.',
    color: 'rgb(122,200,160)',
    bg: 'rgba(122,200,160,0.12)',
  },
  {
    icon: Stamp,
    title: 'Carimbos',
    desc: 'Carimbos automáticos e de madeira com texto ou imagem, perfeitos para uso empresarial.',
    color: 'rgb(243,144,124)',
    bg: 'rgba(243,144,124,0.1)',
  },
  {
    icon: Gift,
    title: 'Brindes Personalizados',
    desc: 'Canecas, canetas, bottons, garrafas e muito mais com a identidade da sua marca.',
    color: 'rgb(255,180,0)',
    bg: 'rgba(255,220,0,0.12)',
  },
  {
    icon: Copy,
    title: 'Cópias',
    desc: 'Cópias rápidas e de qualidade para documentos, projetos e materiais de escritório.',
    color: 'rgb(53,80,155)',
    bg: 'rgba(53,80,155,0.08)',
  },
  {
    icon: BookOpen,
    title: 'Encadernação',
    desc: 'Encadernação espiral, hot-glue e capa dura para relatórios, TCC, monografias e livros.',
    color: 'rgb(236,71,137)',
    bg: 'rgba(236,71,137,0.08)',
  },
  {
    icon: Maximize,
    title: 'Plotagem',
    desc: 'Impressão em grandes formatos para plantas, mapas, projetos técnicos e banners.',
    color: 'rgb(0,180,215)',
    bg: 'rgba(0,180,215,0.08)',
  },
  {
    icon: Store,
    title: 'Fachadas',
    desc: 'Comunicação visual completa para fachadas, letreiros e identidade do ponto de venda.',
    color: 'rgb(122,200,160)',
    bg: 'rgba(122,200,160,0.12)',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-[rgb(252,254,255)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-[rgb(0,180,215)]/10 text-[rgb(0,180,215)] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[rgb(53,80,155)] mb-4">
            Soluções Completas em{' '}
            <span className="text-[rgb(0,180,215)]">Gráfica e Comunicação</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Do cartão de visita à fachada da sua loja, a Fergraf entrega tudo com qualidade,
            agilidade e atenção aos detalhes que sua marca merece.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <a
                key={i}
                href="http://wa.me/557988448494"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: service.bg }}
                >
                  <Icon size={22} style={{ color: service.color }} />
                </div>
                <h3 className="font-bold text-[rgb(53,80,155)] text-base mb-2 leading-tight">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: service.color }}
                />
              </a>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="http://wa.me/557988448494"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[rgb(53,80,155)] text-white font-bold px-8 py-4 rounded-full text-base hover:bg-[rgb(0,180,215)] transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-800/20"
          >
            Pedir Orçamento Agora
          </a>
        </div>
      </div>
    </section>
  );
}
