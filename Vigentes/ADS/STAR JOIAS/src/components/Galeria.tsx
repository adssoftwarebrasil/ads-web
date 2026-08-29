import { useEffect, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn, Maximize2, ChevronDown } from 'lucide-react'

// Lista atualizada de imagens
const imagens = [
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F1.png', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F2.png', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F3.png', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F4.png', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F5.png', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F6.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F7.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F8.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F9.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F10.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F11.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F12.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F13.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F14.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F15.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F16.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F17.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F18.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F19.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F20.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F21.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F22.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F23.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F24.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F25.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F26.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F27.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F28.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F29.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F30.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F31.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F32.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F33.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F34.jpeg', alt: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F35.jpeg', alt: '' },
]

export default function Galeria() {
  const [isVisible, setIsVisible] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(9) // Começa exibindo 9 imagens
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowLeft') navigateImage('prev')
      if (e.key === 'ArrowRight') navigateImage('next')
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, currentImageIndex])

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [lightboxOpen])

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const navigateImage = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % imagens.length)
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + imagens.length) % imagens.length)
    }
  }

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, imagens.length))
  }

  return (
    <>
      <section ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-block mb-4">
              <span className="text-gold/80 text-sm font-medium tracking-widest uppercase">Portfólio</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Nossa <span className="text-gold">Galeria</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
              Explore nossa coleção de joias, semijoias, relógios e óculos.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </div>

          {/* Grid de Imagens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {imagens.slice(0, visibleCount).map((imagem, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-800 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/20 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{
                  transitionDelay: isVisible ? `${(index % 9) * 80}ms` : '0ms'
                }}
              >
                {/* Imagem */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={imagem.src}
                    alt={imagem.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <div className="bg-gold/90 p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ZoomIn className="w-6 h-6 text-black" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-lg">{imagem.alt}</h3>
                  </div>
                </div>

                {/* Borda animada */}
                <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/50 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Botão Carregar Mais */}
          {visibleCount < imagens.length && (
            <div className="flex justify-center mt-12">
              <button
                onClick={handleLoadMore}
                className="group relative px-8 py-3 bg-transparent border border-gold/50 text-gold rounded-full font-medium overflow-hidden transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/20"
              >
                <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <span>Carregar Mais</span>
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </div>
              </button>
            </div>
          )}

          {/* Contador e CTA Final */}
          <div className={`text-center mt-12 transition-all duration-800 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <p className="text-gray-400 mb-8">
              Exibindo <span className="text-gold font-semibold">{Math.min(visibleCount, imagens.length)}</span> de <span className="text-gold font-semibold">{imagens.length}</span> Nossos Produtos
            </p>

            {/* Card CTA */}
            <div className="max-w-3xl mx-auto mt-16 bg-gradient-to-br from-gold/10 via-gold/5 to-transparent border border-gold/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-6">
                <div className="bg-gold/20 p-4 rounded-full">
                  <Maximize2 className="w-8 h-8 text-gold" />
                </div>
                
                <div className="text-center space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Gostou das Peças?
                  </h3>
                  <p className="text-gray-300 text-lg max-w-xl">
                    Temos <span className="text-gold font-semibold">muito mais</span> disponível em nossa loja física. Entre em contato e conheça nossas peças completas com valores!
                  </p>
                </div>

                <button
                  onClick={() => {
                    const mensagem = 'Olá! Vi a galeria no site e gostaria de conhecer mais produtos da Star Joias. Podem me mostrar o catálogo completo?'
                    const whatsappNumber = '7791245678'
                    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`, '_blank')
                  }}
                  className="group bg-gold hover:bg-gold/90 text-black px-8 py-4 rounded-full font-semibold shadow-xl flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold/50"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Conheçam nossas peças
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span>Atendimento Personalizado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span>Resposta Imediata</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span>Conheçam nossas peças</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
          {/* Botão Fechar */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 z-50 backdrop-blur-sm"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Contador */}
          <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full z-50">
            <span className="font-medium">{currentImageIndex + 1} / {imagens.length}</span>
          </div>

          {/* Navegação Anterior */}
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm z-50"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Imagem Principal */}
          <div className="relative max-w-6xl max-h-[90vh] w-full flex items-center justify-center">
            <img
              src={imagens[currentImageIndex].src}
              alt={imagens[currentImageIndex].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in duration-300"
            />
            
            {/* Legenda */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-1">
                    {imagens[currentImageIndex].alt}
                  </h3>
                </div>
                <button className="bg-gold/20 hover:bg-gold/30 text-gold p-2 rounded-lg transition-colors duration-300">
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Navegação Próxima */}
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm z-50"
            aria-label="Próxima"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Miniaturas */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] pb-2 px-4">
            {imagens.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  idx === currentImageIndex 
                    ? 'ring-2 ring-gold scale-110' 
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}