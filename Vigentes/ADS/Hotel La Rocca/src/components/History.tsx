export default function History() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Mais de <span className="text-[rgb(190,0,3)]">30 Anos</span> de
            História
          </h2>
          <div className="h-1 w-32 bg-[rgb(190,0,3)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tradição, hospitalidade e excelência desde 1992
          </p>
        </div>
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=hotellarocca%2F553780430.jpg&version_id=null"
                alt="Hotel La Rocca - Mais de 30 anos de história"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Em um mundo de efemeridade e mudanças rápidas, poucas coisas
                  resistem ao tempo carregando consigo a alma e a história de seu
                  criador. O hotel fundado em <strong>1992</strong> não é apenas
                  um prédio de tijolos e argamassa, é um{' '}
                  <span className="text-[rgb(190,0,3)] font-semibold">
                    monumento à visão, coragem e inabalável crença no valor da
                    hospitalidade
                  </span>
                  .
                </p>
                <p className="text-lg">
                  A década de 90 trazia consigo um espírito de otimismo e
                  transformação. Construir um negócio do zero naquele cenário não
                  era tarefa para os fracos. Era preciso uma visão rara para
                  antecipar as necessidades dos viajantes e, acima de tudo, a
                  paixão genuína por acolher.
                </p>
                <p className="text-lg">
                  Cada detalhe, desde o design da fachada até a escolha dos móveis
                  nos quartos, é um reflexo direto de oferecer algo mais do que
                  uma simples pernoite.{' '}
                  <strong>
                    Tratar cada hóspede não como um cliente, mas como parte da
                    família
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
        </div>
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-gray-800 italic border-l-4 border-[rgb(190,0,3)] pl-6 py-4">
            "Um legado de hospitalidade que atravessa gerações, onde cada hóspede
            se torna parte da nossa história."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
