import { Instagram } from 'lucide-react';

const reels = [
  'https://www.instagram.com/reel/DJ5YzjTM09j/embed/?cr=1&v=14&wp=371&rd=https%3A%2F%2Fdraritalucachinski.netlify.app&rp=%2F',
  'https://www.instagram.com/reel/DJ2y4cds7_Z/embed/?cr=1&v=14&wp=371&rd=https%3A%2F%2Fdraritalucachinski.netlify.app&rp=%2F',
  'https://www.instagram.com/reel/DP-KUxFjFkJ/embed/?cr=1&v=14&wp=371&rd=https%3A%2F%2Fdraritalucachinski.netlify.app&rp=%2F',
];

export default function InstagramFeed() {
  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
            Acompanhe Minha Jornada no <span className="text-[rgb(157,111,88)] font-normal">Instagram</span>
          </h2>
          <p className="text-lg text-gray-400 font-light max-w-3xl mx-auto">
            Dicas diárias, receitas saudáveis e inspiração para sua transformação
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 justify-items-center">
          {reels.map((src, i) => (
            <div key={i} className="w-full flex justify-center min-w-[300px]">
              <div className="w-full max-w-[540px] shadow-xl rounded-lg overflow-hidden bg-white">
                <iframe
                  className="instagram-media"
                  src={src}
                  allowFullScreen
                  frameBorder={0}
                  height={669}
                  scrolling="no"
                  title={`Instagram reel ${i + 1}`}
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
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/ritalucachinski/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-black border border-gray-800 text-white px-8 py-4 rounded-lg hover:border-[rgb(157,111,88)] hover:scale-105 transition-all duration-300 font-normal text-lg"
          >
            <Instagram className="w-6 h-6 text-[rgb(157,111,88)]" />
            Seguir @ritalucachinski
          </a>
        </div>
      </div>
    </section>
  );
}
