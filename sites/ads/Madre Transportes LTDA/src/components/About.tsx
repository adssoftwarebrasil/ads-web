import { useEffect, useRef } from 'react';
import { CheckCircle2, Users } from 'lucide-react';

const highlights = [
  'Fundada em 05 de junho de 2019',
  'Mais de 20 anos de experiência dos fundadores no setor',
  'Frota própria moderna e bem mantida',
  'Atendimento personalizado para cada cliente',
  'Soluções para cargas sólidas e a granel',
  'Cobertura em todo o território nacional',
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const el = sectionRef.current;
    if (el) {
      el.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right')
        .forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="py-20 md:py-28 bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          <div className="animate-on-scroll-left relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/madre%20transportes%20ltda/img/quem-somos.webp"
                alt="Equipe Madre Transportes"
                className="w-full h-80 md:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0">
                      <Users size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Mário Lelis & André Uhlmann</p>
                      <p className="text-gray-500 text-xs">Fundadores da Madre Transportes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-blue/5 rounded-full blur-2xl pointer-events-none" />
          </div>

          <div className="animate-on-scroll-right">
            <span className="inline-block text-brand-blue font-semibold text-sm uppercase tracking-widest mb-3">
              Quem Somos
            </span>
            <h2 className="section-title mb-6">
              Uma história construída com{' '}
              <span className="text-brand-blue">experiência e paixão</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                A <strong className="text-gray-900">Madre Transportes LTDA</strong> surgiu em 2019
                após seus fundadores, <strong className="text-gray-900">Mário Lelis</strong> e{' '}
                <strong className="text-gray-900">André Uhlmann</strong>, identificarem lacunas e
                oportunidades únicas no mercado de transportes. Com mais de 20 anos de experiência
                em empresas renomadas do setor, eles uniram suas expertises e suas frotas para
                criar algo diferente.
              </p>
              <p>
                Desde a fundação, a Madre cresceu com base em um princípio sólido:{' '}
                <strong className="text-gray-900">fazer o que promete</strong>. Qualidade no
                atendimento, agilidade nas entregas e preços competitivos tornaram-se a nossa marca
                registrada, atraindo clientes e parceiros de todo o Brasil.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-brand-blue flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/5519981211908?text=Ol%C3%A1%21+Quero+saber+mais+sobre+a+Madre+Transportes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-brand-blue/25 hover:scale-105 text-sm"
            >
              Fale com a Nossa Equipe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
