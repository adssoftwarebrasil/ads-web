import { Zap, ShieldCheck, Clock, Award, BadgeCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Differential {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  delay: string;
}

const differentials: Differential[] = [
  {
    Icon: Zap,
    iconClass: 'lucide-zap',
    title: 'Rapidez na Entrega',
    description: 'Entrega em até 30 minutos na região. Ligou, chegou!',
    delay: '0ms',
  },
  {
    Icon: ShieldCheck,
    iconClass: 'lucide-shield-check',
    title: 'Segurança Garantida',
    description: 'Botijões certificados e revisados periodicamente.',
    delay: '100ms',
  },
  {
    Icon: Clock,
    iconClass: 'lucide-clock',
    title: 'Atendimento Estendido',
    description:
      'Aberto de segunda a sábado até 21h30. Domingos e feriados até 15h.',
    delay: '200ms',
  },
  {
    Icon: Award,
    iconClass: 'lucide-award',
    title: '12 Anos de Confiança',
    description: 'Mais de uma década servindo a região com excelência.',
    delay: '300ms',
  },
];

const BANNER_IMG =
  'https://storage.lucasmendes.dev/site-sp/azaria%20gas%2Fimg%2Fgalpao-propaganda-gas-do-povo.webp';
const BANNER_ZOOM_IMG =
  'https://storage.lucasmendes.dev/site-sp/azaria%20gas%2Fimg%2Fgalpao-propaganda-gas-do-povo-zoom-na-propaganda.webp';

const WHATSAPP_PROGRAMA =
  'https://wa.me/5516992821647?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20programa%20Gás%20do%20Povo';
const WHATSAPP_ORDER =
  'https://wa.me/5516992821647?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido';

function Differentials() {
  return (
    <section
      id="diferenciais"
      className="py-20 bg-gradient-to-b from-[rgb(219,138,69)]/5 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Por Que Escolher a Azarias Gás?
          </h2>
          <p className="text-xl text-gray-600">
            Compromisso com qualidade e atendimento excepcional
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {differentials.map((d) => (
            <div
              key={d.title}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-[rgb(219,138,69)]/20 opacity-100 translate-y-0"
              style={{ transitionDelay: d.delay }}
            >
              <div className="relative mb-6">
                <d.Icon
                  className={`lucide ${d.iconClass} w-16 h-16 text-[rgb(219,138,69)] relative z-10`}
                />
                <div className="absolute inset-0 w-16 h-16 blur-xl bg-[rgb(219,138,69)] opacity-30 rounded-full z-0"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{d.title}</h3>
              <p className="text-gray-600">{d.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 delay-300 mb-16 opacity-100 translate-y-0">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-[rgb(219,138,69)]/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="flex items-center space-x-3 mb-6 relative z-10">
                <div className="bg-[rgb(219,138,69)]/10 p-2 rounded-full">
                  <BadgeCheck className="lucide lucide-badge-check w-8 h-8 text-[rgb(219,138,69)]" />
                </div>
                <span className="text-[rgb(219,138,69)] font-bold tracking-wider uppercase">
                  Ponto Credenciado Oficial
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight relative z-10">
                Parceria com o Programa{' '}
                <span className="text-[rgb(219,138,69)]">Gás do Povo</span>
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed relative z-10">
                Temos orgulho de ser um parceiro oficial do programa do governo.
                Facilitamos o acesso ao gás de cozinha para famílias
                beneficiárias, garantindo qualidade, segurança e o melhor
                atendimento da região.
              </p>
              <div className="relative z-10">
                <a
                  href={WHATSAPP_PROGRAMA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[rgb(219,138,69)] font-bold hover:underline"
                >
                  <span>Fale conosco sobre o programa</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-auto bg-gray-100">
              <img
                src={BANNER_IMG}
                alt="Banner do Programa Gás do Povo na Azarias Gás"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r lg:from-white/10 lg:to-transparent"></div>
              <div className="absolute bottom-6 right-6 w-2/5 lg:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300 hidden sm:block">
                <img
                  src={BANNER_ZOOM_IMG}
                  alt="Fachada da Azarias Gás mostrando o banner do programa"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            href={WHATSAPP_ORDER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(219,138,69)] text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-[rgb(199,118,49)] transform hover:scale-105 transition-all duration-300 shadow-xl shadow-[rgb(219,138,69)]/30"
          >
            Faça Seu Pedido Agora
          </a>
        </div>
      </div>
    </section>
  );
}

export default Differentials;
