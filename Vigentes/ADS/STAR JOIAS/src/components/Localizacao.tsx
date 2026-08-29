import { useEffect, useRef, useState } from 'react'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'

export default function Localizacao() {
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
    <section ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-br from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
            Visite Nossa Loja
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`space-y-6 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="bg-gray-800 rounded-lg p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <MapPin className="text-gold flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-gold mb-2">Endereço</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Rua Marechal Hermes, 264 - Centro<br />
                    Barreiras - BA, 47800-169
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <Clock className="text-gold flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-gold mb-2">Horário de Funcionamento</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Segunda a Sexta: 8:30 - 12:00 | 14:00 - 18:30<br />
                    Sábado: 8:30 - 13:00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <Phone className="text-gold flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-gold mb-2">Atendimento</h3>
                  <p className="text-gray-300 leading-relaxed">
                    <a href="tel:+5577991245678" className="hover:text-gold transition-colors">
                      (77) 9 9124-5678
                    </a><br />
                    <a href="mailto:starjoias@uol.com.br" className="hover:text-gold transition-colors">
                      starjoias@uol.com.br
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="rounded-lg overflow-hidden border-2 border-gold shadow-lg h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.7867134937595!2d-44.99536812504556!3d-12.152677843863682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75dcb4d3c3e5e41%3A0x8e7b0a8c8e7b0a8c!2sR.%20Mal.%20Hermes%2C%20264%20-%20Centro%2C%20Barreiras%20-%20BA%2C%2047800-169!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização StarJoias"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
