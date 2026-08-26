import { Palette, Zap, Shield, CheckCircle } from 'lucide-react';

const cards = [
  {
    Icon: Palette,
    title: 'Design Personalizado',
    text: 'Projetos que combinam com seu estilo e espaço disponível',
  },
  {
    Icon: Zap,
    title: 'Entrega Rápida',
    text: 'Agilidade na construção e instalação da sua piscina',
  },
  {
    Icon: Shield,
    title: 'Materiais Resistentes',
    text: 'Usamos os melhores materiais do mercado',
  },
  {
    Icon: CheckCircle,
    title: 'Garantia de Qualidade',
    text: 'Compromisso total com a excelência em cada projeto',
  },
];

const stats = [
  { value: '20+', label: 'Anos de experiência' },
  { value: '150+', label: 'Projetos realizados' },
  { value: '300+', label: 'Clientes satisfeitos' },
  { value: '40+', label: 'Cidades atendidas' },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-20 md:py-32 bg-white px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary text-sm uppercase font-semibold mb-4">Vantagens</p>
          <h2 className="text-4xl md:text-5xl text-primary font-bold font-heading mb-6">
            Vantagens de ter uma piscina ÁGUAS CLARAS
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Construa o espaço ideal para sua família relaxar e aproveitar mais momentos juntos.
            Piscinas com garantia de qualidade.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 p-8 rounded-2xl hover:border-secondary hover:shadow-lg transition-all duration-300"
            >
              <Icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-bold text-xl text-primary mb-4">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
        <div className="bg-primary rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{s.value}</div>
                <div className="text-white/80 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
