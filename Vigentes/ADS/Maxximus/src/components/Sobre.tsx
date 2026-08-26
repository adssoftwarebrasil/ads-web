const PinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 mr-2 text-[rgb(244,95,38)] flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export default function Sobre() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-5 max-w-6xl">
        <div className="mb-16 md:mb-20">
          <div className="max-w-3xl mx-auto text-center md:text-left">
            <span className="inline-block bg-[rgba(244,95,38,0.1)] text-[rgb(244,95,38)] px-5 py-2 rounded-full text-sm font-medium mb-5 transition-all duration-700 opacity-100 translate-y-0">
              Desde 2023
            </span>
            <h2 className="text-[rgb(19,57,94)] text-3xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-200 opacity-100 translate-y-0">
              Sobre a Maxximus
            </h2>
            <p className="text-[rgb(173,173,175)] text-base md:text-lg leading-relaxed mb-8 transition-all duration-700 delay-300 opacity-100 translate-y-0">
              A Maxximus foi fundada com a missão de oferecer soluções de
              jardinagem e manutenção com preço justo e excelência. Hoje,
              expandimos nossa atuação para atender ainda melhor o interior de
              São Paulo, com presença confirmada em{' '}
              <strong>Ribeirão Preto (Matriz)</strong> e{' '}
              <strong>Araraquara (Filial)</strong>.
            </p>
            <div className="border-l-4 border-[rgb(244,95,38)] pl-5 py-2 transition-all duration-700 delay-500 opacity-100 translate-y-0">
              <p className="text-[rgb(19,57,94)] text-base md:text-lg italic leading-relaxed">
                Trabalhamos com a Husqvarna, marca com mais de 300 anos de
                história e tradição, reconhecida mundialmente pela inovação e
                qualidade imbatível de seus produtos.
              </p>
            </div>
          </div>
        </div>

        {/* Matriz - Ribeirão Preto */}
        <div className="mb-20 transition-all duration-700 delay-500 opacity-100 translate-y-0">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 border-b pb-4 border-gray-100">
            <div>
              <span className="text-[rgb(244,95,38)] font-bold tracking-widest text-sm uppercase mb-2 block">
                Matriz
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[rgb(19,57,94)]">
                Ribeirão Preto
              </h3>
            </div>
            <div className="mt-4 md:mt-0 flex items-start text-[rgb(173,173,175)]">
              <PinIcon />
              <p className="text-sm md:text-base max-w-md">
                Av. Caramuru, 840 - Jardim Sumare
                <br />
                Ribeirão Preto - SP, 14025-710
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group h-[300px] md:h-full">
              <img
                src="https://storage.lucasmendes.dev/site-sp/MAXXIMUS%2Fribeirao%2F1.jpeg"
                alt="Matriz Ribeirão Preto - Fachada"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-md group h-[150px] md:h-[200px]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/MAXXIMUS%2Fribeirao%2F2.jpeg"
                alt="Matriz Ribeirão Preto - Detalhe 1"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-md group h-[150px] md:h-[200px]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/MAXXIMUS%2Fribeirao%2F3.jpeg"
                alt="Matriz Ribeirão Preto - Detalhe 2"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-md group h-[150px] md:h-[200px]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/MAXXIMUS%2Fribeirao%2F4.jpeg"
                alt="Matriz Ribeirão Preto - Detalhe 3"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-md group h-[150px] md:h-[200px]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/MAXXIMUS%2Fribeirao%2F5.jpeg"
                alt="Matriz Ribeirão Preto - Detalhe 4"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Filial - Araraquara */}
        <div className="transition-all duration-700 delay-700 opacity-100 translate-y-0">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 border-b pb-4 border-gray-100">
            <div>
              <span className="text-[rgb(244,95,38)] font-bold tracking-widest text-sm uppercase mb-2 block">
                Filial
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[rgb(19,57,94)]">
                Araraquara
              </h3>
            </div>
            <div className="mt-4 md:mt-0 flex items-start text-[rgb(173,173,175)]">
              <PinIcon />
              <p className="text-sm md:text-base">
                Av. Padre Francisco Salles Colturato, 0473
                <br />
                São Geraldo - CEP 14800-000
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group">
              <img
                src="https://storage.lucasmendes.dev/site-sp/MAXXIMUS%2Ffachada.jpg"
                alt="Unidade Araraquara"
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl group">
              <img
                src="https://storage.lucasmendes.dev/site-sp/MAXXIMUS%2Finterna-da-loja.jpg"
                alt="Unidade Araraquara"
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
