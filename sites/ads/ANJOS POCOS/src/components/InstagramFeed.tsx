import { Instagram } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/anjos_pocos_artesianos/';

const reels = [
  'https://www.instagram.com/reel/DMYGfGmBaux/embed/',
  'https://www.instagram.com/reel/DLdOZb_BKO0/embed/',
  'https://www.instagram.com/reel/DLVFgXug-DZ/embed/',
];

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-6">
            <Instagram className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Acompanhe Nossos Projetos
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Veja nossos últimos trabalhos e fique por dentro das novidades no
            Instagram
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
          >
            <Instagram className="w-5 h-5" />
            @anjos_pocos_artesianos
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reels.map((src, i) => (
            <div
              key={src}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <iframe
                className="instagram-media"
                title={`Instagram reel ${i + 1}`}
                src={src}
                allowTransparency
                allowFullScreen
                frameBorder={0}
                height={681}
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
        <div className="text-center mt-12">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg"
          >
            <Instagram className="w-6 h-6" />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
