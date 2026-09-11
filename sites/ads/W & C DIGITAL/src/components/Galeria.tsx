import { useScrollAnimation } from '../hooks/useScrollAnimation';

const galeriaImages = [
  { id: 1, url: 'https://storage.lucasmendes.dev/site-sp/wec%20digital%2Fimg3%2Fcadeiras-bicicletas-berco.webp' },
  { id: 2, url: 'https://storage.lucasmendes.dev/site-sp/wec%20digital%2Fimg3%2Fcadeiras-bicicletas-moveis.webp' },
  { id: 3, url: 'https://storage.lucasmendes.dev/site-sp/wec%20digital%2Fimg3%2Fcolchao-ventiladores-eletrodomesticos-loja.webp' },
  { id: 4, url: 'https://storage.lucasmendes.dev/site-sp/wec%20digital%2Fimg3%2Feletrodomesticos-loja-prateleira.webp' },
  { id: 5, url: 'https://storage.lucasmendes.dev/site-sp/wec%20digital%2Fimg3%2Festante-sala-moderna.webp' },
  { id: 8, url: 'https://storage.lucasmendes.dev/site-sp/wec%20digital%2Fimg3%2Ffornos-colchoes.webp' },
  { id: 9, url: 'https://storage.lucasmendes.dev/site-sp/wec%20digital%2Fimg3%2Fgeladeiras-loja-eletrodomesticos.webp' },
  { id: 10, url: 'https://storage.lucasmendes.dev/site-sp/wec%20digital%2Fimg3%2Floja-eletrodomesticos-colchao.webp' },
  { id: 11, url: 'https://storage.lucasmendes.dev/site-sp/wec%20digital%2Fimg3%2Floja-eletronicos-prateleiras.webp' },
  { id: 13, url: 'https://storage.lucasmendes.dev/site-sp/wec%20digital%2Fimg3%2Fmoveis-sala-jantar.webp' },
  { id: 14, url: 'https://storage.lucasmendes.dev/site-sp/wec%20digital%2Fimg3%2Ftelevisores-expostos-promocao.webp' },
  { id: 15, url: 'https://storage.lucasmendes.dev/site-sp/wec%20digital%2Fimg3%2Fventilador-eletroportateis-prateleira.webp' }
];

export const Galeria = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conheça Nossa Loja
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Visite-nos e veja pessoalmente a variedade de produtos eletrônicos, eletrodomésticos e móveis
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galeriaImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-square cursor-pointer ${
                isVisible ? 'animate-in fade-in scale-in duration-500' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={image.url}
                alt="Imagem da galeria da loja"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay sutil apenas para dar um efeito de clique/foco, sem texto */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Venha nos visitar e conhecer toda a qualidade dos nossos produtos
          </p>
          <a
            href="https://maps.google.com/?q=W%26C+Digital+S%C3%A3o+Miguel+RN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(237,27,38)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[rgb(217,17,28)] transition-colors duration-200"
          >
            Ver Rota
          </a>
        </div>
      </div>
    </section>
  );
};