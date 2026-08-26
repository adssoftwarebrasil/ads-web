interface EquipItem {
  src: string;
  title: string;
  subtitle: string;
  delay: number;
}

const items: EquipItem[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/mesa-de-som-externa-laptop-monitor-evento_963x1280.webp',
    title: 'Mesa de Som',
    subtitle: 'Digital e analógica',
    delay: 0,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/pilha-alto-falantes-pretos-grandes-em-fila_576x1280.webp',
    title: 'Caixas de Som',
    subtitle: 'Line Array & Subs',
    delay: 80,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/amplificador-marshall-origin-preto-e-dourado_576x275.webp',
    title: 'Amplificadores',
    subtitle: 'Marshall, Hartke e mais',
    delay: 160,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/palco-preparado-show-noturno-equipamentos-som_1280x963.webp',
    title: 'Estrutura de Palco',
    subtitle: 'Para todos os portes',
    delay: 240,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/mesa-de-som-soundcraft-ui24r-com-bolsa_575x580.webp',
    title: 'Soundcraft',
    subtitle: 'Ui24R digital mixer',
    delay: 320,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/mega%20eventos/img/conjunto-caixas-som-pretas-alinhadas-ambiente-interno_576x1280.webp',
    title: 'Sistemas de PA',
    subtitle: 'Ambientes internos e externos',
    delay: 400,
  },
];

export default function Equipment() {
  return (
    <section className="py-20 sm:py-28 bg-[rgb(53,53,53)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="lg:w-1/3 reveal-left">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[rgb(249,171,118)] mb-3">
              Locação
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Equipamentos
              <br />
              <span className="text-[rgb(255,241,18)]">de Alta Qualidade</span>
              <br />
              para o seu Evento
            </h2>
            <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-8">
              Estúdio de gravação, locação de som, iluminação e estrutura de palco. Atendemos desde
              shows íntimos a grandes eventos corporativos com equipamentos profissionais de ponta.
            </p>
            <a
              href="http://wa.me/5565996292448?text=Olá! Gostaria de um orçamento para locação de equipamentos de sonorização."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgb(255,241,18)] hover:bg-[rgb(249,171,118)] text-[rgb(53,53,53)] font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:text-white"
            >
              Pedir orçamento de locação →
            </a>
          </div>
          <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {items.map(({ src, title, subtitle, delay }) => (
              <div
                key={title}
                className="reveal-scale group relative rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors"
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="h-36 sm:h-44 overflow-hidden">
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <div className="text-white font-semibold text-sm">{title}</div>
                  <div className="text-white/50 text-xs">{subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
