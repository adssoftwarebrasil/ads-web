export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="w-full h-80 sm:h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02] bg-gray-200 border-4 border-gray-100">
              <img
                src="https://storage.lucasmendes.dev/site-sp/pjtapete%2FQuem%20somos.webp"
                alt="Sobre PJ Tapetes"
                className="w-full h-full object-cover transition-opacity duration-700 opacity-95 hover:opacity-100"
              />
            </div>
          </div>
          <div className="space-y-8 order-1 md:order-2 pt-10 md:pt-0">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[rgb(183,40,26)] leading-tight border-b-4 border-b-[rgb(183,40,26)] pb-4 inline-block">
              Nossa História e Dedicação
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                A PJ Tapetes Personalizados nasceu de uma paixão familiar pela
                arte de criar tapetes únicos e exclusivos. Com mais de duas
                décadas de experiência, nos consolidamos como referência em
                qualidade e personalização no mercado nacional.
              </p>
              <p>
                Cada projeto é tratado com dedicação especial, desde a escolha
                dos materiais até a entrega final. Nossa missão é transformar
                ambientes através de tapetes que refletem a personalidade e o
                estilo de cada cliente, garantindo um produto que é uma
                verdadeira peça de arte.
              </p>
              <p>
                Trabalhamos exclusivamente com os melhores materiais do mercado
                e uma equipe altamente qualificada, garantindo a você produtos
                que combinam beleza, durabilidade e sofisticação incomparáveis.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-12 gap-y-6 pt-6 border-t border-gray-200">
              <div className="text-left">
                <div className="text-5xl font-extrabold text-[rgb(183,40,26)] leading-none">
                  1000+
                </div>
                <div className="text-base font-medium text-gray-700 mt-1">
                  Clientes Satisfeitos
                </div>
              </div>
              <div className="text-left">
                <div className="text-5xl font-extrabold text-[rgb(183,40,26)] leading-none">
                  500+
                </div>
                <div className="text-base font-medium text-gray-700 mt-1">
                  Modelos Criados
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
