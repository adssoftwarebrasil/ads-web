import { Award, Heart, Target, Eye } from 'lucide-react';

const pillars = [
  {
    icon: Heart,
    title: 'Missão',
    desc: 'Oferecer mais do que hospedagem: proporcionar uma experiência acolhedora, onde cada hóspede se sinta em casa.',
  },
  {
    icon: Eye,
    title: 'Visão',
    desc: 'Ser o hotel referência em Linhares pela excelência no atendimento, estrutura diferenciada e hospitalidade genuína.',
  },
  {
    icon: Target,
    title: 'Valores',
    desc: 'Qualidade, transparência, respeito ao hóspede e melhoria contínua em cada detalhe dos nossos serviços.',
  },
  {
    icon: Award,
    title: 'Diferencial',
    desc: 'Únicos com apartamentos que incluem sala e cozinha completa — conforto total para curtas e longas estadias.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#fef5e6] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/treviso%2FFachada.jpg"
                alt="Fachada do Treviso Apart Hotel"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#212042]/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#b82626] text-white rounded-2xl p-5 shadow-2xl">
              <div className="text-4xl font-bold">+17</div>
              <div className="text-sm font-medium mt-1 text-white/90">anos de experiência</div>
            </div>
            <div className="absolute top-6 -left-4 sm:-left-6 bg-[#212042] text-[#fef5e6] rounded-xl px-4 py-3 shadow-xl">
              <div className="text-xs text-[#a08f95] uppercase tracking-wider">Fundado em</div>
              <div className="text-lg font-bold">Abril 2007</div>
            </div>
          </div>

          <div>
            <p className="text-[#b82626] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
              Nossa história
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#212042] leading-tight mb-6">
              Nascemos para ser diferentes.<br />Crescemos para ser referência.
            </h2>
            <p className="text-[#a08f95] leading-relaxed mb-4">
              Em 2007, o Treviso Apart Hotel nasceu com um propósito claro: oferecer algo genuinamente
              diferente no mercado hoteleiro de Linhares. Enquanto outros hotéis ofereciam apenas quartos,
              nós apostamos em apartamentos completos — com sala de estar e cozinha equipada.
            </p>
            <p className="text-[#a08f95] leading-relaxed mb-8">
              Mais de 17 anos depois, o conceito continua único e cada vez mais valorizado. Seja você
              um executivo em viagem de negócios, um representante em passagem pela cidade ou uma
              família explorando o Espírito Santo — no Treviso, você vai se sentir em casa.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i} className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#212042] rounded-lg flex items-center justify-center">
                      <Icon size={18} className="text-[#b82626]" />
                    </div>
                    <div>
                      <h4 className="text-[#212042] font-bold text-sm mb-1">{p.title}</h4>
                      <p className="text-[#a08f95] text-xs leading-relaxed">{p.desc}</p>
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
