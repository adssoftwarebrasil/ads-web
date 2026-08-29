import { ChevronDown } from 'lucide-react'

interface HeroProps {
  onExploreClick: () => void
  onContactClick: () => void
}

export default function Hero({ onExploreClick, onContactClick }: HeroProps) {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/starjoias%2Fnovo%2F17.jpeg)'
        }}
      >
        <div className="absolute inset-0 overlay-dark"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full animate-pulse-soft"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.5 + 0.3
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in leading-tight" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
          StarJoias: Onde a Elegância<br />Encontra a Tradição
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-gold-light mb-10 max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '1.3s', animationFillMode: 'both' }}>
          Há mais de 30 anos criando momentos inesquecíveis com Joias , semijoias , prata , relógios e óculos de sol em Barreiras no Centro.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '1.6s', animationFillMode: 'both' }}>
          <button
            onClick={onExploreClick}
            className="px-8 py-4 gradient-gold-horizontal text-black font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold/50 w-full sm:w-auto"
          >
            Conheça Nossa Coleção
          </button>

          <button
            onClick={onContactClick}
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
          >
            Fale Conosco
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gold" size={32} />
      </div>
    </section>
  )
}
