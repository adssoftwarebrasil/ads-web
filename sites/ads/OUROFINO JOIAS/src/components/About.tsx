import { Award, Gem, Zap, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  { icon: Award, title: '20 Anos de Experiência', description: 'Huggo Cardoso, nosso fundador, iniciou como ourives aos 16 anos' },
  { icon: Gem, title: 'Qualidade Garantida', description: 'Toda produção feita pela nossa equipe, sem terceirização' },
  { icon: Zap, title: 'Tecnologia 3D', description: 'Unimos tradição artesanal com impressão 3D de última geração' },
  { icon: Users, title: 'Atendimento Personalizado', description: 'Cada cliente recebe atenção exclusiva em cada detalhe' },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-[rgb(29,29,27)] to-[rgb(20,20,18)]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-[rgb(186,176,97)] font-semibold text-sm uppercase tracking-wider">Quem Somos</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Transformando Memórias em Arte</h2>
              <div className="h-1 w-24 bg-[rgb(186,176,97)]"></div>
            </div>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>Tudo começou em 2020, quando Huggo Cardoso, com sua vasta experiência como ourives desde os 16 anos, decidiu montar seu próprio ateliê. O sonho cresceu, e em 2023 inauguramos nossa loja física em Dourados-MS.</p>
              <p>Nossa missão é criar joias que transformam memórias em arte. Cada peça é feita sob medida, alinhando a tradição da ourivesaria artesanal com a precisão da tecnologia 3D, para entregar produtos verdadeiramente únicos.</p>
              <p className="font-semibold text-[rgb(186,176,97)]">Toda nossa produção é feita pela nossa equipe - não terceirizamos mão de obra, garantindo assim a qualidade impecável da nossa entrega.</p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(186,176,97)] text-[rgb(29,29,27)] px-8 py-4 rounded-md hover:bg-[rgb(126,102,42)] transition-all duration-300 font-bold"
            >
              Fale com Nossa Equipe
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-[rgb(29,29,27)] border border-[rgb(186,176,97)]/20 rounded-lg p-6 hover:border-[rgb(186,176,97)] transition-all duration-300 hover:shadow-lg hover:shadow-[rgb(186,176,97)]/10 group"
                >
                  <div className="bg-[rgb(186,176,97)]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[rgb(186,176,97)]/20 transition-colors duration-300">
                    <Icon size={28} className="text-[rgb(186,176,97)]" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
