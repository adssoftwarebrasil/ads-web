import { HomeIcon, CarIcon, BarChartIcon } from './icons';

const servicos = [
  {
    icon: <HomeIcon size={32} />,
    title: 'Consórcio Imobiliário',
    text: 'Conquiste seu imóvel próprio e saia do aluguel com parcelas que cabem no seu bolso.',
  },
  {
    icon: <CarIcon size={32} />,
    title: 'Consórcio de Veículos',
    text: 'Realize o sonho do carro novo ou troque seu veículo atual com planejamento e segurança.',
  },
  {
    icon: <BarChartIcon size={32} />,
    title: 'Consórcio Investimento',
    text: 'Uma forma inteligente de investir e fazer seu patrimônio crescer com planejamento.',
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Atendemos todos os públicos em todos os valores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {servicos.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-[#E7251C] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300 text-white">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{s.text}</p>
              <a
                href="https://wa.me/5567996552408"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#E7251C] font-semibold hover:gap-2 transition-all duration-300"
              >
                Saiba mais <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-[#E7251C] text-white rounded-3xl p-8 md:p-12 shadow-xl">
          <p className="text-2xl md:text-3xl font-bold mb-4">Nosso Diferencial</p>
          <p className="text-lg md:text-xl opacity-90">
            Meia parcela até a contemplação, facilitando a realização dos seus sonhos
          </p>
        </div>
      </div>
    </section>
  );
}
