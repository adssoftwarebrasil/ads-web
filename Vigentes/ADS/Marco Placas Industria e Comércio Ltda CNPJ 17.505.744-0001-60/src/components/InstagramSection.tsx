import { useEffect } from 'react';
import { Instagram } from 'lucide-react';

interface Reel {
  permalink: string;
  delay: number;
}

const reels: Reel[] = [
  { permalink: 'https://www.instagram.com/reel/DO-8qaBjZhg/', delay: 0 },
  { permalink: 'https://www.instagram.com/reel/DNCIDalt3cN/', delay: 150 },
  { permalink: 'https://www.instagram.com/p/DDNnlrdyjxt/', delay: 300 },
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function InstagramSection() {
  useEffect(() => {
    const scriptId = 'instagram-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.src = 'https://www.instagram.com/embed.js';
      document.body.appendChild(script);
    } else if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="py-16 md:py-20 px-5 md:px-10 bg-gradient-to-r from-[rgb(167,28,31)] to-[rgb(120,20,22)]">
      <div className="max-w-7xl mx-auto">
        <div className="transition-all duration-1000 text-center mb-12 opacity-100 scale-100">
          <Instagram
            className="lucide lucide-instagram w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 text-white"
            width={24}
            height={24}
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Siga-nos no Instagram
          </h2>
          <p className="text-white text-lg md:text-xl mb-8 opacity-90">
            Confira nossos projetos mais recentes, bastidores e novidades da Marco Placas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reels.map((reel) => (
            <div
              key={reel.permalink}
              className="transition-all duration-700 opacity-100 translate-y-0"
              style={{ transitionDelay: `${reel.delay}ms` }}
            >
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={reel.permalink}
                  data-instgrm-version="14"
                  style={{
                    background: 'rgb(255, 255, 255)',
                    border: '0px',
                    borderRadius: '3px',
                    boxShadow:
                      'rgba(0, 0, 0, 0.5) 0px 0px 1px 0px, rgba(0, 0, 0, 0.15) 0px 1px 10px 0px',
                    margin: '0px',
                    maxWidth: '100%',
                    minWidth: '326px',
                    padding: '0px',
                    width: '100%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="https://www.instagram.com/marcoplacasbh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[rgb(167,28,31)] px-8 py-4 rounded-md hover:bg-gray-100 transition-all hover:scale-105 font-semibold text-lg shadow-xl"
          >
            <Instagram className="lucide lucide-instagram" width={24} height={24} />
            @marcoplacasbh
          </a>
        </div>
      </div>
    </div>
  );
}
