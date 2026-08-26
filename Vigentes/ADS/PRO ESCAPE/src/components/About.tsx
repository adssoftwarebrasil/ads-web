export const About = () => {
  return (
    <section id="sobre" className="bg-white py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[rgb(254,182,32)] to-yellow-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/pro-escape%2Fimg%2FQuem%20somos.jpg"
                  alt="Quem Somos"
                  className="w-full h-auto rounded-3xl shadow-2xl object-cover aspect-[4/5]"
                />
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <span className="inline-block px-4 py-2 bg-[rgb(254,182,32)]/10 border border-[rgb(254,182,32)] rounded-full text-[rgb(254,182,32)] text-sm font-bold tracking-wider uppercase mb-4">
              Quem Somos
            </span>
            <h2 className="text-5xl lg:text-6xl font-extrabold text-black mb-8 leading-tight">
              PRO ESCAPE
            </h2>
            <div className="w-20 h-1 bg-[rgb(254,182,32)] mb-8"></div>
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              Fundada em 1989, a Pro Escape surgiu com o objetivo de ser uma referência em escapamentos. Com o passar do tempo, ampliamos nossos serviços e produtos, incluindo catalisadores, engates para reboque, entre outros. Com compromisso ambiental, lutamos contra a poluição e nos destacamos no mercado sergipano pela qualidade e inovação.
            </p>
            <button className="border-2 border-[rgb(254,182,32)] text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-[rgb(254,182,32)] hover:shadow-lg transition-all duration-300">
              Conheça Nossa História
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
