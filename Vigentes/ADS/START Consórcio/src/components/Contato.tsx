import type { ReactNode } from 'react';

const svgProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

type Info = { icon: ReactNode; title: string; body: ReactNode };

const infos: Info[] = [
  {
    icon: (
      <svg {...svgProps}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    title: 'Endereço',
    body: (
      <p className="text-sm text-gray-600">
        Av. Marcelino Pires, 336
        <br />
        Dourados-MS, 79.820-101
      </p>
    ),
  },
  {
    icon: (
      <svg {...svgProps}>
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    title: 'Horário de Funcionamento',
    body: (
      <p className="text-sm text-gray-600">
        Segunda a Sexta: 08:00 - 11:00 e 13:00 - 17:30
        <br />
        Sábado: 08:00 - 11:00
      </p>
    ),
  },
  {
    icon: (
      <svg {...svgProps}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    title: 'Telefone/WhatsApp',
    body: (
      <a
        href="https://wa.me/5567996552408"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[#E7251C] font-semibold hover:underline"
      >
        +55 67 99655-2408
      </a>
    ),
  },
  {
    icon: (
      <svg {...svgProps}>
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="m22 7-10 5L2 7"></path>
      </svg>
    ),
    title: 'E-mail',
    body: (
      <a
        href="mailto:luizpaulo@startconsorcios.com.br"
        className="text-sm text-[#E7251C] font-semibold hover:underline"
      >
        luizpaulo@startconsorcios.com.br
      </a>
    ),
  },
];

export default function Contato() {
  return (
    <section id="contato" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg md:text-xl text-gray-600">Estamos prontos para atender você</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            {infos.map((info) => (
              <div
                key={info.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E7251C] rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                    {info.body}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Redes Sociais</h3>
              <div className="space-y-4 mb-8">
                <a
                  href="https://instagram.com/startinvestimentosemconsorcios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Instagram</p>
                    <p className="text-gray-900 font-semibold group-hover:text-[#E7251C] transition-colors">
                      @startinvestimentosemconsorcios
                    </p>
                  </div>
                </a>
                <a
                  href="https://facebook.com/startcorretoradeconsorcios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Facebook</p>
                    <p className="text-gray-900 font-semibold group-hover:text-[#E7251C] transition-colors">
                      startcorretoradeconsorcios
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <p className="text-gray-600 text-center mb-4">Pronto para realizar seus sonhos?</p>
              <a
                href="https://wa.me/5567996552408"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#E7251C] text-white px-8 py-4 rounded-full font-bold text-center hover:bg-[#c41f18] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Fale Conosco pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
