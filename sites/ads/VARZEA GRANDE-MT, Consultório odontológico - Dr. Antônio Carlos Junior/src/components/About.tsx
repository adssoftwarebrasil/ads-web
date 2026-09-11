import { useEffect, useRef } from 'react';
import { Award, CalendarCheck, CheckCircle2 } from 'lucide-react';

const DR_IMAGE =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=DrAntonioCarlos%2Fdr_clinica-odonto.jpeg&version_id=null';
const WA_LINK =
  'https://wa.me/5565996610607?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';

const BADGES = [
  'CRO-MT 3988',
  'Implantodontia',
  'Prótese Dentária',
  'Ortodontia',
  'Estética Dental',
  'Lente de Contato',
];

const HIGHLIGHTS = [
  'Formado há mais de 20 anos',
  'Atendendo em Várzea Grande desde 2005',
  'Especialista em Implantodontia e Prótese',
  'Tecnologia moderna aliada ao cuidado humano',
  'Ambiente acolhedor e confortável',
];

const STATS = [
  { value: '+20', label: 'Anos de\nCarreira' },
  { value: '2005', label: 'Ano de chegada\nem Várzea Grande' },
  { value: '2', label: 'Especializações\ncertificadas' },
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
      { threshold: 0.08 }
    );
    const els = sectionRef.current?.querySelectorAll('.section-animate');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 section-animate">
          <span className="inline-block text-[#32A19A] text-sm font-semibold tracking-widest uppercase mb-3">
            Sobre o Profissional
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Dr. Antonio Carlos{' '}
            <span className="text-[#32A19A]">Junior</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 section-animate">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-40 h-40 rounded-full bg-[#A9C5C3]/25 -z-10" />
              <div className="absolute -bottom-5 -right-5 w-56 h-56 rounded-full bg-[#32A19A]/10 -z-10" />

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src={DR_IMAGE}
                  alt="Dr. Antonio Carlos Junior"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2e2b]/60 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex flex-wrap gap-2">
                    {BADGES.map((badge) => (
                      <span
                        key={badge}
                        className="bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[11px] font-semibold px-3 py-1 rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#32A19A] to-[#1a6a65] rounded-2xl shadow-xl px-5 py-4 text-center">
                <div className="text-white font-display font-bold text-3xl leading-none">+20</div>
                <div className="text-white/80 text-xs mt-1 font-medium">Anos de<br />Experiência</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white border border-gray-100 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#32A19A]/10 flex items-center justify-center">
                  <Award size={18} className="text-[#32A19A]" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Registro</div>
                  <div className="text-sm font-bold text-gray-900">CRO-MT 3988</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8 section-animate">
            <div className="grid grid-cols-3 gap-4">
              {STATS.map(({ value, label }) => (
                <div
                  key={value}
                  className="bg-[#f0f7f6] rounded-2xl p-4 text-center border border-[#A9C5C3]/30"
                >
                  <div className="font-display font-bold text-2xl sm:text-3xl text-[#32A19A] leading-none mb-1">
                    {value}
                  </div>
                  <div className="text-gray-500 text-xs font-medium leading-snug whitespace-pre-line">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                O Dr. Antonio Carlos Junior é um profissional dedicado ao cuidado com o sorriso de cada paciente.
                Formado há mais de 20 anos e presente em Várzea Grande desde 2005, construiu uma carreira sólida
                baseada em excelência técnica, atualização constante e, acima de tudo, respeito e atenção às
                necessidades individuais de cada pessoa que passa pelo seu consultório.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Especialista em Implantodontia e Prótese Dentária, domina as mais modernas técnicas para
                reabilitar sorrisos com naturalidade e precisão. Do diagnóstico ao tratamento, cada etapa é
                conduzida com transparência e compromisso com os melhores resultados.
              </p>
            </div>

            <div className="bg-[#f0f7f6] rounded-2xl p-6 border border-[#A9C5C3]/30">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                Destaques do Profissional
              </h3>
              <ul className="space-y-2.5">
                {HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#32A19A] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#32A19A] hover:bg-[#217a74] text-white font-bold px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CalendarCheck size={18} />
                Agendar Avaliação
              </a>
              <a
                href="tel:+556530263254"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#f0f7f6] hover:bg-[#A9C5C3]/30 text-[#32A19A] font-bold px-6 py-4 rounded-2xl border border-[#A9C5C3]/40 transition-all duration-300"
              >
                (65) 3026-3254
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
