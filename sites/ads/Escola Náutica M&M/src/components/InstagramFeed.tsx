import { useEffect } from 'react';
import { Instagram } from 'lucide-react';

export default function InstagramFeed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const instagramPosts = [
    'https://www.instagram.com/p/DMlHHX0RflY/',
    'https://www.instagram.com/p/DMIwyR6RfI-/',
    'https://www.instagram.com/reel/DH4J9J1RUgg/',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Instagram className="w-8 h-8 text-[#E4405F]" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#26367e]">
              Siga no Instagram
            </h2>
          </div>
          <p className="text-lg text-[#6b7280] mb-6">
            Acompanhe nossos alunos navegando e vivendo a experiência náutica
          </p>
          <a
            href="https://www.instagram.com/escolanauticamm/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            <span>@escolanauticamm</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {instagramPosts.map((postUrl, index) => (
            <div
              key={index}
              className="flex justify-center"
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={postUrl}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: '0',
                  borderRadius: '3px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '1px',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: '0',
                  width: '99.375%',
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#6b7280] mb-4">
            Quer ver mais? Visite nosso perfil no Instagram
          </p>
          <a
            href="https://www.instagram.com/escolanauticamm/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#26367e] hover:bg-[#0caff0] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Ver Mais Posts
          </a>
        </div>
      </div>
    </section>
  );
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
