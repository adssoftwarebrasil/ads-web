import { CheckCircle2, Award, Users, ThumbsUp } from 'lucide-react';
import { WHATSAPP_BASE, useInView } from '../hooks/useInView';

const S = 'https://storage.lucasmendes.dev/site-sp/mecanica%20cordeiro';

const features = [
  'Profissionais experientes e qualificados',
  'Peças de qualidade com procedência garantida',
  'Orçamento transparente e honesto',
  'Atendimento rápido sem perder a qualidade',
  'Especialistas em motores e injeção eletrônica',
  'Atendemos carros, vans e veículos a diesel',
];

const stats = [
  { icon: Award, value: 'Nova', label: 'Gestão, mesmo compromisso' },
  { icon: Users, value: '100%', label: 'Foco no cliente' },
  { icon: ThumbsUp, value: '4.5★', label: 'Avaliação no Google' },
];

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#30312C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={`${S}/img/oficina-cheia-de-carros-abertos-para-reparo_1600x900.webp`}
                  alt="Oficina Mecânica Cordeiro"
                  className="w-full h-72 md:h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#30312C]/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-8 w-48 md:w-60 rounded-xl overflow-hidden shadow-2xl border-4 border-[#30312C]">
                <img
                  src={`${S}/img/motor-complexo-mecanico-sobre-mesa-oficina_1600x900.webp`}
                  alt="Trabalho de qualidade"
                  className="w-full h-32 md:h-40 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-[#E32626]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 right-0 w-64 h-64 bg-[#E32626]/5 rounded-full blur-3xl"></div>
            <div className="absolute top-4 left-4 bg-[#E32626] text-white rounded-xl px-4 py-3 shadow-lg z-20">
              <div className="text-xs font-medium opacity-80">Localização</div>
              <div className="text-sm font-bold">Sinop – MT</div>
            </div>
          </div>
          <div ref={ref} className="order-1 lg:order-2">
            <span
              className={`inline-block text-[#E32626] text-xs font-bold tracking-widest uppercase mb-3 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              Sobre Nós
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-black text-[#FDFDFD] leading-tight mb-6 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '80ms' }}
            >
              A Nova Referência em <span className="text-[#E32626]">Mecânica</span>{' '}
              de Sinop
            </h2>
            <div
              className={`space-y-4 text-white/70 leading-relaxed mb-8 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '160ms' }}
            >
              <p>
                A <strong className="text-white">Mecânica Cordeiro</strong> chegou
                para ser a nova referência em Sinop – MT. Herdamos o endereço da
                antiga Dida Auto Center, mas trouxemos uma nova gestão com mais
                qualidade, tecnologia e, acima de tudo, confiança em cada serviço
                realizado.
              </p>
              <p>
                Nossa equipe é formada por profissionais experientes, apaixonados
                pelo que fazem e comprometidos em cuidar do seu veículo como se fosse
                o próprio. Trabalhamos com peças de qualidade, diagnóstico preciso e
                preços justos — porque acreditamos que honestidade é o melhor serviço
                que podemos oferecer.
              </p>
            </div>
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '240ms' }}
            >
              {features.map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={18}
                    className="text-[#E32626] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-white/80 text-sm">{f}</span>
                </div>
              ))}
            </div>
            <div
              className={`grid grid-cols-3 gap-4 mb-8 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '320ms' }}
            >
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                  >
                    <div className="text-[#E32626] flex justify-center mb-2">
                      <Icon size={24} />
                    </div>
                    <div className="text-white font-black text-xl">{s.value}</div>
                    <div className="text-white/50 text-xs leading-tight mt-1">
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
            <a
              className={`inline-flex items-center gap-3 bg-[#E32626] text-white font-bold px-8 py-4 rounded-full hover:bg-[#c41e1e] hover:scale-105 active:scale-95 transition-all duration-500 shadow-xl shadow-[#E32626]/20 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: '400ms' }}
            >
              Fale Conosco<span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
