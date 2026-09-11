import { WHATSAPP_NUMBER } from '../lib/constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const products = [
  {
    image: "https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=fort-das-cestas%2F14%2C99.jpeg&version_id=null",
    title: "Kit de Limpeza 1",
    price: 14.99,
  },
  {
    image: "https://storage.lucasmendes.dev/site-sp/fort-das-cestas%2Fimg%2Fpacote-produtos-limpeza-65.webp",
    title: "Kit de Limpeza 2",
    price: 65.00,
  },
  {
    image: "https://storage.lucasmendes.dev/site-sp/fort-das-cestas%2Fimg%2Fprodutos-limpeza-promocao.webp",
    title: "Kit Limpeza Promocional",
    price: null,
  },
];

export default function AdditionalProducts() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-12 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-4">
            Produtos Extras
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Produtos Avulsos e Kits
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-${index + 1} group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-500`}>
              <div className="overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
                {product.price && (
                  <div className="text-2xl font-extrabold text-primary mb-4">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </div>
                )}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre: ${product.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary text-white py-3 rounded-xl text-center hover:bg-primary-dark transition-colors font-medium text-sm"
                >
                  Consultar
                </a>
              </div>
            </div>
          ))}

          <div className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-4 bg-primary rounded-2xl p-8 flex flex-col justify-center items-center text-center text-white shadow-lg`}>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Produtos Personalizados</h3>
            <p className="mb-6 text-white/80 text-sm">Precisando de um kit personalizado? Entre em contato!</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de um orçamento para produtos personalizados.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-dark px-6 py-2.5 rounded-full hover:bg-accent transition-colors font-medium text-sm"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
