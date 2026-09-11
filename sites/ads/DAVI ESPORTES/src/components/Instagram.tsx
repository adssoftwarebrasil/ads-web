import { Instagram as InstagramIcon } from 'lucide-react';

interface Embed {
  id: string;
  src: string;
  height: number;
}

const embeds: Embed[] = [
  { id: 'instagram-embed-0', src: 'https://www.instagram.com/reel/C0ueXr0Ot3U/embed/?cr=1&v=14&wp=366&rd=https%3A%2F%2Fdaviesportes.com.br&rp=%2F', height: 666 },
  { id: 'instagram-embed-1', src: 'https://www.instagram.com/p/Cz_95EguZrk/embed/?cr=1&v=14&wp=366&rd=https%3A%2F%2Fdaviesportes.com.br&rp=%2F', height: 459 },
  { id: 'instagram-embed-2', src: 'https://www.instagram.com/reel/CzoxcKbhpT5/embed/?cr=1&v=14&wp=366&rd=https%3A%2F%2Fdaviesportes.com.br&rp=%2F', height: 642 },
];

export default function Instagram() {
  return (
    <section className="py-20 bg-gray-50 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <InstagramIcon size={48} className="text-[#E1306C]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#363435] mb-4">Acompanhe nosso Instagram</h2>
          <p className="text-xl text-gray-600">
            Fique por dentro das novidades <span className="text-[#E1306C] font-semibold">@davi_esportess</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {embeds.map((embed) => (
            <div
              key={embed.id}
              className="w-full bg-white rounded-xl shadow-sm border border-gray-100 flex justify-center overflow-hidden"
              style={{ minHeight: '400px' }}
            >
              <iframe
                className="instagram-media w-full instagram-media-rendered"
                id={embed.id}
                src={embed.src}
                allowFullScreen
                frameBorder={0}
                height={embed.height}
                scrolling="no"
                style={{ borderRadius: '12px', display: 'block', minWidth: '326px' }}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
