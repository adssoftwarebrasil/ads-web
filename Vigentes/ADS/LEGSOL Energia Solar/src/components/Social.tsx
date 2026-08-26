import { useEffect } from 'react';
import { Instagram, ArrowRight, ExternalLink } from 'lucide-react';

const posts = [
  { permalink: 'https://www.instagram.com/reel/DOE5Jt3Ekdw/', extraClass: '' },
  { permalink: 'https://www.instagram.com/p/DCWcXqAuwJ9/', extraClass: '' },
  { permalink: 'https://www.instagram.com/p/DBqxx1BuAlG/', extraClass: 'md:hidden lg:flex' },
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function Social() {
  useEffect(() => {
    const id = 'instagram-embed-script';
    if (!document.getElementById(id)) {
      const script = document.createElement('script');
      script.id = id;
      script.async = true;
      script.src = 'https://www.instagram.com/embed.js';
      document.body.appendChild(script);
    } else if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section id="social" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-pink-600 font-semibold text-sm uppercase tracking-wider border border-pink-100">
            <Instagram className="lucide lucide-instagram" width={14} height={14} />
            Redes Sociais
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[rgb(27,45,114)] mb-6 tracking-tight">
            Acompanhe a Legsol
          </h2>
          <p className="text-lg text-gray-600">
            Confira nossas últimas instalações, dicas de economia e o dia a dia da nossa equipe em Franca e região.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-start">
          {posts.map((p) => (
            <div
              key={p.permalink}
              className={`flex justify-center w-full transform transition-all hover:-translate-y-1 duration-300 ${p.extraClass}`}
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={`${p.permalink}?utm_source=ig_embed&utm_campaign=loading`}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  margin: '1px',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: 0,
                  width: 'calc(100% - 2px)',
                }}
              ></blockquote>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/legsol.energiasolar/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300"
          >
            <Instagram className="lucide lucide-instagram" width={24} height={24} />
            Seguir @legsol.energiasolar
            <ArrowRight className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" width={20} height={20} />
          </a>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
            <ExternalLink className="lucide lucide-external-link" width={14} height={14} />
            <span>Junte-se aos nossos seguidores em Franca/SP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
