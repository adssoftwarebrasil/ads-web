import { ShieldCheck, Leaf, Truck, Star, Heart, Package } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';

const items = [
  {
    Icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check text-[#FF6601]',
    title: 'Produto Seguro e Inspecionado',
    description:
      'Todos os nossos produtos seguem rigorosos padrões sanitários para garantir segurança e qualidade em cada pedaço.',
    delay: 0,
  },
  {
    Icon: Leaf,
    iconClass: 'lucide lucide-leaf text-[#FF6601]',
    title: 'Ingredientes Selecionados',
    description:
      'Utilizamos carnes frescas e ingredientes naturais, sem aditivos desnecessários, mantendo o sabor colonial original.',
    delay: 100,
  },
  {
    Icon: Truck,
    iconClass: 'lucide lucide-truck text-[#FF6601]',
    title: 'Entrega na Região',
    description:
      'Atendemos Sorriso, Sinop, Vera, Nova Mutum, Tapurah, Ipiranga do Norte e Lucas do Rio Verde.',
    delay: 200,
  },
  {
    Icon: Star,
    iconClass: 'lucide lucide-star text-[#FF6601]',
    title: 'Referência em Sabor',
    description:
      'Reconhecidos pela qualidade superior, nossos produtos conquistaram a preferência de mercados em toda a região.',
    delay: 300,
  },
  {
    Icon: Heart,
    iconClass: 'lucide lucide-heart text-[#FF6601]',
    title: 'Feito com Capricho',
    description:
      'Cada embutido é elaborado com o cuidado artesanal que transforma matéria-prima em um produto de alto nível.',
    delay: 400,
  },
  {
    Icon: Package,
    iconClass: 'lucide lucide-package text-[#FF6601]',
    title: 'Portfólio Completo',
    description:
      'Salame, copa, linguiça toscana, torresmo, banha e cortes suínos — tudo o que sua loja precisa em um só fornecedor.',
    delay: 500,
  },
];

export default function Differentials() {
  return (
    <section className="py-20 md:py-28 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6601]/40 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#FF6601] text-xs font-bold uppercase tracking-widest">
            Por que nos escolher
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-white/55 text-base max-w-xl mx-auto">
            Mais do que embutidos, entregamos tradição, confiança e o sabor que faz o consumidor
            final voltar sempre.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ Icon, iconClass, title, description, delay }) => (
            <div
              key={title}
              className="group relative bg-[#1A1A1A] border border-white/5 hover:border-[#FF6601]/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF6601]/10"
              style={{ animationDelay: `${delay}ms` }}
            >
              <div className="w-12 h-12 bg-[#FF6601]/10 group-hover:bg-[#FF6601]/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                <Icon size={22} className={iconClass} />
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#FF6601] transition-colors">
                {title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#AF4502] via-[#FF6601] to-[#AF4502] p-px">
          <div className="bg-[#0D0D0D] rounded-2xl p-8 md:p-12 text-center">
            <p className="text-white/70 text-sm uppercase tracking-widest mb-3 font-medium">
              Atendemos mercados e conveniências em toda a região
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-6">
              Quer ser um revendedor <span className="text-[#FF6601]">Serrano?</span>
            </h3>
            <p className="text-white/55 max-w-xl mx-auto mb-8 text-base leading-relaxed">
              Entre em contato e saiba como ter em seu estabelecimento os melhores embutidos e
              defumados coloniais do Mato Grosso.
            </p>
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center gap-2 bg-[#FF6601] hover:bg-[#AF4502] text-white font-bold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/40 hover:scale-105 uppercase tracking-wide"
            >
              Quero ser Revendedor
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6601]/40 to-transparent"></div>
    </section>
  );
}
