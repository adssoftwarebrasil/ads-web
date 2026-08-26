import { Expand, MapPin } from 'lucide-react';
import { scrollToId } from '../lib/scroll';

const imagens: { src: string; alt: string; delay: string }[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/La%20Toka%20Espetaria%2Fimgi_17_541230117_1246821920579014_3708837866495902210_n.jpg',
    alt: 'Galeria 1',
    delay: '0ms',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/La%20Toka%20Espetaria%2Fimgi_24_527414682_1211545927408109_6363801687364835808_n.jpg',
    alt: 'Galeria 2',
    delay: '100ms',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/La%20Toka%20Espetaria%2Fimgi_29_522311127_17930849082063868_4342407514031971813_n.jpg',
    alt: 'Galeria 3',
    delay: '200ms',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/La%20Toka%20Espetaria%2Fimgi_34_511528165_17927989833063868_2567211518560652721_n.jpg',
    alt: 'Galeria 4',
    delay: '300ms',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/La%20Toka%20Espetaria%2Fimgi_35_510150741_18466828420077391_1142681185012420511_n.jpg',
    alt: 'Galeria 5',
    delay: '400ms',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/La%20Toka%20Espetaria%2Fimgi_9_481708950_122138541296426027_2863394046027693192_n.jpg',
    alt: 'Galeria 6',
    delay: '500ms',
  },
];

export default function Galeria() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">Veja o Que Te Espera</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mb-16">
          {imagens.map(({ src, alt, delay }) => (
            <div
              key={alt}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-700 hover:scale-105 translate-y-0 opacity-100"
              style={{ transitionDelay: delay, height: '350px' }}
            >
              <img src={src} alt={alt} className="w-full h-full object-cover image-zoom" loading="lazy" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                  <Expand className="lucide lucide-expand w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center transform transition-all duration-1000 delay-700 translate-y-0 opacity-100">
          <button
            onClick={() => scrollToId('localizacao')}
            className="group inline-flex items-center gap-3 bg-[#F93131] hover:bg-[#C41E3A] text-white text-lg px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <MapPin className="lucide lucide-map-pin w-6 h-6 group-hover:animate-bounce" />
            Venha Conhecer Nosso Espaço
          </button>
          <p className="mt-4 text-sm text-[#2D2D2D] opacity-75">
            Estamos no Setor Bueno e no Jardim Atlântico esperando por você
          </p>
        </div>
      </div>
    </section>
  );
}
