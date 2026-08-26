import { Clock, TrendingUp, Award, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from './Reveal';

interface TimelineCard {
  icon: LucideIcon;
  color: 'accent' | 'primary';
  value: string;
  label: string;
  desc: string;
  delay: string;
}

const timeline: TimelineCard[] = [
  {
    icon: Clock,
    color: 'accent',
    value: '+20 anos',
    label: 'de História',
    desc: 'Tudo começou como um consultório simples, com um propósito grandioso: fazer a diferença.',
    delay: '300ms',
  },
  {
    icon: TrendingUp,
    color: 'primary',
    value: '+10 anos',
    label: 'no Formato Atual',
    desc: 'Expansão da estrutura física e dos recursos profissionais para atender com excelência.',
    delay: '400ms',
  },
  {
    icon: Award,
    color: 'accent',
    value: '5 anos',
    label: 'com o nome Movimente',
    desc: 'Consolidação da sociedade e da missão de oferecer reabilitação humanizada e personalizada.',
    delay: '500ms',
  },
  {
    icon: Heart,
    color: 'primary',
    value: 'Hoje',
    label: 'Referência em Sorriso',
    desc: 'Uma clínica completa, com equipe qualificada e o coração voltado para cada paciente.',
    delay: '600ms',
  },
];

function iconBoxStyle(color: 'accent' | 'primary') {
  return color === 'accent'
    ? { background: 'rgba(219, 67, 43, 0.145)', color: 'rgb(219, 67, 43)' }
    : { background: 'rgba(62, 48, 123, 0.145)', color: 'rgb(62, 48, 123)' };
}

export default function About() {
  return (
    <section id="sobre" className="py-24" style={{ background: 'rgb(13, 5, 32)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <Reveal from="left">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-brand-accent/20 text-brand-accent">
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Mais de 20 Anos{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, rgb(245, 197, 202), rgb(219, 67, 43)) text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Cuidando
              </span>{' '}
              de Quem Amamos
            </h2>
            <div className="space-y-5 text-gray-300 leading-relaxed text-base">
              <p>
                A nossa clínica tem uma trajetória marcada por{' '}
                <strong className="text-white">dedicação, evolução e compromisso</strong> com o bem-estar dos nossos
                pacientes. Tudo começou como um consultório simples em Sorriso, com um propósito grandioso: fazer a
                diferença na vida de cada pessoa que nos procurasse.
              </p>
              <p>
                Com o passar dos anos, a confiança dos nossos pacientes e a crescente demanda pelos nossos serviços
                impulsionaram a criação de um ambiente mais completo — tanto em estrutura física quanto em recursos
                profissionais.
              </p>
              <p>
                Há mais de 10 anos neste formato, e com a fundação do nome{' '}
                <strong className="text-brand-pink">Movimente</strong> há 5 anos, consolidamos nossa missão: oferecer o
                melhor conhecimento técnico-científico de maneira{' '}
                <strong className="text-white">humanizada e personalizada</strong> para cada paciente.
              </p>
            </div>
            <div
              className="mt-8 p-6 rounded-2xl border-l-4"
              style={{ background: 'rgba(254, 48, 17, 0.08)', borderColor: 'rgb(219, 67, 43)' }}
            >
              <p className="text-white/90 italic text-base leading-relaxed font-medium">
                "Somos movidos pelo desejo de ajudar cada paciente a alcançar uma vida mais saudável e plena, combinando
                ciência, tecnologia e empatia."
              </p>
            </div>
            <a
              href="https://wa.me/556699102233?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20melhor%20a%20Movimente%20Fisioterapia%20e%20agendar%20uma%20avalia%C3%A7%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full font-bold text-white transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
              style={{ background: 'linear-gradient(135deg, rgb(219, 67, 43), rgb(181, 51, 28))' }}
            >
              Agendar Avaliação Gratuita
            </a>
          </Reveal>
          <Reveal from="right" delay="200ms">
            <div className="relative">
              <img
                src="/img/equipe.webp"
                alt="Equipe da Movimente Fisioterapia Especializada de jaleco branco em frente à clínica"
                className="w-full rounded-3xl object-cover"
                style={{ height: '360px' }}
                width={1024}
                height={683}
                loading="lazy"
              />
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl -z-10"
                style={{ background: 'linear-gradient(135deg, rgb(62, 48, 123), rgb(219, 67, 43))', opacity: 0.4 }}
              ></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-2xl overflow-hidden border-4 border-brand-dark shadow-2xl">
                <img
                  src="/img/atendimento.webp"
                  alt="Profissional da Movimente com camiseta da clínica acompanhando pacientes em exercício"
                  className="w-full h-full object-cover"
                  width={640}
                  height={427}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {timeline.map((card) => {
                const Icon = card.icon;
                return (
                  <Reveal key={card.value + card.label} delay={card.delay}>
                    <div
                      className="h-full rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-colors duration-300"
                      style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                        style={iconBoxStyle(card.color)}
                      >
                        <Icon size={18} />
                      </div>
                      <p className="text-white font-black text-lg leading-none">{card.value}</p>
                      <p className="text-brand-pink text-xs font-semibold mt-0.5 mb-2">{card.label}</p>
                      <p className="text-gray-400 text-xs leading-relaxed">{card.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
