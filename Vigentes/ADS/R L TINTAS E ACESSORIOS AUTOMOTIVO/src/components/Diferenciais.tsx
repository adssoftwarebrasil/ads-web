import { Palette, ShieldCheck, Star, Wrench, HeartHandshake, Truck, type LucideIcon } from 'lucide-react';

interface Diferencial {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  desc: string;
  highlight?: boolean;
  badge?: string;
}

const items: Diferencial[] = [
  {
    Icon: Palette,
    iconClass: 'lucide lucide-palette text-white',
    title: 'Colorimetria Especializada',
    desc: 'Produção de tintas automotivas por técnico especializado em colorimetria. A cor fica o mais próxima possível da amostra que você nos traz.',
    highlight: true,
    badge: 'Exclusivo',
  },
  {
    Icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check text-red-500',
    title: 'Qualidade Garantida',
    desc: 'Trabalhamos apenas com marcas e produtos de alta qualidade comprovada. Cada produto passa por nossa curadoria antes de chegar até você.',
  },
  {
    Icon: Star,
    iconClass: 'lucide lucide-star text-red-500',
    title: 'Avaliação 4.9 no Google',
    desc: 'Mais de 8 anos servindo Primavera do Leste com excelência. Nossos clientes falam por nós — avaliação média de 4.9 estrelas.',
  },
  {
    Icon: Wrench,
    iconClass: 'lucide lucide-wrench text-red-500',
    title: 'Linha Completa',
    desc: 'Tudo em um só lugar: tintas, vernizes, primers, massas, ferramentas, pistolas e linha completa de estética automotiva Vonixx.',
  },
  {
    Icon: HeartHandshake,
    iconClass: 'lucide lucide-heart-handshake text-red-500',
    title: 'Atendimento Personalizado',
    desc: 'Nossa equipe está pronta para te orientar na escolha do produto certo para cada aplicação. Atendemos com atenção e dedicação.',
  },
  {
    Icon: Truck,
    iconClass: 'lucide lucide-truck text-red-500',
    title: 'Preços Justos',
    desc: 'Oferecemos produtos de qualidade com preços competitivos. Consulte nossos combos e condições especiais para profissionais.',
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-red-600 text-sm font-bold uppercase tracking-widest">
            Por que nos escolher
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base lg:text-lg">
            Mais do que vender tinta — entregamos a solução completa para o seu projeto, com
            qualidade e suporte técnico especializado.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className={
                item.highlight
                  ? 'relative rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-red-700 to-red-900 border-red-600 shadow-2xl shadow-red-900/40'
                  : 'relative rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 bg-gray-900/60 border-gray-800 hover:border-gray-700'
              }
            >
              {item.badge && (
                <span className="absolute top-4 right-4 bg-white/20 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
              <div
                className={
                  item.highlight
                    ? 'w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-white/20'
                    : 'w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-red-700/10 border border-red-700/30'
                }
              >
                <item.Icon className={item.iconClass} width={22} height={22} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
              <p className={`text-sm leading-relaxed ${item.highlight ? 'text-red-100' : 'text-gray-400'}`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
