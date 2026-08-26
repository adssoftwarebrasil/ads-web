import { Heart, Award, Users, Star, MapPin, CheckCircle2, Clock } from 'lucide-react';

const features = [
  { Icon: Award, title: 'Qualidade Premium', subtitle: 'Fino acabamento' },
  { Icon: Users, title: 'Atendimento', subtitle: 'Personalizado' },
  { Icon: Heart, title: 'Dedicação', subtitle: 'A cada projeto' },
  { Icon: Star, title: 'Inovação', subtitle: 'Sempre atual' },
];

const highlights = [
  { Icon: CheckCircle2, title: 'Especialidade', text: 'Convites para Casamentos e Eventos Sociais de Alto Padrão' },
  { Icon: Clock, title: 'Atendimento Exclusivo', text: 'Presencial com hora marcada para sua comodidade' },
  { Icon: Star, title: 'Diferencial', text: 'Sugestões inovadoras e papéis especiais exclusivos' },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgb(17,50,255)" strokeWidth="0.5"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-pattern)"></rect>
        </svg>
      </div>
      <div className="absolute top-20 right-10 w-40 h-40 border-4 border-blue-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-40 left-10 w-32 h-32 border-4 border-slate-200 rotate-45 opacity-20"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full shadow-lg mb-6">
              <Heart size={16} className="text-red-400" />
              <span className="font-semibold text-sm tracking-wider uppercase">Nossa História</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Excelência em Convites
              <span className="block text-[rgb(17,50,255)] italic font-serif mt-2">desde 1999</span>
            </h2>
            <div className="w-20 h-1 bg-[rgb(17,50,255)] mb-6"></div>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              A <strong className="text-slate-900">Gráfica Brelevo</strong> surgiu em 1999, com mais de{' '}
              <strong className="text-[rgb(17,50,255)]">25 anos de experiência</strong> na produção de convites para casamento e eventos sociais com fino acabamento artesanal.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Oferecemos atendimento presencial com hora marcada e muitas sugestões inovadoras para tornar seu evento ainda mais especial e memorável.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map(({ Icon, title, subtitle }) => (
                <div key={title} className="group hover:bg-white p-4 transition-colors duration-300 shadow-sm hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 group-hover:bg-[rgb(17,50,255)] flex items-center justify-center transition-colors duration-300">
                      <Icon size={24} className="text-[rgb(17,50,255)] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-base mb-1">{title}</div>
                      <div className="text-slate-600 text-sm">{subtitle}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-slate-200 rounded-full">
              <MapPin size={16} className="text-[rgb(17,50,255)]" />
              <span className="text-sm font-semibold text-slate-700">Brasília-DF e Entorno</span>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white shadow-2xl overflow-hidden">
              <div className="bg-slate-900 p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[rgb(17,50,255)] opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[rgb(17,50,255)] opacity-50"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[rgb(17,50,255)] rounded-full mb-4">
                    <Award size={36} className="text-white" />
                  </div>
                  <div className="text-7xl font-bold text-white mb-2">
                    25<span className="text-[rgb(17,50,255)]">+</span>
                  </div>
                  <div className="text-xl text-white font-semibold">Anos de Tradição</div>
                  <div className="text-slate-300 text-sm mt-2">Desde 1999 em Brasília</div>
                </div>
              </div>
              <div className="p-8 space-y-6">
                {highlights.map(({ Icon, title, text }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 p-4 bg-slate-50 hover:bg-blue-50 transition-colors duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-white border-2 border-slate-200 group-hover:border-[rgb(17,50,255)] rounded-full flex items-center justify-center transition-colors">
                      <Icon size={20} className="text-[rgb(17,50,255)]" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 mb-1">{title}</div>
                      <div className="text-slate-600 text-sm">{text}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[rgb(17,50,255)] p-6 text-center">
                <div className="text-white font-bold text-lg mb-1">Fino Acabamento Artesanal</div>
                <div className="text-blue-100 text-sm">Atenção aos mínimos detalhes em cada convite</div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[rgb(17,50,255)] opacity-20 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-slate-900 opacity-10 rounded-full"></div>
            <div className="absolute top-1/2 -right-6 w-6 h-6 border-2 border-blue-200 rotate-45"></div>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-1 bg-slate-200 p-1">
          <div className="bg-white p-8 text-center hover:bg-slate-50 transition-colors group">
            <div className="text-4xl font-bold text-[rgb(17,50,255)] mb-2 group-hover:scale-110 transition-transform">25+</div>
            <div className="text-slate-600 text-sm uppercase tracking-wider">Anos de Mercado</div>
          </div>
          <div className="bg-white p-8 text-center hover:bg-slate-50 transition-colors group">
            <div className="text-4xl font-bold text-[rgb(17,50,255)] mb-2 group-hover:scale-110 transition-transform">100%</div>
            <div className="text-slate-600 text-sm uppercase tracking-wider">Personalizado</div>
          </div>
          <div className="bg-white p-8 text-center hover:bg-slate-50 transition-colors group">
            <div className="text-4xl font-bold text-[rgb(17,50,255)] mb-2 group-hover:scale-110 transition-transform">
              <Heart size={36} className="inline-block" />
            </div>
            <div className="text-slate-600 text-sm uppercase tracking-wider">Feito com Amor</div>
          </div>
          <div className="bg-white p-8 text-center hover:bg-slate-50 transition-colors group">
            <div className="text-4xl font-bold text-[rgb(17,50,255)] mb-2 group-hover:scale-110 transition-transform">
              <Award size={36} className="inline-block" />
            </div>
            <div className="text-slate-600 text-sm uppercase tracking-wider">Qualidade Premium</div>
          </div>
        </div>
      </div>
    </section>
  );
}
