import { ArrowRight } from 'lucide-react';

const services = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/prestserv-ambiental/img/coleta-de-residuos.webp',
    title: 'Coleta de Resíduos',
    text: 'Realizamos a coleta segura de resíduos perigosos e não perigosos, com equipe qualificada e veículos adequados a cada tipo de material, assegurando transporte conforme as normas ambientais.',
    bar: 'bg-primary-500',
    delay: '0ms',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/prestserv-ambiental/img/destinacao-final.webp',
    title: 'Destinação Final',
    text: 'Executamos a destinação final ambientalmente correta de resíduos, com emissão de documentação e rastreabilidade que comprovam o atendimento a todas as exigências legais vigentes.',
    bar: 'bg-eco-500',
    delay: '80ms',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/prestserv-ambiental/img/gerenciamento-de-planta.webp',
    title: 'Gerenciamento de Planta',
    text: 'Fornecemos equipe e equipamentos especializados para gerenciar resíduos diretamente na unidade do cliente, integrando processos internos e garantindo maior eficiência operacional.',
    bar: 'bg-accent-500',
    delay: '160ms',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/prestserv-ambiental/img/armazenagem.webp',
    title: 'Armazenagem',
    text: 'Disponibilizamos armazenagem sem custo para materiais que aguardam liberação para destruição, garantindo organização, controle e segurança até a próxima etapa do processo ambiental.',
    bar: 'bg-primary-600',
    delay: '240ms',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/prestserv-ambiental/img/protecao-da-marca.webp',
    title: 'Proteção da Marca',
    text: 'Asseguramos a descaracterização completa de produtos e materiais, evitando reutilizações indevidas e protegendo a marca do cliente durante todo o ciclo do resíduo.',
    bar: 'bg-eco-600',
    delay: '320ms',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/prestserv-ambiental/img/acessoria-fiscal.webp',
    title: 'Assessoria Fiscal',
    text: 'Prestamos assessoria fiscal especializada junto à Receita Federal, visando a obtenção de benefícios fiscais sobre produtos descartados, reduzindo custos operacionais e fortalecendo a gestão financeira.',
    bar: 'bg-accent-600',
    delay: '400ms',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-eco-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Soluções Completas em <span className="text-primary-500">Gestão Ambiental</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Do planejamento à destinação final — oferecemos um ecossistema completo de serviços ambientais para empresas
            que valorizam conformidade, segurança e sustentabilidade.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-md card-hover border border-gray-100 transition-all duration-700 opacity-100 translate-y-0"
              style={{ transitionDelay: service.delay }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div className={`absolute bottom-0 left-0 h-1 w-full ${service.bar}`}></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.text}</p>
                <a
                  href="http://wa.me/5562994920239"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500 hover:text-accent-500 transition-colors group/link"
                >
                  Solicitar serviço
                  <ArrowRight
                    width={15}
                    height={15}
                    className="lucide lucide-arrow-right transition-transform group-hover/link:translate-x-1"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-14 transition-all duration-700 delay-500 opacity-100 translate-y-0">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:scale-105"
          >
            Solicitar proposta personalizada
            <ArrowRight width={18} height={18} className="lucide lucide-arrow-right " />
          </a>
        </div>
      </div>
    </section>
  );
}
