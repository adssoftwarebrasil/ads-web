import { Award, PenTool, DollarSign, Users } from 'lucide-react';

const items = [
  {
    Icon: Award,
    title: 'Produtos de Qualidade',
    text: 'Piscinas em alvenaria, fibra e vinil com máxima durabilidade',
  },
  {
    Icon: PenTool,
    title: 'Soluções Sob Medida',
    text: 'Projetos personalizados para cada estilo e ambiente',
  },
  {
    Icon: DollarSign,
    title: 'Preço Justo',
    text: 'Custo-benefício com qualidade e entrega garantida',
  },
  {
    Icon: Users,
    title: 'Atendimento Especializado',
    text: 'Equipe técnica com experiência e compromisso de 20 anos',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 md:py-32 bg-gray-50 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary text-sm uppercase font-semibold mb-4">Por que escolher</p>
          <h2 className="text-4xl md:text-5xl text-primary font-bold font-heading mb-6">
            Vantagens Águas Claras Piscinas
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Oferecemos mais do que piscinas, oferecemos experiências completas com qualidade
            garantida
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="bg-accent/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
