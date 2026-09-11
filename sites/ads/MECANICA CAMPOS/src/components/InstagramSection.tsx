import { useEffect } from 'react';
import { Instagram } from 'lucide-react';

export default function InstagramSection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const instagramPosts = [
    'https://www.instagram.com/reel/C0Q6uYqOSID/',
    'https://www.instagram.com/tv/CZad_JRIxYz/',
    'https://www.instagram.com/p/CDxOVxbj2tm/'
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="w-10 h-10 text-[#FF6B35] mr-3" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#152755]">
              Siga-nos no Instagram
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Acompanhe nossos trabalhos, novidades e promoções
          </p>
          <a
            href="https://www.instagram.com/mecanicacampos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <Instagram className="mr-2" size={24} />
            @mecanicacampos
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instagramPosts.map((postUrl, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={`${postUrl}?utm_source=ig_embed&utm_campaign=loading`}
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
                  width: 'calc(100% - 2px)'
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-4">
            Ficou interessado? Visite nosso perfil para ver mais!
          </p>
          <a
            href="https://www.instagram.com/mecanicacampos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#FF6B35] hover:text-[#e55a2a] font-semibold text-lg transition-colors"
          >
            Ver mais no Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
