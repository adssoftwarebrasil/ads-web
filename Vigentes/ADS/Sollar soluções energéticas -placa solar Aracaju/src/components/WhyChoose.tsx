import { Headphones, Shield, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Reason {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const reasons: Reason[] = [
  {
    Icon: Headphones,
    iconClass: 'lucide lucide-headphones text-white',
    title: 'Pós-Venda Eficiente',
    text: 'Suporte técnico especializado, monitoramento remoto e manutenção preventiva para garantir máxima performance do seu sistema.',
  },
  {
    Icon: Shield,
    iconClass: 'lucide lucide-shield text-white',
    title: 'Compromisso e Credibilidade',
    text: 'Empresa consolidada com certificações, parcerias com fabricantes de renome e compromisso com prazos e qualidade.',
  },
  {
    Icon: Award,
    iconClass: 'lucide lucide-award text-white',
    title: 'Qualidade e Alta Tecnologia',
    text: 'Equipamentos de última geração, equipe técnica certificada e projetos desenvolvidos com as melhores práticas do mercado.',
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/sollarsolucoes%2Fpaineis-solares-telhado3.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-[rgb(20,85,200)]/85"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Por Que Escolher a Sollar?</h2>
          <div className="w-20 h-1 bg-[rgb(255,100,30)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Nossa excelência vai além da instalação. Oferecemos uma experiência completa que garante seu
            investimento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[rgb(255,100,30)] to-[rgb(230,80,20)] rounded-lg flex items-center justify-center mb-6">
                <r.Icon width={32} height={32} className={r.iconClass} />
              </div>
              <h3 className="text-2xl font-bold text-[rgb(20,85,200)] mb-4">{r.title}</h3>
              <p className="text-gray-700 leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
