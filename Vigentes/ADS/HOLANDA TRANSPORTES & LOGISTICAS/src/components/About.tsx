export default function About() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 transition-all duration-1000 opacity-100 translate-x-0">
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/holandatransportes%2Fguindaste-container-transporte1.webp"
                alt="Operação Holanda Transportes"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-holanda-green text-white px-6 py-4 rounded-xl shadow-lg max-w-xs">
                <p className="text-sm font-medium">Empresa com Raízes Familiares no Transporte</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-6 transition-all duration-1000 delay-300 opacity-100 translate-x-0">
            <div className="inline-block bg-holanda-green/10 text-holanda-green px-4 py-2 rounded-full text-sm font-medium">
              Sobre Nós
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-holanda-gray leading-tight">
              Tradição e Excelência no Transporte de Roraima
            </h2>
            <p className="text-lg text-holanda-green font-semibold">
              Fundada por Nicole Holanda Campos, com raízes familiares no ramo
            </p>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base lg:text-lg">
              <p>
                A Holanda Transportes nasceu há 6 anos em Boa Vista, Roraima, trazendo décadas de experiência familiar no setor de transporte e logística. Fundada por Nicole Holanda Campos, nossa empresa carrega a tradição e o conhecimento de gerações no ramo de cargas.
              </p>
              <p>
                Atendemos os principais mercados do estado com transporte e armazenagem de cargas secas e refrigeradas, além de realizar operações internacionais para Venezuela e Guiana. Nossa frota completa inclui caminhões, rodotrens, bitrens, caminhões baú e empilhadeiras para descarga.
              </p>
              <p>
                Somos referência em confiança e prestígio entre nossos clientes, oferecendo soluções completas desde o transporte até a armazenagem em containers próprios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
