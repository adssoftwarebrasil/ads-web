import { ArrowRight, Wrench, Layers, ShieldCheck, Headphones, Volume2, CheckCircle } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

const services = [
  {
    icon: Wrench,
    title: 'Conserto, Revisão e Limpeza',
    description:
      'A cera e a umidade acumulada no aparelho auditivo podem causar intermitências sonoras ou entupir a saída de som. Por isso, é fundamental realizar revisões periódicas para garantir o funcionamento ideal do seu dispositivo.',
    highlights: [
      'Identificação e correção de falhas técnicas',
      'Limpeza profunda dos componentes internos',
      'Revisão do microfone e alto-falante',
      'Recomendação de periodicidade de manutenção',
    ],
    image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes2%2FINFO%20PARA%20SITE%20BEEVOX%20GOOGLE%2FFOTOS%20APARELHOS%20AUDITIVOS.jpg&version_id=null',
  },
  {
    icon: Layers,
    title: 'Confecção de Moldes em Acrílico ou Silicone',
    description:
      'Os moldes auriculares direcionam o som até a membrana timpânica com máxima eficiência. São feitos sob medida a partir de uma pré-moldagem personalizada, e o material utilizado (acrílico ou silicone) é determinado conforme o grau de perda auditiva.',
    highlights: [
      'Pré-moldagem personalizada e confortável',
      'Opções em acrílico (mais rígido) ou silicone (mais macio)',
      'Adaptação ao grau de perda auditiva',
      'Maior vedação e qualidade sonora',
    ],
    image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes2%2Faaaa.jpg&version_id=null',
  },
  {
    icon: ShieldCheck,
    title: 'Confecção de Tampão Auricular',
    description:
      'Fabricado a partir da anatomia individual da orelha, o tampão auricular é a solução ideal para proteção contra dois tipos de situações: ruídos intensos no ambiente de trabalho ou lazer, e a entrada de água durante banhos ou natação.',
    highlights: [
      'Proteção contra ruídos acima de 85 decibéis',
      'Indicado para operários, músicos e industriários',
      'Proteção contra entrada de água',
      'Previne infecções otológicas em nadadores',
    ],
    image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes2%2FINFO%20PARA%20SITE%20BEEVOX%20GOOGLE%2FFOTO%2010%20GALERIA.TAMPAO.jpg&version_id=null',
  },
  {
    icon: Headphones,
    title: 'Produção e Conserto de Aparelhos Customizados',
    description:
      'Os aparelhos intracanais e microcanais são produzidos de forma totalmente personalizada, com cerca de 1 cm de diâmetro. São desenvolvidos com foco em discrição e conforto máximo. É necessário agendar uma avaliação prévia para verificar a compatibilidade anatômica do paciente.',
    highlights: [
      'Aparelhos intracanais e microcanais sob medida',
      'Cerca de 1 cm de diâmetro — praticamente invisíveis',
      'Alta discrição e conforto prolongado',
      'Avaliação de compatibilidade anatômica inclusa',
    ],
    image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes2%2FINFO%20PARA%20SITE%20BEEVOX%20GOOGLE%2F444444444.jpg&version_id=null',
  },
];

export default function ServicosLaboratoriais() {
  return (
    <ServicePageLayout>
      <section className="relative bg-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(246,182,31)] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[rgb(246,182,31)] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block bg-[rgb(246,182,31)] text-black font-bold px-5 py-1.5 rounded-full text-sm uppercase tracking-wider">
            Laboratório Próprio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Serviços <span className="text-[rgb(246,182,31)]">Laboratoriais</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Manutenção especializada, limpeza e reparos em laboratório próprio para garantir o melhor desempenho do seu aparelho auditivo.
          </p>
          <a
            href="http://wa.me/5565999818250"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[rgb(246,182,31)] text-black px-8 py-4 rounded-full font-bold hover:bg-[rgb(226,162,11)] transition-all shadow-lg gap-2 mt-4"
          >
            Agendar Atendimento
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="inline-flex items-center gap-3">
                  <div className="w-12 h-12 bg-[rgb(246,182,31)] rounded-xl flex items-center justify-center shrink-0">
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-sm font-bold text-[rgb(246,182,31)] uppercase tracking-wider">
                    Serviço {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                <ul className="space-y-3">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[rgb(246,182,31)] shrink-0 mt-0.5" />
                      <span className="text-gray-700">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`rounded-2xl overflow-hidden shadow-xl ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <Volume2 className="w-10 h-10 text-[rgb(246,182,31)] mx-auto" />
          <h2 className="text-3xl sm:text-4xl font-bold">
            Seu aparelho merece os <span className="text-[rgb(246,182,31)]">melhores cuidados</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Entre em contato com nossa equipe e agende um horário no nosso laboratório especializado.
          </p>
          <a
            href="http://wa.me/5565999818250"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[rgb(246,182,31)] text-black px-10 py-4 rounded-full font-bold hover:bg-[rgb(226,162,11)] transition-all shadow-lg gap-2 text-lg"
          >
            Falar com Especialista
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </ServicePageLayout>
  );
}
