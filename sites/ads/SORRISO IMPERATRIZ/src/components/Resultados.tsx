interface Transformacao {
  img: string;
  alt: string;
}

const transformacoes: Transformacao[] = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/sorrisoimperatriz%2Fimg%2FAntes%20e%20Depois1.webp',
    alt: 'Transformação 1',
  },
  {
    img: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=sorrisoimperatriz%2Fimg%2Fantesedepoiss.webp&version_id=null',
    alt: 'Transformação 2',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/sorrisoimperatriz%2Fimg%2FAntes%20e%20Depois3.webp',
    alt: 'Transformação 3',
  },
];

export default function Resultados() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(13,51,98)] mb-6">
            Resultados Reais Dos Nossos Pacientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja as transformações incríveis que realizamos na vida de nossos
            pacientes
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformacoes.map((t) => (
            <div
              key={t.alt}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <div className="flex items-center justify-center space-x-4 text-white">
                    <span className="font-bold text-lg">Antes</span>
                    <div className="w-12 h-0.5 bg-white"></div>
                    <span className="font-bold text-lg">Depois</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Quer ver seu sorriso transformado também?
          </p>
          <a
            href="#contato"
            className="inline-block bg-[rgb(13,51,98)] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            Agendar Minha Avaliação
          </a>
        </div>
      </div>
    </section>
  );
}
