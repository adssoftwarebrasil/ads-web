import { Store, Award, Heart, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const features: Feature[] = [
  { icon: Store, title: '3 Lojas + Fábrica', desc: 'Começamos pequenos e hoje temos 3 unidades e nossa própria fábrica' },
  { icon: Award, title: '12 Anos de História', desc: 'Mais de uma década oferecendo produtos artesanais de qualidade' },
  { icon: Heart, title: 'Produção Artesanal', desc: 'Sorvetes e lanches feitos diariamente, mantendo o sabor único' },
  { icon: TrendingUp, title: 'Qualidade Garantida', desc: 'Ingredientes frescos e processo artesanal para máximo sabor' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-[rgb(255,204,26)]/10 border border-[rgb(255,204,26)] px-4 py-2 rounded-full mb-6">
              <span className="text-[rgb(255,204,26)] font-semibold text-sm">NOSSA HISTÓRIA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(35,31,32)] mb-6 leading-tight">
              Tradição e Sabor
              <span className="text-[rgb(255,204,26)] block mt-2">que Crescem Juntos</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Há <strong>12 anos</strong>, iniciamos nossa jornada revendendo sorvetes com um sonho simples: levar sabor e qualidade para nossa comunidade. Com dedicação e paixão pelo que fazemos, evoluímos para nos tornarmos referência em sorvetes artesanais e hambúrgueres gourmet.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hoje, com <strong>3 lojas</strong> e nossa própria <strong>unidade fabril</strong>, mantemos o compromisso com a produção artesanal diária. Cada sorvete cremoso e cada hambúrguer suculento são preparados com ingredientes frescos, garantindo o sabor autêntico que conquista famílias inteiras.
            </p>
            <div className="bg-[rgb(255,204,26)]/10 border-l-4 border-[rgb(255,204,26)] p-6 rounded-r-xl">
              <p className="text-lg text-[rgb(35,31,32)] font-semibold italic">
                "Nosso objetivo é oferecer sorvetes e lanches com muita qualidade, mantendo o modelo artesanal de produção para garantir mais sabor e saúde para nossos clientes."
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-gradient-to-br from-[rgb(35,31,32)] to-[rgb(35,31,32)]/90 p-8 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-[rgb(255,204,26)]/20"
                >
                  <div className="bg-[rgb(255,204,26)] w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={28} className="text-[rgb(35,31,32)]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
