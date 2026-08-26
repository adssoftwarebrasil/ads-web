import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Sparkles } from 'lucide-react'

const produtos = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F8.jpeg',
    title: 'Joias em Ouro',
    description: 'Peças que eternizam momentos especiais',
    whatsappMsg: 'Olá, vim pelo Google e desejo conhecer suas peças e acessórios.',
    imagePosition: 'object-center' // Foco no centro
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F2.png',
    title: 'Alianças de Casamento',
    description: 'Simbolizando união e amor eterno',
    whatsappMsg: 'Olá, vim pelo Google e desejo conhecer suas peças e acessórios.',
    imagePosition: 'object-center'
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F29.jpeg',
    title: 'Anéis e Pulseiras Semijoias',
    description: 'Elegância e sofisticação em cada detalhe',
    whatsappMsg: 'Olá, vim pelo Google e desejo conhecer suas peças e acessórios.',
    imagePosition: 'object-bottom'
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F23.jpeg',
    title: 'Relógios',
    description: 'Relógios de marcas variadas',
    whatsappMsg: 'Olá, vim pelo Google e desejo conhecer suas peças e acessórios.',
    imagePosition: 'object-bottom' // Foco na parte de baixo para mostrar o relógio
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F26.jpeg',
    title: 'Óculos',
    description: 'Proteção e estilo autênticos',
    whatsappMsg: 'Olá, vim pelo Google e desejo conhecer suas peças e acessórios.',
    imagePosition: 'object-top' // Foco na parte de cima para não cortar o óculos
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F15.jpeg',
    title: 'Semijoias',
    description: 'Beleza acessível sem perder qualidade',
    whatsappMsg: 'Olá, vim pelo Google e desejo conhecer suas peças e acessórios.',
    imagePosition: 'object-center'
  }
]

export default function Produtos() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  
  // Número do WhatsApp (substitua pelo número real)
  const whatsappNumber = '77991245678'

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

  const handleWhatsAppClick = (mensagem: string) => {
    const encodedMsg = encodeURIComponent(mensagem)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMsg}`, '_blank')
  }

  return (
    <section 
      id="produtos" 
      ref={sectionRef} 
      className="py-24 md:py-32 bg-gradient-to-b from-white via-[#F4E4C1]/20 to-white relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium text-gray-700">Nossa Coleção</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Descubra Nossas Joias
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Cada peça conta uma história única. Entre em contato e encontre a joia perfeita para você.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtos.map((produto, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg border border-gold/20 hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-2 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              <div className="relative overflow-hidden h-64 md:h-72">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gold text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {produto.badge}
                  </span>
                </div>

                {/* Imagem com alinhamento dinâmico */}
                <img
                  src={produto.image}
                  alt={produto.title}
                  className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${produto.imagePosition || 'object-center'}`}
                  loading="lazy"
                />

                {/* Overlay com gradiente */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
                  hoveredCard === index ? 'opacity-100' : 'opacity-0'
                }`}></div>

                {/* Botão WhatsApp flutuante */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  hoveredCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button
                    onClick={() => handleWhatsAppClick(produto.whatsappMsg)}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-xl flex items-center gap-2 transition-all duration-300 hover:scale-110"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Consultar no WhatsApp
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 group-hover:text-gold transition-colors duration-300">
                  {produto.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {produto.description}
                </p>

                {/* Botão WhatsApp alternativo (mobile) */}
                <button
                  onClick={() => handleWhatsAppClick(produto.whatsappMsg)}
                  className="w-full md:hidden bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  Consultar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action final */}
        <div className={`text-center mt-16 transition-all duration-800 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-600 mb-4">Não encontrou o que procurava?</p>
          <button
            onClick={() => handleWhatsAppClick('Olá! Gostaria de conhecer mais produtos da Star Joias. Pode me ajudar?')}
            className="bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-full font-semibold shadow-lg flex items-center gap-3 mx-auto transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Fale Conosco pelo WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}