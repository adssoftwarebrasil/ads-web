import { useEffect, useRef, useState } from 'react';
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';

const instagramPosts = [
  {
    url: 'https://www.instagram.com/reel/DQFDOhOjXFX/',
    embedUrl: 'https://www.instagram.com/reel/DQFDOhOjXFX/embed',
    type: 'reel',
    account: '@adv.marcossanti'
  },
  {
    url: 'https://www.instagram.com/p/DOW1nlIjnms/',
    embedUrl: 'https://www.instagram.com/p/DOW1nlIjnms/embed',
    type: 'post',
    account: '@finan.novaandradina'
  },
  {
    url: 'https://www.instagram.com/p/DNB8bzDxfw4/',
    embedUrl: 'https://www.instagram.com/p/DNB8bzDxfw4/embed',
    type: 'post',
    account: '@finan.novaandradina'
  }
];

export default function InstagramFeed() {
  const [isVisible, setIsVisible] = useState(false);
  const [activePost, setActivePost] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Carregar script do Instagram
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section 
      id="instagram" 
      ref={sectionRef} 
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-white"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg mb-6">
              <Instagram size={20} />
              <span className="text-sm font-semibold">Siga-nos no Instagram</span>
            </div>
          </div>

          <h2 
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ color: '#074785' }}
          >
            Nossa Comunidade{' '}
            <span className="relative inline-block">
              <span className="relative z-10">em Destaque</span>
              <span
                className="absolute bottom-2 left-0 w-full h-3 -z-0"
                style={{ 
                  background: 'linear-gradient(90deg, #833AB4 0%, #FD1D1D 50%, #F77737 100%)',
                  opacity: 0.3
                }}
              ></span>
            </span>
          </h2>

          <p 
            className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Acompanhe nosso dia a dia, eventos e conquistas dos nossos alunos
          </p>

          {/* Botão para seguir */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            
              <a href="https://www.instagram.com/finan.novaandradina/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all hover:scale-105 hover:shadow-xl shadow-lg"
              style={{ background: 'linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #F77737 100%)' }}
            >
              <Instagram size={20} />
              <span>@finan.novaandradina</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Grid de posts */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {instagramPosts.map((post, index) => (
            <div
              key={index}
              onMouseEnter={() => setActivePost(index)}
              onMouseLeave={() => setActivePost(null)}
              className={`group relative transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              {/* Card container */}
              <div 
                className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-300 ${
                  activePost === index ? 'shadow-2xl scale-105' : 'shadow-xl'
                }`}
              >
                {/* Badge de tipo */}
                <div className="absolute top-4 right-4 z-20">
                  <span 
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg backdrop-blur-sm"
                    style={{ background: 'linear-gradient(135deg, #833AB4 0%, #FD1D1D 100%)' }}
                  >
                    {post.type === 'reel' ? '🎬 Reel' : '📸 Post'}
                  </span>
                </div>

                {/* Instagram Embed */}
                <div className="instagram-embed-wrapper">
                  <iframe
                    src={post.embedUrl}
                    className="w-full"
                    style={{ 
                      border: 'none',
                      overflow: 'hidden',
                      minHeight: '500px'
                    }}
                    scrolling="no"
                    allowTransparency={true}
                  />
                </div>

                {/* Overlay com informações */}
                <div 
                  className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 pointer-events-none"
                  style={{ 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                    opacity: activePost === index ? 1 : 0
                  }}
                >
                  <div className="flex items-center justify-between text-white pointer-events-auto">
                    <span className="text-sm font-semibold">{post.account}</span>
                    
                      <a href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
                    >
                      <span className="text-xs font-semibold">Ver no Instagram</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Borda animada no hover - CORRIGIDA */}
                <div 
                  className={`absolute inset-0 rounded-3xl pointer-events-none transition-all duration-300 z-30 ${
                    activePost === index 
                      ? 'border-[3px] border-[#833AB4] shadow-[inset_0_0_20px_rgba(131,58,180,0.2)]' 
                      : 'border-[3px] border-transparent'
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Estatísticas e CTA */}
        <div 
          className={`transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Estatísticas */}
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#074785' }}>
                  Faça Parte da Nossa Família
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  Compartilhe momentos incríveis com a comunidade FINAN e inspire outros estudantes
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50">
                    <Heart className="w-6 h-6 mx-auto mb-2" style={{ color: '#e4100f' }} />
                    <p className="text-2xl font-bold" style={{ color: '#074785' }}>3k+</p>
                    <p className="text-xs text-gray-600 font-semibold">Seguidores</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50">
                    <MessageCircle className="w-6 h-6 mx-auto mb-2" style={{ color: '#074785' }} />
                    <p className="text-2xl font-bold" style={{ color: '#074785' }}>200+</p>
                    <p className="text-xs text-gray-600 font-semibold">Posts</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-red-50 to-orange-50">
                    <Instagram className="w-6 h-6 mx-auto mb-2" style={{ color: '#e4100f' }} />
                    <p className="text-2xl font-bold" style={{ color: '#074785' }}>Ativo</p>
                    <p className="text-xs text-gray-600 font-semibold">Diariamente</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center md:text-right">
                
                  <a href="https://www.instagram.com/finan.novaandradina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold transition-all hover:scale-105 hover:shadow-2xl shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #F77737 100%)' }}
                >
                  <Instagram size={24} />
                  <span>Seguir Agora</span>
                  <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  Não perca nenhuma novidade!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .instagram-embed-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        
        .instagram-embed-wrapper iframe {
          display: block;
        }
      `}</style>
    </section>
  );
}