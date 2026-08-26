import { useEffect, useRef } from 'react';
import { CheckCircle, Award, Users, MapPin } from 'lucide-react';

const STATS = [
  { value: '+30', label: 'Anos no Mercado' },
  { value: '100%', label: 'Satisfação Garantida' },
  { value: '24h', label: 'Atendimento' },
  { value: '4.8★', label: 'Avaliação Google' },
];

const DIFERENCIAIS = [
  'Estacionamento dedicado na sede',
  'Equipe capacitada e especializada',
  'Atendimento interno e externo',
  'Peças e materiais de alta qualidade',
  'Parceiros verificados no mercado',
  'Preços justos e transparentes',
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.section-animate');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="bg-brand-black py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="section-animate relative rounded-3xl overflow-hidden">
              <img
                src="https://storage.lucasmendes.dev/site-sp/chaveiro%20glicerio/img/chave-de-carro-preta-na-mao_500x625.webp"
                alt="Chaveiro Glicério - Profissional"
                className="w-full object-cover rounded-3xl"
                style={{ maxHeight: '520px', objectPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent rounded-3xl" />
            </div>
            <div className="section-animate absolute -bottom-6 -right-4 sm:right-0 bg-brand-yellow text-brand-black rounded-2xl px-5 py-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <Award size={28} className="text-brand-black flex-shrink-0" />
                <div>
                  <p className="font-black text-lg leading-none">Desde 1994</p>
                  <p className="text-xs font-medium opacity-70 mt-0.5">Tradição em Campinas</p>
                </div>
              </div>
            </div>
            <div className="section-animate absolute -top-4 -left-4 sm:left-0 bg-brand-gray-dark border border-white/10 text-brand-white rounded-2xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-brand-yellow flex-shrink-0" />
                <span className="text-xs font-medium">Av. Francisco Glicério, 1744</span>
              </div>
            </div>
          </div>

          <div>
            <div className="section-animate">
              <span className="inline-block text-brand-yellow text-sm font-semibold uppercase tracking-widest mb-3">
                Nossa história
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-white mb-6 leading-tight">
                30 Anos de{' '}
                <span className="text-brand-yellow">Confiança</span>{' '}
                em Campinas
              </h2>
              <p className="text-brand-white/65 text-base leading-relaxed mb-4">
                Presente no mercado desde <strong className="text-brand-white">1994</strong>, o Chaveiro Glicério
                construiu sua reputação sobre uma base sólida: qualidade, honestidade e respeito ao cliente.
                Em 2010, uma nova gestão assumiu esse legado e elevou ainda mais o padrão de excelência.
              </p>
              <p className="text-brand-white/65 text-base leading-relaxed mb-8">
                Com atendimento externo e sede própria com estacionamento na <strong className="text-brand-white">
                Av. Francisco Glicério, 1744</strong>, estamos prontos para resolver qualquer situação —
                de emergências noturnas a instalações planejadas.
              </p>
            </div>

            <div className="section-animate grid grid-cols-2 gap-3 mb-8">
              {DIFERENCIAIS.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-brand-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-brand-white/75 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="section-animate grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-brand-gray-dark border border-white/8 rounded-xl p-4"
                >
                  <p className="text-brand-yellow font-black text-xl sm:text-2xl leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="text-brand-white/50 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="section-animate flex items-center gap-3 mt-6 bg-brand-gray-mid/40 border border-white/8 rounded-xl p-4">
              <Users size={20} className="text-brand-yellow flex-shrink-0" />
              <p className="text-brand-white/70 text-sm">
                Gestão profissional com foco total na <strong className="text-brand-yellow">satisfação do cliente</strong> e nas melhores parcerias do setor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
