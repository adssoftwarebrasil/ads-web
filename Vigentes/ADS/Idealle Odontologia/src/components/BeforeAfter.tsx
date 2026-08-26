import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cases = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/idealle%20odontologia/img/antes-depois-clareamento-dental-mulher-sorrindo_1347x1679.webp',
    title: 'Clareamento Dental',
    desc: 'Dentes até 8 tons mais brancos, valorizando o sorriso feminino com resultado natural.',
    tag: 'Clareamento',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/idealle%20odontologia/img/antes-depois-clareamento-e-facetas-diastema_1347x1679.webp',
    title: 'Clareamento + Facetas',
    desc: 'Correção de diastema com facetas e clareamento simultâneo para sorriso harmonioso.',
    tag: 'Facetas + Clareamento',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/idealle%20odontologia/img/antes-depois-sorriso-restauracao-dental-feminino_1347x1679.webp',
    title: 'Restauração Dental',
    desc: 'Sorriso feminino completamente restaurado, devolvendo saúde bucal e confiança.',
    tag: 'Restauração',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/idealle%20odontologia/img/antes-e-depois-aparelho-ortodontico-masculino_1347x1679.webp',
    title: 'Ortodontia',
    desc: 'Alinhamento completo com aparelho ortodôntico para sorriso reto e equilibrado.',
    tag: 'Ortodontia',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/idealle%20odontologia/img/antes-e-depois-facetas-de-resina-dentaria_1350x1687.webp',
    title: 'Facetas em Resina',
    desc: 'Facetas de resina modeladas artesanalmente para um sorriso perfeito e natural.',
    tag: 'Facetas em Resina',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/idealle%20odontologia/img/dentes-antes-depois-reabilitacao-coroa_1347x1679.webp',
    title: 'Reabilitação com Coroa',
    desc: 'Reabilitação oral completa com coroas dentárias de alta estética e durabilidade.',
    tag: 'Coroas Dentárias',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/idealle%20odontologia/img/homem-antes-depois-protese-protocolo-implantes_1350x1688.webp',
    title: 'Protocolo sobre Implantes',
    desc: 'Protocolo completo de implantes devolvendo sorriso fixo, funcional e estético para homem.',
    tag: 'Implantes',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/idealle%20odontologia/img/homem-antes-depois-tratamento-odontologico_1347x1679.webp',
    title: 'Tratamento Completo',
    desc: 'Reabilitação oral masculina integrando múltiplos procedimentos para resultado total.',
    tag: 'Reabilitação',
  },
];

export default function BeforeAfter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
    el.querySelectorAll('.animate-on-scroll').forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % cases.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prev = () => {
    setIsPaused(true);
    setActive((p) => (p - 1 + cases.length) % cases.length);
  };
  const next = () => {
    setIsPaused(true);
    setActive((p) => (p + 1) % cases.length);
  };

  return (
    <section id="transformacoes" ref={sectionRef} className="py-20 lg:py-28 bg-[#faf7f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[rgb(146,114,84)] mb-3">
            Resultados Reais
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2a2016] mb-4">
            Transformações que <span className="text-[rgb(146,114,84)]">falam por si</span>
          </h2>
          <p className="text-[rgba(131,123,109,0.996)] text-base sm:text-lg max-w-2xl mx-auto">
            Cada caso é único. Veja como nossos pacientes transformaram seu sorriso e,
            consequentemente, sua autoestima e qualidade de vida.
          </p>
        </div>

        <div className="animate-on-scroll delay-200">
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10 items-center">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-[rgba(146,114,84,0.2)]">
                {cases.map((c, i) => (
                  <img
                    key={i}
                    src={c.img}
                    alt={c.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      i === active ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,10,0,0.6)] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block bg-[rgb(146,114,84)] text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {cases[active].tag}
                  </span>
                </div>
              </div>

              <div className="pt-8 lg:pt-0">
                <div className="mb-6">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2a2016] mb-3">
                    {cases[active].title}
                  </h3>
                  <p className="text-[rgba(131,123,109,0.996)] text-base leading-relaxed">
                    {cases[active].desc}
                  </p>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-8">
                  {cases.slice(0, 4).map((c, i) => (
                    <button
                      key={i}
                      onClick={() => { setActive(i); setIsPaused(true); }}
                      className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        active === i
                          ? 'border-[rgb(146,114,84)] opacity-100 scale-105 shadow-lg'
                          : 'border-transparent opacity-60 hover:opacity-90'
                      }`}
                    >
                      <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-2 mb-8">
                  {cases.slice(4, 8).map((c, i) => (
                    <button
                      key={i + 4}
                      onClick={() => { setActive(i + 4); setIsPaused(true); }}
                      className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        active === i + 4
                          ? 'border-[rgb(146,114,84)] opacity-100 scale-105 shadow-lg'
                          : 'border-transparent opacity-60 hover:opacity-90'
                      }`}
                    >
                      <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={prev}
                    className="w-11 h-11 rounded-full border border-[rgba(146,114,84,0.3)] flex items-center justify-center text-[rgb(146,114,84)] hover:bg-[rgb(146,114,84)] hover:text-white hover:border-[rgb(146,114,84)] transition-all duration-300"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <div className="flex gap-1.5">
                    {cases.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { setActive(i); setIsPaused(true); }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === active ? 'bg-[rgb(146,114,84)] w-6' : 'bg-[rgba(146,114,84,0.25)] w-1.5'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={next}
                    className="w-11 h-11 rounded-full border border-[rgba(146,114,84,0.3)] flex items-center justify-center text-[rgb(146,114,84)] hover:bg-[rgb(146,114,84)] hover:text-white hover:border-[rgb(146,114,84)] transition-all duration-300"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <a
                    href="https://wa.me/556696621999?text=Olá!%20Vi%20as%20transformações%20no%20site%20e%20quero%20agendar%20minha%20avaliação."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto bg-[rgb(146,114,84)] hover:bg-[rgb(138,117,90)] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Quero o meu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
