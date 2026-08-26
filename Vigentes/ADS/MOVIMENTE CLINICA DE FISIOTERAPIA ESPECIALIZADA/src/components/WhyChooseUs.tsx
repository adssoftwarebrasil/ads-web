import { UserCheck, Microscope, Shield, Sparkles, Clock, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from './Reveal';

interface Reason {
  icon: LucideIcon;
  color: 'accent' | 'primary';
  title: string;
  desc: string;
  delay: string;
}

const values = ['Eficiência', 'Ética', 'Responsabilidade', 'Resolutividade', 'Equidade'];

const reasons: Reason[] = [
  {
    icon: UserCheck,
    color: 'accent',
    title: 'Atendimento 100% Personalizado',
    desc: 'Cada paciente é único. Seu tratamento é elaborado exclusivamente para o seu caso, respeitando seu histórico, limitações e objetivos.',
    delay: '200ms',
  },
  {
    icon: Microscope,
    color: 'primary',
    title: 'Conhecimento Técnico Atualizado',
    desc: 'Nossa equipe se mantém em constante atualização com as melhores práticas e evidências científicas em fisioterapia.',
    delay: '280ms',
  },
  {
    icon: Shield,
    color: 'accent',
    title: 'Mais de 20 Anos de Experiência',
    desc: 'Uma trajetória sólida, construída com centenas de pacientes recuperados e uma reputação de excelência em Sorriso-MT.',
    delay: '360ms',
  },
  {
    icon: Sparkles,
    color: 'primary',
    title: 'Humanização no Cuidado',
    desc: 'Entendemos que você chega até nós em um momento de fragilidade. Por isso, acolhemos não só o corpo, mas também a mente.',
    delay: '440ms',
  },
  {
    icon: Clock,
    color: 'accent',
    title: 'Horários Flexíveis',
    desc: 'Atendemos de segunda a sexta, das 07h às 18h, com pausa para almoço. Escolha o horário que melhor se adapta à sua rotina.',
    delay: '520ms',
  },
  {
    icon: MapPin,
    color: 'primary',
    title: 'Localização Central',
    desc: 'Nossa clínica está localizada na Av. Curitiba, 2605 – Centro Sul, Sorriso-MT, de fácil acesso para toda a cidade.',
    delay: '600ms',
  },
];

function iconStyle(color: 'accent' | 'primary') {
  return color === 'accent'
    ? { background: 'rgba(219, 67, 43, 0.082)', color: 'rgb(219, 67, 43)' }
    : { background: 'rgba(62, 48, 123, 0.082)', color: 'rgb(62, 48, 123)' };
}

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal from="left">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-brand-primary/10 text-brand-primary">
              Por que nos escolher
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark mb-6 leading-tight">
              O Cuidado que Você{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, rgb(62, 48, 123), rgb(219, 67, 43)) text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Merece
              </span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Na Movimente, você encontra uma equipe que enxerga o indivíduo como um todo. Nossa diferença está na
              combinação de técnica avançada com um toque genuinamente humano.
            </p>
            <div
              className="rounded-2xl p-6 mb-8"
              style={{ background: 'linear-gradient(135deg, rgb(253, 240, 241), rgb(245, 240, 255))' }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, rgb(62, 48, 123), rgb(219, 67, 43))' }}
                >
                  <img
                    src="/img/logo-sem-fundo.webp"
                    alt=""
                    className="w-10 h-10 object-contain brightness-0 invert"
                    width={518}
                    height={427}
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="font-bold text-brand-dark mb-1">Nossa Missão</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Oferecer o melhor conhecimento técnico-científico de maneira humanizada e personalizada, promovendo
                    saúde, autonomia e qualidade de vida para cada paciente.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {values.map((value) => (
                <span
                  key={value}
                  className="px-4 py-2 rounded-full text-sm font-semibold border-2 border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-200 cursor-default"
                >
                  {value}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal className="grid sm:grid-cols-2 gap-4" from="right" delay="200ms">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <Reveal key={reason.title} delay={reason.delay}>
                  <div className="h-full p-5 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-transparent transition-all duration-300 group">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                    style={iconStyle(reason.color)}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                    {reason.title}
                  </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{reason.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
