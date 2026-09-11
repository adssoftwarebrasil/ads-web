import { MapPin, Navigation } from 'lucide-react';

const cities = [
  'Uruaçu',
  'Campinorte',
  'Niquelândia',
  'Alto Horizonte',
  'Santa Terezinha',
  'Nova Crixás',
  'Goianésia',
  'Itapaci',
];

export default function Location() {
  return (
    <section className="py-20 bg-[rgb(249,253,249)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[rgb(146,118,47)] font-semibold text-sm tracking-wide uppercase">
            Nossa Localização
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(3,74,41)] mt-2 leading-tight">
            Estamos em Uruaçu/GO
          </h2>
          <p className="text-[rgb(8,16,20)]/70 text-lg mt-4">
            Atendendo toda a região Norte de Goiás
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-5 gap-0">
            <div className="lg:col-span-2 p-8 lg:p-12 bg-gradient-to-br from-[rgb(3,74,41)] to-[rgb(46,81,35)] text-white flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                    <MapPin className="lucide lucide-map-pin w-7 h-7 text-[rgb(153,138,71)]" />
                    <span>Visite Nosso Escritório</span>
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Estamos localizados no coração de Uruaçu, com fácil acesso para atendê-lo com
                    todo conforto e privacidade.
                  </p>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-[rgb(153,138,71)] font-semibold text-sm mb-1">Endereço</p>
                    <p className="text-white">
                      R. Rio Grande do Sul, Qd.17 - Lt.16<br />
                      Sala comercial 1 - JK<br />
                      Uruaçu - GO, 76400-000
                    </p>
                  </div>
                  <div>
                    <p className="text-[rgb(153,138,71)] font-semibold text-sm mb-1">Horário</p>
                    <p className="text-white">
                      Segunda a Sexta<br />
                      08:00 - 12:00 | 14:00 - 17:00
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/place/MP+Advocacia/@-14.5282206,-49.1462987,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[rgb(153,138,71)] text-[rgb(8,16,20)] px-6 py-3 rounded-lg hover:bg-[rgb(146,118,47)] transition-all duration-300 font-bold mt-2 group"
                >
                  <Navigation className="lucide lucide-navigation w-5 h-5 group-hover:rotate-45 transition-transform" />
                  <span>Ver Rotas no Google Maps</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-3 h-96 lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.2406886708113!2d-49.14629872489513!3d-14.528220585949605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93430ffe8c7940f3%3A0x2a7e44f20e103516!2sMP%20Advocacia!5e0!3m2!1spt-BR!2sbr!4v1771608127475!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização MP Advocacia"
                className="w-full h-full"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city) => (
            <div
              key={city}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-3 group hover:scale-105"
            >
              <div className="bg-[rgb(3,74,41)]/10 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[rgb(3,74,41)] transition-colors">
                <MapPin className="lucide lucide-map-pin w-5 h-5 text-[rgb(3,74,41)] group-hover:text-white transition-colors" />
              </div>
              <span className="font-semibold text-[rgb(8,16,20)]">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
