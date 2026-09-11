const INSTAGRAM_URL = 'https://www.instagram.com/vipcolordesigner';

const galleryImages = [
  'https://storage.lucasmendes.dev/site-sp/vip%20color/img/sacolas-coloridas-fitas.webp',
  'https://storage.lucasmendes.dev/site-sp/vip%20color/img/sacolas-rosas-lacos.webp',
  'https://storage.lucasmendes.dev/site-sp/vip%20color/img/sacolas-flores-moda.webp',
  'https://storage.lucasmendes.dev/site-sp/vip%20color/img/sacola-moda-infantil.webp',
  'https://storage.lucasmendes.dev/site-sp/vip%20color/img/sacola-transparente-personalizada.webp',
  'https://storage.lucasmendes.dev/site-sp/vip%20color/img/sacolas-papel-tigre.webp',
  'https://storage.lucasmendes.dev/site-sp/vip%20color/img/cartoes-vermelhos-planta.webp',
  'https://storage.lucasmendes.dev/site-sp/vip%20color/img/envelopes-papelaria.webp',
  'https://storage.lucasmendes.dev/site-sp/vip%20color/img/caixa-joias-cinza.webp',
  'https://storage.lucasmendes.dev/site-sp/vip%20color/img/flores-marcador-coracao.webp',
  'https://storage.lucasmendes.dev/site-sp/vip%20color/img/sacola-etiquetas-pretas.webp',
  'https://storage.lucasmendes.dev/site-sp/vip%20color/img/sacola-plastica-dourada.webp',
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-[rgb(229,198,99)] font-semibold text-sm uppercase tracking-wider">
              Portfólio
            </span>
            <div className="h-1 w-20 bg-[rgb(229,198,99)] mt-2 mx-auto"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(3,101,84)] mb-6">
            Nossos Trabalhos Realizados
          </h2>
          <p className="text-lg text-gray-700">
            Confira alguns dos projetos que desenvolvemos para nossos clientes. Cada
            embalagem é única e pensada estrategicamente para valorizar a marca.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={image}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-semibold text-sm"></span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(3,101,84)] text-white px-8 py-4 rounded-full hover:bg-[rgb(229,198,99)] hover:text-[rgb(3,101,84)] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Ver Mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
