import { MapPin, Navigation } from 'lucide-react';

const points = [
  '14 minutos a pé do Teatro de Goiânia',
  '1,1 km do Centro de Convenções de Goiânia',
  '3,5 km do Terminal Rodoviário de Goiânia',
  '8 km do Aeroporto de Goiânia - Santa Genoveva',
  '1,7 km do Museu Pedro Ludovico Teixeira',
  '2,3 km do Palácio das Esmeraldas',
];

export default function Location() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            <span className="text-[rgb(190,0,3)]">Localização</span> Estratégica
          </h2>
          <div className="h-1 w-32 bg-[rgb(190,0,3)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No coração de Goiânia, próximo aos principais pontos da cidade
          </p>
        </div>
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <MapPin
              size={28}
              className="lucide lucide-map-pin text-[rgb(190,0,3)] flex-shrink-0"
            />
            <p className="text-lg md:text-xl text-gray-700 font-medium text-center sm:text-left">
              R. 8-A, 27 - St. Aeroporto, Goiânia - GO, 74075-240
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Navigation
                    size={20}
                    className="lucide lucide-navigation text-[rgb(190,0,3)]"
                  />
                </div>
                <span className="text-gray-700 leading-10 font-medium">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3821.9828425473065!2d-49.271807!3d-16.677742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef3e290000001%3A0x52533851f77c8887!2sHotel%20La%20Rocca!5e0!3m2!1spt-BR!2sus!4v1762123208017!5m2!1spt-BR!2sus"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            title="Localização Hotel La Rocca"
            style={{ border: '0px' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
