import { Sparkles, ArrowRight } from 'lucide-react';

const products = [
  { img: 'produto-remedio-manipulados.webp', title: 'Medicamentos Manipulados', desc: 'Fórmulas personalizadas para suas necessidades específicas' },
  { img: 'produto-remedio-homeopatico.webp', title: 'Homeopáticos', desc: 'Tratamentos naturais e eficazes para toda a família' },
  { img: 'produto-remedio-suplementos.webp', title: 'Suplementos', desc: 'Nutrição de qualidade para seu bem-estar' },
  { img: 'produto-remedio-nutraceuticos.webp', title: 'Nutracêuticos', desc: 'Compostos bioativos para uma vida mais saudável' },
  { img: 'produto-remedio-beauty-cosmeticos.webp', title: 'Beauty & Cosméticos', desc: 'Beleza e cuidados personalizados para sua pele' },
  { img: 'produto-remedio-perfumes.webp', title: 'Perfumes Exclusivos', desc: 'Fragrâncias únicas desenvolvidas especialmente para você' },
  { img: 'produto-remedio-fitness.webp', title: 'Fitness & Performance', desc: 'Potencialize seus resultados com produtos especializados' },
  { img: 'produto-remedio-florais.webp', title: 'Florais', desc: 'Equilíbrio emocional através da terapia floral' },
  { img: 'produto-remedio-oleos-essenciais.webp', title: 'Óleos Essenciais', desc: 'Aromaterapia pura para seu bem-estar' },
  { img: 'produto-remedio-chas.webp', title: 'Chás Medicinais', desc: 'Blends naturais para cada necessidade' },
  { img: 'produto-remedio-articulacao.webp', title: 'Articulação & Mobilidade', desc: 'Cuidado especializado para suas articulações' },
  { img: 'produto-remedio-chocolate-funcional-manipulado.webp', title: 'Chocolate Funcional', desc: 'Prazer e saúde em cada pedaço' },
  { img: 'produto-remedio-desodorantes-0-porcento-aluminio.webp', title: 'Desodorantes 0% Alumínio', desc: 'Proteção natural e eficaz' },
  { img: 'produto-remedio-aromatizadores.webp', title: 'Aromatizadores', desc: 'Ambientes perfumados com fragrâncias exclusivas' },
  { img: 'produto-remedio-perfumes-de-tecido.webp', title: 'Perfumes de Tecido', desc: 'Frescor duradouro para suas roupas' },
  { img: 'produto-remedio-manipulados-e-florais-pet.webp', title: 'Linha Pet', desc: 'Cuidados especiais para seu melhor amigo' },
];

const BASE = 'https://storage.lucasmendes.dev/site-sp/farmacia%20galeno/produtos/';

export default function Produtos() {
  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[rgb(230,217,182)] px-4 py-2 rounded-full mb-6">
            <Sparkles size={20} className="text-[rgb(40,84,48)]" />
            <span className="text-[rgb(40,84,48)] font-semibold">Nosso Catálogo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(40,84,48)] mb-6">Produtos que Transformam Vidas</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Do tradicional ao inovador, oferecemos uma linha completa de produtos desenvolvidos com excelência e personalização para atender suas necessidades únicas.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={BASE + product.img}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(40,84,48)]/90 via-[rgb(40,84,48)]/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:translate-y-0">
                  {product.title}
                </h3>
                <div className="flex flex-col gap-4 transition-all duration-300 opacity-0 translate-y-4">
                  <p className="text-white/90 text-sm leading-relaxed">{product.desc}</p>
                  <button className="w-full bg-white text-[rgb(40,84,48)] font-bold py-2 px-4 rounded-lg hover:bg-[rgb(230,217,182)] transition-colors flex items-center justify-center space-x-2">
                    <span>Saiba Mais</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-[rgb(164,190,125)] text-[rgb(40,84,48)] px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                Disponível
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#unidades"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[rgb(95,141,77)] text-white rounded-full font-semibold hover:bg-[rgb(40,84,48)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>Visite Nossa Loja</span>
          </a>
        </div>
      </div>
    </section>
  );
}
