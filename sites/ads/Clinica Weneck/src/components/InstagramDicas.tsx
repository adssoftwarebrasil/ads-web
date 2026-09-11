import { useEffect, useRef, useState } from 'react';
import { Quote, Sparkles, Instagram, MessageCircle } from 'lucide-react';

export default function InformacoesEspecialistas() {
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

  const videosEspecialistas = [
    {
      url: 'https://www.instagram.com/reel/DHou2Smu1uG/',
    },
    {
      url: 'https://www.instagram.com/reel/DTliqJIiba7/',
    },
    {
      url: 'https://www.instagram.com/reel/DLsjdPdJw9W/',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-[#f8f9fa] via-white to-[#f1f5f8] relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#003870]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Ícone decorativo */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#003870]/10 rounded-full mb-4">
            <Sparkles className="text-[#003870]" size={32} />
          </div>

          <div className="inline-block mb-4">
            <span className="bg-[#003870]/10 text-[#003870] px-4 py-2 rounded-full text-sm font-semibold">
              Conhecimento
            </span>
          </div>
          
          <h2 className="text-[#003870] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Informações Relevantes dos Nossos Especialistas
          </h2>
          
          <p className="text-[#858789] text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-6">
            Dicas essenciais e esclarecimentos para cuidar melhor do seu sorriso
          </p>

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

        {/* Grid de Vídeos */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {videosEspecialistas.map((video, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                }}
              >
                {/* Embed do Instagram */}
                <div className="w-full">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={`${video.url}?utm_source=ig_embed&utm_campaign=loading`}
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
              Ficou com alguma dúvida?
            </h3>
            <p className="text-white/90 text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para orientar você sobre o melhor tratamento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/5581994073827?text=Olá! Vi as informações dos especialistas e gostaria de tirar uma dúvida."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#003870] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <MessageCircle className="w-6 h-6" />
                Conversar com Especialista
              </a>

              <a
                href="https://instagram.com/clinica_werneck"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 text-base"
              >
                <Instagram size={20} />
                Seguir no Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}