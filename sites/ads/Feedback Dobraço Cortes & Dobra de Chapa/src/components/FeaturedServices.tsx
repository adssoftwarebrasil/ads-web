import { ArrowRight } from 'lucide-react';
import { scrollToId } from '../utils/scroll';

interface Featured {
  img: string;
  alt: string;
  title: string;
  desc: string;
}

const featured: Featured[] = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/dobracoplanaltina%2FCorte%20a%20Plasma%20de%20Alta%20Precisa%CC%83o.png',
    alt: 'Corte a Plasma de Alta Precisão',
    title: 'Corte a Plasma de Alta Precisão',
    desc: 'Projetos de Serralheria, peças e Componentes Industriais e muito mais!',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/dobracoplanaltina%2FCoberturas%20e%20Estruturas%20Meta%CC%81licas.png',
    alt: 'Coberturas e Estruturas Metálicas',
    title: 'Coberturas e Estruturas Metálicas',
    desc: 'Maior agilidade e qualidade na construção de telhados, galpões e estruturas customizadas.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/dobracoplanaltina%2FBobinas%20de%20Zinco.png',
    alt: 'Bobinas de Zinco',
    title: 'Bobinas de Zinco',
    desc: 'Qualidade, resistência e precisão técnica para você entregar serviços impecáveis!',
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-6">
            SERVIÇOS EM DESTAQUE
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções profissionais para suas necessidades em metal
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {featured.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{item.desc}</p>
                <button
                  onClick={() => scrollToId('contato')}
                  className="group/btn flex items-center gap-2 bg-[rgb(139,0,2)] text-white px-6 py-3 rounded-lg font-bold hover:bg-[rgb(180,0,3)] transition-all"
                >
                  <span>SOLICITAR ORÇAMENTO IMEDIATO</span>
                  <ArrowRight
                    width={18}
                    height={18}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
