import { Truck, MapPin, Shield } from 'lucide-react';

const whatsappUrl =
  'https://wa.me/557598115869?text=Ol%C3%A1%2C%20vim%20pelo%20Google.%20Quero%20fazer%20um%20or%C3%A7amento.';

const features = [
  { Icon: Truck, title: 'Reboque 24h', desc: 'Resgate rápido' },
  { Icon: MapPin, title: 'Rastreamento', desc: 'Monitoramento GPS' },
  { Icon: Shield, title: 'Segurança', desc: 'Tranquilidade total' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[rgb(2,66,147)] via-[rgb(0,68,139)] to-[rgb(2,66,147)]"
    >
      <div className="absolute inset-0 bg-[url('https://storage.lucasmendes.dev/site-sp/ts%20tecnologia%2Fimg%2Ftecnologia-de-rastreamento-postagem-com-texto-01.webp')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[rgb(2,66,147)] via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                Guincho 24h e Proteção para o Seu{' '}
                <span className="text-[rgb(16,215,237)]">Veículo</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                Não fique na mão: garantimos reboque rápido 24 horas onde você
                estiver, aliado ao melhor rastreamento veicular inteligente. Há
                mais de 9 anos oferecendo resgate ágil e tranquilidade.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[rgb(16,215,237)] text-[rgb(2,66,147)] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Solicite Resgate ou Cotação
              </a>
              <button className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[rgb(2,66,147)] transition-all duration-300">
                Conheça Nossos Planos
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {features.map(({ Icon, title, desc }) => (
                <div key={title} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(16,215,237)] rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[rgb(2,66,147)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className="text-gray-300 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-[rgb(16,215,237)] rounded-3xl transform rotate-6 opacity-20"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/ts%20tecnologia%2Fimg%2Frastreamento-smartphone-carro-postagem-com-texto-01.webp"
                alt="Serviço de Guincho e Rastreamento TS Serviços"
                className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
