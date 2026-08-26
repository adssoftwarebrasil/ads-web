import { MessageCircle } from 'lucide-react';

const cards = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/goes%20flex%2Fimg%2Fcama-colchao-travesseiros.webp',
    title: 'Ambiente Climatizado',
    sub: 'Visite nossa loja no Centro',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/goes%20flex%2Fimg%2Fvitrine-colchoes-propaganda.webp',
    title: 'Tecnologia em Exposição',
    sub: 'Conheça as camadas internas',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/goes%20flex%2Fimg%2Fexposicao-colchoes-loja.webp',
    title: 'Variedade de Modelos',
    sub: 'Solteiro, Casal e King',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/goes%20flex%2Fimg%2Fcama-colcha-travesseiros.webp',
    title: 'Acabamento Premium',
    sub: 'Design e sofisticação',
  },
];

export default function Showroom() {
  return (
    <section id="showroom" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[rgb(240,53,41)] font-bold tracking-widest uppercase text-xs md:text-sm mb-2 block">
            Nossa Loja Física
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conheça Nosso Showroom</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Venha nos visitar na R. Itaporanga, 351. Um ambiente preparado para você testar e aprovar o seu próximo
            colchão.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((c) => (
            <div
              key={c.title}
              className="relative group h-80 md:h-96 rounded-2xl overflow-hidden shadow-md cursor-pointer"
            >
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-full object-cover transition-transform duration-700 scale-100"
              />
              <div className="absolute inset-0 bg-black transition-opacity duration-300 opacity-20"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="transition-transform duration-300 translate-y-0">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{c.title}</h3>
                  <p className="text-gray-200 text-sm font-medium opacity-90">{c.sub}</p>
                </div>
                <div className="absolute bottom-8 transition-all duration-300 opacity-0 translate-y-4">
                  <a
                    href="http://wa.me/557988094313"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[rgb(240,53,41)] text-white px-6 py-3 rounded-full font-bold hover:bg-red-600 transition-colors shadow-lg"
                  >
                    <MessageCircle className="lucide lucide-message-circle" width={20} height={20} />
                    Agendar Visita
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
