import { useInView } from '../hooks/useInView';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_URL =
  'https://wa.me/5599991458080?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações';

interface Servico {
  title: string;
  description: string;
  image: string;
}

const servicos: Servico[] = [
  {
    title: 'Venda de Pneus e Acessórios',
    description: 'Ampla seleção de pneus e acessórios automotivos',
    image:
      'https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO%2Fimg%2FVenda%20de%20Pneus%20e%20Acessórios.png',
  },
  {
    title: 'Troca de Óleo e Filtros',
    description: 'Produtos de alta qualidade para seu motor',
    image:
      'https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO%2Fimg%2FTroca%20de%20Óleo%20e%20Filtros.png',
  },
  {
    title: 'Alinhamento',
    description: 'Ajustes precisos para uma direção mais segura',
    image: 'https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO%2Fimg%2FAlinhamento.png',
  },
  {
    title: 'Balanceamento',
    description: 'Garanta a estabilidade e conforto do seu veículo',
    image: 'https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO%2Fimg%2FBalanceamento.png',
  },
  {
    title: 'Serviços de Suspensão',
    description: 'Desempenho e segurança do seu veículo',
    image:
      'https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO%2Fimg%2FServiços%20de%20suspensão.png',
  },
  {
    title: 'Sistema de Freios',
    description: 'Manutenções preventivas e corretivas',
    image: 'https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO%2Fimg%2FSistema%20de%20Freios.png',
  },
];

function ServicoCard({ servico, delay }: { servico: Servico; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <img
          src={servico.image}
          alt={servico.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-[rgb(227,17,35)] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div className="p-6">
        <h3
          className="text-xl md:text-2xl font-bold mb-3 group-hover:text-[rgb(227,17,35)] transition-colors duration-300"
          style={{ color: 'rgb(3, 3, 4)' }}
        >
          {servico.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{servico.description}</p>
        <div className="mt-4 h-1 w-16 bg-[rgb(227,17,35)] rounded-full group-hover:w-24 transition-all duration-300"></div>
      </div>
    </div>
  );
}

export default function Servicos() {
  const header = useInView<HTMLDivElement>();
  const cta = useInView<HTMLDivElement>();

  return (
    <section
      id="serviços"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: 'rgb(245, 245, 245)' }}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(227,17,35)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(3,3,4)] rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            header.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-block mb-4">
            <span className="text-[rgb(227,17,35)] uppercase tracking-widest text-sm font-bold bg-white px-6 py-2 rounded-full shadow-sm">
              Nossos Serviços
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: 'rgb(3, 3, 4)' }}
          >
            Soluções Automotivas Completas
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            De alinhamento a peças, cobrimos todas as suas necessidades automotivas com excelência
            e profissionalismo.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {servicos.map((servico, i) => (
            <ServicoCard key={servico.title} servico={servico} delay={i * 100} />
          ))}
        </div>
        <div
          ref={cta.ref}
          className={`text-center transition-all duration-700 delay-300 ${
            cta.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[rgb(227,17,35)] text-white px-10 py-5 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg group"
          >
            <WhatsAppIcon className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            Enviar WhatsApp
          </a>
          <p className="mt-6 text-gray-500 text-sm">Atendimento rápido e personalizado</p>
        </div>
      </div>
    </section>
  );
}
