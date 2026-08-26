import { WHATSAPP_URL, IMG } from '../constants';

interface GalleryItem {
  image: string;
  category: string;
  title: string;
}

const ITEMS: GalleryItem[] = [
  { image: IMG.aliancasCaixa, category: 'Alianças', title: 'Alianças de Ouro' },
  { image: IMG.anelDiamante, category: 'Anéis', title: 'Anel de Noivado com Diamante' },
  { image: IMG.correnteDeOuro, category: 'Correntes', title: 'Corrente com Pingente' },
  { image: IMG.aneisPedras, category: 'Anéis', title: 'Anéis com Pedras Preciosas' },
  { image: IMG.pulseiraGrosso, category: 'Pulseiras', title: 'Pulseira de Ouro Grossa' },
  { image: IMG.pingenteAgro, category: 'Personalizados', title: 'Pingente Personalizado Agro' },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-gradient-to-b from-[rgb(20,20,18)] to-[rgb(29,29,27)]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[rgb(186,176,97)] font-semibold text-sm uppercase tracking-wider">Nossa Galeria</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Conheça Nossas Criações</h2>
          <div className="h-1 w-24 bg-[rgb(186,176,97)] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg">Cada peça é única e criada com dedicação para você.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-lg aspect-square bg-[rgb(29,29,27)] border border-[rgb(186,176,97)]/20 hover:border-[rgb(186,176,97)] transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(29,29,27)] via-[rgb(29,29,27)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[rgb(186,176,97)] text-sm font-semibold">{item.category}</span>
                  <h3 className="text-white font-bold text-xl mt-1">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(186,176,97)] text-[rgb(29,29,27)] px-8 py-4 rounded-md hover:bg-[rgb(126,102,42)] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            Ver Mais Criações
          </a>
        </div>
      </div>
    </section>
  );
}
