import { Instagram } from 'lucide-react';

const reels = [
  'https://www.instagram.com/reel/C6FCrZWyjtN/embed/',
  'https://www.instagram.com/reel/C58xOw3LoG5/embed/',
  'https://www.instagram.com/reel/C4LS_-jrGZo/embed/',
];

export default function InstagramFeed() {
  return (
    <section className="bg-gradient-to-b from-[rgb(32,29,30)] to-[rgb(50,15,18)] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Acompanhe nosso dia a dia
          </h2>
          <p className="text-gray-300 text-lg">
            Fique por dentro das novidades e serviços no nosso Instagram
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12 items-start justify-center">
          {reels.map((src, index) => (
            <div
              key={src}
              className="bg-white rounded-xl p-2 shadow-2xl flex justify-center overflow-hidden"
            >
              <iframe
                className="instagram-media"
                id={`instagram-embed-${index}`}
                src={src}
                allowTransparency
                allowFullScreen
                frameBorder={0}
                height={669}
                scrolling="no"
                title={`Instagram Reel ${index + 1}`}
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
            href="https://instagram.com/mundodasbateriasroo"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[rgb(234,29,34)] text-white px-8 py-4 rounded-full hover:bg-red-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-red-900/50"
          >
            <Instagram
              width={24}
              height={24}
              className="group-hover:scale-110 transition-transform"
            />
            Siga @mundodasbateriasroo
          </a>
        </div>
      </div>
    </section>
  );
}
