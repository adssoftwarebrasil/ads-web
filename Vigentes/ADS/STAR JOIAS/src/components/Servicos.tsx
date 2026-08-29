import { useEffect, useRef, useState } from 'react'
import { Wrench, Sparkles, Clock, Settings } from 'lucide-react'

interface ServicosProps {
  onContactClick: () => void
}

const servicos = [
  {
    icon: Wrench,
    title: 'Conserto de Joias',
    description: 'Restauração profissional com garantia de qualidade'
  },
  {
    icon: Sparkles,
    title: 'Fabricação Sob Medida',
    description: 'Transformamos seus sonhos em realidade'
  },
  {
    icon: Settings,
    title: 'Ajustes e Redimensionamentos',
    description: 'Perfeição em cada detalhe'
  }
]

export default function Servicos({ onContactClick }: ServicosProps) {
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
    <section id="servicos" ref={sectionRef} className="py-20 md:py-28 bg-[#F4E4C1]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=starjoias%2Fnovo%2FWhatsApp%20Image%202026-02-05%20at%2015.07.51.jpeg&version_id=null"
              alt="Loja StarJoias"
              className="rounded-lg shadow-2xl w-full h-auto"
              loading="lazy"
            />
          </div>

          <div className={`transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Serviços de Alta Precisão
            </h2>

            <div className="space-y-6 mb-8">
              {servicos.map((servico, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                  }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                      <servico.icon className="text-gold" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                      {servico.title}
                    </h3>
                    <p className="text-gray-600">
                      {servico.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={onContactClick}
              className="px-8 py-4 gradient-gold-horizontal text-black font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold/50 w-full md:w-auto"
            >
              Solicite um Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
