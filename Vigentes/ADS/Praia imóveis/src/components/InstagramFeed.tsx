import { useEffect } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

const posts = [
  {
    permalink: 'https://www.instagram.com/p/DSuJKs2Dn8x/',
    embedPermalink: 'https://www.instagram.com/p/DSuJKs2Dn8x/?utm_source=ig_embed&utm_campaign=loading',
  },
  {
    permalink: 'https://www.instagram.com/reel/DTN8xXQEVtp/',
    embedPermalink: 'https://www.instagram.com/reel/DTN8xXQEVtp/?utm_source=ig_embed&utm_campaign=loading',
  },
  {
    permalink: 'https://www.instagram.com/reel/DXFjCQwkR8p/',
    embedPermalink: 'https://www.instagram.com/reel/DXFjCQwkR8p/?utm_source=ig_embed&utm_campaign=loading',
  },
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function InstagramFeed() {
  useEffect(() => {
    const loadScript = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
        return;
      }
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        if (window.instgrm) window.instgrm.Embeds.process();
      };
      document.body.appendChild(script);
    };
    const timer = setTimeout(loadScript, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="instagram" className="bg-[#002e33] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-white/60 text-xs font-bold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-white/30" />
              Redes Sociais
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Siga Nossa
              <br />
              <span className="text-white/70 font-light italic">
                Jornada no Instagram
              </span>
            </h2>
          </div>

          <a
            href="https://www.instagram.com/praia.imoveis_ce/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 hover:border-white/35 text-white font-semibold px-5 py-3 rounded-full text-sm transition-all shrink-0"
          >
            <Instagram size={16} />
            @praia.imoveis_ce
            <ExternalLink size={13} className="opacity-60" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <div
              key={i}
              className="flex justify-center rounded-2xl overflow-hidden bg-white shadow-xl"
              style={{ minHeight: 540 }}
            >
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={post.embedPermalink}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: 3,
                  boxShadow: 'none',
                  margin: '1px',
                  maxWidth: 540,
                  minWidth: 326,
                  padding: 0,
                  width: '100%',
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/praia.imoveis_ce/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
          >
            Ver mais publicações no Instagram
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
