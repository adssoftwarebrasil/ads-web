import { useEffect, useRef } from 'react';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const values = [
  'Atendimento humanizado e acolhedor',
  'Tecnologia de ponta em cada procedimento',
  'Transparência total no plano de tratamento',
  'Profissionais capacitados e atualizados',
  'Estrutura moderna e higienizada',
  'Apenas o que é necessário para você',
];

const stats = [
  { icon: <Users size={20} />, num: '500+', label: 'Pacientes atendidos' },
  { icon: <Award size={20} />, num: '10+', label: 'Anos no mercado' },
  { icon: <Clock size={20} />, num: '98%', label: 'Índice de satisfação' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    el.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right').forEach((c) =>
      observer.observe(c)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-on-scroll-left relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-[rgba(146,114,84,0.18)]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/idealle%20odontologia/img/homem-sorrindo-com-novos-dentes-brancos_1440x1784.webp"
                alt="Paciente sorrindo com novos dentes brancos — Idealle Odontologia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,10,0,0.3)] via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl p-4 shadow-xl border border-[rgba(146,114,84,0.12)] flex items-center gap-3 max-w-[200px]">
              <div className="w-10 h-10 rounded-full bg-[rgba(146,114,84,0.1)] flex items-center justify-center flex-shrink-0">
                <Award size={18} className="text-[rgb(146,114,84)]" />
              </div>
              <div>
                <div className="font-bold text-sm text-[#2a2016]">Clínica de referência</div>
                <div className="text-xs text-[rgba(131,123,109,0.996)]">em Rondonópolis</div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 sm:-left-6 grid grid-cols-3 gap-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-[rgb(146,114,84)] text-white rounded-xl p-3 text-center shadow-lg"
                >
                  <div className="flex justify-center mb-1 opacity-80">{s.icon}</div>
                  <div className="font-bold text-base leading-none">{s.num}</div>
                  <div className="text-[10px] opacity-75 mt-0.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll-right">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[rgb(146,114,84)] mb-3">
              Sobre a Idealle
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2a2016] mb-5">
              Cuidar do sorriso é cuidar da{' '}
              <span className="text-[rgb(146,114,84)]">sua confiança</span>
            </h2>
            <p className="text-[rgba(131,123,109,0.996)] text-base leading-relaxed mb-4">
              Na Idealle Odontologia, acreditamos que cada paciente merece atenção individual,
              explicações claras e um plano de tratamento pensado especialmente para suas necessidades.
              Não prescrevemos o que não é necessário, mas entregamos o melhor do que é indicado.
            </p>
            <p className="text-[rgba(131,123,109,0.996)] text-base leading-relaxed mb-8">
              Nossa clínica foi construída sobre pilares de confiança, respeito e excelência técnica.
              Com estrutura moderna, equipamentos de última geração e uma equipe apaixonada pelo que faz,
              estamos prontos para transformar sua experiência odontológica.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {values.map((v) => (
                <div key={v} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-[rgb(146,114,84)] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#2a2016]">{v}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/556696621999?text=Olá!%20Quero%20saber%20mais%20sobre%20a%20Idealle%20Odontologia%20e%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[rgb(146,114,84)] hover:bg-[rgb(138,117,90)] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(146,114,84,0.3)] hover:-translate-y-0.5"
              >
                Agendar minha consulta
              </a>
              <a
                href="https://www.instagram.com/idealleodontologia_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[rgba(146,114,84,0.3)] text-[rgb(146,114,84)] hover:bg-[rgba(146,114,84,0.06)] font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300"
              >
                Ver no Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
