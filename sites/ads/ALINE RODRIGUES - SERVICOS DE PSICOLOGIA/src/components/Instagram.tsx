import { Instagram as InstagramIcon } from 'lucide-react';
import { useEffect } from 'react';

export default function Instagram() {
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
    'https://www.instagram.com/reel/DPuTcHujjKP/',
    'https://www.instagram.com/reel/DP_rwgsjiaZ/',
    'https://www.instagram.com/reel/DQRtWJ4jrK0/',
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full text-sm font-medium text-beige-dark mb-4">
            <InstagramIcon className="w-4 h-4" />
            Conteúdo Exclusivo
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-4">
            Acompanhe no Instagram
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((url, index) => (
            <div key={index} className="flex justify-center w-full">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '3px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '0 auto',
                  maxWidth: '100%',
                  minWidth: '280px',
                  padding: 0,
                  width: '100%',
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/alinerodrigues.psicologa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <InstagramIcon className="w-5 h-5" />
            Seguir @alinerodrigues.psicologa
          </a>
        </div>
      </div>
    </section>
  );
}
