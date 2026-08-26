import { TrendingUp, Gift, Briefcase, Users, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useReveal } from '../useReveal';

const CONSULTORA_WA =
  'http://wa.me/556696205384?text=Ol%C3%A1%21+Tenho+interesse+em+ser+uma+Consultora+Duquesa+Joias.+Pode+me+dar+mais+informa%C3%A7%C3%B5es%3F';

interface Benefit {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
  delay: number;
}

const benefits: Benefit[] = [
  {
    Icon: TrendingUp,
    iconClass: 'lucide lucide-trending-up text-rose',
    title: 'Renda Real e Crescente',
    text: 'Trabalhe no seu ritmo e construa uma fonte de renda consistente vendendo produtos que se vendem sozinhos.',
    delay: 0,
  },
  {
    Icon: Gift,
    iconClass: 'lucide lucide-gift text-rose',
    title: 'Programa de Recompensas',
    text: 'Ganhe prêmios exclusivos por performance e fidelidade. Quanto mais você vende, mais você conquista.',
    delay: 100,
  },
  {
    Icon: Briefcase,
    iconClass: 'lucide lucide-briefcase text-rose',
    title: 'Suporte Completo',
    text: 'Você nunca vai estar sozinha. Oferecemos treinamento, materiais e suporte total desde o seu primeiro pedido.',
    delay: 200,
  },
  {
    Icon: Users,
    iconClass: 'lucide lucide-users text-rose',
    title: 'Rede de Consultoras',
    text: 'Faça parte de uma comunidade ativa de mulheres empreendedoras que se apoiam mutuamente em todo o MT.',
    delay: 300,
  },
];

const steps = [
  {
    n: '01',
    title: 'Entre em contato',
    text: 'Fale conosco pelo WhatsApp e tire todas as suas dúvidas sem compromisso.',
    line: true,
  },
  {
    n: '02',
    title: 'Faça seu cadastro',
    text: 'Processo simples e rápido. Em poucos minutos você já está ativa.',
    line: true,
  },
  {
    n: '03',
    title: 'Receba seu kit',
    text: 'Receba suas primeiras peças e comece a apresentar para suas clientes.',
    line: true,
  },
  {
    n: '04',
    title: 'Comece a faturar',
    text: 'Venda, cresça e conquiste os prêmios do nosso programa de recompensas.',
    line: false,
  },
];

export default function Consultora() {
  const header = useReveal();
  const grid = useReveal();
  const stepsBox = useReveal();
  const cta = useReveal();

  return (
    <section
      id="consultora"
      className="section-padding overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgb(26, 26, 26) 0%, rgb(0, 0, 0) 100%)' }}
    >
      <div className="container-max">
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            header.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block text-rose font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Oportunidade de Negócio
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Seja uma{' '}
            <span className="italic" style={{ color: 'rgb(240, 113, 171)' }}>
              Consultora Duquesa
            </span>
          </h2>
          <p className="text-white/60 text-base max-w-2xl mx-auto leading-relaxed">
            Junte-se a centenas de mulheres que transformaram sua paixão por joias em uma carreira de
            sucesso. Assim como Natura, Avon e O Boticário — mas com o glamour e a exclusividade das
            semijoias.
          </p>
        </div>
        <div ref={grid.ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {benefits.map(({ Icon, iconClass, title, text, delay }) => (
            <div
              key={title}
              className={`group bg-white/5 hover:bg-white/8 border border-white/10 hover:border-rose/30 rounded-2xl p-6 transition-all duration-700 ${
                grid.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-rose/15 flex items-center justify-center mb-4 group-hover:bg-rose/25 transition-colors">
                <Icon width={22} height={22} className={iconClass} />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div
          ref={stepsBox.ref}
          className={`bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-12 transition-all duration-700 delay-400 ${
            stepsBox.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Como começar em <span className="italic text-gold-gradient">4 passos simples</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                {s.line && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-gold/40 to-transparent z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center mb-4">
                    <span className="font-serif text-gold font-bold text-lg">{s.n}</span>
                  </div>
                  <h4 className="text-white font-semibold text-base mb-2">{s.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          ref={cta.ref}
          className={`text-center transition-all duration-700 delay-500 ${
            cta.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-white/50 text-sm mb-6">
            Atendemos toda a região de Mato Grosso e também Novo Progresso-PA e Castelo dos Sonhos-PA
          </p>
          <a
            href={CONSULTORA_WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rose text-base"
          >
            Quero Ser Consultora Agora
            <ArrowRight width={18} height={18} className="lucide lucide-arrow-right " />
          </a>
        </div>
      </div>
    </section>
  );
}
