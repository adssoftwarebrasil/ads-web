import { Tag, RefreshCw, Glasses, Eye, Sun } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  Icon: LucideIcon;
  iconClass: string;
  img: string;
  title: string;
  text: string;
}

const services: Service[] = [
  {
    Icon: Tag,
    iconClass: 'lucide lucide-tag w-6 h-6 text-white',
    img: 'https://storage.lucasmendes.dev/site-sp/oticamodernago%2FPromoc%CC%A7o%CC%83es%20Especiais.webp',
    title: 'Promoções Especiais',
    text: 'Aproveite nossas ofertas exclusivas em armações e lentes selecionadas.',
  },
  {
    Icon: RefreshCw,
    iconClass: 'lucide lucide-refresh-cw w-6 h-6 text-white',
    img: 'https://storage.lucasmendes.dev/site-sp/oticamodernago%2FTroca%20de%20Armac%CC%A7o%CC%83es.jpg',
    title: 'Troca de Armações',
    text: 'Renove seu visual com praticidade aproveitando suas lentes atuais.',
  },
  {
    Icon: Glasses,
    iconClass: 'lucide lucide-glasses w-6 h-6 text-white',
    img: 'https://storage.lucasmendes.dev/site-sp/oticamodernago%2FArmac%CC%A7o%CC%83es%20Modernas.webp',
    title: 'Armações Modernas',
    text: 'Curadoria exclusiva das marcas mais desejadas e estilos atuais.',
  },
  {
    Icon: Eye,
    iconClass: 'lucide lucide-eye w-6 h-6 text-white',
    img: 'https://storage.lucasmendes.dev/site-sp/oticamodernago%2FLentes%20Multifocais.webp',
    title: 'Lentes Multifocais',
    text: 'Tecnologia de ponta para conforto total em todas as distâncias.',
  },
  {
    Icon: Sun,
    iconClass: 'lucide lucide-sun w-6 h-6 text-white',
    img: 'https://storage.lucasmendes.dev/site-sp/oticamodernago%2FO%CC%81culos%20Solares.webp',
    title: 'Óculos Solares',
    text: 'Proteção UV premium combinada com o design que você procura.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-[rgb(231,28,31)] uppercase bg-red-50 rounded-full">
            Expertise Óptica
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Nossas <span className="text-[rgb(231,28,31)]">Especialidades</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Desde 1966, unimos tradição e tecnologia para oferecer o que há de melhor para sua saúde visual.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          {services.map((service) => {
            const { Icon } = service;
            return (
              <div
                key={service.title}
                className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)] group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                      <Icon className={service.iconClass} width={24} height={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-8 leading-relaxed h-[60px] line-clamp-3">{service.text}</p>
                  <a
                    href={`https://api.whatsapp.com/send?phone=556293756868&text=Olá! Gostaria de mais informações sobre: ${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gray-50 text-gray-900 font-bold group-hover:bg-[rgb(231,28,31)] group-hover:text-white transition-all duration-300"
                  >
                    Consultar Detalhes
                    <ArrowRightSmall />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center p-8 md:p-12 rounded-[3rem] bg-[rgb(231,28,31)] text-white shadow-2xl shadow-red-200 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <h4 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Não encontrou o que procurava?</h4>
            <p className="text-red-50 mb-8 relative z-10 opacity-90">
              Fale com nossos consultores técnicos agora mesmo pelo WhatsApp.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=556293756868&text=Olá! Gostaria de fazer uma consulta personalizada."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[rgb(231,28,31)] px-10 py-4 rounded-full text-lg font-black hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
            >
              Atendimento Especializado
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRightSmall() {
  return (
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
      className="lucide lucide-arrow-right w-4 h-4"
    >
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  );
}
