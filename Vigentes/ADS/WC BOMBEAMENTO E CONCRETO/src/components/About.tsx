import type { LucideIcon } from 'lucide-react';
import { Award, Users, Shield, Clock } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const features: Feature[] = [
  { icon: Award, title: 'Qualidade certificada', description: 'Concreto com traço controlado e dosagem precisa para cada tipo de aplicação.', delay: 300 },
  { icon: Users, title: 'Equipe especializada', description: 'Profissionais experientes e comprometidos do atendimento à entrega na obra.', delay: 380 },
  { icon: Shield, title: 'Comprometimento total', description: 'Da solicitação ao acabamento: acompanhamos cada etapa com atenção e responsabilidade.', delay: 460 },
  { icon: Clock, title: 'Pontualidade garantida', description: 'Respeito ao seu cronograma. Entregas no horário combinado, sem atrasos na sua obra.', delay: 540 },
];

const SolidStar = () => (
  <svg className="w-3.5 h-3.5 text-brand-orange fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function About() {
  return (
    <section id="sobre" className="bg-brand-surface py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative transition-all duration-700 opacity-100 translate-x-0">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/wc-bombeamento-e-concreto/img/caminhao-cinza-com-betoneira-na-rua_1280x720.webp"
                alt="Caminhão betoneira WC Concreto"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-brand-dark border border-brand-orange/30 rounded-2xl px-6 py-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-extrabold text-brand-orange leading-none">4.9</span>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <SolidStar key={i} />
                    ))}
                  </div>
                </div>
                <div className="border-l border-white/10 pl-3">
                  <p className="text-xs text-brand-gray">Avaliação</p>
                  <p className="text-xs font-semibold text-brand-white">Google Maps</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-orange/10 rounded-2xl -z-10"></div>
          </div>
          <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <span className="inline-block px-4 py-1.5 bg-brand-orange/10 border border-brand-orange/25 text-brand-orange text-xs font-bold uppercase tracking-widest rounded-full mb-5">
              Sobre a Empresa
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-white leading-tight">
              WC Concreto — sua obra em <span className="text-brand-orange">boas mãos</span>
            </h2>
            <p className="mt-5 text-brand-gray leading-relaxed">
              A WC Concreto &amp; Bombeamento nasceu para atender construtoras, engenheiros e pessoas físicas
              com a mesma dedicação: entregar concreto usinado de qualidade real, no prazo certo e com suporte
              técnico próximo.
            </p>
            <p className="mt-4 text-brand-gray leading-relaxed">
              Atuamos em Betim e toda a região metropolitana de Belo Horizonte, oferecendo concreto usinado,
              bombeamento, concreto para piso e sarrafeado. Cada entrega é tratada com responsabilidade — seja
              uma pequena laje residencial ou uma grande obra comercial.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex gap-4 items-start transition-all duration-500 opacity-100 translate-y-0"
                    style={{ transitionDelay: `${feature.delay}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-orange/12 flex items-center justify-center">
                      <Icon size={18} className="text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-white">{feature.title}</h4>
                      <p className="text-xs text-brand-gray mt-1 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/553199292900?text=Olá!%20Quero%20saber%20mais%20sobre%20a%20WC%20Concreto."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-orange text-brand-dark font-bold rounded-xl hover:bg-amber-400 transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/20"
              >
                Fale Conosco
              </a>
              <a
                href="https://www.instagram.com/w.cconcreto/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 text-brand-white font-semibold rounded-xl hover:border-white/30 hover:bg-white/5 transition-all duration-200"
              >
                Ver Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
