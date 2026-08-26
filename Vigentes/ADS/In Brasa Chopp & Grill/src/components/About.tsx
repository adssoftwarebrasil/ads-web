import { Flame, Award, Users, TreePine } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Award,
    title: 'Chef Formado',
    description:
      'Mais de 10 anos de gastronomia com técnicas especializadas em churrasco e brasa',
  },
  {
    icon: Flame,
    title: 'Técnicas Exclusivas',
    description: 'American BBQ, Parrilha, Fogo de Chão, Charcutaria e Outdoor Cooking',
  },
  {
    icon: Users,
    title: 'Ambiente Familiar',
    description: 'Espaço aconchegante com área kids e mesas confortáveis para toda a família',
  },
  {
    icon: TreePine,
    title: 'Espaço Aberto',
    description: 'Área externa agradável, fresca e bem iluminada para uma experiência única',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/3 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-reveal">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/in%20brasa%20chopp%20e%20grill/img/costelas-vermelhas-grelhadas-em-grelha-multipla_1440x1800.webp"
                alt="Costelinha grelhada na brasa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand rounded-2xl p-6 shadow-2xl glow-brand max-w-[180px]">
              <div className="text-black font-display font-bold text-4xl leading-none">10+</div>
              <div className="text-black/80 text-sm font-semibold mt-1 leading-tight">
                Anos de Gastronomia
              </div>
            </div>
            <div className="absolute -top-4 -left-4 bg-surface border border-white/10 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-2">
                <Flame className="lucide lucide-flame text-brand" width={20} height={20} />
                <span className="text-white font-semibold text-sm">O melhor da brasa</span>
              </div>
            </div>
          </div>
          <div>
            <p className="section-subheading animate-reveal">Nossa História</p>
            <h2 className="section-heading mt-3 mb-6 animate-reveal">
              Paixão pelo Fogo,
              <br />
              <span className="text-gradient">Sabor na Brasa</span>
            </h2>
            <div className="divider mb-8 animate-reveal"></div>
            <p className="text-white/70 leading-relaxed mb-5 animate-reveal">
              O Chef da casa é formado em Gastronomia há mais de 10 anos. Apaixonado pela cozinha
              desde pequeno, foi nos churrascos em família que surgiu o amor pelo fogo e pela brasa.
              Atuou como professor no curso superior de Gastronomia em Sinop, conduziu festivais
              gastronômicos e acumulou técnicas do mundo todo.
            </p>
            <p className="text-white/70 leading-relaxed mb-10 animate-reveal">
              Hoje, no coração de Sinop, convidamos você a apreciar o melhor das carnes em um
              ambiente aconchegante e familiar — com parquinho para as crianças, a cerveja mais
              gelada da região e o espetinho mais saboroso da cidade.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="animate-reveal flex gap-4 p-4 rounded-xl bg-surface/50 border border-white/5 hover:border-brand/30 transition-colors duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                      <Icon className="lucide text-brand" width={18} height={18} />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-1">{feature.title}</div>
                      <div className="text-white/50 text-xs leading-relaxed">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
