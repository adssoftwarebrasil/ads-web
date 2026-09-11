import { Store, Package, Building2, Users } from 'lucide-react';

const stats = [
  { Icon: Store, value: '16+', label: 'Lojas em Salvador' },
  { Icon: Package, value: '100+', label: 'Tipos de produtos oferecidos' },
  { Icon: Building2, value: '5+', label: 'Anos de experiência no mercado' },
  { Icon: Users, value: '200+', label: 'Clientes satisfeitos' },
];

const reasons = [
  {
    number: '1',
    title: 'Experiência no Setor',
    text: 'Mais de 5 anos atuando com qualidade e seriedade.',
  },
  {
    number: '2',
    title: 'Variedade de Produtos',
    text: 'Um leque completo de opções para sua construção.',
  },
  {
    number: '3',
    title: 'Atendimento Diferenciado',
    text: 'Equipe qualificada para atender suas necessidades.',
  },
];

export default function WhyChoose() {
  return (
    <section
      className="relative py-32 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/redeconstrucertocamari%2FPor%20Que%20Contratar-background%20.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-[#253579]/90"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Por Que Escolher a Rede Construcerto?
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Optar por nós significa confiar em uma empresa comprometida com a qualidade e
            com a satisfação do cliente.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ Icon, value, label }) => (
            <div
              key={label}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <Icon size={48} className="mx-auto mb-4 text-[#e8221a]" />
              <div className="text-5xl font-bold text-white mb-2">{value}</div>
              <div className="text-gray-200 font-medium">{label}</div>
            </div>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.number} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-[#e8221a] text-5xl font-bold mb-4">{reason.number}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-700">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
