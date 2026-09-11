import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const WHATSAPP = 'http://wa.me/551235122848';
const MAPS_URL =
  'https://www.google.com/maps/place/Agro+Rusticano/@-23.3075391,-46.0129453,17z/data=!3m1!4b1!4m6!3m5!1s0x94cdccdc90083371:0xc831ac288bac73bc!8m2!3d-23.3075391!4d-46.0129453!16s%2Fg%2F11h3q9jcbk';

const areas = [
  'Terra de São João',
  'São Luís',
  'Jd. Portal',
  'Nova Esperança',
  'Nova Jacareí',
  'E muito mais...',
];

export default function Location() {
  return (
    <section id="localizacao" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(54,59,27)] mb-4">
            Visite Nossa <span className="text-[rgb(186,213,51)]">Loja</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos localizados em Jacareí e prontos para atender você
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(186,213,51)] p-4 rounded-xl flex-shrink-0">
                  <MapPin width={28} height={28} className="text-[rgb(54,59,27)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgb(54,59,27)] mb-2">Endereço</h3>
                  <p className="text-gray-700 leading-relaxed">
                    R. Miguel Nunes Bicudo, 155 - Nova Esperança
                    <br />
                    Jacareí - SP, 12325-020
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-[rgb(186,213,51)] hover:text-[rgb(166,193,31)] font-semibold transition-colors"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(186,213,51)] p-4 rounded-xl flex-shrink-0">
                  <Clock width={28} height={28} className="text-[rgb(54,59,27)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgb(54,59,27)] mb-2">Horário de Funcionamento</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span className="font-medium">Segunda a Sexta:</span>
                      <span>08h às 18h30</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sábados:</span>
                      <span>08h às 16h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Domingos:</span>
                      <span className="text-red-600">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(186,213,51)] p-4 rounded-xl flex-shrink-0">
                  <Phone width={28} height={28} className="text-[rgb(54,59,27)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgb(54,59,27)] mb-2">Telefone / WhatsApp</h3>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[rgb(186,213,51)] transition-colors text-lg font-medium"
                  >
                    (12) 3512-2848
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(186,213,51)] p-4 rounded-xl flex-shrink-0">
                  <Mail width={28} height={28} className="text-[rgb(54,59,27)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgb(54,59,27)] mb-2">E-mail</h3>
                  <a
                    href="mailto:agrorusticano@gmail.com"
                    className="text-gray-700 hover:text-[rgb(186,213,51)] transition-colors"
                  >
                    agrorusticano@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[rgb(54,59,27)] to-[rgb(74,79,37)] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Área de Atendimento</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                Atendemos toda a região de Jacareí, incluindo:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {areas.map((a) => (
                  <div key={a} className="flex items-center space-x-2">
                    <span className="text-[rgb(186,213,51)]">✓</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.226507701011!2d-46.01294532467756!3d-23.30753917897496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdccdc90083371%3A0xc831ac288bac73bc!2sAgro%20Rusticano!5e0!3m2!1spt-BR!2sbr!4v1770907962896!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[450px]"
                style={{ border: 0 }}
              ></iframe>
            </div>
            <div className="bg-[rgb(186,213,51)] rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-[rgb(54,59,27)] mb-4">Como Chegar</h3>
              <p className="text-[rgb(54,59,27)]/80 mb-6">
                Localização estratégica com fácil acesso e estacionamento disponível
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[rgb(54,59,27)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[rgb(34,39,17)] transition-all hover:shadow-xl"
              >
                <MapPin width={20} height={20} />
                <span>Abrir no Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
