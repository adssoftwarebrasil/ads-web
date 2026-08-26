import { Users, Music2, ListMusic, Disc3 } from 'lucide-react';

const spotifyStats = [
  { Icon: Users, value: '10K+', label: 'Seguidores' },
  { Icon: Music2, value: '50K+', label: 'Ouvintes Mensais' },
  { Icon: ListMusic, value: '100+', label: 'Playlists' },
  { Icon: Disc3, value: '20+', label: 'Músicas' },
];

export default function Connect() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
          Conecte-se
          <div className="h-1 w-24 bg-[#DAA520] mx-auto mt-4"></div>
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          Siga a dupla nas redes sociais e ouça no Spotify
        </p>
        <div className="flex justify-center gap-8 mb-16 flex-wrap">
          <a
            href="https://instagram.com/castelliethiago"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-pink-500/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram w-10 h-10 text-white"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </div>
            <p className="text-center text-gray-400 mt-2 text-sm">@castelliethiago</p>
          </a>
          <a
            href="https://youtube.com/@castelliethiago"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-red-500/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-youtube w-10 h-10 text-white"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <path d="m10 15 5-3-5-3z"></path>
              </svg>
            </div>
            <p className="text-center text-gray-400 mt-2 text-sm">@castelliethiago</p>
          </a>
          <a
            href="https://tiktok.com/@castelliethiago"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-black to-cyan-400 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-cyan-500/50">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
              </svg>
            </div>
            <p className="text-center text-gray-400 mt-2 text-sm">@castelliethiago</p>
          </a>
        </div>
        <div className="max-w-4xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center gap-6 mb-8">
            <img
              src="https://i.ibb.co/RNqmtNr/image-34.png"
              alt="Castelli & Thiago"
              className="w-24 h-24 rounded-xl shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Castelli & Thiago</h3>
              <p className="text-gray-400">Disponível no Spotify</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {spotifyStats.map(({ Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-2">
                  <Icon className="w-8 h-8 text-[#DAA520]" />
                </div>
                <p className="text-2xl font-bold text-white mb-1">{value}</p>
                <p className="text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>
          <a
            href="https://open.spotify.com/artist/castelliethiago"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#1DB954] hover:bg-[#1ed760] text-white font-semibold py-4 rounded-full transition-all duration-300 text-center transform hover:scale-105 shadow-lg hover:shadow-green-500/50"
          >
            Ouvir no Spotify
          </a>
        </div>
      </div>
    </section>
  );
}
