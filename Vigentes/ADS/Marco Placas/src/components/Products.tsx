import { WHATSAPP_URL } from '../lib/scroll';

interface Product {
  title: string;
  description: string;
}

const products: Product[] = [
  { title: 'Sinalização Interna', description: 'Placas elegantes para ambientes corporativos e institucionais' },
  { title: 'Sinalização Externa', description: 'Visibilidade e durabilidade para fachadas e áreas externas' },
  { title: 'Painéis em ACM', description: 'Modernidade e resistência para sua comunicação visual' },
  { title: 'Letreiros e Luminosos', description: 'Destaque sua marca com iluminação profissional' },
  { title: 'Placas em Acrílico', description: 'Sofisticação e versatilidade em acabamento premium' },
  { title: 'Placas de Vidro', description: 'Elegância contemporânea para ambientes refinados' },
  { title: 'Placas de Homenagem', description: 'Eternize momentos importantes com qualidade' },
  { title: 'Placas de Inauguração', description: 'Registre marcos históricos com distinção' },
  { title: 'Placas de Cemitério', description: 'Memória permanente com respeito e qualidade' },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 md:py-28 px-5 md:px-10 bg-[rgb(240,240,240)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(3,0,0)] mb-4 transition-all duration-1000 opacity-100 translate-y-0">
            Nossas Soluções em Sinalização Visual
          </h2>
          <p className="text-gray-700 text-lg md:text-xl transition-all duration-1000 delay-200 opacity-100 translate-y-0">
            Do projeto à instalação, qualidade que marca presença
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {products.map((product, i) => (
            <div
              key={product.title}
              className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer opacity-100 translate-y-0"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-[rgb(167,28,31)] mb-3">{product.title}</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(167,28,31)] text-white px-8 py-4 rounded-md hover:bg-[rgb(120,20,22)] transition-all hover:scale-105 font-semibold text-lg shadow-lg"
          >
            Solicitar Orçamento Personalizado
          </a>
        </div>
      </div>
    </section>
  );
}
