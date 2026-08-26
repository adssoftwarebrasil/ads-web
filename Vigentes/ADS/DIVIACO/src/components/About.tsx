import { ShieldCheck, Zap, Headphones, Award } from 'lucide-react';

const DIFERENCIAIS = [
  {
    icon: ShieldCheck,
    title: 'Qualidade Garantida',
    description: 'Trabalhamos apenas com produtos de alto padrão, selecionados rigorosamente para garantir durabilidade e performance.',
  },
  {
    icon: Zap,
    title: 'Entrega Ágil',
    description: 'Agilidade na entrega dos materiais para que sua obra não pare. Atendemos toda a região com eficiência.',
  },
  {
    icon: Headphones,
    title: 'Suporte Especializado',
    description: 'Nossa equipe técnica está pronta para orientar você na escolha dos melhores materiais para cada projeto.',
  },
  {
    icon: Award,
    title: 'Experiência no Mercado',
    description: 'Anos de atuação no setor de construção a seco nos tornaram referência em divisórias e forros no RN.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[#E76012] text-xs font-semibold tracking-widest uppercase mb-4">
              Sobre a Diviaco
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
              Especialistas em{' '}
              <span className="text-[#E76012]">Construção a Seco</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              A Diviaco é especialista em soluções para construção civil e construção a seco. Fornecemos materiais de alta qualidade como divisórias, forros, telhas e muito mais — atendendo profissionais da construção e consumidores finais com seriedade e compromisso.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Nosso portfólio completo reúne os melhores produtos do mercado para que sua obra tenha o acabamento que merece, com economia de tempo e dinheiro.
            </p>
            <a
              href="https://wa.me/558432239388"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E76012] hover:bg-[#c9520f] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-900/30"
            >
              Fale com um Especialista
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DIFERENCIAIS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-neutral-950 border border-white/5 hover:border-[#E76012]/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-orange-900/10"
                >
                  <div className="w-10 h-10 bg-[#E76012]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#E76012]" />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
