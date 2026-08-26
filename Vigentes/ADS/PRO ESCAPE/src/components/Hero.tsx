import { ChevronRight } from 'lucide-react'

interface HeroProps {
  handleWhatsApp: (msg: string) => void
}

export const Hero = ({ handleWhatsApp }: HeroProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 lg:pt-32 lg:pb-32">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full">
          <img
            src="https://storage.lucasmendes.dev/site-sp/pro-escape%2Fimg%2Fhero-back.jpg"
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="inline-block mb-6">
            <span className="inline-block px-6 py-2 bg-[rgb(254,182,32)]/10 border border-[rgb(254,182,32)]/30 rounded-full text-[rgb(254,182,32)] text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
              Desde 1989
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8 max-w-5xl mx-auto">
            Qualidade e Confiabilidade em Serviços de Escapamentos
          </h1>
          <h2 className="text-2xl lg:text-3xl text-[rgb(254,182,32)] mb-8 font-semibold">
            Pro Escape - Peças e Serviços de Automóveis
          </h2>
          <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Há mais de 37 anos transformando a indústria automotiva sergipana com excelência, inovação e compromisso ambiental.
          </p>
          <button
            onClick={() => handleWhatsApp('Olá! Gostaria de saber mais sobre os serviços da Pro Escape.')}
            className="inline-flex items-center space-x-3 bg-[rgb(254,182,32)] text-black px-12 py-5 rounded-full text-xl font-bold hover:scale-105 hover:shadow-[0_20px_60px_rgba(254,182,32,0.5)] transition-all duration-300 group"
          >
            <span>Fale pelo WhatsApp</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
