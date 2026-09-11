import { Instagram, ArrowRight } from 'lucide-react';

export default function InstagramSection() {
  const posts = [
    {
      id: 'DR5Orn2joiN',
      thumbnail: 'https://storage.lucasmendes.dev/site-sp/solo-eng/instagram-1.jpg',
    },
    {
      id: 'DG3TKkRucJH',
      thumbnail: 'https://storage.lucasmendes.dev/site-sp/solo-eng/instagram-2.jpg',
    },
    {
      id: 'C2dK5ULOR5q',
      thumbnail: 'https://storage.lucasmendes.dev/site-sp/solo-eng/instagram-3.jpg',
    },
  ];

  return (
    <section id="instagram" className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full backdrop-blur-sm">
            <Instagram className="text-pink-600" size={20} />
            <span className="text-[#6c6d71] font-semibold text-sm uppercase tracking-wide">
              Siga no Instagram
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#6c6d71] mb-6 leading-tight">
            Acompanhe Nossos{' '}
            <span className="text-[#cec643]">Projetos em Ação</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Veja de perto nosso maquinário de última geração e equipe em ação.
            Siga-nos para mais novidades e bastidores dos nossos projetos.
          </p>
        </div>

        {/* Grid de posts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post, index) => (
            <a
              key={index}
              href={`https://www.instagram.com/reel/${post.id}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              {/* Thumbnail/Vídeo embed */}
              <iframe
                src={`https://www.instagram.com/reel/${post.id}/embed/captioned`}
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
              />
              
              {/* Overlay com ícone do Instagram no hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Instagram className="text-white" size={48} strokeWidth={1.5} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/soloengengenhariadesolos/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            <Instagram size={24} />
            Seguir @soloengengenhariadesolos
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}