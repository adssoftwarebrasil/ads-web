export default function Catalog() {
  return (
    <section id="catalogo" className="bg-[#1A1A1A] py-24 lg:py-32 px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[#F48221] tracking-[2px] mb-4 uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
            CATÁLOGO COMPLETO
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Explore Toda Nossa Linha <br />de Produtos
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Navegue pelo nosso catálogo digital interativo e descubra especificações técnicas, medidas e toda a variedade que oferecemos.
          </p>
        </div>
        <div className="bg-white border-2 border-[#F48221] rounded-xl p-5 shadow-[0_8px_40px_rgba(244,130,33,0.25)]">
          <iframe
            allowFullScreen
            allow="clipboard-write"
            scrolling="no"
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg"
            src="https://heyzine.com/flip-book/1f7d66e4ae.html"
            style={{ borderWidth: 'medium', borderStyle: 'none', borderColor: 'currentcolor', borderImage: 'initial' }}
          ></iframe>
        </div>
        <div className="text-center mt-8">
          <a
            href="https://heyzine.com/flip-book/1f7d66e4ae.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#F48221] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#E67318] hover:scale-105 transition-all duration-300"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <span className="text-xl">📥</span>VISUALIZAR CATÁLOGO COMPLETO
          </a>
        </div>
      </div>
    </section>
  );
}
