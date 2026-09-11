import { Eye, Sparkles, Heart, MessageCircle } from 'lucide-react';
import { WHATSAPP_SEND, WhatsAppIcon } from '../shared';

interface Product {
  image: string;
  category: string;
  title: string;
  description: string;
}

const products: Product[] = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/casarustica/casarustica-alteracao/mesa-redonda-com-giratorio.png',
    category: 'Mesas e Cadeiras',
    title: 'Mesa Redonda com Giratório',
    description: 'Mesa redonda 1,60m com 06 cadeiras clean',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/casarustica/casarustica-alteracao/mesa-industrial.png',
    category: 'Mesas e Cadeiras',
    title: 'Mesa Industrial',
    description: 'Mesa retangular industrial de 3x1',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/casarustica%2FMesa%20Redonda%20com%20Girato%CC%81rio2.avif',
    category: 'Mesas e Cadeiras',
    title: 'Mesa Redonda com Giratório',
    description: 'Mesa redonda 2m com 08 cadeiras, madeira colorida',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/casarustica/casarustica-alteracao/mesa-redonda.png',
    category: 'Mesas e Cadeiras',
    title: 'Mesa Redonda',
    description: 'Mesa redonda de 1,60mt',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/casarustica/casarustica-alteracao/mesa-mineira.png',
    category: 'Mesas e Cadeiras',
    title: 'Mesa Mineira',
    description: 'Mesa mineira com 08 cadeiras',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/casarustica%2F%20Cristaleiras1.avif',
    category: 'Cristaleiras',
    title: 'Cristaleira',
    description: 'Cristaleiras com vidros para exibir suas peças mais preciosas',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/casarustica%2F%20Cristaleiras2.avif',
    category: 'Cristaleiras',
    title: 'Cristaleira Elegante',
    description: 'Cristaleiras com design elegante e sofisticado',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/casarustica%2FCristaleiras3.avif',
    category: 'Cristaleiras',
    title: 'Cristaleira Moderna',
    description: 'Cristaleiras modernas com iluminação',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/casarustica%2FCristaleiras4.avif',
    category: 'Cristaleiras',
    title: 'Cristaleira Rústica',
    description: 'Cristaleiras rústicas com madeira de demolição',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/casarustica/casarustica-alteracao/jogo-sofa-master.png',
    category: 'Sofás',
    title: 'Jogo Sofá Master',
    description: 'Sofá grande 2m x 0,85m e 2 poltronas individuais',
  },
  {
    image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=casarustica%2Fglobomesarustica.png&version_id=null',
    category: 'Decoração',
    title: 'Itens de Decoração',
    description: 'Peças decorativas em madeira de demolição',
  },
  {
    image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=casarustica%2Fdecoracaoatersanato.png&version_id=null',
    category: 'Decoração',
    title: 'Decoração Artesanal',
    description: 'Itens artesanais para dar charme ao seu espaço',
  },
];

const badges = [
  {
    icon: Sparkles,
    iconWrap: 'bg-[rgb(5,86,77)]',
    wrap: 'from-[rgb(5,86,77)]/5 to-transparent border-[rgb(5,86,77)]/10',
    title: 'Móveis Únicos',
    text: 'Cada peça é única com veios e texturas naturais da madeira',
  },
  {
    icon: Heart,
    iconWrap: 'bg-[rgb(248,177,1)]',
    wrap: 'from-[rgb(248,177,1)]/5 to-transparent border-[rgb(248,177,1)]/10',
    title: 'Feito com Amor',
    text: 'Artesanato de qualidade com atenção aos detalhes',
  },
  {
    icon: MessageCircle,
    iconWrap: 'bg-[rgb(5,86,77)]',
    wrap: 'from-[rgb(5,86,77)]/5 to-transparent border-[rgb(5,86,77)]/10',
    title: 'Atendimento Premium',
    text: 'Consultoria personalizada para escolher o móvel perfeito',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-40 left-10 w-96 h-96 bg-[rgb(5,86,77)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-[rgb(248,177,1)]/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-[rgb(248,177,1)] font-semibold text-sm tracking-widest uppercase">Nosso Catálogo</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(5,86,77)] mb-6">Conheça Algumas de Nossas Peças</h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-[rgb(248,177,1)]"></div>
            <div className="w-3 h-3 bg-[rgb(248,177,1)] rounded-full"></div>
            <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-[rgb(248,177,1)]"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Entre em contato com nossa equipe para que possamos apresentar todas especificações dos produtos.{' '}
            <span className="font-semibold text-[rgb(5,86,77)]">Móveis atemporais</span> e feitos com Madeira de Demolição Peroba Rosa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {products.map((p, i) => (
            <div key={i} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[rgb(248,177,1)] to-[rgb(5,86,77)] rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden">
                <div className="relative aspect-square overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm font-medium">Ver Detalhes</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[rgb(5,86,77)] shadow-lg">
                      <Sparkles className="w-3 h-3 text-[rgb(248,177,1)]" />
                      {p.category}
                    </span>
                  </div>
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white" aria-label="Adicionar aos favoritos">
                    <Heart className="w-5 h-5 text-[rgb(184,11,41)]" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[rgb(5,86,77)] mb-2 line-clamp-2 group-hover:text-[rgb(4,70,63)] transition-colors">{p.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full font-medium">Sustentável</span>
                    <span className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-full font-medium">Sob Medida</span>
                  </div>
                  <button className="group/btn relative w-full overflow-hidden bg-gradient-to-r from-[rgb(248,177,1)] to-[rgb(255,197,51)] text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[rgb(248,177,1)]/30 transform hover:scale-[1.02]">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>Solicitar Orçamento</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgb(255,197,51)] to-[rgb(248,177,1)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className={`bg-gradient-to-br ${b.wrap} p-6 rounded-2xl border`}>
                <div className={`w-12 h-12 ${b.iconWrap} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[rgb(5,86,77)] mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.text}</p>
              </div>
            );
          })}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(5,86,77)] to-[rgb(4,70,63)] rounded-3xl"></div>
          <div className="relative p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Não encontrou o que procurava?</h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Temos muito mais opções! Entre em contato pelo WhatsApp e conheça todo nosso catálogo de móveis exclusivos.
            </p>
            <a
              href={WHATSAPP_SEND}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[rgb(248,177,1)] to-[rgb(255,197,51)] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-[rgb(248,177,1)]/50 transform hover:scale-105 transition-all duration-300"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Ver Mais Produtos no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
