import { Clock, MapPin, Users, Battery } from 'lucide-react';

const advantages = [
  { Icon: Clock, value: '+4', title: 'Anos', text: 'De experiência atendendo Gurupi' },
  { Icon: MapPin, value: '+1', title: 'Localizações', text: 'Estrategicamente posicionada' },
  { Icon: Users, value: '+100', title: 'Clientes Satisfeitos', text: 'Confiam em nossos serviços' },
  { Icon: Battery, value: '+5', title: 'Marcas de Baterias', text: 'As melhores do mercado' },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[rgb(233,155,29)] font-bold text-sm uppercase tracking-wider">
            Vantagens
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-2 mb-4">
            Vantagens de Escolher Zé da Bateria
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto">
            Descubra por que nós somos a melhor escolha para você.
          </p>
          <div className="w-20 h-1 bg-[rgb(233,155,29)] rounded-full mx-auto mt-4"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {advantages.map(({ Icon, value, title, text }) => (
            <div
              key={title}
              className="bg-gray-50 rounded-lg p-8 text-center hover:bg-[rgb(233,155,29)]/10 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 group"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[rgb(233,155,29)] w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} className="text-black" />
                </div>
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-black mb-2">
                {value}
              </div>
              <div className="text-lg font-bold text-black mb-2">{title}</div>
              <div className="text-sm text-gray-600">{text}</div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-black via-gray-900 to-black rounded-2xl p-8 lg:p-12 text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Atendimento 24h em Emergências
            </h3>
            <p className="text-[rgb(218,221,229)] text-lg mb-8">
              Estamos disponíveis a qualquer hora do dia ou da noite para socorrer
              você onde estiver em Gurupi.
            </p>
            <a
              href="http://wa.me/556384458064"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(233,155,29)] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(213,135,9)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Solicitar Socorro Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
