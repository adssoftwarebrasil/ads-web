import { Award, ShieldCheck, MapPin, Zap, HeartHandshake, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Differential {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  delay: number;
}

const differentials: Differential[] = [
  {
    icon: Award,
    iconClass: 'lucide lucide-award',
    title: 'Qualidade Comprovada',
    description:
      'Trabalhamos apenas com produtos de procedência garantida, selecionados para atender os mais altos padrões do mercado.',
    delay: 0,
  },
  {
    icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check',
    title: '25 Anos de Experiência',
    description:
      'Desde 2000 no segmento, com vasto conhecimento sobre os melhores produtos e as necessidades reais dos clientes.',
    delay: 100,
  },
  {
    icon: MapPin,
    iconClass: 'lucide lucide-map-pin',
    title: 'Atendimento Regional',
    description:
      'Cobrimos Cuiabá, Várzea Grande e toda a região do Mato Grosso com agilidade e eficiência na entrega.',
    delay: 200,
  },
  {
    icon: Zap,
    iconClass: 'lucide lucide-zap',
    title: 'Variedade de Produtos',
    description:
      'Do pano de limpeza ao produto automotivo, você encontra tudo em um só lugar, sem precisar procurar em vários fornecedores.',
    delay: 300,
  },
  {
    icon: HeartHandshake,
    iconClass: 'lucide lucide-heart-handshake',
    title: 'Relacionamento de Confiança',
    description:
      'Construímos parcerias duradouras com nossos clientes, entendendo suas necessidades e oferecendo as melhores soluções.',
    delay: 400,
  },
  {
    icon: TrendingUp,
    iconClass: 'lucide lucide-trending-up',
    title: 'Crescimento Contínuo',
    description:
      'Em constante evolução, sempre buscando diversificar o portfólio e trazer novidades para melhor atender nossos clientes.',
    delay: 500,
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 transition-all duration-700 opacity-0 translate-y-8">
          <span className="inline-block bg-[#E93235]/20 text-[#E93235] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            Nossos Diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
            Por que escolher a <span className="text-[#E93235]">Estopas Madri?</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
            Décadas de experiência, produtos de qualidade e atendimento personalizado fazem da Estopas
            Madri a escolha certa para sua empresa.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#E93235]/40 rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 opacity-0 translate-y-12"
                style={{ transitionDelay: `${d.delay}ms`, transitionDuration: '600ms' }}
              >
                <div className="w-12 h-12 bg-[#E93235]/15 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[#E93235] group-hover:scale-110">
                  <Icon
                    width={22}
                    height={22}
                    className={`${d.iconClass} text-[#E93235] group-hover:text-white transition-colors duration-300`}
                  />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{d.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{d.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-8 py-6">
            <div className="text-white/70 text-sm sm:text-base">
              Pronto para trabalhar com a melhor fornecedora da região?
            </div>
            <a
              href="http://wa.me/556599164429?text=Olá! Quero conhecer melhor os produtos da Estopas Madri."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-[#E93235] hover:bg-[#CC1F22] text-white font-bold px-7 py-3 rounded-full text-sm transition-all duration-200 hover:shadow-xl hover:shadow-[#E93235]/30"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
