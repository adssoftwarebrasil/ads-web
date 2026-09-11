import { Eye, Target, MessageCircle, TrendingUp, Clock, MapPin } from 'lucide-react';

const DIFFERENTIALS = [
  {
    Icon: Eye,
    title: 'Visão Realista do Caso',
    desc: 'Nada de falsas promessas. Apresentamos um diagnóstico honesto e técnico da sua situação, para que você tome decisões conscientes.',
  },
  {
    Icon: Target,
    title: 'Estratégia Individualizada',
    desc: 'Cada caso é único. Desenvolvemos uma estratégia jurídica personalizada, focada nas particularidades e objetivos de cada cliente.',
  },
  {
    Icon: MessageCircle,
    title: 'Comunicação Transparente',
    desc: 'Mantemos você informado em cada etapa do processo. Sem jargões técnicos — traduzimos o Direito para a sua realidade.',
  },
  {
    Icon: TrendingUp,
    title: 'Foco em Resultados',
    desc: 'Nossa atuação é orientada à entrega de soluções eficientes e alinhadas às expectativas do cliente, com responsabilidade e compromisso.',
  },
  {
    Icon: Clock,
    title: 'Atendimento Ágil',
    desc: 'Respondemos com rapidez e dedicação. Entendemos que questões jurídicas frequentemente demandam atenção imediata.',
  },
  {
    Icon: MapPin,
    title: 'Alcance Regional',
    desc: 'Atendemos clientes em todo o norte e noroeste goiano, com estrutura para suporte virtual e presencial em múltiplos municípios.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#A1825A]/5 via-transparent to-[#A1825A]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll-left">
            <p className="font-sans text-xs tracking-[0.4em] text-[#A1825A] uppercase mb-3">
              Por que nos escolher
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6 leading-tight">
              Nossos{' '}
              <span className="gold-text-gradient">Diferenciais</span>
            </h2>
            <div className="section-divider mb-8" style={{ margin: '0 0 2rem' }} />
            <p className="font-sans text-[#BBB39D] leading-relaxed mb-8">
              Em um mercado saturado de promessas, nos destacamos pela consistência, pelo cuidado
              genuíno com cada cliente e pela busca incessante pela melhor solução jurídica possível.
            </p>

            <div className="relative rounded-sm overflow-hidden">
              <img
                src="https://storage.lucasmendes.dev/site-sp/lima%20advocacia/img/cartoes-visita-lima-advocacia-pedra-escura_3000x2000.webp"
                alt="Cartões de visita Lima Advocacia"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-serif text-sm text-white/90">
                  "Comprometimento com resultados, pautado pela ética e transparência."
                </p>
                <p className="font-sans text-xs text-[#A1825A] mt-1">— Lima Advocacia</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 animate-on-scroll-right">
            {DIFFERENTIALS.map(({ Icon, title, desc }, idx) => (
              <div
                key={title}
                className="group bg-white/[0.02] border border-white/8 hover:border-[#A1825A]/40 rounded-sm p-5 transition-all duration-300 hover:bg-[#A1825A]/5"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="w-9 h-9 rounded-sm bg-[#A1825A]/20 group-hover:bg-[#A1825A]/30 flex items-center justify-center mb-3 transition-colors duration-300">
                  <Icon size={16} className="text-[#A1825A]" />
                </div>
                <h4 className="font-serif text-sm text-white mb-2">{title}</h4>
                <p className="font-sans text-xs text-[#BBB39D] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
