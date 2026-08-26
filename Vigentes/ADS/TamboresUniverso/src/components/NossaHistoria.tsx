export default function NossaHistoria() {
  return (
    <section id="historia" className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 lg:order-1">
          <img
            src="https://storage.lucasmendes.dev/site-sp/tamboresuniverso%2FNOSSA%20HISTO%CC%81RIA.webp"
            alt="Nossa História"
            className="rounded-3xl shadow-2xl w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
            loading="lazy"
          />
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-block bg-[#0A85E3]/10 text-[#034D9B] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Desde 1991
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#034D9B] mb-6">
            Nossa História
          </h2>

          <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
            <p>
              A história da Tambores Universo começou em 28 de Maio de 1991, quando seus fundadores identificaram uma crescente necessidade por embalagens industriais. Conscientes da importância da sustentabilidade, decidiram abrir um negócio que aproveitasse o potencial de produtos descartados por outras empresas.
            </p>

            <p>
              Logo perceberam que embalagens industriais de polietileno e aço poderiam ser reutilizadas a um custo significativamente menor do que os recipientes novos. Inicialmente, a empresa se dedicou à revenda de produtos usados, porém, atenta às demandas do mercado, expandiu suas atividades para oferecer soluções inovadoras e específicas para o setor agropecuário.
            </p>

            <p className="font-semibold text-[#034D9B]">
              Hoje, a Tambores Universo concentra seus esforços no fornecimento de uma ampla variedade de produtos voltados para a pecuária e agricultura, tornando-se um parceiro indispensável nesses dois segmentos fundamentais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
