const highlights = ['Frota Própria', 'Atendimento Personalizado', 'Condições Competitivas'];

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Quem Somos</h2>
          <div className="w-24 h-1 bg-[#FFE600] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-black">MotoSilva</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              A MARY AP. BLUMER SILVA LTDA, conhecida como MotoSilva, foi fundada em 1983 por um
              engenheiro mecânico apaixonado por motos. Com mais de 40 anos de história, distribuímos
              motopeças e acessórios de qualidade, apoiando oficinas e lojas do setor.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Nossa frota própria garante eficiência na entrega, aliada a um atendimento
              personalizado que prioriza a satisfação do cliente. Nos destacamos pela
              confiabilidade, variedade de produtos e condições competitivas.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#FFE600] rounded-full"></div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://storage.lucasmendes.dev/site-sp/motosilv/Quem%20somos1.jpg"
              alt="MotoSilva - Estabelecimento"
              className="rounded-2xl shadow-lg w-full h-64 object-cover transform transition-all duration-300 hover:scale-105"
            />
            <img
              src="https://storage.lucasmendes.dev/site-sp/motosilv/quemsomos2.jpg"
              alt="MotoSilva - Produtos"
              className="rounded-2xl shadow-lg w-full h-64 object-cover transform transition-all duration-300 hover:scale-105 mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
