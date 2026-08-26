import { Zap, Users, Package, ThumbsUp, Clock, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const differentials = [
  {
    icon: <Package size={24} />,
    title: 'Variedade Completa',
    desc: 'Máquinas, consumíveis, EPIs e ferramentas — tudo em um só lugar. Economize tempo e deslocamento.',
  },
  {
    icon: <Users size={24} />,
    title: 'Equipe Técnica',
    desc: 'Nossa equipe conhece profundamente os produtos e te ajuda a escolher a solução certa para cada trabalho.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Atendimento Ágil',
    desc: 'Atendimento rápido na loja física e pelo WhatsApp. Sua produção não pode parar.',
  },
  {
    icon: <ThumbsUp size={24} />,
    title: 'Qualidade Garantida',
    desc: 'Trabalhamos apenas com marcas homologadas e consumíveis de primeira linha para garantir sua segurança.',
  },
  {
    icon: <Star size={24} />,
    title: 'Clientes Fidelizados',
    desc: 'Serralherias e profissionais que voltam sempre por confiança, preço justo e bom atendimento.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Pronto para Entrega',
    desc: 'Estoque robusto para atender demandas imediatas. Não perca tempo esperando fornecedor.',
  },
];

export default function Differentials() {
  const { ref, inView } = useInView();

  return (
    <section id="diferenciais" className="bg-[#111111] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-3 block">
            Por que escolher a Cia da Solda
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Diferenciais que fazem
            <span className="text-brand-red block">a diferença na sua obra</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Mais de 8 anos construindo relações de confiança com soldadores, serralherias
            e indústrias em toda a região.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, i) => (
            <DifferentialCard key={i} item={item} index={i} />
          ))}
        </div>

        <div className="mt-16 relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-navy to-[#1e2250] border border-brand-blue/20 p-8 sm:p-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                Atendemos serralherias, oficinas e indústrias
              </h3>
              <p className="text-brand-blue text-base">
                Conheça nossas condições especiais para compras em volume.
              </p>
            </div>
            <a
              href="http://wa.me/553184631447?text=Olá!%20Tenho%20interesse%20em%20condições%20especiais%20para%20compras%20em%20volume."
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-red/30"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DifferentialCard({ item, index }: { item: (typeof differentials)[0]; index: number }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`bg-[#161616] border border-white/5 hover:border-brand-red/20 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 group ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-brand-red/10 group-hover:bg-brand-red/20 text-brand-red flex items-center justify-center mb-4 transition-colors">
        {item.icon}
      </div>
      <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
    </div>
  );
}
