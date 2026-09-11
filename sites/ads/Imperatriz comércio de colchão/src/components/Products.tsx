import { MessageCircle } from 'lucide-react';

interface Product {
  name: string;
  image: string;
  description: string;
  tags: string[];
  whatsapp: string;
}

const products: Product[] = [
  {
    name: 'Colchão Ortobom Freedom',
    image:
      'https://storage.lucasmendes.dev/site-sp/imperatriz%20colchoes%2Fimg%2Fcolchao-ortobom-freedom.webp',
    description:
      'Tecnologia de ponta com molas ensacadas para máximo conforto e durabilidade',
    tags: ['Molas Ensacadas', 'Alto Conforto', 'Garantia Estendida'],
    whatsapp:
      'https://wa.me/553492322203?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Colch%C3%A3o%20Ortobom%20Freedom',
  },
  {
    name: 'Colchão Molas Ensacadas',
    image:
      'https://storage.lucasmendes.dev/site-sp/imperatriz%20colchoes%2Fimg%2Fcolchao-molas-ensacadas.webp',
    description:
      'Sistema inteligente de molas que se adapta perfeitamente ao seu corpo',
    tags: ['Suporte Personalizado', 'Durabilidade Superior', 'Conforto Térmico'],
    whatsapp:
      'https://wa.me/553492322203?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Colch%C3%A3o%20Molas%20Ensacadas',
  },
  {
    name: 'Cama Box Casal',
    image:
      'https://storage.lucasmendes.dev/site-sp/imperatriz%20colchoes%2Fimg%2Fcama-casal-box.webp',
    description:
      'Conjunto completo com colchão e base box para máximo conforto',
    tags: ['Conjunto Completo', 'Design Moderno', 'Pronta Entrega'],
    whatsapp:
      'https://wa.me/553492322203?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Cama%20Box%20Casal',
  },
  {
    name: 'Cama Box com Baú',
    image:
      'https://storage.lucasmendes.dev/site-sp/imperatriz%20colchoes%2Fimg%2Fcama-box-bau.webp',
    description: 'Praticidade e conforto com espaço extra para organização',
    tags: ['Baú Espaçoso', 'Economia de Espaço', 'Funcionalidade'],
    whatsapp:
      'https://wa.me/553492322203?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Cama%20Box%20com%20Ba%C3%BA',
  },
  {
    name: 'Cama Completa Premium',
    image:
      'https://storage.lucasmendes.dev/site-sp/imperatriz%20colchoes%2Fimg%2Fcama-colchao-preto.webp',
    description: 'Elegância e sofisticação para transformar seu quarto',
    tags: ['Design Exclusivo', 'Acabamento Premium', 'Conforto Total'],
    whatsapp:
      'https://wa.me/553492322203?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Cama%20Completa%20Premium',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossos Produtos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Colchões, bases, baús, cabeceiras, travesseiros e camaria em geral
            das melhores marcas
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((p) => (
            <div
              key={p.name}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {p.name}
                </h3>
                <p className="text-gray-600 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-50 text-[rgb(0,0,160)] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={p.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[rgb(0,0,160)] hover:bg-[rgb(0,0,200)] text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Consultar Preço
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[rgb(0,0,160)] to-[rgb(0,0,200)] rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Não Encontrou o Que Procura?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Temos uma variedade completa de produtos. Entre em contato e
            encontraremos a solução perfeita para você!
          </p>
          <a
            href="https://wa.me/553492322203?text=Olá!%20Gostaria%20de%20conhecer%20outros%20produtos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[rgb(0,0,160)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
