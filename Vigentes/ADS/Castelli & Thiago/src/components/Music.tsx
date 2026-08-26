import { Play } from 'lucide-react';

const videos = [
  {
    href: 'https://www.youtube.com/watch?v=u3zIgjc0Y9k',
    img: 'https://img.youtube.com/vi/u3zIgjc0Y9k/maxresdefault.jpg',
    title: 'Ao Vivo',
  },
  {
    href: 'https://www.youtube.com/watch?v=Z200J9ZeET0',
    img: 'https://img.youtube.com/vi/Z200J9ZeET0/maxresdefault.jpg',
    title: 'Acústico',
  },
  {
    href: 'https://www.youtube.com/watch?v=dCJqh2tlFuw',
    img: 'https://img.youtube.com/vi/dCJqh2tlFuw/maxresdefault.jpg',
    title: 'Show Completo',
  },
];

export default function Music() {
  return (
    <section id="musicas" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
          Nossas Músicas
          <div className="h-1 w-24 bg-[#DAA520] mx-auto mt-4"></div>
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          Confira nossos vídeos e apresentações
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <a
              key={video.href}
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#DAA520]/30 transition-all duration-300"
            >
              <div className="aspect-video relative">
                <img
                  src={video.img}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 rounded-full bg-[#DAA520] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="lucide lucide-play w-10 h-10 text-black fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold">{video.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex gap-1">
                      <div
                        className="w-1 h-4 bg-[#DAA520] rounded-full animate-pulse"
                        style={{ animationDelay: '0s' }}
                      ></div>
                      <div
                        className="w-1 h-4 bg-[#DAA520] rounded-full animate-pulse"
                        style={{ animationDelay: '0.15s' }}
                      ></div>
                      <div
                        className="w-1 h-4 bg-[#DAA520] rounded-full animate-pulse"
                        style={{ animationDelay: '0.3s' }}
                      ></div>
                    </div>
                    <span className="text-gray-300 text-sm">Assistir agora</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
