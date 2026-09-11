import { useEffect } from 'react';
import { Instagram } from 'lucide-react';

const InstagramFeed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const posts = [
    'https://www.instagram.com/reel/DRb5y4JAOlS/',
    'https://www.instagram.com/p/DJss0Z1OiR3/',
    'https://www.instagram.com/p/DGf_GHiOY0V/'
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <Instagram className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-wide uppercase">
              Siga no Instagram
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Acompanhe Nossos <span className="text-primary">Momentos</span>
          </h2>

          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-8">
            Inspiração diária, dicas de bem-estar e novidades exclusivas
          </p>

          <a
            href="https://www.instagram.com/lih_experienciadosono"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-bold transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" />
            @lih_experienciadosono
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {posts.map((url, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-gray-100 hover:border-primary/20 flex"
            >
              <blockquote
                className="instagram-media w-full"
                data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: '0',
                  borderRadius: '0',
                  boxShadow: 'none',
                  margin: '0',
                  maxWidth: '100%',
                  minWidth: '100%',
                  padding: '0',
                  width: '100%'
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/lih_experienciadosono"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold"
          >
            <Instagram className="w-6 h-6" />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
