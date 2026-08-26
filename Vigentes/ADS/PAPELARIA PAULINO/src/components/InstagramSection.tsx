import { Instagram } from 'lucide-react';

const reels = [
  'https://www.instagram.com/reel/Cv48sxBpFPE/embed/',
  'https://www.instagram.com/reel/DEOOPqgx4Jc/embed/',
  'https://www.instagram.com/reel/C4f221IOsP3/embed/',
];

export default function InstagramSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <Instagram size={40} className="text-[rgb(237,48,54)]" />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Siga no Instagram</h2>
          </div>
          <div className="w-24 h-1 bg-[rgb(237,48,54)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Acompanhe nossas novidades, promoções e dicas no Instagram
          </p>
          <a
            href="https://www.instagram.com/papelaria.paulino/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-[rgb(61,61,147)] hover:text-[rgb(81,81,187)] font-semibold text-lg transition-colors"
          >
            @papelaria.paulino
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reels.map((src, i) => (
            <div
              key={src}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <iframe
                className="instagram-media"
                src={src}
                title={`Instagram reel ${i + 1}`}
                allowTransparency
                allowFullScreen
                frameBorder="0"
                height={683}
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
            href="https://www.instagram.com/papelaria.paulino/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold"
          >
            <Instagram size={24} />
            <span>Seguir no Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
