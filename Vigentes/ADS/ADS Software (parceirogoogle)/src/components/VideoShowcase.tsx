import { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  { id: 'm22ppmWqXK0', title: 'Depoimento ADS' },
  { id: 'NPgVdBIJ4k8', title: 'Depoimento ADS 2' },
  { id: 'nVF8ykiB6QE', title: 'Depoimento ADS 3' },
  { id: 'm22ppmWqXK0', title: 'Depoimento ADS 4' },
  { id: 'NPgVdBIJ4k8', title: 'Depoimento ADS 5' },
  { id: 'nVF8ykiB6QE', title: 'Depoimento ADS 6' },
];

const desktopGroups = 2;

export default function VideoShowcase() {
  const [group, setGroup] = useState(0);
  const [slide, setSlide] = useState(0);

  const prev = () => {
    setGroup((g) => (g - 1 + desktopGroups) % desktopGroups);
    setSlide((s) => (s - 1 + videos.length) % videos.length);
  };
  const next = () => {
    setGroup((g) => (g + 1) % desktopGroups);
    setSlide((s) => (s + 1) % videos.length);
  };

  const groupVideos = videos.slice(group * 3, group * 3 + 3);
  const mobileVideo = videos[slide];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1264C6] to-[#19355E] rounded-2xl mb-4">
            <Play className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#19355E] mb-3">
            Conheça Nosso Trabalho
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Veja como ajudamos empresas a crescerem no ambiente digital com estratégias comprovadas
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {groupVideos.map((v, i) => (
              <div
                key={`${v.id}-${i}`}
                className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-[#EBFFF4] to-white"
              >
                <div className="relative w-full h-[500px]">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    title={v.title}
                    style={{ border: 'none' }}
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:hidden relative max-w-md mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-[#EBFFF4] to-white">
              <div className="relative w-full h-[60vh] max-h-[600px]">
                <iframe
                  src={`https://www.youtube.com/embed/${mobileVideo.id}`}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  title={mobileVideo.title}
                  style={{ border: 'none' }}
                ></iframe>
              </div>
            </div>
          </div>
          <button
            onClick={prev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#19355E] rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Vídeos anteriores"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#19355E] rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Próximos vídeos"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <div className="hidden lg:flex justify-center gap-2 mt-6">
            {Array.from({ length: desktopGroups }).map((_, i) => (
              <button
                key={i}
                onClick={() => setGroup(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === group ? 'bg-[#1264C6] w-8 h-3' : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                }`}
                aria-label={`Ir para grupo ${i + 1}`}
              ></button>
            ))}
          </div>
          <div className="flex lg:hidden justify-center gap-2 mt-4 sm:mt-6">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === slide ? 'bg-[#1264C6] w-8 h-3' : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                }`}
                aria-label={`Ir para vídeo ${i + 1}`}
              ></button>
            ))}
          </div>
          <div className="text-center mt-3 text-gray-600 font-medium text-sm">
            <span className="lg:hidden">{slide + 1} / {videos.length}</span>
            <span className="hidden lg:inline">{group + 1} / {desktopGroups}</span>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 text-center">
          <a
            href="https://www.youtube.com/@ADSSoftware"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#1264C6] hover:text-[#19355E] font-semibold text-base sm:text-lg transition-colors"
          >
            Ver mais vídeos no YouTube
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
