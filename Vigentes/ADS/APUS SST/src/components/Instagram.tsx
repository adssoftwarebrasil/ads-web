import { Instagram as InstagramIcon } from 'lucide-react';

const reels = [
  'https://www.instagram.com/reel/DQU0oUtkSIG/embed/?cr=1&v=14&wp=366&rd=https%3A%2F%2Fapusmed.com.br&rp=%2F',
  'https://www.instagram.com/reel/DOWvFGsEWG-/embed/?cr=1&v=14&wp=366&rd=https%3A%2F%2Fapusmed.com.br&rp=%2F',
  'https://www.instagram.com/reel/DPM486FkSWY/embed/?cr=1&v=14&wp=366&rd=https%3A%2F%2Fapusmed.com.br&rp=%2F',
];

export default function InstagramSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(28,9,31)] mb-4">
            Acompanhe Nossas Dicas no Instagram
          </h2>
          <p className="text-xl text-gray-600">
            Conteúdo exclusivo sobre saúde e segurança do trabalho
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {reels.map((src, i) => (
            <div key={i} className="flex justify-center">
              <iframe
                className="instagram-media instagram-media-rendered"
                id={`instagram-embed-${i}`}
                src={src}
                allowTransparency
                allowFullScreen
                frameBorder={0}
                height={663}
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
        <div className="text-center">
          <a
            href="https://www.instagram.com/apus.sst/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[rgb(78,20,104)] text-white font-bold rounded-lg hover:bg-[rgb(58,0,84)] transition-all duration-200 hover:shadow-lg"
          >
            <InstagramIcon size={24} className="lucide lucide-instagram " />
            <span>Seguir no Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
