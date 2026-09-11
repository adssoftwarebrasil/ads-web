import { WHATSAPP_URL } from '../constants';

interface GalleryItem {
  src: string;
  alt: string;
  label: string;
}

const items: GalleryItem[] = [
  { src: '/results/corte_6.webp', alt: 'Corte fade masculino com acabamento premium em Campinas', label: 'Fade Impecável' },
  { src: '/results/corte_7.webp', alt: 'Hairstyle moderno e barba alinhada', label: 'Penteado & Barba' },
  { src: '/results/corte_8.webp', alt: 'Corte de cabelo infantil especializado e moderno', label: 'Corte Infantil' },
  { src: '/results/corte_1.webp', alt: 'Corte de cabelo masculino degradê moderno na Barbearia Zero19', label: 'Corte Moderno' },
  { src: '/results/corte_2.webp', alt: 'Estilo e desenhos com acabamento premium em Campinas', label: 'Estilo & Desenho' },
  { src: '/results/corte_3.webp', alt: 'Corte com design freestyle exclusivo da Zero19', label: 'Estilo & Freestyle' },
  { src: '/results/corte_4.webp', alt: 'Fade técnico com design personalizado', label: 'Fade & Design' },
  { src: '/results/corte_5.webp', alt: 'Barba grisalha perfeitamente aparada na Zero19', label: 'Cuidado & Barba' },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 bg-premium-gray overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-4 animate-fade-in-up">
            <span aria-hidden="true">📸 </span>Resultados <span className="red-gradient-text">Reais de Clientes em Campinas</span>
          </h2>
          <p className="text-zinc-400 font-light max-w-2xl mx-auto text-sm leading-relaxed">
            Padrão premium, excelência técnica e atendimento exclusivo da <span className="text-white font-semibold">Barbearia Zero19</span> no Jardim Aurélia, Campinas.
          </p>
        </div>
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-4 pb-8 md:pb-0 scrollbar-hide snap-x">
          {items.map((item, i) => (
            <div
              key={item.src}
              className="relative min-w-[75%] md:min-w-full group overflow-hidden rounded-xl h-[300px] snap-center cursor-default hover:scale-[1.03] transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <img
                src={item.src}
                alt={item.alt}
                width="400"
                height="400"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-premium-red font-outfit font-bold uppercase text-[10px] tracking-widest leading-none mb-1">{item.label}</span>
                <p className="text-white text-xs font-medium">Padrão Zero19</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center animate-fade-in-up">
          <p className="text-zinc-500 text-sm italic font-light mb-4">🔥 Cortes Reais • Clientes Reais • Estilo Sem Limites</p>
          <a
            href={WHATSAPP_URL}
            className="btn-whatsapp bg-premium-red text-white px-8 py-4 rounded-xl font-outfit font-bold hover:scale-105 transition-all shadow-lg shadow-premium-red/20 text-sm uppercase tracking-wider"
          >
            QUERO ESSE RESULTADO NO MEU VISUAL
          </a>
        </div>
      </div>
    </section>
  );
}
