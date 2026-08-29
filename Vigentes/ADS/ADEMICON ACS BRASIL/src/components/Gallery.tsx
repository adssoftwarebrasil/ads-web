export default function Gallery() {
  const categories = [
    {
      title: 'Consórcio Imobiliário',
      description: 'Realize o sonho da casa própria com planejamento e segurança',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=acs%2Fimg%2Facs_img_vista-traseira-da-familia-abracando-e-admirando-sua-casa.jpg&version_id=null',
      alt: 'Família admirando sua nova casa',
      color: 'from-[rgb(87,168,45)] to-green-600'
    },
    {
      title: 'Consórcio de Veículos',
      description: 'Conquiste seu veículo novo ou seminovo de forma econômica',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=acs%2Fimg4%2Facs_img_carro-3d-na-cidade-vibrante-a-noite_ultra.webp&version_id=null',
      alt: 'Carro novo na cidade',
      color: 'from-[rgb(253,192,20)] to-yellow-600'
    },
    {
      title: 'Sonhos Realizados',
      description: 'Aposentadoria planejada e viagens inesquecíveis com sua família',
      image: 'https://storage.lucasmendes.dev/site-sp/acs%2Fimg%2Fviagempraia.png',
      alt: 'Família feliz viajando',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[rgb(87,168,45)]">
          Realize seus Sonhos
        </h2>
        <div className="w-24 h-1 bg-[rgb(253,192,20)] mx-auto mb-4"></div>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
          Veja como nossos clientes estão conquistando seus objetivos com consórcio
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${category.color} mb-3 text-sm font-semibold`}>
                    {category.title}
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[rgb(87,168,45)] to-[rgb(253,192,20)] rounded-2xl p-8 max-w-3xl mx-auto shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Pronto para realizar seu sonho?
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Entre em contato conosco e descubra como o consórcio pode te ajudar a conquistar seus objetivos
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-[rgb(87,168,45)] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Fale Conosco Agora
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-scale {
          animation: fade-in-scale 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
