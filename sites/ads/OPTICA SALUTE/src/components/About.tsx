import { ShieldCheck, HeartHandshake, Star, Clock } from 'lucide-react';

const stats = [
  { value: '3+', label: 'Anos de Mercado' },
  { value: '5.0★', label: 'Média Google' },
  { value: '100%', label: 'Satisfação' },
];

const cards = [
  {
    Icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check',
    title: 'Qualidade Garantida',
    text: 'Produtos originais das melhores marcas do mundo, com garantia e procedência certificada.',
    bg: 'rgb(223, 209, 162)',
    iconBg: 'rgba(80, 4, 4, 0.12)',
  },
  {
    Icon: HeartHandshake,
    iconClass: 'lucide lucide-heart-handshake',
    title: 'Atendimento Personalizado',
    text: 'Nossa equipe escuta você para encontrar a solução ideal para sua visão e estilo pessoal.',
    bg: 'white',
    iconBg: 'rgba(223, 209, 162, 0.35)',
  },
  {
    Icon: Star,
    iconClass: 'lucide lucide-star',
    title: 'Nota 5.0 no Google',
    text: 'Referência em excelência na Asa Sul. Cada cliente sai satisfeito — isso não é por acaso.',
    bg: 'rgb(223, 209, 162)',
    iconBg: 'rgba(80, 4, 4, 0.12)',
  },
  {
    Icon: Clock,
    iconClass: 'lucide lucide-clock',
    title: 'Pós-Venda Impecável',
    text: 'Ajustes, reparos e suporte sempre que precisar. O nosso compromisso vai além da venda.',
    bg: 'white',
    iconBg: 'rgba(223, 209, 162, 0.35)',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32" style={{ backgroundColor: 'rgb(240, 238, 239)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="section-reveal">
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ backgroundColor: 'rgba(223, 209, 162, 0.4)', color: 'rgb(80, 4, 4)' }}
            >
              Sobre a Óptica Salute
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
              style={{ color: 'rgb(53, 59, 59)' }}
            >
              Mais de 3 anos{' '}
              <span style={{ color: 'rgb(80, 4, 4)' }}>cuidando da sua visão</span> em Brasília
            </h2>
            <p
              className="text-base lg:text-lg leading-relaxed mb-6"
              style={{ color: 'rgb(99, 99, 97)', lineHeight: 1.8 }}
            >
              A Óptica Salute nasceu com uma missão clara: unir saúde ocular e estilo em um único
              lugar. Desde 2023, somos referência na Asa Sul com uma equipe altamente qualificada e
              um espaço pensado para proporcionar a melhor experiência de compra.
            </p>
            <p
              className="text-base lg:text-lg leading-relaxed mb-10"
              style={{ color: 'rgb(99, 99, 97)', lineHeight: 1.8 }}
            >
              Aqui você encontra óculos de grau, óculos de sol, lentes de contato e armações das
              marcas mais desejadas do mundo — tudo com a qualidade e o carinho que você merece.
            </p>
            <div className="flex flex-wrap gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-3xl lg:text-4xl font-bold mb-1"
                    style={{ color: 'rgb(80, 4, 4)' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs uppercase tracking-wider font-medium"
                    style={{ color: 'rgb(99, 99, 97)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="section-reveal grid grid-cols-2 gap-4">
            {cards.map((card) => {
              const { Icon } = card;
              return (
                <div
                  key={card.title}
                  className="p-6 rounded-2xl transition-transform duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: card.bg, boxShadow: 'rgba(0, 0, 0, 0.06) 0px 4px 20px' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    <Icon
                      width={20}
                      height={20}
                      className={card.iconClass}
                      strokeWidth={2}
                      style={{ color: 'rgb(80, 4, 4)' }}
                    />
                  </div>
                  <h3
                    className="font-bold text-sm mb-2 leading-snug"
                    style={{ color: 'rgb(53, 59, 59)' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgb(99, 99, 97)' }}>
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
