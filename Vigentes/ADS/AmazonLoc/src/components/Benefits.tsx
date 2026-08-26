import { Award, Zap, UserCheck, Sparkles, ShieldCheck } from 'lucide-react';

const PARALLAX =
  'https://storage.lucasmendes.dev/site-sp/amazon%20loc%2Fimg%2Flocacao-de-equipamentos-para-sua-obra-paralax.webp';

const RED = 'rgba(237, 53, 55, 0.99)';
const GREEN = 'rgb(13, 133, 77)';
const PURPLE = 'rgb(63, 59, 116)';

const benefits = [
  {
    Icon: Award,
    iconClass: 'lucide lucide-award',
    color: RED,
    title: 'Equipamentos de Alta Qualidade',
    desc: 'Garantia de eficiência e durabilidade em todos os equipamentos',
  },
  {
    Icon: Zap,
    iconClass: 'lucide lucide-zap',
    color: GREEN,
    title: 'Alta Produtividade',
    desc: 'Equipamentos que aceleram o andamento da sua obra',
  },
  {
    Icon: UserCheck,
    iconClass: 'lucide lucide-user-check',
    color: PURPLE,
    title: 'Acompanhamento Próximo',
    desc: 'Suporte contínuo e presença no local da obra',
  },
  {
    Icon: Sparkles,
    iconClass: 'lucide lucide-sparkles',
    color: RED,
    title: 'Modernidade',
    desc: 'Equipamentos de última geração, sempre revisados',
  },
  {
    Icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check',
    color: GREEN,
    title: 'Segurança Total',
    desc: 'Atende todas as normas de segurança vigentes',
  },
];

export default function Benefits() {
  return (
    <section
      className="py-20 px-4 relative"
      style={{
        backgroundImage: `url("${PARALLAX}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Benefícios da Locação com a AmazonLoc
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white/95 backdrop-blur-sm rounded-xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center group"
              style={{ borderTop: `4px solid ${b.color}` }}
            >
              <b.Icon
                className={`${b.iconClass} w-16 h-16 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}
                style={{ color: b.color }}
              />
              <h3 className="text-xl font-bold text-gray-800 mb-3">{b.title}</h3>
              <p className="text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
