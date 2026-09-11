import { useEffect, useRef, useState } from 'react'
import { Instagram } from 'lucide-react'

export default function InstagramFeed() {
  const [isVisible, setIsVisible] = useState(false)
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
    const script = document.createElement('script')
    script.src = '//www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Instagram className="text-gold" size={36} />
            <h2 className="text-3xl md:text-4xl font-bold text-gold">
              Siga no Instagram
            </h2>
          </div>
          <p className="text-gold-light/80 text-lg mb-4">
            @starjoiasbarreiras
          </p>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 max-w-7xl mx-auto">
          <div className={`flex justify-center transition-all duration-800 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/p/DFh-I0PTqOI/?utm_source=ig_embed&utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: 0,
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: 0,
                width: '100%'
              }}
            />
          </div>

          <div className={`flex justify-center transition-all duration-800 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`} style={{ transitionDelay: '100ms' }}>
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/p/C_S_uXtte9Y/?utm_source=ig_embed&utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: 0,
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: 0,
                width: '100%'
              }}
            />
          </div>

          <div className={`flex justify-center transition-all duration-800 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`} style={{ transitionDelay: '200ms' }}>
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/p/C5tEG-jsEgi/?utm_source=ig_embed&utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: 0,
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: 0,
                width: '100%'
              }}
            />
          </div>
        </div>

        <div className={`text-center transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '400ms' }}>
          <a
            href="https://instagram.com/starjoiasbarreiras"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 gradient-gold-horizontal text-black font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold/50"
          >
            <Instagram size={24} />
            <span>Seguir @starjoiasbarreiras</span>
          </a>
        </div>
      </div>
    </section>
  )
}
