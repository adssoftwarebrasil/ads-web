import { Instagram as InstagramIcon } from 'lucide-react';

const reels: { id: string; src: string; delay: string }[] = [
  {
    id: 'instagram-embed-0',
    src: 'https://www.instagram.com/reel/DPRq9IoEcCK/embed/?cr=1&v=14&wp=398&rd=https%3A%2F%2Flatoka.com.br&rp=%2F',
    delay: '0ms',
  },
  {
    id: 'instagram-embed-1',
    src: 'https://www.instagram.com/reel/DNRLVKMRWJs/embed/?cr=1&v=14&wp=398&rd=https%3A%2F%2Flatoka.com.br&rp=%2F',
    delay: '200ms',
  },
  {
    id: 'instagram-embed-2',
    src: 'https://www.instagram.com/reel/DNEdNdrOGw3/embed/?cr=1&v=14&wp=398&rd=https%3A%2F%2Flatoka.com.br&rp=%2F',
    delay: '400ms',
  },
];

export default function Instagram() {
  return (
    <section className="py-20 bg-[#FFF5E6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 transform transition-all duration-1000 translate-y-0 opacity-100">
          <div className="flex items-center justify-center gap-3 mb-4">
            <InstagramIcon className="lucide lucide-instagram w-10 h-10 text-[#F93131]" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">Siga no Instagram</h2>
          </div>
          <p className="text-xl text-[#2D2D2D] mb-4">Acompanhe nossas novidades e promoções</p>
          <a
            href="https://www.instagram.com/latokabueno"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#F93131] font-semibold text-lg hover:text-[#C41E3A] transition-colors"
          >
            @latokabueno
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reels.map(({ id, src, delay }) => (
            <div
              key={id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-700 hover:scale-105 translate-y-0 opacity-100"
              style={{ transitionDelay: delay }}
            >
              <iframe
                className="instagram-media"
                id={id}
                src={src}
                allowTransparency
                allowFullScreen
                frameBorder="0"
                height={703}
                scrolling="no"
                style={{
                  background: 'white',
                  maxWidth: '540px',
                  width: 'calc(100% - 2px)',
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
          ))}
        </div>
        <div className="text-center mt-12 transform transition-all duration-1000 delay-700 translate-y-0 opacity-100">
          <a
            href="https://www.instagram.com/latokabueno"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#F93131] to-[#C41E3A] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 mx-auto shadow-xl"
          >
            <InstagramIcon className="lucide lucide-instagram w-6 h-6" />
            Ver Mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
