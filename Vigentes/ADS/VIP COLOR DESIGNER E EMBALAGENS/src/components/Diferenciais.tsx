import {
  Zap,
  Shield,
  Lightbulb,
  Users,
  Truck,
  Award,
  type LucideIcon,
} from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/556294205040';

interface Diferencial {
  icon: LucideIcon;
  title: string;
  description: string;
}

const diferenciais: Diferencial[] = [
  {
    icon: Zap,
    title: 'Agilidade na Entrega',
    description:
      'Processos otimizados para garantir que suas embalagens cheguem no prazo certo, sem comprometer a qualidade.',
  },
  {
    icon: Shield,
    title: 'Qualidade Garantida',
    description:
      'Materiais premium e acabamento impecável em cada produto. Sua marca merece o melhor.',
  },
  {
    icon: Lightbulb,
    title: 'Design Inovador',
    description:
      'Equipe criativa sempre atualizada com as últimas tendências em embalagens e identidade visual.',
  },
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    description:
      'Acompanhamento próximo em cada etapa do projeto, do briefing à entrega final.',
  },
  {
    icon: Truck,
    title: 'Entrega em Todo Brasil',
    description:
      'Atendemos clientes em todo território nacional e até no exterior, com logística confiável.',
  },
  {
    icon: Award,
    title: '15 Anos de Expertise',
    description:
      'Experiência consolidada no mercado gráfico, com milhares de clientes satisfeitos.',
  },
];

export default function Diferenciais() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[rgb(3,101,84)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(229,198,99)] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(229,198,99)] rounded-full filter blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-[rgb(229,198,99)] font-semibold text-sm uppercase tracking-wider">
              Diferenciais
            </span>
            <div className="h-1 w-20 bg-[rgb(229,198,99)] mt-2 mx-auto"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Por Que Escolher a Vip Designer?
          </h2>
          <p className="text-lg text-white/90">
            Somos especialistas em transformar sua visão em realidade, com soluções
            completas e personalizadas para cada negócio.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
              >
                <div className="w-16 h-16 bg-[rgb(229,198,99)]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-[rgb(229,198,99)]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(229,198,99)] text-[rgb(3,101,84)] px-8 py-4 rounded-full hover:bg-white transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Fale com Nossa Equipe
          </a>
        </div>
      </div>
    </section>
  );
}
