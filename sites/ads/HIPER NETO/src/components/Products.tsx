import { Beef, Cake, Apple, Wine } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/556282034298';

const products: {
  icon: typeof Beef;
  img: string;
  title: string;
  desc: string;
  tags: string[];
}[] = [
  {
    icon: Beef,
    img: 'https://storage.lucasmendes.dev/site-sp/hiper%20neto%2Fimg%2Fsupermercado-frutas-verduras.webp',
    title: 'Açougue Premium',
    desc: 'Cortes nobres e frescos diariamente. Carnes selecionadas com qualidade garantida para sua família.',
    tags: ['Cortes Especiais', 'Frescor Diário', 'Higiene Total'],
  },
  {
    icon: Cake,
    img: 'https://storage.lucasmendes.dev/site-sp/hiper%20neto%2Fimg%2Fbebe-chapeu-pao.webp',
    title: 'Padaria Artesanal',
    desc: 'Pães quentinhos e produtos de confeitaria preparados com carinho. Sabor e tradição em cada mordida.',
    tags: ['Pães Frescos', 'Bolos Caseiros', 'Confeitaria'],
  },
  {
    icon: Apple,
    img: 'https://storage.lucasmendes.dev/site-sp/hiper%20neto%2Fimg%2Fsupermercado-frutas-verduras-frente.webp',
    title: 'Hortifrúti Selecionado',
    desc: 'Frutas, verduras e legumes fresquinhos todos os dias. Produtos naturais para uma vida mais saudável.',
    tags: ['Produtos Frescos', 'Variedade', 'Qualidade'],
  },
  {
    icon: Wine,
    img: 'https://storage.lucasmendes.dev/site-sp/hiper%20neto%2Fimg%2Fsupermercado-frutas-legumes.webp',
    title: 'Bebidas e Frios',
    desc: 'Grande variedade de bebidas geladas e frios de qualidade. Tudo o que você precisa em um só lugar.',
    tags: ['Sempre Gelado', 'Grandes Marcas', 'Promoções'],
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-50 text-[rgb(238,27,34)] px-4 py-2 rounded-full mb-4 font-semibold text-sm">
            NOSSOS PRODUTOS
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tudo o que você precisa, <span className="text-[rgb(238,27,34)]">em um só lugar</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubra a variedade e qualidade dos nossos departamentos especializados
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-[rgb(238,27,34)] p-3 rounded-xl">
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{p.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-red-50 text-[rgb(238,27,34)] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[rgb(238,27,34)] to-red-600 rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <div className="flex justify-center mb-6">
            <img
              src="https://storage.lucasmendes.dev/site-sp/hiper%20neto%2Fimg%2Fcaminhao-supermercado-entrega.webp"
              alt="Entrega Hiper Neto"
              className="h-48 w-auto rounded-xl shadow-lg"
            />
          </div>
          <h3 className="text-3xl font-bold mb-4">Atendemos toda a região</h3>
          <p className="text-xl mb-6 text-white/90">
            Campinorte • Alto Horizonte • Nova Iguaçu de Goiás • Mara Rosa
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[rgb(238,27,34)] px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105 font-semibold text-lg inline-block"
          >
            Faça Seu Pedido Agora
          </a>
        </div>
      </div>
    </section>
  );
}
