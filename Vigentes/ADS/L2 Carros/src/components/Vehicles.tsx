import { Calendar, Fuel, Gauge, MessageCircle } from 'lucide-react';

interface Vehicle {
  name: string;
  image: string;
  badge: string;
  badgeClass: string;
  year: string;
  fuel: string;
  km: string;
}

const vehicles: Vehicle[] = [
  {
    name: 'SUV Premium',
    image: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Seminovo',
    badgeClass: 'bg-black text-white',
    year: '2023',
    fuel: 'Flex',
    km: '15.000 km',
  },
  {
    name: 'Sedan Executivo',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Novo',
    badgeClass: 'bg-red-600 text-white',
    year: '2024',
    fuel: 'Híbrido',
    km: '0 km',
  },
  {
    name: 'Hatch Econômico',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Seminovo',
    badgeClass: 'bg-black text-white',
    year: '2023',
    fuel: 'Flex',
    km: '25.000 km',
  },
  {
    name: 'Pickup Robusta',
    image: 'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Novo',
    badgeClass: 'bg-red-600 text-white',
    year: '2024',
    fuel: 'Diesel',
    km: '0 km',
  },
  {
    name: 'Esportivo Elegante',
    image: 'https://images.pexels.com/photos/3773570/pexels-photo-3773570.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Seminovo',
    badgeClass: 'bg-black text-white',
    year: '2023',
    fuel: 'Gasolina',
    km: '18.000 km',
  },
  {
    name: 'Crossover Moderno',
    image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Novo',
    badgeClass: 'bg-red-600 text-white',
    year: '2024',
    fuel: 'Flex',
    km: '0 km',
  },
];

export default function Vehicles() {
  return (
    <section id="veiculos" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Estoque
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Veículos Disponíveis</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Confira nossa seleção de veículos novos e seminovos, todos revisados e com procedência garantida
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((v) => (
            <div
              key={v.name}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${v.badgeClass}`}>{v.badge}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-4">{v.name}</h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex flex-col items-center">
                    <Calendar className="w-5 h-5 text-red-600 mb-1" />
                    <span className="text-sm text-gray-600">{v.year}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Fuel className="w-5 h-5 text-red-600 mb-1" />
                    <span className="text-sm text-gray-600">{v.fuel}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Gauge className="w-5 h-5 text-red-600 mb-1" />
                    <span className="text-sm text-gray-600">{v.km}</span>
                  </div>
                </div>
                <a
                  href={`https://wa.me/5537999236447?text=Olá! Tenho interesse no veículo: ${v.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Tenho Interesse
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Não encontrou o veículo ideal? Entre em contato e ajudaremos você a encontrar!
          </p>
          <a
            href="https://wa.me/5537999236447?text=Olá! Gostaria de ver mais opções de veículos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Ver Mais Veículos
          </a>
        </div>
      </div>
    </section>
  );
}
