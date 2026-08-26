import { Flame, Utensils, Beer, MapPin, UtensilsCrossed, LucideIcon } from 'lucide-react';
import { scrollToId } from '../lib/scroll';
import { useIfoodPicker } from '../lib/ifood';

interface Destaque {
  img: string;
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  desc: string;
  delay: string;
}

const destaques: Destaque[] = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/La%20Toka%20Espetaria%2Fimgi_10_473069010_122131967930426027_2147807271604572917_n.jpg',
    Icon: Flame,
    iconClass: 'lucide lucide-flame',
    title: 'Espetinhos Artesanais',
    desc: 'Feitos com ingredientes selecionados e muito sabor',
    delay: '0ms',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/La%20Toka%20Espetaria%2Fimgi_18_541584955_17935476054063868_647636228891871009_n.jpg',
    Icon: Utensils,
    iconClass: 'lucide lucide-utensils',
    title: 'Jantinhas Completas',
    desc: 'Refeições reconfortantes para seu dia a dia',
    delay: '200ms',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/La%20Toka%20Espetaria%2Fimgi_29_522311127_17930849082063868_4342407514031971813_n.jpg',
    Icon: Beer,
    iconClass: 'lucide lucide-beer',
    title: 'Cerveja Sempre Gelada',
    desc: 'Variedade de marcas para acompanhar',
    delay: '400ms',
  },
];

export default function Destaques() {
  const abrirIfood = useIfoodPicker();

  return (
    <section id="cardapio" className="py-20 bg-[#FFF5E6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">Nossos Destaques</h2>
          <p className="text-xl text-[#2D2D2D]">O que torna cada visita especial</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {destaques.map(({ img, Icon, iconClass, title, desc, delay }) => (
            <div
              key={title}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 translate-y-0 opacity-100"
              style={{ transitionDelay: delay }}
            >
              <div className="relative h-64 overflow-hidden">
                <img src={img} alt={title} className="w-full h-full object-cover image-zoom" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={abrirIfood}
                    className="bg-[#F93131] hover:bg-[#C41E3A] text-white px-6 py-3 rounded-full font-semibold transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg"
                  >
                    Peça Agora
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#F93131] p-2 rounded-lg">
                    <Icon className={`${iconClass} w-6 h-6 text-white`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">{title}</h3>
                </div>
                <p className="text-[#2D2D2D]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center transform transition-all duration-1000 delay-700 translate-y-0 opacity-100">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <button
              onClick={() => scrollToId('localizacao')}
              className="group inline-flex items-center gap-3 bg-[#F93131] hover:bg-[#C41E3A] text-white text-lg px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <MapPin className="lucide lucide-map-pin w-6 h-6 group-hover:animate-bounce" />
              Venha Experimentar Pessoalmente
            </button>
            <button
              onClick={abrirIfood}
              className="group inline-flex items-center gap-3 bg-[#EA1D2C] hover:bg-[#D01826] text-white text-lg px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <UtensilsCrossed className="lucide lucide-utensils-crossed w-6 h-6 group-hover:animate-bounce" />
              Pedir pelo iFood
            </button>
          </div>
          <p className="text-sm text-[#2D2D2D] opacity-75">
            A melhor experiência é ao vivo, no Setor Bueno ou no Jardim Atlântico
          </p>
        </div>
      </div>
    </section>
  );
}
