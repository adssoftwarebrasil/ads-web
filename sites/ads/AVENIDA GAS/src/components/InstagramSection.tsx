import { Instagram, ExternalLink } from 'lucide-react';

interface Reel {
  url: string;
  embed: string;
  height: number;
  delay: string;
}

const reels: Reel[] = [
  {
    url: 'https://www.instagram.com/reel/DM0PT2Ox5mf/',
    embed: 'https://www.instagram.com/reel/DM0PT2Ox5mf/embed/captioned',
    height: 838,
    delay: '0ms',
  },
  {
    url: 'https://www.instagram.com/reel/DMictUAx9Gy/',
    embed: 'https://www.instagram.com/reel/DMictUAx9Gy/embed/captioned',
    height: 982,
    delay: '150ms',
  },
  {
    url: 'https://www.instagram.com/reel/DL0jX5SRL3H/',
    embed: 'https://www.instagram.com/reel/DL0jX5SRL3H/embed/captioned',
    height: 868,
    delay: '300ms',
  },
];

export default function InstagramSection() {
  return (
    <section
      id="promocoes"
      className="py-20 lg:py-32 bg-[#021C3F] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjE5LDIwNCw5NCwwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2RvdHMpIi8+PC9zdmc+')] opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-[#DBCC5E]/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <Instagram className="lucide lucide-instagram w-6 h-6 text-[#DBCC5E]" />
            <span className="text-[#DBCC5E] font-semibold">@avenidagassinop</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#DBCC5E] mb-4">
            Siga no Instagram
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Acompanhe nossas novidades, promoções e conteúdos exclusivos
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {reels.map((reel) => (
              <div
                key={reel.url}
                className="animate-fade-in"
                style={{ animationDelay: reel.delay }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#DBCC5E]/20 hover:scale-105 transition-all duration-300">
                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                      <div className="bg-[#DBCC5E] p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <ExternalLink className="lucide lucide-external-link w-8 h-8 text-[#021C3F]" />
                      </div>
                    </div>
                    <div className="relative" style={{ minHeight: '500px' }}>
                      <iframe
                        src={reel.embed}
                        className="w-full border-0"
                        scrolling="no"
                        loading="lazy"
                        height={reel.height}
                        style={{ minHeight: '500px' }}
                      ></iframe>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://www.instagram.com/avenidagassinop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#DBCC5E] to-[#c9ba4d] text-[#021C3F] px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#DBCC5E]/40 group"
            >
              <Instagram className="lucide lucide-instagram w-6 h-6 group-hover:rotate-12 transition-transform" />
              Ver Mais no Instagram
              <ExternalLink className="lucide lucide-external-link w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
