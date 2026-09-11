const gallery = [
  'https://storage.lucasmendes.dev/site-sp/uniao-engates%2Fimg%2Fengate-pecas-automotivas.webp',
  'https://storage.lucasmendes.dev/site-sp/uniao-engates%2Fimg%2Fprateleiras-engate-pecas.webp',
];

const tags = ['Sem perfurações', 'Testados no veículo', 'Instalação facilitada'];

export default function Engates() {
  return (
    <section id="engates" className="bg-gradient-to-b from-white to-[#F8F9FA] py-20 md:py-28 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-14">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-[rgb(175,11,18)] text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Nossos Engates</h2>
          <div className="w-24 h-1 bg-[rgb(175,11,18)] mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-16 md:mb-20">
          {gallery.map((src) => (
            <div
              key={src}
              className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-200">
                <img
                  src={src}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2"></h3>
                <p className="text-white/90 text-base md:text-lg"></p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[rgb(175,11,18)] rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-14 border-t-4 border-[rgb(175,11,18)]">
            <h3 className="text-[rgb(175,11,18)] text-2xl md:text-3xl font-bold text-center mb-6">Tecnologia e Qualidade</h3>
            <p className="text-[#2C2C2C] text-lg md:text-xl leading-relaxed text-center max-w-[900px] mx-auto">
              Nossos engates são desenvolvidos com base no chassi do carro, utilizando as furações
              originais das montadoras, evitando ao máximo que o carro precise ser perfurado para a
              instalação. Todos os nossos engates são testados no veículo ao qual se destina, assim
              que desenvolvido, para que não tenha nenhuma dificuldade na instalação.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[rgb(175,11,18)]/10 text-[rgb(175,11,18)] px-6 py-2 rounded-full text-sm font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
