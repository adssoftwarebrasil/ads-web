import { useEffect, useRef, useState } from 'react'
import { Crown, Award, Heart, Wrench } from 'lucide-react'

const diferenciais = [
  {
    icon: Crown,
    title: 'Desde 1993',
    description: 'Mais de 30 anos de tradição e excelência'
  },
  {
    icon: Award,
    title: 'Qualidade Garantida',
    description: 'Produtos autênticos e certificados'
  },
  {
    icon: Heart,
    title: 'Atendimento Personalizado',
    description: 'Cada cliente é único para nós'
  },
  {
    icon: Wrench,
    title: 'Serviços Especializados',
    description: 'Conserto e fabricação própria'
  }
]

export default function Diferenciais() {
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
    <section ref={sectionRef} className="py-20 md:py-28 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {diferenciais.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 hover:transform hover:scale-105 transition-all duration-300"
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 mb-6">
                <item.icon className="text-gold" size={40} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
