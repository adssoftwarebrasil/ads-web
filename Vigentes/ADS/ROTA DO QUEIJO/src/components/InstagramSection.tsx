import { Instagram } from 'lucide-react';

interface Reel {
  src: string;
  height: number;
}

const reels: Reel[] = [
  { src: 'https://www.instagram.com/reel/DDg_c4Xx6Xz/embed/', height: 656 },
  { src: 'https://www.instagram.com/reel/DSXcc0fEUDF/embed/', height: 476 },
  { src: 'https://www.instagram.com/reel/DSV1q8HkUS7/embed/', height: 656 },
];

export default function InstagramSection() {
  return (
    <section className="py-20 md:py-32 bg-[rgb(32,29,30)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(197,162,3)] font-bold text-sm tracking-wider uppercase">
            Siga-nos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(254,254,254)] mt-3 mb-6 leading-tight">
            @rotadoqueijodf
          </h2>
          <p className="text-[rgb(254,254,254)]/70 text-lg max-w-2xl mx-auto">
            Acompanhe nosso dia a dia, novidades e criações exclusivas no Instagram.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {reels.map((reel, i) => (
            <div key={i} className="flex justify-center">
              <iframe
                className="instagram-media"
                src={reel.src}
                allowFullScreen
                frameBorder={0}
                height={reel.height}
                scrolling="no"
                title={`Instagram reel ${i + 1}`}
                style={{
                  background: 'white',
                  maxWidth: '540px',
                  width: '99.375%',
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
            href="https://www.instagram.com/rotadoqueijodf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <Instagram width={24} height={24} />
            <span>Seguir no Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
