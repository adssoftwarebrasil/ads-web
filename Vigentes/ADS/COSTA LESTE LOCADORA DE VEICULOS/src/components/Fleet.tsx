import { Users, Fuel, Cog, Star } from 'lucide-react';

const cars = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/locadora%20costa%20leste%2Fimg%2Fargo.webp',
    name: 'Fiat Argo',
    badge: 'Econômico',
    transmission: 'Manual',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/locadora%20costa%20leste%2Fimg%2Fonix.webp',
    name: 'Chevrolet Onix',
    badge: 'Popular',
    transmission: 'Automático',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/locadora%20costa%20leste%2Fimg%2Fhb20.webp',
    name: 'Hyundai HB20',
    badge: 'Econômico',
    transmission: 'Manual',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/locadora%20costa%20leste%2Fimg%2Fpolo.webp',
    name: 'Volkswagen Polo',
    badge: 'Conforto',
    transmission: 'Automático',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/locadora%20costa%20leste%2Fimg%2Fcorola.webp',
    name: 'Toyota Corolla',
    badge: 'Premium',
    transmission: 'Automático',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/locadora%20costa%20leste%2Fimg%2Fcompass.webp',
    name: 'Jeep Compass',
    badge: 'SUV',
    transmission: 'Automático',
  },
];

export default function Fleet() {
  return (
    <section id="frota" className="py-20 bg-[rgb(16,14,13)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(255,254,252)] mb-4">
            Nossa <span className="text-[rgb(202,25,27)]">Frota</span>
          </h2>
          <div className="w-24 h-1 bg-[rgb(202,25,27)] mx-auto mb-6"></div>
          <p className="text-xl text-[rgb(255,254,252)]/80 max-w-3xl mx-auto">
            Veículos novos e revisados para garantir sua segurança e conforto
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cars.map((car) => (
            <div
              key={car.name}
              className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[rgb(202,25,27)] text-[rgb(255,254,252)] px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                  {car.badge}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[rgb(16,14,13)] mb-4">{car.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-[rgb(16,14,13)]/70">
                    <Users size={20} className="text-[rgb(202,25,27)]" />
                    <span>5 Passageiros</span>
                  </div>
                  <div className="flex items-center space-x-3 text-[rgb(16,14,13)]/70">
                    <Fuel size={20} className="text-[rgb(202,25,27)]" />
                    <span>Flex</span>
                  </div>
                  <div className="flex items-center space-x-3 text-[rgb(16,14,13)]/70">
                    <Cog size={20} className="text-[rgb(202,25,27)]" />
                    <span>{car.transmission}</span>
                  </div>
                </div>
                <a
                  href={`http://wa.me/5585986018954?text=Olá! Gostaria de alugar o ${car.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[rgb(202,25,27)] text-[rgb(255,254,252)] px-6 py-3 rounded-lg hover:bg-[rgb(143,25,19)] transition-colors duration-300 font-semibold"
                >
                  Reservar Agora
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <div className="flex items-center space-x-2 mb-6">
            <Star size={28} className="text-[rgb(202,25,27)] fill-[rgb(202,25,27)]" />
            <h3 className="text-3xl font-bold text-[rgb(255,254,252)]">
              Destaque: Família &amp; Grupos
            </h3>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row group">
            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[400px] overflow-hidden">
              <img
                src="https://storage.lucasmendes.dev/site-sp/locadora%20costa%20leste%2Fimg%2Fchevrolet-spin-7-lugar.webp"
                alt="Chevrolet Spin 7 Lugares"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6 bg-[rgb(202,25,27)] text-[rgb(255,254,252)] px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
                <Users size={18} />7 Lugares
              </div>
            </div>
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <h4 className="text-3xl font-bold text-[rgb(16,14,13)] mb-2">Chevrolet Spin</h4>
              <p className="text-[rgb(202,25,27)] font-semibold text-lg mb-6">
                A escolha ideal para viagens em família em Fortaleza
              </p>
              <div className="prose text-[rgb(16,14,13)]/80 mb-8 leading-relaxed">
                <p className="mb-4">
                  O Chevrolet Spin 7 lugares oferece conforto, segurança e excelente custo-benefício.
                  Na Costa Leste Locadora de Veículos, você encontra o carro perfeito para viagens em
                  família, passeios turísticos e grupos.
                </p>
                <p>
                  Com amplo espaço interno, acomoda até sete passageiros confortavelmente, oferecendo
                  ótima dirigibilidade tanto na cidade quanto na estrada. Um veículo versátil e
                  econômico para sua estadia no Ceará.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-8 border-t border-b border-gray-200 py-6">
                <div className="text-center">
                  <Users size={24} className="mx-auto text-[rgb(202,25,27)] mb-2" />
                  <span className="text-sm font-semibold text-[rgb(16,14,13)]">7 Pessoas</span>
                </div>
                <div className="text-center border-l border-gray-200">
                  <Fuel size={24} className="mx-auto text-[rgb(202,25,27)] mb-2" />
                  <span className="text-sm font-semibold text-[rgb(16,14,13)]">Flex</span>
                </div>
                <div className="text-center border-l border-gray-200">
                  <Cog size={24} className="mx-auto text-[rgb(202,25,27)] mb-2" />
                  <span className="text-sm font-semibold text-[rgb(16,14,13)]">Automático</span>
                </div>
              </div>
              <a
                href="http://wa.me/5585986018954?text=Olá! Tenho interesse no aluguel da Chevrolet Spin 7 Lugares."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[rgb(202,25,27)] text-[rgb(255,254,252)] px-8 py-4 rounded-lg hover:bg-[rgb(143,25,19)] transition-colors duration-300 font-bold text-lg shadow-lg hover:shadow-xl"
              >
                Reservar Spin 7 Lugares
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-[rgb(255,254,252)]/10 backdrop-blur-sm text-[rgb(255,254,252)] px-6 py-3 rounded-full">
            <Star size={20} className="text-[rgb(202,25,27)]" />
            <span className="font-medium">Todos os veículos incluem seguro completo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
