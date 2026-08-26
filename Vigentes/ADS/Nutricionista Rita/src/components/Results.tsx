import { ArrowRight } from 'lucide-react';
import { scrollToId } from '../lib/actions';

const results = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/rita%20%20lucachinski%2Fimg%2Fpaciente-antes-depois-1.webp',
    caption: 'Resultados visíveis em poucos meses',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/rita%20%20lucachinski%2Fimg%2Fpaciente-antes-depois-2.webp',
    caption: 'Recuperação da autoestima e saúde',
  },
];

export default function Results() {
  return (
    <section className="py-20 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-[rgb(157,111,88)] font-medium tracking-[0.2em] text-xs uppercase mb-4 block">
            Resultados Comprovados
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
            Histórias Reais, <span className="text-[rgb(157,111,88)] font-normal italic">Resultados Reais</span>
          </h2>
          <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
            Veja as incríveis transformações alcançadas através do nosso método personalizado.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
          {results.map((r) => (
            <div
              key={r.caption}
              className="group relative rounded-[2rem] overflow-hidden bg-[#141414] border border-white/5"
            >
              <div className="aspect-[4/5] md:aspect-[4/3] w-full relative overflow-hidden">
                <img
                  src={r.img}
                  alt={r.caption}
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-black/40 backdrop-blur-md text-white border border-white/10 text-xs font-medium px-4 py-2 rounded-full uppercase tracking-wider">
                    Antes
                  </span>
                </div>
                <div className="absolute top-6 right-6">
                  <span className="bg-[rgb(157,111,88)]/90 backdrop-blur-md text-white text-xs font-medium px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                    Depois
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-normal text-xl mb-4 drop-shadow-lg">{r.caption}</p>
                  <div className="h-0.5 w-12 bg-[rgb(157,111,88)] group-hover:w-24 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center bg-[#141414] rounded-[2rem] p-10 max-w-4xl mx-auto border border-white/5">
          <p className="text-xl text-gray-300 mb-8 font-light italic">
            "Essas transformações são fruto de dedicação, acompanhamento personalizado e um método que realmente
            funciona."
          </p>
          <button
            onClick={() => scrollToId('contato')}
            className="group inline-flex items-center gap-3 text-[rgb(157,111,88)] font-medium text-lg hover:text-white transition-colors duration-300"
          >
            <span className="border-b border-[rgb(157,111,88)] group-hover:border-white pb-1 transition-all">
              A próxima história de sucesso pode ser a sua!
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
