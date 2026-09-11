import { Award, Palette } from 'lucide-react';

const cards = [
  {
    icon: Award,
    iconClass: 'lucide lucide-award text-white',
    title: 'Experiência Reconhecida',
    text: 'Mais de 20 anos de tradição no mercado, com milhares de projetos executados com excelência. Nossa expertise garante resultados impecáveis em cada entrega.',
  },
  {
    icon: Palette,
    iconClass: 'lucide lucide-palette text-white',
    title: 'Projetos Personalizados',
    text: 'Seu desejo é a nossa prioridade. Criamos tapetes exclusivos que refletem sua personalidade e complementam perfeitamente seu espaço.',
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/pjtapete%2F%20Por%20que%20contratar-imagem%20de%20fundo.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-[rgb(15,15,13)] opacity-85"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Por Que Escolher a PJ Tapetes?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 hover:bg-opacity-15 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[rgb(183,40,26)] rounded-full flex items-center justify-center">
                      <Icon className={card.iconClass} width={32} height={32} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {card.title}
                    </h3>
                    <p className="text-white text-opacity-90 text-lg leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
