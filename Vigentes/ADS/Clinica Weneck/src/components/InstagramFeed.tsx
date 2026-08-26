import { useEffect, useRef, useState } from 'react';
import { Quote, Star, Instagram } from 'lucide-react';

export default function Depoimentos() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      const existingScript = document.querySelector('script[src="//www.instagram.com/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const depoimentos = [
    {
      url: 'https://www.instagram.com/reel/DTOLCSNCSLJ/',
    },
    {
      url: 'https://www.instagram.com/reel/DSI1hr7CWAu/',
    },
    {
      url: 'https://www.instagram.com/reel/DJnIUxqpH3I/',
    },
    {
      url: 'https://www.instagram.com/reel/DPMSLXpDkKI/',
    },
    {
      url: 'https://www.instagram.com/reel/DJ-S1pap-Oh/',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-[#f8f9fa] via-white to-[#f1f5f8] relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#003870]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Ícone decorativo */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#003870]/10 rounded-full mb-4">
            <Quote className="text-[#003870]" size={32} />
          </div>

          <div className="inline-block mb-4">
            <span className="bg-[#003870]/10 text-[#003870] px-4 py-2 rounded-full text-sm font-semibold">
              Depoimentos
            </span>
          </div>
          
          <h2 className="text-[#003870] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            O Que Nossos Pacientes Dizem
          </h2>
          
          <p className="text-[#858789] text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-6">
            Transformações reais de quem confia no nosso trabalho
          </p>

          {/* Estrelas de avaliação */}
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-400 fill-yellow-400" size={24} />
            ))}
          </div>

          {/* Botão Instagram */}
          <a
            href="https://instagram.com/clinica_werneck"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base"
          >
            <Instagram size={20} />
            @clinica_werneck
          </a>
        </div>

        {/* Grid de Depoimentos */}
        <div className="mb-12">
          {/* Primeira linha - 3 vídeos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {depoimentos.slice(0, 3).map((depoimento, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                {/* Embed do Instagram sem caption */}
                <div className="w-full">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={`${depoimento.url}?utm_source=ig_embed&utm_campaign=loading`}
                    data-instgrm-version="14"
                    style={{
                      background: '#FFF',
                      border: 0,
                      borderRadius: '16px',
                      margin: 0,
                      padding: 0,
                      width: '100%',
                      maxWidth: '100%',
                      minWidth: '0',
                    }}
                  />
                </div>

                {/* Borda animada no hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#003870]/20 rounded-2xl sm:rounded-3xl transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Segunda linha - 2 vídeos centralizados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[800px] mx-auto">
            {depoimentos.slice(3, 5).map((depoimento, index) => (
              <div
                key={index + 3}
                className={`group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? `${(index + 3) * 100}ms` : '0ms',
                }}
                >
                {/* Embed do Instagram sem caption */}
                <div className="w-full">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={`${depoimento.url}?utm_source=ig_embed&utm_campaign=loading`}
                    data-instgrm-version="14"
                    style={{
                      background: '#FFF',
                      border: 0,
                      borderRadius: '16px',
                      margin: 0,
                      padding: 0,
                      width: '100%',
                      maxWidth: '100%',
                      minWidth: '0',
                    }}
                  />
                </div>

                {/* Borda animada no hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#003870]/20 rounded-2xl sm:rounded-3xl transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div
          className={`text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-br from-[#003870] to-[#004a8f] rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Pronto para Transformar Seu Sorriso?
            </h3>
            <p className="text-white/90 text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
              Junte-se aos nossos pacientes satisfeitos e conquiste o sorriso dos seus sonhos
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/5581994073827?text=Olá! Vi os depoimentos e gostaria de agendar uma avaliação."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#003870] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Agendar Avaliação
              </a>

              <a
                href="https://instagram.com/clinica_werneck"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 text-base"
              >
                <Instagram size={20} />
                Ver Mais Depoimentos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}