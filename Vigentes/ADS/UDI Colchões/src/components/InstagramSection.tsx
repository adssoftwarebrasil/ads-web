import { Instagram } from 'lucide-react';
import { useEffect } from 'react';

export default function InstagramSection() {
  const instagramPosts = [
    'https://www.instagram.com/reel/DRCQC32DvZ7/',
    'https://www.instagram.com/reel/DQr1L8CDyQE/',
    'https://www.instagram.com/reel/DPm1wz0El5o/',
  ];

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

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Instagram size={40} className="text-primary-vibrant" />
            <h2 className="text-4xl lg:text-5xl font-black text-primary">
              Siga-nos no Instagram
            </h2>
          </div>
          <p className="text-lg text-primary-medium max-w-2xl mx-auto">
            Acompanhe nossas novidades, dicas de sono e promoções exclusivas
          </p>
          <a
            href="https://www.instagram.com/udicolchoes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg"
          >
            <Instagram size={20} />
            @udicolchoes
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {instagramPosts.map((postUrl, index) => (
            <div
              key={index}
              className="instagram-embed-wrapper rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow w-full"
            >
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={`${postUrl}?utm_source=ig_embed&utm_campaign=loading`}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: '0',
                  borderRadius: '3px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '0 auto',
                  maxWidth: '100%',
                  minWidth: '280px',
                  padding: '0',
                  width: '100%',
                }}
              ></blockquote>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/udicolchoes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-vibrant text-white text-lg font-bold rounded-xl hover:bg-primary-medium transition-all hover:scale-105 shadow-xl"
          >
            <Instagram size={24} />
            Ver Mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
