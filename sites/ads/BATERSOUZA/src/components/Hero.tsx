import { Phone, Clock } from 'lucide-react';

const stats = [
  { value: '+10', label: 'Marcas Disponíveis', extra: '' },
  { value: '24h', label: 'Atendimento Rápido', extra: '' },
  { value: '100%', label: 'Garantia de Qualidade', extra: 'col-span-2 sm:col-span-1' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/batersouza%2Fimg%2Fhero-background.webp"
          alt="BaterSouza Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-bold text-sm sm:text-base mb-6 animate-pulse">
            🔋 Plantão até 22h - Atendimento de Emergência
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Bateria do seu veículo <span className="text-yellow-400">descarregou?</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-100 mb-4">
            Atendimento rápido e especializado em{' '}
            <span className="font-bold text-yellow-400">Senador Canedo e região</span>
          </p>
          <p className="text-lg text-gray-200 mb-8">
            Trabalhamos com as melhores marcas do mercado. Testes gratuitos de alternador, motor de
            partida e laudo técnico completo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="http://wa.me/556292766466?text=Olá! Gostaria de um orçamento para bateria automotiva."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg hover:bg-yellow-500 transition-all font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <Phone className="lucide lucide-phone" width={24} height={24} />
              Solicitar Orçamento
            </a>
            <a
              href="tel:+556292766466"
              className="flex items-center justify-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-bold text-lg shadow-xl"
            >
              <Clock className="lucide lucide-clock" width={24} height={24} />
              (62) 99276-6466
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center ${stat.extra}`}
              >
                <div className="text-3xl font-bold text-yellow-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
