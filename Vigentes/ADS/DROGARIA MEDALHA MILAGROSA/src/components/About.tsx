import { useEffect, useRef } from 'react';
import { CheckCircle, MapPin } from 'lucide-react';

const highlights = [
  'Fundada há mais de 44 anos em Ipameri–GO',
  'Referência regional em manipulação de medicamentos',
  'Atendimento humanizado e personalizado',
  'Equipe de farmacêuticos qualificados',
  'Preços justos e produtos originais',
  'Entrega rápida e gratuita para toda a cidade',
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="section-padding bg-brand-white" ref={sectionRef}>
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className="reveal-left relative">
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/drogaria-medalha-milagrosa/img/fachada-drogaria.webp"
                alt="Fachada da Farmácia Medalha Milagrosa"
                className="w-full rounded-3xl object-cover shadow-2xl aspect-[4/3]"
              />
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 max-w-[200px]">
                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-brand-blue font-bold text-sm leading-tight">Ipameri – GO</p>
                  <p className="text-gray-500 text-xs mt-0.5">Pc. Liberdade, 33</p>
                </div>
              </div>
            </div>

            {/* Second smaller image */}
            <div className="mt-10 ml-8 md:ml-16">
              <img
                src="https://storage.lucasmendes.dev/site-sp/drogaria-medalha-milagrosa/img/atendimento-drogaria.webp"
                alt="Atendimento na Farmácia Medalha Milagrosa"
                className="w-3/4 rounded-2xl object-cover shadow-xl aspect-video"
              />
            </div>
          </div>

          {/* Content */}
          <div className="reveal-right">
            <span className="inline-block text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
              Nossa história
            </span>
            <h2 className="section-title mb-6">
              Mais de quatro décadas cuidando de você
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A Farmácia Medalha Milagrosa nasceu do espírito empreendedor de seus fundadores e há <strong className="text-brand-blue">mais de 44 anos</strong> representa saúde, qualidade e confiança para os moradores de Ipameri e região.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Com um atendimento que une o acolhimento de uma farmácia tradicional à agilidade do mundo moderno, nos tornamos referência em <strong className="text-brand-blue">manipulação de medicamentos</strong> e nos destacamos pelos preços justos que geram reconhecimento e fidelidade de geração em geração.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/556493104410?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Farmácia%20Medalha%20Milagrosa."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
