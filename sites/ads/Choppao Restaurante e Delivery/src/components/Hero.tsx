import { Star, Clock, MapPin } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/5565981321662';

const infoCards = [
  {
    icon: Clock,
    title: 'Horário',
    lines: ['Seg a Dom', '11:00 às 00:00'],
  },
  {
    icon: MapPin,
    title: 'Localização',
    lines: ['Praça 8 de Abril, 44', 'Goiabeiras, Cuiabá - MT'],
    fill: false,
  },
  {
    icon: Star,
    title: 'Avaliação',
    lines: ['Bar e Restaurante', 'Mais Antigo de Cuiabá'],
    fill: true,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          playsInline
          poster="https://storage.lucasmendes.dev/site-sp/choppao%20restaurante%2Fimg%2Fhero-background.webp"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://storage.lucasmendes.dev/site-sp/choppao%20restaurante%2Fimg%2Fhero-background-video.mp4"
            type="video/mp4"
          />
          Seu navegador não suporta a tag de vídeo.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 z-10"></div>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-[rgb(71,136,84)]/90 text-white px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          <Star className="w-4 h-4 fill-current" />
          <span className="font-semibold">Tradição desde 1974</span>
          <Star className="w-4 h-4 fill-current" />
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          CHOPPÃO
          <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 text-[rgb(71,136,84)]">
            Restaurante &amp; Choperia
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Destino gastronômico e turístico de Cuiabá. Sabores autênticos da culinária regional,
          brasileira e internacional em um ambiente tradicional e acolhedor.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[rgb(71,136,84)] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[rgb(61,126,74)] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer"
          >
            Faça seu Pedido via WhatsApp
          </a>
          <button className="w-full sm:w-auto bg-white text-[rgb(71,136,84)] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer">
            Peça pelo App
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {infoCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <Icon
                  className={`w-8 h-8 text-[rgb(71,136,84)] mx-auto mb-3${
                    card.fill ? ' fill-current' : ''
                  }`}
                />
                <p className="text-white font-semibold text-lg mb-1">{card.title}</p>
                {card.lines.map((line) => (
                  <p key={line} className="text-white/80">
                    {line}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20"></div>
    </section>
  );
}
