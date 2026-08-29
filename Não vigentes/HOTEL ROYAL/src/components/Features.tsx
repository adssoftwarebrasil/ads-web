import { MapPin, Car, Wifi, Clock, Wind, Home } from 'lucide-react';

const features = [
  { icon: MapPin, title: 'Localização Privilegiada', text: 'No coração de Dourados, área central com fácil acesso' },
  { icon: Car, title: 'Estacionamento Privativo', text: 'Segurança e comodidade para seu veículo' },
  { icon: Wifi, title: 'Wi-Fi Gratuito', text: 'Internet de alta velocidade em todos os quartos' },
  { icon: Clock, title: 'Atendimento 24h', text: 'Equipe disponível a qualquer momento' },
  { icon: Wind, title: 'Ar-Condicionado', text: 'Conforto térmico em todos os ambientes' },
  { icon: Home, title: 'Quartos Familiares', text: 'Opções para todos os tipos de grupos' },
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-[#E8DCC8] ">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-[#C8AF82] font-semibold text-lg uppercase tracking-wide mb-3">
            Por que escolher
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">Nossos Diferenciais</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-[#435A4A] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C8AF82] transition-colors group-hover:rotate-12 duration-300">
                  <Icon width={32} height={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3">{f.title}</h3>
                <p className="text-[#2C2C2C]/80 leading-relaxed">{f.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
