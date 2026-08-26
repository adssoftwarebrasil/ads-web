import { WHATSAPP_URL } from '../constants';

interface Service {
  img: string;
  title: string;
  text: string;
}

const services: Service[] = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/csamanaus/Diagno%CC%81stico%20Auditivo.png',
    title: 'Diagnóstico Auditivo',
    text: 'Estudo aprofundado da sua audição.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/csamanaus/Consultoria%20Auditiva.png',
    title: 'Consultoria Auditiva',
    text: 'Orientação especializada para escolha de produtos.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/csamanaus/Aparelhos%20Auditivos.png',
    title: 'Aparelhos Auditivos',
    text: 'Conheça nossa linha de aparelhos modernos.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/csamanaus/Treinamento%20de%20Uso.png',
    title: 'Treinamento de Uso',
    text: 'Ensina como utilizar seu aparelho corretamente.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/csamanaus/Suporte%20Po%CC%81s-Venda.png',
    title: 'Suporte Pós-Venda',
    text: 'Atendimento contínuo após a compra.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/csamanaus/Manutenc%CC%A7a%CC%83o%20de%20Aparelhos.png',
    title: 'Manutenção de Aparelhos',
    text: 'Serviço completo para ajuste e manutenção.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/csamanaus/Pec%CC%A7as%20e%20Acesso%CC%81rios.png',
    title: 'Peças e Acessórios',
    text: 'Variedade de acessórios para satisfação total.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Nossos Serviços
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conheça Nossos Serviços
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama de serviços especializados para atender às suas necessidades
            auditivas, desde testes auditivos até a adaptação de aparelhos auditivos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h4>
                <p className="text-gray-600 mb-4">{s.text}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-secondary font-semibold transition-colors"
                >
                  Saiba Mais
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
