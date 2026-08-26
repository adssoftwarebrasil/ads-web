import { Shield, TrendingUp, Key, HeartPulse, Car, Home, Plane, Building2 } from 'lucide-react';

const mainServices = [
  {
    icon: Shield,
    title: 'Seguro de Vida',
    description:
      'Proteção financeira para você e sua família em momentos inesperados. Garanta tranquilidade e segurança para quem você ama.',
    highlight: true,
    cta: 'Principal',
  },
  {
    icon: TrendingUp,
    title: 'Previdência Privada',
    description:
      'Planeje sua aposentadoria e o futuro financeiro dos seus filhos com produtos de previdência completos e rentáveis.',
    highlight: true,
    cta: 'Destaque',
  },
  {
    icon: Key,
    title: 'Consórcio',
    description:
      'Realize seus sonhos — imóvel, veículo ou bem — com planejamento inteligente e sem juros abusivos.',
    highlight: true,
    cta: 'Destaque',
  },
];

const otherServices = [
  { icon: HeartPulse, title: 'Seguro Saúde', desc: 'Planos de saúde e odontológicos completos.' },
  { icon: Car, title: 'Seguro Auto', desc: 'Proteção para seu veículo com ampla cobertura.' },
  { icon: Home, title: 'Seguro Residencial', desc: 'Proteja seu imóvel e tudo que há dentro dele.' },
  { icon: Plane, title: 'Seguro Viagem', desc: 'Viaje com segurança e assistência 24h.' },
  { icon: Building2, title: 'Seguro Empresarial', desc: 'Soluções completas para proteger seu negócio.' },
];

export default function Services() {
  const handleCTA = () => {
    const el = document.querySelector('#contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicos" className="py-24 bg-[rgb(43,85,126)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[rgb(77,175,215)] text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-0.5 bg-[rgb(77,175,215)]" />
            Nossos Serviços
            <span className="w-8 h-0.5 bg-[rgb(77,175,215)]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(252,255,254)] mb-4">
            Soluções completas de proteção{' '}
            <span className="text-[rgb(77,175,215)]">para cada fase da sua vida</span>
          </h2>
          <p className="text-[rgb(252,255,254)]/70 text-lg max-w-2xl mx-auto">
            Trabalhamos com as melhores seguradoras do mercado para oferecer qualidade,
            variedade e o melhor custo-benefício para você.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {mainServices.map(({ icon: Icon, title, description, cta }) => (
            <div
              key={title}
              className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[rgb(77,175,215)]/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <span className="bg-[rgb(77,175,215)]/20 text-[rgb(77,175,215)] text-xs font-semibold px-3 py-1 rounded-full border border-[rgb(77,175,215)]/30">
                  {cta}
                </span>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[rgb(61,119,189)] to-[rgb(77,175,215)] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[rgb(252,255,254)] mb-3">{title}</h3>
              <p className="text-[rgb(252,255,254)]/70 leading-relaxed mb-6">{description}</p>
              <button
                onClick={handleCTA}
                className="text-[rgb(77,175,215)] text-sm font-semibold hover:text-white transition-colors flex items-center gap-1 group/btn"
              >
                Solicitar cotação
                <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-[rgb(252,255,254)] font-semibold text-lg mb-6 text-center">
            Outros seguros disponíveis
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherServices.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white/5 transition-colors duration-200 cursor-pointer group"
                onClick={handleCTA}
              >
                <div className="w-12 h-12 rounded-xl bg-[rgb(77,175,215)]/10 border border-[rgb(77,175,215)]/20 flex items-center justify-center mb-3 group-hover:bg-[rgb(77,175,215)]/20 transition-colors">
                  <Icon size={22} className="text-[rgb(77,175,215)]" />
                </div>
                <div className="text-[rgb(252,255,254)] font-medium text-sm mb-1">{title}</div>
                <div className="text-[rgb(252,255,254)]/50 text-xs">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
