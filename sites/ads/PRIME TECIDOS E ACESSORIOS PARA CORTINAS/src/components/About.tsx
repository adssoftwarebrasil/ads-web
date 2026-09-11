import { Clock, Truck, Award, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Clock,
    name: 'lucide-clock',
    gradient: 'from-blue-500 to-blue-600',
    title: 'Desde 2010',
    desc: 'Mais de 14 anos de experiência no mercado têxtil',
  },
  {
    icon: Truck,
    name: 'lucide-truck',
    gradient: 'from-emerald-500 to-emerald-600',
    title: 'Pronta Entrega',
    desc: 'Estoque completo para atendimento imediato',
  },
  {
    icon: Award,
    name: 'lucide-award',
    gradient: 'from-amber-500 to-amber-600',
    title: 'Qualidade Premium',
    desc: 'Tecidos e acessórios das melhores marcas',
  },
  {
    icon: ShieldCheck,
    name: 'lucide-shield-check',
    gradient: 'from-purple-500 to-purple-600',
    title: 'Referência em MT',
    desc: 'Líder em tecidos e acessórios para cortinas',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">
            Sobre a Prime Têxtil
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Tradição e Excelência em{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Tecidos
            </span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Desde 2010, a <strong>Prime Têxtil</strong> é uma referência no estado de Mato
              Grosso, especializada no comércio de tecidos e acessórios para cortinas, tapeçaria
              automotiva e cortinas motorizadas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Localizada em Cuiabá, oferecemos uma ampla variedade de{' '}
              <strong>tecidos de alta qualidade</strong> para ambientes residenciais e automotivos,
              incluindo soluções completas para carros, caminhões e máquinas agrícolas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nos destacamos por nossas <strong>cortinas motorizadas</strong> e acessórios modernos,
              proporcionando praticidade e sofisticação para nossos clientes. Com atendimento
              personalizado via WhatsApp e telefone, garantimos a melhor experiência em conforto e
              estilo.
            </p>
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-6 rounded-2xl shadow-lg">
              <p className="text-xl font-semibold mb-2">
                As melhores opções em tecidos e acessórios!
              </p>
              <p className="text-emerald-50">Tudo a pronta entrega • Somente Lojistas</p>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fprodutos%2Fmostruario-tecidos-mesa.webp"
                alt="Mostruário de tecidos"
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
              />
              <img
                src="https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fprodutos%2Ftecidos-veludo-coloridos.webp"
                alt="Tecidos coloridos"
                className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-emerald-400 to-teal-500 text-white p-6 rounded-2xl shadow-2xl">
              <p className="text-4xl font-bold">14+</p>
              <p className="text-sm">Anos de Experiência</p>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${f.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                >
                  <Icon className={`lucide ${f.name} text-white`} size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
