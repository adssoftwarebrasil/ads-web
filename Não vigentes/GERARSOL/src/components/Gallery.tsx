import { useState, useMemo } from 'react'
import { X, Search, Camera, Play } from 'lucide-react'

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [activeFilter, setActiveFilter] = useState('Todos')

  const categories = ['Todos', 'Rural', 'Comercial', 'Residencial', 'Industrial', 'Instalação']

  const mediaItems = [
    // Imagens existentes
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia%2Fpaineis-solares-campo.webp', title: 'Usina Solar em Campo', category: 'Rural', type: 'image' },
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia%2Fpaineis-solares-estacionamento.webp', title: 'Carport Solar (Estacionamento)', category: 'Comercial', type: 'image' },
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia%2Fpaineis-solares-fazenda.webp', title: 'Sistema de Irrigação Solar', category: 'Rural', type: 'image' },
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia%2Fpaineis-solares-silos.webp', title: 'Energia em Silos Graneleiros', category: 'Industrial', type: 'image' },
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia%2Fpaineis-solares-telhado.webp', title: 'Instalação Residencial Premium', category: 'Residencial', type: 'image' },
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia%2Fpaineis-solares-telhados.webp', title: 'Complexo Logístico Solar', category: 'Industrial', type: 'image' },
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia%2Fplacas-solares-campo.webp', title: 'Arranjo de Solo Alta Potência', category: 'Rural', type: 'image' },
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia%2Fplacas-solares-fazenda.webp', title: 'Fazenda Sustentável', category: 'Rural', type: 'image' },
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia%2Fpredios-paineis-solares.webp', title: 'Condomínio Vertical Solar', category: 'Comercial', type: 'image' },
    
    // Novos vídeos - Instalação
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia/new/WhatsApp Video 2026-02-03 at 14.23.36.mp4', title: 'Instalação em Progresso', category: 'Instalação', type: 'video' },
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia/new/WhatsApp Video 2026-02-03 at 14.23.41.mp4', title: 'Montagem de Estruturas', category: 'Instalação', type: 'video' },
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia/new/WhatsApp Video 2026-02-03 at 14.23.43.mp4', title: 'Processo de Instalação', category: 'Instalação', type: 'video' },
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia/new/WhatsApp Video 2026-02-03 at 14.23.47.mp4', title: 'Obra em Andamento', category: 'Instalação', type: 'video' },
    
    // Novas imagens - Diversas
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia/new/caminhao-azul-guindaste-montando-estrutura-metalica_720x1280.webp', title: 'Montagem com Guindaste', category: 'Instalação', type: 'image' },
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia/new/eletricista-trabalhando-poste-sicoob-ao-fundo_960x1280.webp', title: 'Trabalho em Altura - Sicoob', category: 'Comercial', type: 'image' },
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia/new/poste-eletrico-transformador-caixa-concreto-construcao_720x1280.webp', title: 'Infraestrutura Elétrica', category: 'Instalação', type: 'image' },
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia/new/poste-energia-transformador-concreto-paisagem-rural_720x1280.webp', title: 'Transformador Rural', category: 'Rural', type: 'image' },
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia/new/predio-sicoob-poste-eletrico-ceu-azul_960x1280.webp', title: 'Projeto Sicoob', category: 'Comercial', type: 'image' },

    // NOVAS ADIÇÕES - Residencial (Imagens)
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia/residencial/WhatsApp%20Image%202026-02-23%20at%2020.20.49.jpeg', title: 'Telhado Solar Residencial 1', category: 'Residencial', type: 'image' },
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia/residencial/WhatsApp%20Image%202026-02-23%20at%2020.20.50.jpeg', title: 'Telhado Solar Residencial 2', category: 'Residencial', type: 'image' },
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia/residencial/WhatsApp%20Image%202026-02-23%20at%2020.22.36.jpeg', title: 'Sistema Residencial Finalizado', category: 'Residencial', type: 'image' },

    // NOVAS ADIÇÕES - Residencial (Vídeos)
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia/residencial/WhatsApp%20Video%202026-02-23%20at%2020.20.53.mp4', title: 'Visão Geral Residencial', category: 'Residencial', type: 'video' },
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia/residencial/WhatsApp%20Video%202026-02-23%20at%2020.22.47.mp4', title: 'Detalhes da Instalação', category: 'Residencial', type: 'video' },
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia/residencial/WhatsApp%20Video%202026-02-23%20at%2020.23.36.mp4', title: 'Estrutura Residencial', category: 'Residencial', type: 'video' },
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia/residencial/WhatsApp%20Video%202026-02-23%20at%2020.26.08%20(1).mp4', title: 'Acompanhamento do Projeto', category: 'Residencial', type: 'video' },
    { url: 'https://storage.lucasmendes.dev/site-sp/gerasolenergia/residencial/WhatsApp%20Video%202026-02-23%20at%2020.26.08.mp4', title: 'Funcionamento do Sistema', category: 'Residencial', type: 'video' },
  ]

  const filteredMedia = useMemo(() => {
    return activeFilter === 'Todos' 
      ? mediaItems 
      : mediaItems.filter(item => item.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="gallery" className="py-24 md:py-32 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-100 text-gray-500 mb-4">
            <Camera size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Portfólio em Foco</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-[rgb(44,56,152)] mb-6">
            Projetos <span className="text-[rgb(187,212,46)]">Gerarsol</span>
          </h3>
          
          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                  activeFilter === cat 
                  ? 'bg-[rgb(44,56,152)] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Mídia */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {filteredMedia.map((item, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-2xl md:rounded-[2rem] bg-gray-100 aspect-[4/3]"
              onClick={() => setSelectedMedia(item)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
              ) : (
                <div className="relative w-full h-full">
                  <video
                    src={item.url}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Play size={32} className="text-[rgb(44,56,152)] ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Overlay Moderno */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(30,40,100)]/90 via-[rgb(30,40,100)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 md:p-8">
                <span className="text-[rgb(187,212,46)] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.category}
                </span>
                <p className="text-white font-bold text-base md:text-xl leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.title}
                </p>
                <div className="mt-4 w-8 h-8 md:w-10 md:h-10 bg-[rgb(187,212,46)] rounded-full flex items-center justify-center text-[rgb(44,56,152)] self-end transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-150">
                  <Search size={16} className="md:w-5 md:h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox Refinado */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-[rgb(30,40,100)]/95 z-[100] flex items-center justify-center p-4 md:p-12 backdrop-blur-md"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-[rgb(187,212,46)] transition-colors p-2 z-10"
            onClick={() => setSelectedMedia(null)}
            aria-label="Fechar"
          >
            <X size={32} className="md:w-12 md:h-12" strokeWidth={1.5} />
          </button>
          
          <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.url}
                alt={selectedMedia.title}
                className="max-w-full max-h-[70vh] md:max-h-[80vh] object-contain rounded-2xl md:rounded-3xl shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <video
                src={selectedMedia.url}
                controls
                autoPlay
                playsInline
                className="max-w-full max-h-[70vh] md:max-h-[80vh] object-contain rounded-2xl md:rounded-3xl shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              />
            )}
            <div className="mt-4 md:mt-6 text-center text-white px-4">
               <h4 className="text-xl md:text-2xl font-bold">{selectedMedia.title}</h4>
               <p className="text-[rgb(187,212,46)] font-semibold uppercase tracking-widest text-xs md:text-sm mt-2">{selectedMedia.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}