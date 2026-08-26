import { MapPin, Wifi, Clock, Car, Coffee, Shield, Sparkles } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: MapPin,
      title: 'Localização Privilegiada',
      description: 'No coração do Setor Hoteleiro Sul'
    },
    {
      icon: Wifi,
      title: 'Wi-Fi Gratuito',
      description: 'Internet de alta velocidade em todos os ambientes'
    },
    {
      icon: Clock,
      title: 'Atendimento 24h',
      description: 'Recepção e serviços disponíveis o dia todo'
    },
    {
      icon: Car,
      title: 'Estacionamento',
      description: 'Vagas seguras e gratuitas para hóspedes'
    },
    {
      icon: Coffee,
      title: 'Café da Manhã',
      description: 'Buffet completo e variado todas as manhãs'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Monitoramento 24h para sua tranquilidade'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      {/* Padrão de pontos */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-medium text-blue-200 uppercase tracking-wide">
              Nossos Diferenciais
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Experiência Completa
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Comodidades e serviços pensados para o seu conforto absoluto
          </p>
        </div>

        {/* Grid de Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card com glassmorphism */}
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
                {/* Glow effect no hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/10 group-hover:to-blue-600/10 transition-all duration-300"></div>
                
                <div className="relative">
                  {/* Ícone */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-blue-500/30">
                    <feature.icon size={28} className="text-white" />
                  </div>
                  
                  {/* Conteúdo */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Indicador decorativo no canto */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <p className="text-lg text-gray-300">
              Pronto para viver essa experiência?
            </p>
            <button
              onClick={() => window.open('https://wa.me/5561324695520?text=Olá! Gostaria de fazer uma reserva.', '_blank')}
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/40 transform hover:-translate-y-1 flex items-center gap-2"
            >
              Fazer Reserva Agora
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}