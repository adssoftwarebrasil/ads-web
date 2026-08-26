import { MessageCircle, Glasses, Award, ShoppingBag, ChevronDown } from 'lucide-react';

const cards = [
  {
    Icon: Glasses,
    glow: 'from-red-500/20 to-pink-500/20',
    title: 'Armações Exclusivas',
    text: 'Modelos importados e nacionais com design único.',
  },
  {
    Icon: Award,
    glow: 'from-red-500/20 to-orange-500/20',
    title: 'Lentes Premium',
    text: 'Tecnologia de ponta para sua saúde visual.',
  },
  {
    Icon: ShoppingBag,
    glow: 'from-red-500/20 to-purple-500/20',
    title: 'Ofertas Especiais',
    text: 'Condições exclusivas e parcelamento facilitado.',
  },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-4"
    >
      <div className="absolute inset-0 scale-105">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage:
              'url("https://storage.lucasmendes.dev/site-sp/oticamodernago%2Fhero.webp")',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/60 to-red-950/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(239,68,68,0.2),transparent_50%)]"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 pt-32 pb-16 md:pt-10">
        <div className="animate-slide-up space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none">
            Ótica Moderna <br />
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent filter drop-shadow-sm">
              A Lente Perfeita
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed px-4">
            A combinação ideal entre tecnologia avançada e as melhores armações para o seu estilo.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-delay">
          <a
            href="https://wa.me/556293756868"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_30px_rgba(220,38,38,0.4)] w-full sm:w-auto justify-center"
          >
            <MessageCircle className="lucide lucide-message-circle w-5 h-5" width={24} height={24} /> Agendar pelo WhatsApp
          </a>
          <a
            href="#servicos"
            className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all w-full sm:w-auto justify-center"
          >
            Nossos Serviços
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
          {cards.map((card) => {
            const { Icon } = card;
            return (
              <div
                key={card.title}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.glow} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`}
                ></div>
                <div className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="w-6 h-6 text-white" width={24} height={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-400">{card.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce opacity-50">
        <ChevronDown className="lucide lucide-chevron-down w-6 h-6" width={24} height={24} />
      </div>
    </section>
  );
}
