import { MapPin } from 'lucide-react';

export default function ServiceArea() {
  const cities = [
    'Alto Alegre',
    'Amajari',
    'Boa Vista',
    'Bonfim',
    'Cantá',
    'Caracaraí',
    'Caroebe',
    'Iracema',
    'Mucajaí',
    'Normandia',
    'Pacaraima',
    'Rorainópolis',
    'São João da Baliza',
    'São Luiz',
    'Uiramutã'
  ];

  return (
    <section className="py-20 bg-[#2a2a28]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Atendemos Todo o Estado de Roraima
          </h2>
          <p className="text-gray-400 text-lg">
            Cobertura completa para garantir que você receba suas peças onde estiver
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className="bg-[#1a1a18] rounded-lg p-4 flex items-center gap-3 hover:bg-[#333330] transition-colors"
            >
              <MapPin size={20} className="text-[#fbba00] flex-shrink-0" />
              <span className="text-white font-medium">{city}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg mb-4">
            Também atendemos outras regiões do Norte do Brasil
          </p>
          <a
            href="https://wa.me/5595984303773"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#fbba00] text-[#1a1a18] px-8 py-4 rounded-lg font-bold hover:bg-[#ffd04d] transition-all hover:scale-105"
          >
            Consulte Sua Região
          </a>
        </div>
      </div>
    </section>
  );
}
