const ABOUT_IMG =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=guerreiro%2FCaptura%20de%20Tela%202025-10-13%20a%CC%80s%2016.14.45.png&version_id=null';

const stats = [
  { value: '6+', line1: 'ANOS', line2: 'DE MERCADO' },
  { value: '4', line1: 'FILIAIS', line2: 'NA BAHIA' },
  { value: '1000+', line1: 'CLIENTES', line2: 'ATENDIDOS' },
];

export default function About() {
  return (
    <section id="sobre" className="bg-white py-16 md:py-24 lg:py-32 px-[5%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs md:text-sm font-medium text-[#F48221] tracking-[2px] mb-3 md:mb-4 uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
              NOSSA HISTÓRIA
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4 md:mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Força, Confiança e <br />Comprometimento desde 2019
            </h2>
            <div className="space-y-3 md:space-y-4 text-base md:text-lg text-[#666666] leading-relaxed mb-6 md:mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p>A Guerreiro Ferro e Aço nasceu do sonho de dois amigos — um Engenheiro Civil e um Administrador — em empreender na área comercial oferecendo soluções em aço com qualidade, agilidade e atendimento diferenciado.</p>
              <p>Fundada com o propósito de unir força, confiança e comprometimento, a empresa começou suas atividades atendendo a pequenas demandas locais. Com o tempo, conquistamos o reconhecimento do mercado pela rapidez na entrega, preço competitivo e excelência no atendimento para Camaçari, Região Metropolitana, Recôncavo Baiano, Catu e Alagoinhas.</p>
              <p>Com uma equipe dedicada e parceira, construímos uma trajetória sólida, baseada em valores como honestidade, transparência, respeito e responsabilidade.</p>
              <p>Hoje, somos referência na região quando o assunto é soluções em ferro e aço, atendendo desde obras residenciais até grandes empreendimentos.</p>
            </div>
            <div className="bg-gradient-to-r from-[#F48221]/10 to-transparent border-l-4 border-[#F48221] p-4 md:p-6 rounded-r-lg mb-6 md:mb-10">
              <p className="text-lg md:text-xl font-semibold text-[#F48221] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Mais do que uma revendedora de ferro e aço, nos orgulhamos de ser uma empresa que cresceu junto com seus clientes, ajudando a erguer sonhos e transformar projetos em realidade.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {stats.map((stat) => (
                <div key={stat.value} className="bg-[#F5F5F5] hover:bg-[#F48221] transition-all duration-300 group p-4 md:p-6 rounded-xl text-center shadow-sm hover:shadow-lg">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F48221] group-hover:text-white mb-1 md:mb-2 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm font-medium text-[#666666] group-hover:text-white transition-colors leading-tight">
                    {stat.line1}<br />{stat.line2}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-[#F48221]/20 to-[#F48221]/5 rounded-2xl -z-10 group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
                <img src={ABOUT_IMG} alt="Equipe Guerreiro Ferro e Aço" className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-[#F48221] text-white px-4 py-2 rounded-full text-xs md:text-sm font-bold shadow-lg">
                  <span style={{ fontFamily: 'Montserrat, sans-serif' }}>6 ANOS DE EXCELÊNCIA</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 md:w-32 md:h-32 border-4 border-[#F48221] rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
