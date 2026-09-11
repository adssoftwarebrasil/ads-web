import { MapPin } from 'lucide-react';

const cities = [
  'Belo Horizonte', 'Betim', 'Contagem', 'Nova Lima', 'Ribeirão das Neves',
  'Santa Luzia', 'Vespasiano', 'Sabará', 'Lagoa Santa', 'Pedro Leopoldo',
  'Ibirité', 'Sarzedo', 'Brumadinho', 'Caeté', 'Confins', 'Esmeraldas',
  'Florestal', 'Igarapé', 'Itaguara', 'Itatiaiuçu', 'Jaboticatubas',
  'Juatuba', 'Mário Campos', 'Mateus Leme', 'Matozinhos', 'Raposos',
  'Rio Acima', 'São Joaquim de Bicas', 'São José da Lapa',
  'Taquaraçu de Minas', 'Baldim', 'Capim Branco', 'Nova União', 'Rio Manso'
];

export default function Cities() {
  return (
    <section id="cidades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-[rgb(238,51,52)] rounded-full">
              <MapPin size={32} className="text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(70,70,70)] mb-4">
            Cidades Atendidas
          </h2>
          <p className="text-xl text-gray-600">
            Entrega rápida e logística eficiente para toda a região metropolitana
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city, index) => (
            <span
              key={index}
              className="px-5 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-[rgb(238,51,52)] hover:text-white transition-colors cursor-default"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
