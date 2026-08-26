import { Flame } from 'lucide-react';

const items = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/espetaria%20fio%20de%20prata/img/prato-com-frango-espeto-arroz-mandioca_1200x1600.webp',
    alt: 'Espetinhos Artesanais',
    badge: 'Carro-chefe',
    badgeClass: 'bg-amber-500 text-[#1a1a1a]',
    title: 'Espetinhos Artesanais',
    text: 'Espetos de carne, frango, coração e muito mais — todos grelhados na hora com tempero exclusivo da casa.',
  },
  {
    img: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Porções Generosas',
    badge: 'Mais pedido',
    badgeClass: 'bg-[rgb(230,232,234)] text-[#1a1a1a]',
    title: 'Porções Generosas',
    text: 'Porções caprichadas para compartilhar, incluindo nossa famosa porção de peixe que faz sucesso entre os clientes.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/espetaria%20fio%20de%20prata/img/bebida%20gelada.webp',
    alt: 'Bebidas Geladas',
    badge: 'Variedade',
    badgeClass: 'bg-[#2a2a2a] text-[rgb(230,232,234)] border border-white/10',
    title: 'Bebidas Geladas',
    text: 'Uma seleção completa de bebidas, do refrigerante gelado à cerveja artesanal, para acompanhar cada espeto.',
  },
];

export default function Menu() {
  return (
    <section id="cardapio" className="bg-[#161616] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">O que servimos</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[rgb(230,232,234)] leading-tight mb-4">Nosso Cardápio</h2>
          <p className="text-[rgb(230,232,234)]/50 max-w-xl mx-auto text-base">
            Cada item preparado com atenção, ingredientes frescos e o capricho que só a Fio de Prata oferece.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="group bg-[#1e1e1e] border border-white/5 rounded-2xl overflow-hidden hover:border-amber-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] to-transparent"></div>
                <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${item.badgeClass}`}>{item.badge}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Flame size={16} className="text-amber-400" />
                  <h3 className="text-[rgb(230,232,234)] font-bold text-lg">{item.title}</h3>
                </div>
                <p className="text-[rgb(230,232,234)]/50 text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="http://wa.me/5566996043627?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20cardápio%20da%20Fio%20de%20Prata."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border border-amber-500/40 hover:bg-amber-500/10 text-amber-400 hover:text-amber-300 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 text-sm"
          >
            Ver cardápio completo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
