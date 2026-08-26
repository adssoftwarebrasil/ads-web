import { useEffect } from 'react';
import { Instagram } from 'lucide-react';

export default function InstagramSection() {
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
    'https://www.instagram.com/reel/CzKNWFQuW8V/',
    'https://www.instagram.com/reel/CzqpJ11Oc0b/',
    'https://www.instagram.com/reel/DJmD5xouAF6/',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Instagram size={40} className="text-accent" />
            <h2 className="section-title mb-0">Nosso Instagram</h2>
          </div>
          <p className="section-subtitle">Acompanhe nossos trabalhos e novidades</p>
          <a
            href="https://instagram.com/emporio_deck_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-accent hover:text-primary font-semibold transition-colors"
          >
            @emporio_deck_
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((postUrl, index) => (
            <div key={index} className="instagram-embed-wrapper">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={postUrl}
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
                  width: 'calc(100% - 2px)',
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com/emporio_deck_"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Instagram size={20} />
            <span>Seguir no Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
