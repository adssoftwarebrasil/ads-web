import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
      </div>
      <div className="relative z-10 text-center px-4 animate-fadeIn">
        <div className="mb-8 flex justify-center">
          <img
            src="https://i.ibb.co/RNqmtNr/image-34.png"
            alt="Castelli & Thiago"
            className="w-64 md:w-96 lg:w-[500px] h-auto drop-shadow-2xl animate-slideDown"
          />
        </div>
        <p className="text-gray-300 text-lg md:text-xl mb-12 animate-slideUp font-light tracking-wide">
          Uma nova história na música sertaneja
        </p>
        <a
          href="https://open.spotify.com/artist/castelliethiago"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-[#DAA520] hover:bg-[#B8860B] text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#DAA520]/50"
        >
          <Play className="lucide lucide-play w-5 h-5 fill-current" />
          Ouça Agora
          <span className="inline-block animate-pulse">♪</span>
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#DAA520] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#DAA520] rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
