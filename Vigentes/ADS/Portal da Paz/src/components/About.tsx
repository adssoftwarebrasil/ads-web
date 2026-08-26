import { ShieldCheck, Clock, Award, HeartHandshake } from 'lucide-react';

const PILLARS = [
  {
    icon: <HeartHandshake size={22} />,
    title: 'Atendimento Humanizado',
    desc: 'Cada família recebe atenção personalizada, com respeito, empatia e suporte emocional contínuo.',
  },
  {
    icon: <Clock size={22} />,
    title: 'Disponíveis 24 Horas',
    desc: 'Estamos sempre prontos para atender, a qualquer hora do dia ou da noite, todos os dias do ano.',
  },
  {
    icon: <Award size={22} />,
    title: 'Mais de 28 Anos de Experiência',
    desc: 'Fundada em 1996, acumulamos décadas de confiança, tradição e excelência no setor funerário.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Equipe Qualificada',
    desc: 'Profissionais capacitados e certificados, comprometidos com cada detalhe do serviço prestado.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[rgb(11,28,15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/portal%20da%20paz/img/fachada-azul-casa-portal-da-paz_1280x720.webp"
                alt="Fachada da Funerária Portal da Paz"
                className="w-full h-72 sm:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-[rgb(2,12,4)] w-40 h-32 sm:w-52 sm:h-40">
              <img
                src="https://storage.lucasmendes.dev/site-sp/portal%20da%20paz/img/fachada-funeraria-portal-da-paz-azul_1280x720.webp"
                alt="Entrada da Funerária Portal da Paz"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-[rgb(110,92,59)] rounded-2xl px-5 py-4 shadow-xl">
              <div className="text-3xl font-bold text-white">28+</div>
              <div className="text-xs text-[rgb(202,183,144)] mt-0.5 font-medium">Anos de Cuidado</div>
            </div>
          </div>

          <div className="pb-8 lg:pb-0">
            <span className="inline-block text-[rgb(156,133,92)] text-xs uppercase tracking-[0.3em] font-semibold mb-5">
              Sobre nós
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Uma empresa construída sobre{' '}
              <span className="text-[rgb(202,183,144)]">confiança e humanidade</span>
            </h2>
            <p className="text-[rgb(146,171,185)] text-base leading-relaxed mb-5">
              Desde 1996, a Funerária Portal da Paz atua em Ananindeua (PA) com a missão de oferecer
              suporte completo e respeitoso às famílias em momentos de luto. Nossa trajetória é marcada
              pela confiança de milhares de famílias que encontraram em nós um amparo genuíno.
            </p>
            <p className="text-[rgb(146,171,185)] text-base leading-relaxed mb-10">
              Combinamos estrutura moderna, equipe especializada e um olhar cuidadoso para cada detalhe,
              garantindo que o último adeus seja realizado com a dignidade e o carinho que cada vida merece.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {PILLARS.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[rgb(55,104,68)] bg-opacity-40 flex items-center justify-center text-[rgb(156,133,92)]">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1">{p.title}</h4>
                    <p className="text-[rgb(146,171,185)] text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
