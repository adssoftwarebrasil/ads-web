import { Truck, Shield, Clock, Headphones as HeadphonesIcon, Star, MapPin } from 'lucide-react';

const items = [
  {
    icon: <Truck size={28} />,
    title: 'Busca e Entrega Gratuita',
    description: 'Buscamos seu equipamento na sua casa ou empresa sem custo adicional e entregamos após o conserto.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Garantia de 3 Meses',
    description: 'Todos os nossos serviços têm garantia de 3 meses. Fazemos certo, e garantimos isso por escrito.',
  },
  {
    icon: <Clock size={28} />,
    title: 'Rapidez na Entrega',
    description: 'Valorizamos o seu tempo. Trabalhamos com agilidade para que você tenha seu equipamento de volta o mais rápido possível.',
  },
  {
    icon: <HeadphonesIcon size={28} />,
    title: 'Atendimento Superespecializado',
    description: 'Nossa equipe é altamente treinada e atenciosa. Você recebe suporte técnico com educação e profissionalismo.',
  },
  {
    icon: <Star size={28} />,
    title: 'Impressoras de Todas as Marcas',
    description: 'Consertamos impressoras de qualquer marca e modelo. HP, Epson, Canon, Brother e muito mais.',
  },
  {
    icon: <MapPin size={28} />,
    title: 'Localização Estratégica em Marabá',
    description: 'Estamos localizados no coração de Marabá – PA, de fácil acesso para toda a cidade e região.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#F58842] font-semibold text-sm uppercase tracking-widest">
            Por que nos escolher
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Nossos Diferenciais
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            Há 15 anos entregando o melhor da tecnologia com qualidade e comprometimento real.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#3069A3]/50 rounded-2xl p-7 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#3069A3]/20 rounded-xl flex items-center justify-center text-[#F58842] mb-5 group-hover:bg-[#3069A3]/40 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-[#3069A3] rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-xl sm:text-2xl mb-2">
              Precisa de suporte técnico agora?
            </p>
            <p className="text-blue-100 text-sm sm:text-base">
              Entre em contato pelo WhatsApp e receba um atendimento imediato.
            </p>
          </div>
          <a
            href="http://wa.me/559491941919"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#F58842] hover:bg-[#e07432] text-white font-bold px-8 py-3 rounded-xl transition-all duration-200 text-center whitespace-nowrap"
          >
            Falar Agora pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
