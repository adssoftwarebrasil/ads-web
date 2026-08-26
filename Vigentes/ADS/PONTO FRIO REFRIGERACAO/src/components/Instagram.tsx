import { Instagram as InstagramIcon } from 'lucide-react';

const Instagram = () => {
  const posts = [
    {
      id: 1,
      url: 'https://www.instagram.com/p/DH0wqL1u9sc/'
    },
    {
      id: 2,
      url: 'https://www.instagram.com/reel/DRCY8f0jttA/'
    },
    {
      id: 3,
      url: 'https://www.instagram.com/reel/DQxgdY4j65E/'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <InstagramIcon className="text-[#166188]" size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#082432] mb-4">
            Acompanhe nosso <span className="text-[#166188]">Instagram</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fique por dentro das novidades, dicas de refrigeração e conheça melhor nossos produtos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {posts.map((post) => (
            <div key={post.id} className="w-full">
              <iframe
                src={`${post.url}embed`}
                className="w-full h-[600px] border-0 rounded-xl shadow-lg"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/kipontofriorefrigeracao/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#166188] to-[#6ed2e1] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <InstagramIcon size={24} />
            Seguir no Instagram
          </a>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-[#166188]/10 to-[#6ed2e1]/10 rounded-2xl border-2 border-[#6ed2e1]/30">
          <p className="text-center text-gray-700 font-semibold">
            Acesse nosso Instagram para dicas exclusivas, promoções e novidades sobre refrigeração!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Instagram;