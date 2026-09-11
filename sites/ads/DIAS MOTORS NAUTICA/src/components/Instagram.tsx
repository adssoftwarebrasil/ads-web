import { Instagram as InstagramIcon } from 'lucide-react';

interface Reel {
  id: string;
  delay: string;
  title: string;
}

const REELS: Reel[] = [
  { id: 'DQo8YcOgF7A', delay: '0s', title: 'Instagram Reel 1' },
  { id: 'DN3WOHAwIoW', delay: '0.2s', title: 'Instagram Reel 2' },
  { id: 'DRRdRWnAKCS', delay: '0.4s', title: 'Instagram Reel 3' },
];

export default function Instagram() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-3 mb-4 animate-fade-in">
            <InstagramIcon
              className="lucide lucide-instagram text-[#E4405F]"
              size={32}
            />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(30,43,75)]">
              Siga no Instagram
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Acompanhe novidades, produtos e aventuras náuticas no nosso Instagram
          </p>
          <a
            href="https://www.instagram.com/diasmotorsnautica/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-[#E4405F] hover:text-[#d62976] font-semibold transition-colors group"
          >
            <InstagramIcon className="lucide lucide-instagram" size={24} />
            <span>@diasmotorsnautica</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {REELS.map((reel) => (
            <div
              key={reel.id}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: reel.delay }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div
                  className="relative w-full"
                  style={{ paddingBottom: '125%' }}
                >
                  <iframe
                    src={`https://www.instagram.com/reel/${reel.id}/embed`}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    scrolling="no"
                    allow="encrypted-media"
                    loading="lazy"
                    title={reel.title}
                  ></iframe>
                </div>
              </div>
              <a
                href={`https://www.instagram.com/reel/${reel.id}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 rounded-2xl"
              >
                <div className="flex items-center gap-2 text-white font-semibold bg-[#E4405F] px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <InstagramIcon className="lucide lucide-instagram" size={20} />
                  <span>Ver no Instagram</span>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/diasmotorsnautica/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            <InstagramIcon className="lucide lucide-instagram" size={24} />
            Ver Mais no Instagram
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
