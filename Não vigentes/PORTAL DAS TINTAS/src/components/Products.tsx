import { products } from '../data/products';

export default function Products() {
  return (
    <section id="produtos" className="py-12 sm:py-16 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 animate-slideUp">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-orange-100 text-orange-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              Catálogo Completo
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 px-4">
            Nossos Produtos
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Conheça nossa linha completa de tintas e acessórios das melhores marcas do mercado
          </p>
          <a
            href="https://wa.me/5527997073666?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold hover:bg-orange-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            Falar com Especialista
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-orange-600 transition-all duration-300 flex flex-col animate-slideUp"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative overflow-hidden bg-gray-50 aspect-square">
                <img
                  src={product.img}
                  alt={product.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {product.destaque && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-orange-600 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold shadow-lg">
                    Destaque
                  </div>
                )}
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4 min-h-[2.5rem] sm:min-h-[3.5rem] line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
                  {product.title}
                </h3>
                <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-6 flex-grow">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start text-xs sm:text-sm text-gray-600">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600 mr-1.5 sm:mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-2.5 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg group/button mt-auto"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                  </svg>
                  <span className="group-hover/button:translate-x-0.5 transition-transform duration-300">
                    Solicitar Orçamento
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-12 sm:mt-16 text-center bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-6 sm:p-8 md:p-12 text-white animate-slideUp"
          style={{ animationDelay: '0.6s' }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 px-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-6 opacity-95 px-4">
            Temos mais de 6.000 cores disponíveis. Entre em contato para consultar outros produtos!
          </p>
          <a
            href="https://wa.me/5527997073666?text=Olá!%20Gostaria%20de%20consultar%20outros%20produtos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
            </svg>
            Consultar Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  );
}
