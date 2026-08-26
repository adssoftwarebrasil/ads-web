import { ChefHat, Gift, Wine, Store, Utensils, Coffee } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Servico {
  icon: LucideIcon;
  img: string;
  alt: string;
  title: string;
  desc: string;
}

const servicos: Servico[] = [
  {
    icon: ChefHat,
    img: 'https://storage.lucasmendes.dev/site-sp/rota%20do%20queijo/img/mesa-buffet-alimentos.webp',
    alt: 'Ilhas Gastronômicas',
    title: 'Ilhas Gastronômicas',
    desc: 'Montagens espetaculares de frios personalizadas para seu evento. Um show visual e de sabor que impressiona seus convidados.',
  },
  {
    icon: Gift,
    img: 'https://storage.lucasmendes.dev/site-sp/rota%20do%20queijo/img/tabua-queijos-frutas.webp',
    alt: 'Tábuas de Frios',
    title: 'Tábuas de Frios',
    desc: 'Tábuas artesanais personalizadas com queijos especiais, frios nobres e acompanhamentos selecionados para cada ocasião.',
  },
  {
    icon: Wine,
    img: 'https://storage.lucasmendes.dev/site-sp/rota%20do%20queijo/img/mesa-queijos-frios.webp',
    alt: 'Queijos Especiais',
    title: 'Queijos Especiais',
    desc: 'Seleção exclusiva de queijos nacionais e importados, doces, defumados e maturados, escolhidos criteriosamente.',
  },
  {
    icon: Store,
    img: 'https://storage.lucasmendes.dev/site-sp/rota%20do%20queijo/img/mesa-frios-banquetex.webp',
    alt: 'Empório Completo',
    title: 'Empório Completo',
    desc: 'Produtos diferenciados como molhos artesanais, cachaças premium, defumados e muito mais para você levar para casa.',
  },
  {
    icon: Utensils,
    img: 'https://storage.lucasmendes.dev/site-sp/rota%20do%20queijo/img/mesa-jantar-lustres.webp',
    alt: 'Restaurante',
    title: 'Restaurante',
    desc: 'Almoço executivo de segunda a sexta-feira em ambiente aconchegante, com pratos deliciosos e sobremesas irresistíveis.',
  },
  {
    icon: Coffee,
    img: 'https://storage.lucasmendes.dev/site-sp/rota%20do%20queijo/img/mesa-bufe-salgados-doces.webp',
    alt: 'Lanchonete',
    title: 'Lanchonete',
    desc: 'Lanches especiais preparados com ingredientes de qualidade superior, perfeitos para qualquer momento do dia.',
  },
];

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="py-20 md:py-32 bg-gradient-to-b from-[rgb(254,254,254)] via-[rgb(247,247,247)] to-[rgb(254,254,254)]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(197,162,3)] font-bold text-sm tracking-wider uppercase">
            O Que Oferecemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(32,29,30)] mt-3 mb-6 leading-tight">
            Serviços e Produtos de Excelência
          </h2>
          <p className="text-[rgb(32,29,30)]/70 text-lg max-w-2xl mx-auto">
            Uma loja de queijos especiais, doces, defumados, molhos, cachaças, ilhas gastronômicas,
            tábuas de frios e muito mais.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(32,29,30)]/80 via-[rgb(32,29,30)]/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-[rgb(197,162,3)] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <s.icon width={28} height={28} className="text-[rgb(32,29,30)]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[rgb(32,29,30)] mb-3 group-hover:text-[rgb(197,162,3)] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-[rgb(32,29,30)]/70 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href="http://wa.me/556184960294"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[rgb(197,162,3)] text-[rgb(32,29,30)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[rgb(217,182,23)] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <span>Solicite um Orçamento</span>
          </a>
        </div>
      </div>
    </section>
  );
}
