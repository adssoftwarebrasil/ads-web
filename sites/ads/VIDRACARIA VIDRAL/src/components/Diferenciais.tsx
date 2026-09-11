import { Award, ShieldCheck, Palette, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Diferencial {
  Icon: LucideIcon;
  title: string;
  description: string;
  delay: string;
}

const diferenciais: Diferencial[] = [
  {
    Icon: Award,
    title: 'Mais de 11 Anos de Experiência',
    description: '300+ obras realizadas com excelência em Cuiabá, Várzea Grande e região',
    delay: '0s',
  },
  {
    Icon: ShieldCheck,
    title: 'Garantia de 1 Ano',
    description: 'Produtos com garantia total e suporte técnico especializado',
    delay: '0.1s',
  },
  {
    Icon: Palette,
    title: 'Soluções Personalizadas',
    description: 'Projetos sob medida para atender necessidades acústicas, de privacidade e estética',
    delay: '0.2s',
  },
  {
    Icon: Wrench,
    title: 'Qualidade na Execução',
    description: 'Fidelidade ao projeto com os melhores materiais e acabamentos do mercado',
    delay: '0.3s',
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-[#F5F5F5] py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <h2 className="text-[#29456D] text-3xl lg:text-[42px] font-bold text-center mb-12 lg:mb-15">
          Por Que Escolher a Vidral?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {diferenciais.map(({ Icon, title, description, delay }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#29456D] border-2 border-transparent animate-fade-in-up"
              style={{ animationDelay: delay }}
            >
              <Icon className="w-12 h-12 text-[#29456D] mb-5" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-[#29456D] mb-3">{title}</h3>
              <p className="text-[#666666] text-[15px] leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
