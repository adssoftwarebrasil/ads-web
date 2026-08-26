import { Car, Clock, Shield, MapPin } from 'lucide-react';

const stats = [
  { icon: Car, label: 'Carros Novos' },
  { icon: Clock, label: 'Entrega Rápida' },
  { icon: Shield, label: 'Seguro Total' },
  { icon: MapPin, label: 'Entrega no Local' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(16,14,13)]/95 via-[rgb(16,14,13)]/85 to-[rgb(16,14,13)]/75"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[rgb(255,254,252)] leading-tight">
                Alugue seu Carro em <span className="text-[rgb(202,25,27)]">Fortaleza</span>
              </h1>
              <p className="text-xl sm:text-2xl text-[rgb(255,254,252)]/90 font-light">
                12 anos de experiência no mercado
              </p>
            </div>
            <p className="text-lg text-[rgb(255,254,252)]/80 leading-relaxed max-w-xl">
              Carros novos e revisados, com entrega no aeroporto, hotel ou em nossa locadora.
              Atendimento personalizado que faz a diferença na sua viagem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="http://wa.me/5585986018954?text=Olá! Gostaria de alugar um carro."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-[rgb(202,25,27)] text-[rgb(255,254,252)] px-8 py-4 rounded-full hover:bg-[rgb(143,25,19)] transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Car size={24} />
                <span>Reservar Agora</span>
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center space-x-2 bg-transparent border-2 border-[rgb(255,254,252)] text-[rgb(255,254,252)] px-8 py-4 rounded-full hover:bg-[rgb(255,254,252)] hover:text-[rgb(16,14,13)] transition-all duration-300 font-semibold text-lg"
              >
                <span>Nossos Serviços</span>
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center space-y-2 p-4 bg-[rgb(255,254,252)]/10 backdrop-blur-sm rounded-lg"
                >
                  <stat.icon size={32} className="text-[rgb(202,25,27)]" />
                  <span className="text-[rgb(255,254,252)] font-semibold text-center text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/locadora%20costa%20leste%2Fimg%2Fhero.webp"
                alt="Locadora Costa Leste"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-[rgb(202,25,27)] text-[rgb(255,254,252)] p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">12+</p>
                <p className="text-sm font-medium">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[rgb(255,254,252)] to-transparent z-10"></div>
    </section>
  );
}
