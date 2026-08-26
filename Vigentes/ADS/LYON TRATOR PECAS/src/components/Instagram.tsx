import { useEffect } from 'react';
import { Instagram as InstagramIcon } from 'lucide-react';

export default function Instagram() {
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

  const posts = [
    'https://www.instagram.com/reel/DQMj51XjJ2C/',
    'https://www.instagram.com/reel/DQ_3FdeDQFN/',
    'https://www.instagram.com/reel/DQ9XrZpADi2/'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <InstagramIcon size={18} />
            Siga-nos no Instagram
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a18] mb-4">
            Acompanhe Nosso Dia a Dia
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Fique por dentro das novidades, produtos e bastidores da Lyon Trator Peças
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((postUrl, index) => (
            <div key={index} className="flex justify-center">
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
                  width: 'calc(100% - 2px)'
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/lyontratorpecas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-600 hover:to-pink-600 transition-all hover:scale-105 shadow-lg"
          >
            <InstagramIcon size={24} />
            Seguir @lyontratorpecas
          </a>
        </div>
      </div>
    </section>
  );
}
