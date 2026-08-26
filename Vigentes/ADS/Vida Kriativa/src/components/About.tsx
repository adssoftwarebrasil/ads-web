export default function About() {
  return (
    <section id="sobre" className="relative py-20 md:py-32 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0 bg-[#EAF2F8]">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-300/30 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgb(203, 213, 225) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e5a]">Nossa <span className="text-[#E63428]">História</span></h2>
          <p className="text-gray-600 text-lg md:text-xl font-medium">Uma jornada de paixão, dedicação e crescimento no mundo do artesanato</p>
          <div className="h-1.5 w-32 mx-auto rounded-full bg-gradient-to-r from-[#E63428] via-[#EB097C] to-[#0186C6]"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden border border-white/50">
            <div className="absolute top-10 left-0 w-2.5 h-[calc(100%-80px)] rounded-r-full bg-gradient-to-b from-[#01428a] via-[#E63428] to-[#EB097C]"></div>
            <div className="pl-4 md:pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                <div className="bg-[#0f368e] text-white rounded-l-2xl rounded-tr-3xl rounded-br-none shadow-lg flex flex-col items-center justify-center w-24 h-20 shrink-0 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-4xl font-bold leading-none mt-1">17+</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold opacity-80 mb-1">Anos</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Anos no mercado</h3>
              </div>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg text-justify">
                <p>A Vida Kriativa está há mais de <strong className="text-[#E63428]">17 anos no mercado</strong>, consolidando-se como referência em materiais para artesanato em Foz do Iguaçu.</p>
                <p>Quando Rosania e Antonio adquiriram o negócio, era apenas uma pequena loja. Rosania entrou como funcionária e, com o tempo, acabou comprando o estabelecimento da antiga dona.</p>
                <p>Com dedicação e visão empreendedora, mudaram de local e ampliaram toda a estrutura, trazendo cada dia mais novidades e produtos para os clientes.</p>
              </div>
            </div>
          </div>
          <div className="relative h-full min-h-[400px] flex items-center justify-center group perspective">
            <div className="absolute inset-0 bg-gradient-to-r from-[#EB097C]/30 to-[#E63428]/30 blur-[60px] transform scale-75 opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_25px_60px_-15px_rgba(235,9,124,0.3)]">
              <img src="https://storage.lucasmendes.dev/site-sp/vida%20kriativa%2Fimg%2Flogo%20fundo%20preto.webp" alt="Vida Kriativa Logo" className="w-full h-auto object-cover" />
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#E63428] via-[#EB097C] to-[#0186C6]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
