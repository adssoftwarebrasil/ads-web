import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="min-h-screen pt-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #3f4196 0%, #2a2d66 100%)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#fef011] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#fef011] opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-on-scroll opacity-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Transforme Seus Projetos com as Melhores Tintas de Barreiras
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Mais de 10 mil cores em tintas imobiliárias e personalização automotiva. Marcas
              Sherwin-Williams e Lazzuril com atendimento de qualidade desde 2021.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#produtos"
                className="bg-[#ec3237] text-white px-8 py-4 rounded-lg hover:bg-[#d32d32] transition-all hover:scale-105 text-center font-medium text-lg shadow-lg"
              >
                Consultar Produtos
              </a>
              <a
                href="https://wa.me/5577999571092?text=Olá! Vim através do site e gostaria de mais informações sobre os produtos."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fef011] text-[#3f4196] px-8 py-4 rounded-lg hover:bg-[#e5d810] transition-all hover:scale-105 text-center font-medium text-lg shadow-lg"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* ALTERAÇÃO AQUI: 
             Adicionado 'hidden md:block'. 
             - hidden: esconde em telas pequenas (mobile).
             - md:block: mostra como bloco em telas médias em diante (desktop/tablet).
          */}
          <div className="hidden md:block animate-on-scroll opacity-0 animation-delay-300">
            <img
              src="https://storage.lucasmendes.dev/site-sp/central-tintas%2Ffachada-loja-tintas.webp"
              alt="Fachada da Central Tintas"
              className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}