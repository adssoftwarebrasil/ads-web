import { Home, Key, Sparkles, TrendingUp, Building2, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    Icon: Home,
    title: 'Venda de Imóveis',
    desc: 'Casas, apartamentos e imóveis de médio e alto padrão selecionados com curadoria.',
  },
  {
    Icon: Key,
    title: 'Locação',
    desc: 'Imóveis residenciais e comerciais para locação com processos seguros e ágeis.',
  },
  {
    Icon: Sparkles,
    title: 'Lançamentos',
    desc: 'Empreendimentos exclusivos e oportunidades únicas nas regiões mais valorizadas.',
  },
  {
    Icon: TrendingUp,
    title: 'Investimentos',
    desc: 'Assessoria especializada para investir em imóveis com visão de valorização.',
  },
  {
    Icon: Building2,
    title: 'Alto Padrão',
    desc: 'Casas, terrenos e condomínios fechados para quem busca exclusividade.',
  },
  {
    Icon: MapPin,
    title: 'Terrenos',
    desc: 'Lotes estratégicos em bairros em expansão, ideais para construir ou investir.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-neutral-950 py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#d5a222] text-xs md:text-sm tracking-[0.4em] uppercase font-medium">
            O que oferecemos
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white mt-4 leading-tight text-balance">
            Soluções completas em
            <br className="hidden md:block" /> negócios imobiliários
          </h2>
          <p className="text-neutral-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            Do primeiro contato ao pós-venda, entregamos uma experiência de ponta a ponta com
            segurança, agilidade e transparência.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-[#d5a222] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#d5a222]/10"
            >
              <div className="w-14 h-14 rounded-xl bg-[#d5a222]/10 flex items-center justify-center mb-6 group-hover:bg-[#d5a222] transition-colors duration-500">
                <Icon
                  size={26}
                  className="text-[#d5a222] group-hover:text-black transition-colors duration-500"
                />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-white mb-3">{title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm md:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
