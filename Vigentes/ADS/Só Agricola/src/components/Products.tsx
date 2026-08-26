import { useState, useEffect } from 'react';
import { X, ZoomIn, MessageCircle, ChevronDown, MapPin } from 'lucide-react';

const PRODUCT_IMAGES = [
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Facoplamento-rotor-agricultura.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Facoplamento-rotor-maquina.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fantena-gps-monitor.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fatuador-eletrico-agricola.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fatuador-peneira-agricola.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fatuador-picador-agricola.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fbarris-graxa-petronas.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fbomba-vermelha-agricola.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fbraco-cabeca-navalha.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fcabeca-navalha-agricola.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fcabeca-navalha-plataforma.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fcaixa-acionamento-esteira.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fcaixa-de-navalha.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fcaixa-elevador-graos.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fcaixa-navalha-amarela.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fcaixa-navalha-verde.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fcaixa-transmissao-agricola.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fcarcaca-elevador-graos.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fcarcaca-navalha-cx.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fcarcaca-tanque-graneleiro.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fcardan-plataforma-draper.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fcarenagem-milho-verde-laranja.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fcarenagem-plataforma-milho.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fcarenagem-vermelha-milho.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fcavalete-plataforma-peca.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fchapa-deslizante-amarela.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fcorreia-rotor-agricola.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fcorreias-plataforma-draper.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fcorrente-agricola-milho.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fcorrente-barra-pulverizador.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fcubo-do-rolete.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fdiscos-plantadeira-agricola.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Feixo-hexavalente-milho.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Feixo-superior-alimentador.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fembreagem-agricola-plataforma.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fengrenagem-agricola-anuncio.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fequipamento-agricola-laranja.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Festeira-agricola-pescoco.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Festeira-distribuidor-calcario.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Festeira-verde-agricola.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Ffiltro-carvao-ativado.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fgraxa-poliureia-alta-temperatura.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fjohn-deere-componentes-agricolas.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fjohn-deere-pecas.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fkit-raspador-rotor.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fkit-rotor-afx.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Flavadora-alta-vazao.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Flimitador-torque-milho.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Flimpador-disco-agricola.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fmacaco-estrutura-plantadeiras.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fmini-hopper-agricola.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fmola-pneumatica-maxemerge.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fpecas-agricolas-john-deere.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fpecas-maquinaria-agricola.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fplantadeira-momentum-pecas.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fponteira-subsoladora-ferramentas.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Freservatorio-semente-plantadeira.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Frolamento-cubo-roda.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Frolamento-plantadeira-agricola.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fsensor-semente-agricola.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fsuporte-caixa-navalha.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Ftranspalete-promocao-desconto.webp',
  'https://storage.lucasmendes.dev/site-sp/soagricolas%2Falteracoes%2Fvedacao-porta-bico.webp'
];

const BRANCHES = [
  { id: 'matriz', name: 'Matriz — Campo Novo do Parecis', phone: '556533822270', display: '(65) 3382-2270' },
  { id: 'juara', name: 'Filial Juara', phone: '556635562222', display: '(66) 3556-2222' },
  { id: 'sapezal', name: 'Filial Sapezal', phone: '556533832221', display: '(65) 3383-2221' },
];

// Extrai o nome do produto a partir da URL para acessibilidade e título
const formatImageTitle = (url: string) => {
  const filename = url.split('%2F').pop()?.split('.')[0] || '';
  return filename.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export default function Products() {
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedBranch, setSelectedBranch] = useState(BRANCHES[0]);

  // Bloqueia o scroll do body quando o modal está aberto
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, PRODUCT_IMAGES.length));
  };

  const currentWhatsappLink = `https://wa.me/${selectedBranch.phone}?text=${encodeURIComponent(
    'Olá! Vi o catálogo de produtos no site e gostaria de saber mais sobre a disponibilidade e valores das peças.'
  )}`;

  return (
    <section id="produtos" className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block text-brand-orange font-bold text-sm tracking-widest uppercase mb-4">
            Nosso Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Peças e Implementos
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Trabalhamos com uma linha completa de peças multimarcas para garantir o máximo desempenho e durabilidade das suas máquinas no campo.
          </p>
        </div>

        {/* Galeria de Produtos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {PRODUCT_IMAGES.slice(0, visibleCount).map((url, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl overflow-hidden aspect-square border border-gray-200 shadow-sm cursor-pointer"
              onClick={() => setSelectedImage(url)}
            >
              <img
                src={url}
                alt={formatImageTitle(url)}
                loading="lazy"
                className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay Hover */}
              <div className="absolute inset-0 bg-brand-green-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center backdrop-blur-sm">
                <ZoomIn className="text-brand-orange mb-3" size={32} />
                <p className="text-white font-semibold text-sm drop-shadow-md">
                  {formatImageTitle(url)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botão Carregar Mais */}
        {visibleCount < PRODUCT_IMAGES.length && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMore}
              className="px-8 py-3 rounded-full border-2 border-brand-green text-brand-green font-semibold hover:bg-brand-green hover:text-white transition-colors duration-300"
            >
              Carregar mais produtos
            </button>
          </div>
        )}

        {/* Seção Call to Action (CTA) */}
        <div className="mt-20 max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-orange to-brand-green"></div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Nosso estoque conta com milhares de itens e trabalhamos com as melhores marcas do mercado. Fale com um de nossos consultores para verificar a disponibilidade.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Seletor de Filial */}
            <div className="relative w-full sm:w-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MapPin size={18} className="text-gray-400" />
              </div>
              <select
                value={selectedBranch.id}
                onChange={(e) => {
                  const branch = BRANCHES.find(b => b.id === e.target.value);
                  if (branch) setSelectedBranch(branch);
                }}
                className="w-full sm:w-[280px] appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-4 pl-11 pr-10 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-brand-green cursor-pointer"
              >
                {BRANCHES.map(branch => (
                  <option key={branch.id} value={branch.id}>
                    {branch.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <ChevronDown size={18} className="text-gray-400" />
              </div>
            </div>

            {/* Botão WhatsApp Dinâmico */}
            <a
              href={currentWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <MessageCircle size={20} />
              Falar com Consultor
            </a>
          </div>
          
          <p className="mt-4 text-sm text-gray-500">
            Atendimento: {selectedBranch.display}
          </p>
        </div>

      </div>

      {/* Modal de Imagem Fullscreen */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-brand-orange transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar galeria"
          >
            <X size={28} />
          </button>
          
          <div 
            className="relative max-w-5xl w-full max-h-[85vh] bg-white rounded-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 overflow-hidden bg-gray-50 flex items-center justify-center p-8">
              <img
                src={selectedImage}
                alt="Produto Ampliado"
                className="max-w-full max-h-[60vh] object-contain drop-shadow-xl"
              />
            </div>
            <div className="bg-white border-t border-gray-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  {formatImageTitle(selectedImage)}
                </h4>
                <p className="text-sm text-gray-500">Peças e Implementos Multimarcas</p>
              </div>
              <a
                href={currentWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full transition-colors duration-300"
              >
                Consultar Preço
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}