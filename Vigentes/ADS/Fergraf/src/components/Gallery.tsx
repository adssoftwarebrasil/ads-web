import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY = [
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/bone-clinica-equoterapia-branco-verde_1080x1440.webp', label: 'Bone Personalizado' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/bone-diogo-diesel-preto-logo-bordado_1080x1440.webp', label: 'Bone Bordado' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/botao-julho-verde-sergipe-prevencao-cancer_1440x1440.webp', label: 'Botton Campanhas' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/botons-doenca-renal-cronica-cuide-rim_1440x1440.webp', label: 'Bottons Personalizados' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/broches-jucece-azul-prata-mao-segurando_1440x1800.webp', label: 'Broches Institucionais' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/caderneta-saude-minnie-maria-cecilia-espiral_1440x1440.webp', label: 'Caderneta de Saude' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/caderno-nutril-refeicoes-legumes-fundo-tijolo_1440x1800.webp', label: 'Caderno Personalizado' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/caderno-roxo-metodo-canguru-prematuridade_1440x1440.webp', label: 'Caderno Metodo Canguru' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/calendarios-2024-girassol-varios-em-pilha_1440x1440.webp', label: 'Calendarios 2024' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/calendarios-2024-slim-vet-caixa-promocional_1440x1800.webp', label: 'Calendarios Slim' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/caneca-branca-vida-de-dorameira-desenhos-coloridos_1440x1440.webp', label: 'Caneca Personalizada' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/canetas-azul-e-branca-cuide-seu-rim_1440x1440.webp', label: 'Canetas Personalizadas' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/copos-reutilizaveis-empilhados-preta-e-azul_1080x1440.webp', label: 'Copos Reutilizaveis' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/credenciais-vila-natal-iluminado-vendedor-autorizado_1440x1440.webp', label: 'Credenciais' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/flyer-seminario-integrado-saude-sergipe_1440x1440.webp', label: 'Flyer Seminario' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/flyer-verde-credito-emprestimo-alagoas-pix_1440x1440.webp', label: 'Flyer Credito' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/flyers-cardapio-feijoada-cafe-da-manha_1440x1440.webp', label: 'Flyers Cardapio' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/flyers-clinica-exames-laboratoriais-empilhados_1440x1440.webp', label: 'Flyers Clinica' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/formulario-veterinaria-atendimento-domiciliar-desenhos_1440x1440.webp', label: 'Formulario Veterinaria' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/garrafa-branca-equoterapia-batalhao-restauracao_1080x1440.webp', label: 'Garrafa Personalizada' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/livreto-bodas-ouro-gladson-rosa-igreja_1440x1440.webp', label: 'Livreto Bodas de Ouro' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/pilha-cadernos-vermelhos-corpo-bombeiros_1440x1440.webp', label: 'Cadernos Bombeiros' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/pilhas-cartoes-visita-medico-branco-vermelho_1080x1363.webp', label: 'Cartoes de Visita' },
  { src: 'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/pilhas-de-agendas-fergraf-azul-espiral-preta_1440x1440.webp', label: 'Agendas Fergraf' },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + GALLERY.length) % GALLERY.length : 0));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % GALLERY.length : 0));

  return (
    <section id="galeria" className="py-20 bg-[rgb(252,254,255)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-[rgb(236,71,137)]/10 text-[rgb(236,71,137)] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Nossos Trabalhos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[rgb(53,80,155)] mb-4">
            Galeria de{' '}
            <span className="text-[rgb(236,71,137)]">Produtos</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Confira alguns dos trabalhos realizados pela nossa equipe com qualidade e dedicacao em cada detalhe.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          {GALLERY.map((item, i) => (
            <button
              key={i}
              className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-square cursor-zoom-in"
              onClick={() => openLightbox(i)}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(53,80,155)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-xs font-medium text-left leading-tight">{item.label}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/fergrafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[rgb(236,71,137)] text-[rgb(236,71,137)] font-bold px-8 py-3.5 rounded-full hover:bg-[rgb(236,71,137)] hover:text-white transition-all duration-200"
          >
            Ver mais no Instagram
          </a>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={28} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={28} />
          </button>

          <div className="max-w-3xl max-h-[90vh] flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
            <img
              src={GALLERY[lightboxIndex].src}
              alt={GALLERY[lightboxIndex].label}
              className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl"
            />
            <span className="text-white/80 text-sm font-medium">{GALLERY[lightboxIndex].label}</span>
            <span className="text-white/40 text-xs">{lightboxIndex + 1} / {GALLERY.length}</span>
          </div>
        </div>
      )}
    </section>
  );
}
