import { MapPin, Phone, Clock } from 'lucide-react';

const regions = [
  'Palmas - TO',
  'Tocantins',
  'Sul do Pará',
  'Sul do Maranhão',
  'Sudoeste da Bahia',
  'Luiz Eduardo Magalhães - BA',
  'Norte de Goiás',
  'Brasília - DF',
];

export default function ServiceArea() {
  return (
    <section className="py-20 md:py-28 bg-[#F4F4DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#282E6A] mb-6">
              Área de Atendimento
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Atendemos pacientes de diversas regiões, oferecendo um ambiente
              seguro e confortável para sua recuperação pós-operatória em Palmas -
              TO.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md">
                <MapPin
                  size={28}
                  className="text-[#624A7F] flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="font-semibold text-[#282E6A] text-lg mb-2">
                    Localização
                  </h3>
                  <p className="text-gray-700">
                    603 Sul, Alameda 09, 15
                    <br />
                    Plano Diretor Sul, Palmas - TO
                    <br />
                    CEP: 77016-364
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md">
                <Phone size={28} className="text-[#624A7F] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#282E6A] text-lg mb-2">
                    Contato
                  </h3>
                  <p className="text-gray-700">WhatsApp: (63) 99213-5677</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md">
                <Clock size={28} className="text-[#624A7F] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#282E6A] text-lg mb-2">
                    Horário
                  </h3>
                  <p className="text-gray-700">
                    Atendimento 24 horas
                    <br />
                    Todos os dias da semana
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#282E6A] mb-6">
              Regiões Atendidas
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {regions.map((region) => (
                <div
                  key={region}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-3"
                >
                  <MapPin
                    size={20}
                    className="text-[#624A7F] flex-shrink-0"
                  />
                  <span className="text-gray-700 font-medium">{region}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-[#282E6A] text-lg mb-4">
                Atendemos pacientes de outras regiões?
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sim! Recebemos pacientes de diversas localidades que buscam
                cuidados pós-operatórios de qualidade em um ambiente tranquilo e
                bem estruturado.
              </p>
              <a
                href="https://wa.me/5563992135677"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#624A7F] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7a5d9e] transition-all duration-300 hover:scale-105 shadow-md"
              >
                Consultar Atendimento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
