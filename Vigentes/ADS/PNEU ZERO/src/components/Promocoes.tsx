import { useInView } from '../hooks/useInView';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_PROMOS_URL =
  'https://wa.me/5599991458080?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20promoções';

const promos: string[] = [
  'https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO/promos-atualizadas/modelo-185-60r15-xbr.webp',
  '/promos/modelo-265-60r18-a-t.webp',
  'https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO/promos-atualizadas/modelo-265-60r18-h-t.webp',
  'https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO/promos-atualizadas/modelo-265-65r17-a-t.webp',
  'https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO/promos-atualizadas/modelo-265-70r16-a-t.webp',
  'https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO/promos-atualizadas/servicos-e-calores-02.webp',
  'https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO/promos-atualizadas/servicos-e-valores-01.webp',
  'https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO/promos-atualizadas/troca-de-oleo-para-caminhonetes.webp',
  'https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO/promos-atualizadas/troca-de-oleo-para-carro.webp',
];

const ofertas: string[] = [
  'https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO/promo03/promocao-kit-pneus-alinhamento-carro-cinza_900x1600.webp',
  'https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO/promo03/promocao-pneus-carro-branco-alinhamento-e-balanceamento_900x1600.webp',
  'https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO/promo03/promocao-pneus-l200-alinhamento-balanceamento-vermelho_900x1600.webp',
  'https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO/promo03/promocao-pneus-l200-alinhamento-balanceamento_900x1600.webp',
  '/promos/troca-pastilhas-freio-179.webp',
];

function PromoCard({ src, alt, delay }: { src: string; alt: string; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative w-full bg-[rgb(245,245,245)]">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
}

export default function Promocoes() {
  const header = useInView<HTMLDivElement>();
  const featured = useInView<HTMLDivElement>();
  const ofertasTitle = useInView<HTMLDivElement>();
  const cta = useInView<HTMLDivElement>();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[rgb(227,17,35)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[rgb(3,3,4)] rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            header.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-block mb-4">
            <span className="text-[rgb(227,17,35)] uppercase tracking-widest text-sm font-bold bg-[rgb(245,245,245)] px-6 py-2 rounded-full shadow-sm">
              Ofertas Especiais
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: 'rgb(3, 3, 4)' }}
          >
            Promoções
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Aproveite nossas ofertas exclusivas em pneus e serviços automotivos
          </p>
        </div>
        <div
          ref={featured.ref}
          className={`flex justify-center mb-12 transition-all duration-700 ${
            featured.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 max-w-md w-full">
            <div className="relative w-full bg-[rgb(245,245,245)]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {promos.map((src, i) => (
            <PromoCard key={src} src={src} alt={`Promoção ${i + 1}`} delay={(i + 1) * 80} />
          ))}
        </div>
        <div
          ref={ofertasTitle.ref}
          className={`mt-24 mb-10 text-center transition-all duration-700 ${
            ofertasTitle.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'rgb(3, 3, 4)' }}>
            Confira Nossas Ofertas Especiais
          </h3>
          <div className="w-24 h-1 bg-[rgb(227,17,35)] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {ofertas.map((src, i) => (
            <PromoCard key={src} src={src} alt={`Oferta Especial ${i + 1}`} delay={(i + 1) * 80} />
          ))}
        </div>
        <div
          ref={cta.ref}
          className={`text-center mt-20 transition-all duration-700 delay-300 ${
            cta.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <a
            href={WHATSAPP_PROMOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[rgb(227,17,35)] text-white px-10 py-5 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg group"
          >
            <WhatsAppIcon className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            Consultar Promoções
          </a>
          <p className="mt-6 text-gray-500 text-sm">Ofertas válidas enquanto durarem os estoques</p>
        </div>
      </div>
    </section>
  );
}
