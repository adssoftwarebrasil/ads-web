export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-slide-left in-view">
            <div className="flex items-end gap-3 mb-4">
              <span className="font-display text-7xl md:text-8xl font-bold text-[#013413] leading-none">+15</span>
              <div className="pb-2">
                <p className="text-[#2d7a3a] text-xs font-medium uppercase tracking-widest">Anos de</p>
                <p className="text-[#2d7a3a] text-xs font-medium uppercase tracking-widest">Experiência</p>
              </div>
            </div>
            <div className="w-12 h-0.5 bg-[#013413] mb-6"></div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#013413] mb-5 leading-snug">
              Compromisso com o Meio Ambiente e a Segurança
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Fundada em 25 de junho de 2008, a JPMAR Ambiental nasceu com a missão de oferecer soluções integradas em
              Engenharia Ambiental e Saúde e Segurança do Trabalho. Com mais de 15 anos de atuação, consolidamos nossa
              presença em Sergipe e no Nordeste brasileiro.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nossa equipe multidisciplinar é composta por engenheiros, arquitetos, biólogos e técnicos especializados,
              prontos para atender projetos de todos os portes com excelência técnica e compromisso ambiental.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#013413] text-[#f8f1e1] rounded-full text-sm font-medium tracking-wide hover:bg-[#2d7a3a] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              Fale Conosco
            </a>
          </div>
          <div className="animate-slide-right in-view relative">
            <div className="relative grid grid-cols-2 gap-3">
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl" style={{ transitionDelay: '0.1s' }}>
                <img
                  alt="Vista aérea de rodovia com vegetação"
                  className="w-full h-52 md:h-64 object-cover"
                  src="https://storage.lucasmendes.dev/site-sp/jpmarambiental/vista-aerea-rodovia-construcao-verde-azul_1280x712.webp"
                />
              </div>
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl" style={{ transitionDelay: '0.25s' }}>
                <img
                  alt="Mapa BTEX de contaminação ambiental"
                  className="w-full h-52 md:h-64 object-cover object-top"
                  src="https://storage.lucasmendes.dev/site-sp/jpmarambiental/mapa-btex-total-contaminacao-concentracao-pontos-vermelhos_890x1003.webp"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#013413]/8 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
