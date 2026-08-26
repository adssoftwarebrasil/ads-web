import { Package, Zap, Cog, Wrench, Bike, Shield } from 'lucide-react';

const products = [
  {
    icon: Package,
    image:
      'https://storage.lucasmendes.dev/site-sp/coimbra%20motopecas/caixas-kits-palete.webp',
    title: 'Óleos e Lubrificantes',
    text: 'Óleos de motor, transmissão e lubrificantes de alta qualidade para máximo desempenho',
  },
  {
    icon: Zap,
    image:
      'https://storage.lucasmendes.dev/site-sp/coimbra%20motopecas/bobina-ignicao-moto.webp',
    title: 'Peças Elétricas',
    text: 'Bobinas de ignição, sensores, bombas de combustível e toda linha elétrica',
  },
  {
    icon: Cog,
    image:
      'https://storage.lucasmendes.dev/site-sp/coimbra%20motopecas/gavetas-azuis-organizadas.webp',
    title: 'Rolamentos e Kits',
    text: 'Rolamentos, kits de transmissão, correntes e coroas de todas as marcas',
  },
  {
    icon: Wrench,
    image:
      'https://storage.lucasmendes.dev/site-sp/coimbra%20motopecas/sensor-carro-combustivel.webp',
    title: 'Cabos e Acessórios',
    text: 'Cabos de embreagem, acelerador, freio e diversos acessórios para sua moto',
  },
  {
    icon: Bike,
    image:
      'https://storage.lucasmendes.dev/site-sp/coimbra%20motopecas/prateleiras-coloridas-roupas.webp',
    title: 'Carenagens',
    text: 'Carenagens originais e alternativas para diversos modelos de motocicletas',
  },
  {
    icon: Shield,
    image:
      'https://storage.lucasmendes.dev/site-sp/coimbra%20motopecas/capacetes-motocicleta-prateleiras.webp',
    title: 'Equipamentos de Segurança',
    text: 'Capacetes, luvas e equipamentos de proteção para sua segurança',
  },
];

const stockImages = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/coimbra%20motopecas/estoque-almoxarifado-prateleiras-caixas.webp',
    alt: 'Estoque organizado',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/coimbra%20motopecas/prateleiras-armazem-caixas.webp',
    alt: 'Prateleiras organizadas',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/coimbra%20motopecas/caixas-papelao-empilhadas-estoque.webp',
    alt: 'Estoque de caixas',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(2,73,137)] mb-4">
              Nossos Produtos e Serviços
            </h2>
            <div className="w-24 h-1 bg-[rgb(255,236,2)] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Oferecemos uma linha completa de produtos para manter sua
              motocicleta sempre em perfeitas condições
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product) => (
              <div
                key={product.title}
                className="group bg-[rgb(246,252,255)] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(2,73,137)]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <product.icon className="w-12 h-12" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[rgb(2,73,137)] mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{product.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-[rgb(2,73,137)] to-[rgb(1,58,109)] rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Grande Estoque Sempre Disponível
            </h3>
            <p className="text-xl mb-8 text-[rgb(246,252,255)] max-w-3xl mx-auto">
              Mantemos um amplo estoque com variedade de produtos das melhores
              marcas, garantindo disponibilidade imediata para suas necessidades
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {stockImages.map((img) => (
                <div
                  key={img.src}
                  className="relative h-32 rounded-lg overflow-hidden"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <a
              href="http://wa.me/559591557077?text=Olá! Gostaria de consultar a disponibilidade de produtos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(255,236,2)] text-[rgb(2,73,137)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(255,246,102)] transition-all duration-300 shadow-lg"
            >
              Consulte Disponibilidade
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
