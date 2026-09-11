import { Award, Users, Shield, Sparkles } from 'lucide-react';

const stats = [
  { value: '30+', label: 'Anos de Tradição' },
  { value: '1990', label: 'Ano de Fundação' },
  { value: '100%', label: 'Satisfação' },
  { value: '∞', label: 'Projetos Realizados' },
];

const features = [
  {
    Icon: Award,
    name: 'award',
    title: 'Qualidade Premium',
    text: 'Fabricação própria e materiais de primeira linha para garantir durabilidade e beleza.',
  },
  {
    Icon: Users,
    name: 'users',
    title: 'Atendimento Exclusivo',
    text: 'Consultoria personalizada para criar o ambiente perfeito para você.',
  },
  {
    Icon: Shield,
    name: 'shield',
    title: 'Confiança',
    text: 'Empresa familiar com 30 anos de ética, transparência e compromisso com o cliente.',
  },
  {
    Icon: Sparkles,
    name: 'sparkles',
    title: 'Inovação',
    text: 'Acompanhamos as últimas tendências em decoração e tecnologia de automação.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(114,115,119)] mb-4">
            Sobre a Nilson Cortinas
          </h2>
          <div className="w-24 h-1 bg-[rgb(207,173,109)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uma história de dedicação, excelência e transformação de ambientes
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-[rgb(114,115,119)] mb-6">
              Tradição Familiar desde 1990
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Fundada por Nilson e sua esposa Terezinha no início dos anos 90, a Nilson Cortinas é uma empresa familiar sólida que atua há mais de 30 anos no mercado mato-grossense.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Inicialmente chamada de Anna Decorações, a empresa guarda com orgulho a máquina de costura original, exposta em nossa loja como símbolo de nossa trajetória.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Especializados em fabricação própria de cortinas sob medida e revenda de marcas selecionadas, prezamos pela excelência em material, confecção e atendimento exclusivo para projetos residenciais e comerciais.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold text-[rgb(207,173,109)] mb-1">{s.value}</div>
                  <div className="text-sm text-gray-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://storage.lucasmendes.dev/site-sp/Arthur%20Cortinas%2Fnilsoncortinas%2Fcortinas%2F3.jpg"
              alt="Nilson Cortinas"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-[rgb(207,173,109)] text-white p-6 rounded-xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold">30+</div>
              <div className="text-sm">Anos de Experiência</div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <f.Icon
                className={`lucide lucide-${f.name} text-[rgb(207,173,109)] mb-4`}
                width={40}
                height={40}
                strokeWidth={1.5}
              />
              <h4 className="text-xl font-bold text-[rgb(114,115,119)] mb-3">{f.title}</h4>
              <p className="text-gray-600 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
