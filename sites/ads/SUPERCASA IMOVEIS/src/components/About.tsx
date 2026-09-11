import { Award, Users, ShieldCheck, Clock } from 'lucide-react';

const features = [
  { Icon: Award, title: 'Alto Padrão', desc: 'Especialistas em imóveis premium.' },
  { Icon: Users, title: 'Atendimento Próximo', desc: 'Consultoria personalizada.' },
  { Icon: ShieldCheck, title: 'Transparência', desc: 'Processos claros e seguros.' },
  { Icon: Clock, title: '+20 Anos', desc: 'Experiência consolidada no mercado.' },
];

export default function About() {
  return (
    <section id="sobre" className="bg-black py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Casa de alto padrão em Sinop"
              className="w-full h-[420px] md:h-[560px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
          <div className="hidden md:block absolute -bottom-8 -right-8 bg-[#d5a222] text-black rounded-2xl p-6 shadow-2xl max-w-[220px]">
            <div className="font-serif text-4xl leading-none">20+</div>
            <div className="text-xs tracking-widest uppercase mt-2 font-semibold">
              Anos transformando sonhos em endereços
            </div>
          </div>
        </div>
        <div>
          <span className="text-[#d5a222] text-xs md:text-sm tracking-[0.4em] uppercase font-medium">
            Sobre Nós
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white mt-4 leading-tight text-balance">
            Referência no mercado imobiliário de Sinop
          </h2>
          <div className="mt-6 space-y-5 text-neutral-300 leading-relaxed">
            <p>
              A <span className="text-[#d5a222] font-medium">Super Casa Imóveis</span> atua com foco
              em imóveis de médio e alto padrão, lançamentos e oportunidades de investimento em Sinop
              e região, com uma equipe de corretores que soma mais de 20 anos de experiência.
            </p>
            <p>
              Nosso diferencial está na forma de atender: entendemos o perfil de cada cliente e
              direcionamos para as melhores oportunidades, trabalhando com casas, terrenos,
              condomínios fechados e empreendimentos exclusivos nas regiões que mais crescem na
              cidade.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6 mt-10">
            {features.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 p-5 rounded-2xl border border-neutral-800 bg-neutral-950 hover:border-[#d5a222] transition-colors duration-300"
              >
                <div className="shrink-0 w-11 h-11 rounded-lg bg-[#d5a222]/10 flex items-center justify-center">
                  <Icon size={20} className="text-[#d5a222]" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm md:text-base">{title}</div>
                  <div className="text-neutral-400 text-xs md:text-sm mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
