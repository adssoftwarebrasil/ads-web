import { Store as StoreIcon } from 'lucide-react';

interface Gallery {
  image: string;
  title: string;
  subtitle: string;
}

const gallery: Gallery[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/imperatriz%20colchoes%2Fimg%2Finterior-loja-colchoes-ortobom.webp',
    title: 'Showroom Ortobom',
    subtitle: 'Produtos oficiais com garantia de fábrica',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/imperatriz%20colchoes%2Fimg%2Finterior-colchoes-loja-exposicao.webp',
    title: 'Exposição Completa',
    subtitle: 'Teste e compare todos os modelos',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/imperatriz%20colchoes%2Fimg%2Finterior-loja-colchoes-ofertas.webp',
    title: 'Ofertas Especiais',
    subtitle: 'As melhores promoções da região',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/imperatriz%20colchoes%2Fimg%2Floja-colchoes-ortobom-calcada.webp',
    title: 'Fácil Acesso',
    subtitle: 'Localização privilegiada na Av. Afonso Pena',
  },
];

const benefits: string[] = [
  'Teste todos os colchões antes de comprar',
  'Consultoria especializada gratuita',
  'Produtos em pronta entrega',
  'Condições especiais de pagamento',
];

export default function Store() {
  return (
    <section
      id="loja"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[rgb(0,0,160)] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <StoreIcon className="w-4 h-4" />
            <span>Conheça Nossa Loja</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ambiente Confortável e Acolhedor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visite nossa loja física e teste pessoalmente cada produto com o
            auxílio de nossa equipe especializada
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {gallery.map((g) => (
            <div
              key={g.title}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={g.image}
                  alt={g.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{g.title}</h3>
                  <p className="text-gray-200">{g.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Visite Nossa Loja em Uberlândia
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[rgb(0,0,160)]/10 p-3 rounded-lg">
                    <StoreIcon className="w-6 h-6 text-[rgb(0,0,160)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Endereço</p>
                    <p className="text-gray-600">Av. Afonso Pena, 1367</p>
                    <p className="text-gray-600">
                      Bairro Nossa Senhora Aparecida
                    </p>
                    <p className="text-gray-600">Uberlândia - MG</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[rgb(0,0,160)] to-[rgb(0,0,200)] rounded-xl p-8 text-white">
              <h4 className="text-xl font-bold mb-6">
                Por Que Visitar Nossa Loja?
              </h4>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
