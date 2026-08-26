import { Wrench, Sparkles } from 'lucide-react'

export const WhyHire = () => {
  return (
    <section id="vantagens" className="relative py-32 bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/pro-escape%2Fimg%2FPorque%20Contratar.jpg)' }}>
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-[rgb(254,182,32)]/20 border border-[rgb(254,182,32)] rounded-full text-[rgb(254,182,32)] text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
            Por Que Escolher a Pro Escape
          </span>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Vantagens de Nossos Serviços
          </h2>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
            Escolher a Pro Escape significa optar por um atendimento especializado, produtos de qualidade e compromisso com a sustentabilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/20 hover:bg-white/15 hover:border-[rgb(254,182,32)] hover:scale-105 transition-all duration-500 group">
            <div className="bg-[rgb(254,182,32)] w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-300">
              <Wrench className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-5">Profissionais Capacitados</h3>
            <p className="text-gray-200 leading-relaxed text-lg mb-6">Equipe treinada para oferecer o melhor atendimento.</p>
            <a
              href="https://wa.me/5579932152915?text=Olá! Tenho interesse em Profissionais Capacitados."
              className="inline-flex items-center space-x-2 bg-[rgb(254,182,32)] text-black font-bold py-3 px-6 rounded-full hover:bg-black hover:text-[rgb(254,182,32)] transition-colors duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>Fale Conosco</span>
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/20 hover:bg-white/15 hover:border-[rgb(254,182,32)] hover:scale-105 transition-all duration-500 group">
            <div className="bg-[rgb(254,182,32)] w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-300">
              <Sparkles className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-5">Variedade de Serviços</h3>
            <p className="text-gray-200 leading-relaxed text-lg mb-6">Oferecemos uma ampla gama de Serviços de Escapamentos.</p>
            <a
              href="https://wa.me/5579932152915?text=Olá! Tenho interesse em Variedade de Serviços."
              className="inline-flex items-center space-x-2 bg-[rgb(254,182,32)] text-black font-bold py-3 px-6 rounded-full hover:bg-black hover:text-[rgb(254,182,32)] transition-colors duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>Fale Conosco</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
