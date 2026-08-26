import { useRef, useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  'https://storage.lucasmendes.dev/comuny/video/video1.mp4',
  'https://storage.lucasmendes.dev/comuny/video/video2.mp4',
  'https://storage.lucasmendes.dev/comuny/video/video3.mp4',
  'https://storage.lucasmendes.dev/comuny/video/video4.mp4',
];

function getStyle(offset: number): React.CSSProperties {
  if (offset === 0) {
    return { transform: 'translateX(0px) scale(1.1) rotateY(0deg)', opacity: 1, zIndex: 30, transformStyle: 'preserve-3d' };
  }
  if (offset === 1) {
    return { transform: 'translateX(60%) scale(0.85) rotateY(-25deg)', opacity: 0.6, zIndex: 20, transformStyle: 'preserve-3d' };
  }
  if (offset === videos.length - 1) {
    return { transform: 'translateX(-60%) scale(0.85) rotateY(25deg)', opacity: 0.6, zIndex: 20, transformStyle: 'preserve-3d' };
  }
  return { transform: 'translateX(0px) scale(0.7)', opacity: 0, zIndex: 10, transformStyle: 'preserve-3d' };
}

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const next = () => setActive((a) => (a + 1) % videos.length);
  const prev = () => setActive((a) => (a - 1 + videos.length) % videos.length);

  const play = (i: number) => {
    const v = videoRefs.current[i];
    if (v) {
      if (v.paused) v.play();
      else v.pause();
    }
  };

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-comuny-dark-light to-comuny-dark relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(1, 255, 106, 0.1) 50px, rgba(1, 255, 106, 0.1) 52px)',
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4"></h2>
        </div>
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
          <div className="relative h-full flex items-center justify-center perspective-1000">
            {videos.map((src, i) => {
              const offset = (i - active + videos.length) % videos.length;
              return (
                <div
                  key={i}
                  className="absolute w-full max-w-[300px] md:max-w-[500px] lg:max-w-[700px] transition-all duration-600 ease-out"
                  style={getStyle(offset)}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-br from-comuny-purple/20 via-transparent to-comuny-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
                    <video
                      ref={(el) => (videoRefs.current[i] = el)}
                      src={src}
                      className="w-full h-full object-cover"
                      loop
                      playsInline
                      preload="metadata"
                    ></video>
                    {offset === 0 && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-20">
                        <button
                          onClick={() => play(i)}
                          className="w-20 h-20 rounded-full bg-comuny-purple/80 hover:bg-comuny-green flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse-slow"
                        >
                          <Play className="w-10 h-10 text-white ml-1" fill="white" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-comuny-purple backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-comuny-purple backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="flex justify-center mt-8 space-x-3">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === active ? 'bg-comuny-green w-8' : 'bg-white/30 hover:bg-white/50'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
