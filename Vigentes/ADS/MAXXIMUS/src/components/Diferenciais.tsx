import { DollarSign, Star, Wrench } from 'lucide-react';

const items = [
  {
    Icon: DollarSign,
    title: 'Preço Justo',
    text: 'Produtos de alta qualidade com preços acessíveis, sem comprometer seu orçamento.',
    delay: '0ms',
  },
  {
    Icon: Star,
    title: 'Atendimento de Excelência',
    text: 'Suporte personalizado e eficiente, sempre focado na satisfação do cliente.',
    delay: '200ms',
  },
  {
    Icon: Wrench,
    title: 'Assistência Completa',
    text: 'Soluções completas desde a venda até o suporte pós-venda especializado.',
    delay: '400ms',
  },
];

export default function Diferenciais() {
  return (
    <section
      className="py-20"
      style={{
        background:
          'linear-gradient(135deg, rgba(19, 57, 94, 0.05), rgba(244, 95, 38, 0.05))',
      }}
    >
      <div className="container mx-auto px-5">
        <h2 className="text-[rgb(19,57,94)] text-3xl md:text-5xl font-bold text-center mb-16">
          Nossos Diferenciais
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map(({ Icon, title, text, delay }) => (
            <div
              key={title}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0"
              style={{ animationDelay: delay }}
            >
              <div className="mb-6">
                <Icon
                  size={50}
                  className="lucide text-[rgb(244,95,38)]"
                  strokeWidth={2}
                />
              </div>
              <h3 className="text-[rgb(19,57,94)] text-2xl font-bold mb-4">
                {title}
              </h3>
              <p className="text-[rgb(173,173,175)] text-base leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
