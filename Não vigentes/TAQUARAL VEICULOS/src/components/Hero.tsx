import { ArrowRight, Car, CreditCard, RefreshCw } from 'lucide-react';

const HERO_BG = 'https://storage.lucasmendes.dev/site-sp/taquaral%20veiculos%2Fimg2%2Fhero-background-atualizado.webp';

const stats = [
  { icon: Car, title: 'Veículos', subtitle: 'De Procedência' },
  { icon: CreditCard, title: 'Financiamento', subtitle: 'Facilitado' },
  { icon: RefreshCw, title: 'Troca', subtitle: 'Facilitada' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${HERO_BG}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-[rgb(193,148,35)]/20 border border-[rgb(193,148,35)] text-[rgb(254,240,115)] rounded-full text-sm font-semibold">
              Mais de 1 ano no mercado
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Seu Veículo dos Sonhos <span className="text-[rgb(254,240,115)]">Está Aqui</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
            Compra, venda, troca e consignação de veículos com transparência e segurança. Financiamento facilitado para você realizar seu sonho de forma rápida e descomplicada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://wa.me/5562992489166?text=Olá! Gostaria de saber mais sobre os veículos disponíveis."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-[rgb(193,148,35)] hover:bg-[rgb(254,240,115)] text-[rgb(16,16,16)] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Ver Veículos Disponíveis</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5562992489166?text=Olá! Quero vender ou trocar meu veículo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              <span>Vender ou Trocar</span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.title} className="flex items-center space-x-3 text-white">
                <div className="flex-shrink-0 w-12 h-12 bg-[rgb(193,148,35)]/20 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-[rgb(254,240,115)]" />
                </div>
                <div>
                  <div className="font-bold text-lg">{stat.title}</div>
                  <div className="text-sm text-gray-300">{stat.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
