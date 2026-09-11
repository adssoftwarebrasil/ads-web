import { Award, Shield, Truck, Leaf } from 'lucide-react';

const stats = [
  {
    Icon: Award,
    iconName: 'award',
    value: '12+',
    label: 'Anos de experiência',
    gradient: 'from-primary-500 to-primary-700',
    delay: '0ms',
  },
  {
    Icon: Shield,
    iconName: 'shield',
    value: '100%',
    label: 'Processos sem terceirização',
    gradient: 'from-eco-500 to-eco-700',
    delay: '100ms',
  },
  {
    Icon: Truck,
    iconName: 'truck',
    value: 'Frota',
    label: 'Própria e licenciada',
    gradient: 'from-primary-500 to-primary-700',
    delay: '200ms',
  },
  {
    Icon: Leaf,
    iconName: 'leaf',
    value: 'Zero',
    label: 'Impacto ambiental irregular',
    gradient: 'from-eco-500 to-eco-700',
    delay: '300ms',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="transition-all duration-700 opacity-100 translate-x-0">
            <span className="inline-block text-eco-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Quem Somos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Goias Eco Ambiental: <span className="text-primary-500">Compromisso com</span>{' '}
              <span className="text-eco-500">o Meio Ambiente</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Fundada há mais de <strong className="text-gray-800">12 anos</strong>, a Goias Eco Ambiental é referência
                em gerenciamento de resíduos industriais, oferecendo soluções sustentáveis, seguras e totalmente dentro
                da legislação ambiental vigente.
              </p>
              <p>
                Nosso modelo de gestão completa <em>in loco</em> valoriza recicláveis e garante o controle total de
                resíduos — sejam eles perigosos ou não perigosos — desde a coleta até a destinação final ambientalmente
                correta.
              </p>
              <p>
                Diferente de muitos concorrentes,{' '}
                <strong className="text-gray-800">não terceirizamos nenhum processo</strong>. Nossa frota é própria,
                licenciada, e os contratos são diretos — o que proporciona rastreabilidade completa e proteção real para
                a sua marca.
              </p>
            </div>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 mt-8 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Fale com um especialista
            </a>
          </div>
          <div className="grid grid-cols-2 gap-5 transition-all duration-700 delay-200 opacity-100 translate-x-0">
            {stats.map(({ Icon, iconName, value, label, gradient, delay }) => (
              <div
                key={label}
                className={`relative bg-gradient-to-br rounded-2xl p-6 flex flex-col gap-4 card-hover overflow-hidden ${gradient} text-white`}
                style={{ animationDelay: delay }}
              >
                <div className="absolute -right-4 -bottom-4 opacity-10">
                  <Icon width={80} height={80} className={`lucide lucide-${iconName} `} />
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Icon width={24} height={24} className="text-white" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold">{value}</div>
                  <div className="text-sm text-white/80 mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
