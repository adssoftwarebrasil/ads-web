import { Instagram } from 'lucide-react';

const embeds = [
  {
    id: 'instagram-embed-0',
    src: 'https://www.instagram.com/reel/DVwSqBUCQwh/embed/?cr=1&v=14&wp=347&rd=https%3A%2F%2Fdommanoelmoveis.com.br&rp=%2F',
    height: 639,
  },
  {
    id: 'instagram-embed-1',
    src: 'https://www.instagram.com/p/DU9F8ZLAQQ7/embed/?cr=1&v=14&wp=347&rd=https%3A%2F%2Fdommanoelmoveis.com.br&rp=%2F',
    height: 666,
  },
  {
    id: 'instagram-embed-2',
    src: 'https://www.instagram.com/reel/DYACSe7tY5S/embed/?cr=1&v=14&wp=347&rd=https%3A%2F%2Fdommanoelmoveis.com.br&rp=%2F',
    height: 639,
  },
];

export default function InstagramFeed() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="h-px w-12 bg-[rgb(183,149,108)]"></span>
            <span className="text-[rgb(183,149,108)] text-sm font-semibold uppercase tracking-widest">
              @dom_manoel
            </span>
            <span className="h-px w-12 bg-[rgb(183,149,108)]"></span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl text-[rgb(103,66,42)] font-bold mb-2">
            Veja nossos produtos no <span className="text-[rgb(183,149,108)]">Instagram</span>
          </h2>
          <p className="text-[rgb(103,66,42)]/60 text-base">
            Lançamentos, inspirações e novidades toda semana
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {embeds.map((embed) => (
            <div key={embed.id} className="flex justify-center w-full">
              <div className="w-full max-w-[380px]">
                <iframe
                  className="instagram-media"
                  id={embed.id}
                  src={embed.src}
                  allowTransparency
                  allowFullScreen
                  frameBorder={0}
                  height={embed.height}
                  scrolling="no"
                  style={{
                    background: 'white',
                    maxWidth: '380px',
                    width: '100%',
                    borderRadius: '3px',
                    border: '1px solid rgb(219, 219, 219)',
                    boxShadow: 'none',
                    display: 'block',
                    margin: '0px 0px 12px',
                    minWidth: '326px',
                    padding: '0px',
                  }}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/dom_manoel/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-bold px-8 py-3.5 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
          >
            <Instagram size={18} /> Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
