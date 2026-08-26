import { Zap, Users, Search, PhoneCall, BadgeCheck, Clock } from 'lucide-react';

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Parceiros Premium',
    description: 'Trabalhamos com as melhores e mais confiáveis seguradoras do mercado nacional, garantindo qualidade e solidez.',
  },
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    description: 'Cada cliente recebe atenção individualizada. Entendemos o seu perfil para oferecer a solução certa para você.',
  },
  {
    icon: Search,
    title: 'Transparência Total',
    description: 'Apresentamos todas as opções com clareza, sem letras miúdas. Você decide com informação de qualidade.',
  },
  {
    icon: Zap,
    title: 'Agilidade nos Sinistros',
    description: 'Quando você mais precisa, nossa equipe age com rapidez para resolver e acompanhar cada etapa do seu processo.',
  },
  {
    icon: PhoneCall,
    title: 'Suporte Contínuo',
    description: 'Relacionamento que não termina na venda. Estamos sempre disponíveis para esclarecer dúvidas e renovar proteções.',
  },
  {
    icon: Clock,
    title: '17 Anos de Experiência',
    description: 'Mais de 17 anos protegendo famílias e negócios em Cuiabá e em todo o Brasil com competência comprovada.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-[rgb(252,255,254)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[rgb(61,119,189)] text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-0.5 bg-[rgb(61,119,189)]" />
            Por que a Marguia
            <span className="w-8 h-0.5 bg-[rgb(61,119,189)]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(2,2,2)] mb-4">
            O que nos diferencia no{' '}
            <span className="text-[rgb(61,119,189)]">mercado de seguros</span>
          </h2>
          <p className="text-[rgb(52,82,108)]/80 text-lg max-w-2xl mx-auto">
            Não somos apenas mais uma corretora. Somos parceiros de vida, comprometidos com
            a sua proteção e o seu planejamento financeiro.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="group relative bg-white border border-[rgb(61,119,189)]/10 rounded-2xl p-7 hover:border-[rgb(77,175,215)]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(77,175,215)]/0 to-[rgb(61,119,189)]/0 group-hover:from-[rgb(77,175,215)]/5 group-hover:to-[rgb(61,119,189)]/5 transition-all duration-500" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgb(43,85,126)] flex items-center justify-center shrink-0 group-hover:bg-[rgb(61,119,189)] transition-colors duration-300">
                    <Icon size={22} className="text-white" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[rgb(77,175,215)]/10 flex items-center justify-center shrink-0 ml-auto">
                    <span className="text-[rgb(77,175,215)] text-xs font-bold">0{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-[rgb(2,2,2)] font-bold text-lg mb-2">{title}</h3>
                <p className="text-[rgb(52,82,108)]/70 leading-relaxed text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[rgb(43,85,126)] to-[rgb(61,119,189)] rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Pronto para ter a proteção que você merece?
            </h3>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Fale com um de nossos especialistas e receba uma cotação gratuita e personalizada
              para o seu perfil.
            </p>
            <a
              href="http://wa.me/556599183725"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgb(77,175,215)] hover:bg-white text-white hover:text-[rgb(43,85,126)] font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-2xl hover:-translate-y-1"
            >
              Falar com especialista agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
