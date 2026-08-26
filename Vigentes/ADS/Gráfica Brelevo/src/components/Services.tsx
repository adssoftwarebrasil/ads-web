import { Sparkles, Heart, Check, ArrowRight, Stamp, FileText } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

type Service = {
  Icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  variant: 'blue' | 'dark';
};

const services: Service[] = [
  {
    Icon: Heart,
    title: 'Convites de Casamento',
    description:
      'Convites exclusivos para o dia mais especial da sua vida. Personalizados com acabamento de luxo e papéis especiais.',
    features: ['Diversos modelos', 'Personalização completa', 'Acabamento premium'],
    variant: 'blue',
  },
  {
    Icon: Sparkles,
    title: 'Eventos Sociais',
    description:
      'Convites elegantes para aniversários, formaturas, bodas e todos os seus eventos importantes.',
    features: ['Design exclusivo', 'Variedade de estilos', 'Alta qualidade'],
    variant: 'dark',
  },
  {
    Icon: Stamp,
    title: 'Hot-Stamping',
    description:
      'Técnica de impressão que aplica folhas metálicas no papel, proporcionando um efeito sofisticado e luxuoso.',
    features: ['Efeito metálico', 'Acabamento diferenciado', 'Diversos tons'],
    variant: 'blue',
  },
  {
    Icon: FileText,
    title: 'Papéis Especiais',
    description:
      'Ampla seleção de papéis premium e especiais para criar convites únicos e memoráveis.',
    features: ['Alta gramatura', 'Texturas exclusivas', 'Cores variadas'],
    variant: 'dark',
  },
];

const stats = [
  { value: '25+', title: 'Anos de Experiência', text: 'Tradição e qualidade desde 1999', Icon: null },
  { value: null, title: 'Personalização Total', text: 'Cada convite é único e exclusivo', Icon: Sparkles },
  { value: null, title: 'Atendimento Dedicado', text: 'Acompanhamento em cada etapa', Icon: Heart },
];

const trust = ['Entrega Garantida', 'Qualidade Premium', 'Atendimento Exclusivo'];

export default function Services() {
  return (
    <section id="servicos" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="service-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1.5" fill="rgb(17,50,255)"></circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#service-grid)"></rect>
        </svg>
      </div>
      <div className="absolute top-20 right-10 w-32 h-32 border-2 border-blue-100 rounded-full opacity-40"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 border-2 border-slate-100 rotate-45 opacity-30"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full shadow-lg mb-6">
            <Sparkles size={16} className="text-yellow-400" />
            <span className="font-semibold text-sm tracking-wider uppercase">Excelência em Cada Detalhe</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Produtos &amp; <span className="text-[rgb(17,50,255)] italic font-serif">Serviços</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-0.5 bg-slate-300"></div>
            <div className="w-2 h-2 bg-[rgb(17,50,255)] rounded-full"></div>
            <div className="w-16 h-0.5 bg-slate-300"></div>
          </div>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em convites e impressões especiais com
            <span className="font-semibold text-slate-900"> acabamento de alto padrão</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20">
          {services.map(({ Icon, title, description, features, variant }) => {
            const iconBg = variant === 'blue' ? 'bg-[rgb(17,50,255)]' : 'bg-slate-900';
            const checkBg = variant === 'blue' ? 'bg-blue-50' : 'bg-slate-100';
            const checkColor = variant === 'blue' ? 'text-[rgb(17,50,255)]' : 'text-slate-900';
            const barBg = variant === 'blue' ? 'bg-[rgb(17,50,255)]' : 'bg-slate-900';
            return (
              <div key={title} className="group relative bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="p-8 lg:p-10">
                  <div className="relative inline-block mb-6">
                    <div className={`w-20 h-20 ${iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <Icon size={36} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-slate-200"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-slate-200"></div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-[rgb(17,50,255)] transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-base lg:text-lg">{description}</p>
                  <div className="space-y-3 mb-6">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-slate-700">
                        <div className={`flex-shrink-0 w-5 h-5 ${checkBg} rounded-full flex items-center justify-center`}>
                          <Check size={12} className={checkColor} />
                        </div>
                        <span className="text-sm lg:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/5561986054473"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[rgb(17,50,255)] font-semibold group-hover:gap-4 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-sm uppercase tracking-wider">Saiba Mais</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${barBg} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map(({ value, title, text, Icon }) => (
            <div key={title} className="text-center p-6">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                {value ? (
                  <span className="text-2xl font-bold text-[rgb(17,50,255)]">{value}</span>
                ) : (
                  Icon && <Icon size={28} className="text-[rgb(17,50,255)]" />
                )}
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
              <p className="text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
        <div className="relative bg-slate-900 p-10 lg:p-16 shadow-2xl">
          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[rgb(17,50,255)] opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[rgb(17,50,255)] opacity-50"></div>
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgb(17,50,255)] bg-opacity-20 text-white rounded-full mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold uppercase tracking-wider">Pronto para Começar?</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Crie seu Convite <span className="italic font-serif text-[rgb(17,50,255)]">dos Sonhos</span>
            </h3>
            <p className="text-white text-base lg:text-lg mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Entre em contato conosco e receba um atendimento personalizado com sugestões exclusivas para seu evento especial
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/5561986054473"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 font-semibold text-base lg:text-lg hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Fale Conosco no WhatsApp
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 font-semibold text-base lg:text-lg border-2 border-white hover:bg-white hover:text-slate-900 transition-all duration-300">
                Ver Portfólio
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm uppercase tracking-widest mb-4">Confie na nossa experiência</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400">
            {trust.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check size={16} />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
