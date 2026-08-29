import React, { useEffect, useRef, useState } from 'react';
import { Award, Target, Shield, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-20 bg-[#f0f0f0] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#07dde5]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#104071]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <div className="inline-block mb-3 md:mb-4">
              <span className="text-[#07dde5] font-bold text-xs md:text-sm tracking-wider uppercase">Sobre Nós</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#050a1e] mb-4 md:mb-6 leading-tight">
              Engenharia com Propósito e Profissionalismo
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
              Com mais de 12 anos de experiência na construção civil, a Exclusive Construtora nasceu da visão dos engenheiros Caio e Victor Hugo. Há 3 anos, expandimos nossa atuação para elevar o padrão do mercado de reformas e incorporação.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
              Há mais de 12 anos no mercado e formalizada como referência em Goiânia, a Exclusive Construtora preenche a lacuna deixada por profissionais autônomos: aqui, nós temos tempo para você, cumprimos prazos e entregamos qualidade técnica superior.
            </p>
            <div className="bg-gradient-to-br from-[#050a1e] to-[#0a154b] p-5 md:p-6 rounded-2xl shadow-xl mb-5 md:mb-6">
              <div className="flex items-start gap-3">
                <Award className="text-[#07dde5] mt-1 flex-shrink-0" size={24} />
                <p className="text-white font-medium leading-relaxed text-sm md:text-base">
                  Nosso maior diferencial é o respeito pelo seu tempo. Acabamos com a dificuldade de encontrar profissionais qualificados e pontuais. Aqui, o atendimento é prioridade e o cronograma é sagrado.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <div className="bg-white p-3 md:p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
                <Target className="text-[#07dde5] mb-2" size={20} />
                <p className="text-xl md:text-2xl font-bold text-[#050a1e]">100%</p>
                <p className="text-xs text-gray-600">Satisfação</p>
              </div>
              <div className="bg-white p-3 md:p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
                <Shield className="text-[#07dde5] mb-2" size={20} />
                <p className="text-xl md:text-2xl font-bold text-[#050a1e]">Garantia</p>
                <p className="text-xs text-gray-600">Total</p>
              </div>
              <div className="bg-white p-3 md:p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
                <Zap className="text-[#07dde5] mb-2" size={20} />
                <p className="text-xl md:text-2xl font-bold text-[#050a1e]">Agilidade</p>
                <p className="text-xs text-gray-600">Comprovada</p>
              </div>
            </div>
          </div>

          <div className="relative px-6 md:px-0">
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-[#07dde5]/20 rounded-2xl hidden md:block"></div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=exclusive-construtora%2FfotoAtualExclusive_11zon.jpg&version_id=null"
              alt="Equipe de Engenheiros"
              // MUDANÇA AQUI: Alterado md:h-[500px] para md:h-[600px] e adicionado lg:h-[700px]
              className="relative rounded-2xl shadow-2xl w-full h-[400px] md:h-[600px] lg:h-[700px] object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 md:-bottom-6 md:-left-6 bg-gradient-to-br from-[#07dde5] to-[#04b8bf] text-[#050a1e] p-4 md:p-6 rounded-2xl shadow-2xl">
              <p className="text-3xl md:text-4xl font-bold">+12</p>
              <p className="text-xs md:text-sm font-semibold">Anos de Experiência</p>
            </div>
            <div className="absolute top-4 right-4 md:-top-6 md:-right-6 bg-gradient-to-br from-[#050a1e] to-[#0a154b] text-white px-4 py-2 md:px-5 md:py-3 rounded-2xl shadow-2xl">
              <p className="text-xs md:text-sm font-semibold">CREA Registrado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};