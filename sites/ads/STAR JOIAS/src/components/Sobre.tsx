import { useEffect, useRef, useState } from 'react'

const timeline = [
  { year: '1993', event: 'Fundação' },
  { year: '2000', event: 'Expansão de produtos' },
  { year: '2010', event: 'Consolidação regional' },
  { year: '2024', event: 'Mais de 30 anos de tradição' }
]

export default function Sobre() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="sobre" ref={sectionRef} className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/starjoias%2Fjoias-douradas-acessorios.webp)'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Nossa História
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Fundada em 1993, a StarJoias iniciou sua trajetória distribuindo os autênticos produtos da pioneira Michelin Folheados.
              </p>

              <p>
                Com o crescimento e diversificação, evoluímos para StarJoias, expandindo nosso portfólio para joias, semijoias, prata, relógios, óculos solares Ray-Ban e serviços especializados de conserto e fabricação de joias.
              </p>

              <p>
                Há mais de 30 anos no mercado de Barreiras no Centro, construímos nossa reputação com respeito, compromisso e dedicação, valorizando cada cliente como parte fundamental do nosso sucesso.
              </p>
            </div>
          </div>

          <div className={`transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
                Linha do Tempo
              </h3>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4"
                    style={{
                      transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
                    }}
                  >
                    <div className="flex-shrink-0 w-20 h-20 rounded-full gradient-gold flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {item.year}
                    </div>
                    <div className="flex-1 bg-white rounded-lg p-4 shadow-md border-l-4 border-gold">
                      <p className="text-gray-800 font-semibold text-lg">
                        {item.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
