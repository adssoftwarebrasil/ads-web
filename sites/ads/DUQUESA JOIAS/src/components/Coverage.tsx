import { MapPin } from 'lucide-react';
import { useReveal } from '../useReveal';

interface City {
  name: string;
  uf: 'MT' | 'PA';
}

const cities: City[] = [
  { name: 'Sinop', uf: 'MT' },
  { name: 'Sorriso', uf: 'MT' },
  { name: 'Lucas do Rio Verde', uf: 'MT' },
  { name: 'Nova Mutum', uf: 'MT' },
  { name: 'Diamantino', uf: 'MT' },
  { name: 'Cuiabá', uf: 'MT' },
  { name: 'Itaúba', uf: 'MT' },
  { name: 'Terra Nova do Norte', uf: 'MT' },
  { name: 'Peixoto de Azevedo', uf: 'MT' },
  { name: 'Matupá', uf: 'MT' },
  { name: 'Guarantã do Norte', uf: 'MT' },
  { name: 'Colíder', uf: 'MT' },
  { name: 'Nova Santa Helena', uf: 'MT' },
  { name: 'Alta Floresta', uf: 'MT' },
  { name: 'Juara', uf: 'MT' },
  { name: 'Juína', uf: 'MT' },
  { name: 'Primavera do Leste', uf: 'MT' },
  { name: 'Campo Verde', uf: 'MT' },
  { name: 'Rondonópolis', uf: 'MT' },
  { name: 'Tapurah', uf: 'MT' },
  { name: 'Itanhangá', uf: 'MT' },
  { name: 'Nova Ubiratã', uf: 'MT' },
  { name: 'Ipiranga do Norte', uf: 'MT' },
  { name: 'São José do Rio Claro', uf: 'MT' },
  { name: 'Nova Maringá', uf: 'MT' },
  { name: 'Marcelândia', uf: 'MT' },
  { name: 'Feliz Natal', uf: 'MT' },
  { name: 'Tangará da Serra', uf: 'MT' },
  { name: 'Sapezal', uf: 'MT' },
  { name: 'Campo Novo do Parecis', uf: 'MT' },
  { name: 'Cáceres', uf: 'MT' },
  { name: 'Jaciara', uf: 'MT' },
  { name: 'Várzea Grande', uf: 'MT' },
  { name: 'Novo Progresso', uf: 'PA' },
  { name: 'Castelo dos Sonhos', uf: 'PA' },
];

export default function Coverage() {
  const header = useReveal();
  const card = useReveal();

  return (
    <section
      className="section-padding overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgb(248, 245, 242) 0%, rgb(255, 255, 255) 100%)' }}
    >
      <div className="container-max">
        <div
          ref={header.ref}
          className={`text-center mb-12 transition-all duration-700 ${
            header.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Cobertura Regional
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
            Levamos elegância a <span className="italic text-gold-gradient">todo o Mato Grosso</span>
          </h2>
          <p className="text-black/55 text-base max-w-xl mx-auto leading-relaxed">
            Atendemos em mais de 30 cidades do estado, com entrega e consultoras ativas em toda a
            região. Também atendemos Novo Progresso-PA e Castelo dos Sonhos-PA.
          </p>
        </div>
        <div
          ref={card.ref}
          className={`bg-white rounded-3xl border border-lgray/50 p-8 md:p-10 shadow-sm transition-all duration-700 delay-200 ${
            card.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center">
              <MapPin width={16} height={16} className="lucide lucide-map-pin text-gold" />
            </div>
            <span className="font-semibold text-black text-sm">35 cidades atendidas</span>
            <div className="flex-1 h-px bg-lgray/50 ml-2"></div>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {cities.map((c, i) => {
              const isPA = c.uf === 'PA';
              return (
                <span
                  key={c.name}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-1.5 rounded-full border transition-all duration-500 cursor-default hover:-translate-y-0.5 ${
                    isPA
                      ? 'border-rose/40 text-rose bg-rose/5 hover:bg-rose/10'
                      : 'border-gold/30 text-black/70 bg-gold/5 hover:bg-gold/10 hover:text-black'
                  } ${card.inView ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${300 + i * 25}ms` }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: isPA ? 'rgb(240, 113, 171)' : 'rgb(188, 151, 96)' }}
                  ></span>
                  {c.name}
                  <span className={`text-xs ${isPA ? 'opacity-70' : 'opacity-50'}`}>-{c.uf}</span>
                </span>
              );
            })}
          </div>
          <div className="mt-8 pt-6 border-t border-lgray/40 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-sm text-black/50">
              <span className="w-3 h-3 rounded-full bg-gold/40 inline-block"></span>
              Cidades em Mato Grosso
            </div>
            <div className="flex items-center gap-2 text-sm text-black/50">
              <span className="w-3 h-3 rounded-full bg-rose/40 inline-block"></span>
              Cidades no Pará
            </div>
            <div className="flex items-center gap-2 text-sm text-black/50">
              <MapPin width={14} height={14} className="lucide lucide-map-pin text-gold" />
              Área de atuação em expansão
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
