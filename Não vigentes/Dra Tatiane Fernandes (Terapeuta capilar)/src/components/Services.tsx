import { Activity, Shield, Droplets, Zap, Leaf, Sparkles, Scissors, HeartHandshake } from 'lucide-react';

const services = [
  {
    Icon: Activity,
    name: 'activity',
    title: 'Queda Capilar',
    desc: 'Avaliação precisa da queda e tratamento personalizado com protocolos avançados de bioestimulação.',
  },
  {
    Icon: Shield,
    name: 'shield',
    title: 'Alopecias',
    desc: 'Tratamento de alopecia androgenética, areata e outros tipos com tecnologia de ponta.',
  },
  {
    Icon: Droplets,
    name: 'droplets',
    title: 'Psoríase Capilar',
    desc: 'Manejo especializado da psoríase no couro cabeludo com abordagem integrativa e eficaz.',
  },
  {
    Icon: Zap,
    name: 'zap',
    title: 'Eflúvio Telógeno',
    desc: 'Avaliação hormonal e nutricional para tratar a queda difusa associada a estresse e carências.',
  },
  {
    Icon: Leaf,
    name: 'leaf',
    title: 'Dermatite Seborreica',
    desc: 'Controle da seborreia e caspa com tratamentos específicos que equilibram a microbiota capilar.',
  },
  {
    Icon: Sparkles,
    name: 'sparkles',
    title: 'Calvície (Masculina e Feminina)',
    desc: 'Protocolos modernos de reversão e controle da calvície com resultados naturais comprovados.',
  },
  {
    Icon: Scissors,
    name: 'scissors',
    title: 'Cuidados Pré e Pós-operatórios',
    desc: 'Preparo e recuperação capilar para pacientes que passaram ou vão passar por cirurgias.',
  },
  {
    Icon: HeartHandshake,
    name: 'heart-handshake',
    title: 'Regeneração da Pele',
    desc: 'Procedimentos estéticos voltados à regeneração da pele do rosto e couro cabeludo.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-[#F8E5E4]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="text-[#A6A6A6] text-sm font-medium tracking-widest uppercase">
            Especialidades
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#404040] mt-3 mb-4">
            Tratamentos que <span className="italic text-[#737373]">transformam vidas</span>
          </h2>
          <p className="text-[#A6A6A6] max-w-xl mx-auto text-base leading-relaxed">
            Cada protocolo é desenvolvido de forma individualizada, respeitando a necessidade única
            de cada paciente e as evidências científicas mais recentes.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ Icon, name, title, desc }) => (
            <div
              key={title}
              className="animate-on-scroll group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-400 hover:-translate-y-1 border border-transparent hover:border-[#F8E5E4]"
            >
              <div className="bg-[#F8E5E4] group-hover:bg-[#737373] w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <Icon
                  width={20}
                  height={20}
                  className={`lucide lucide-${name} text-[#737373] group-hover:text-white transition-colors duration-300`}
                />
              </div>
              <h3 className="font-semibold text-[#404040] mb-2 text-sm">{title}</h3>
              <p className="text-[#A6A6A6] text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 animate-on-scroll">
          <a
            href="http://wa.me/553588973804?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20tratamentos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#737373] hover:bg-[#5a5a5a] text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm"
          >
            Quero Conhecer Meu Tratamento
          </a>
        </div>
      </div>
    </section>
  );
}
