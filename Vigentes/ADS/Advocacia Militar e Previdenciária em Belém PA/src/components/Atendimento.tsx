import { Home, MapPin } from 'lucide-react';

const BRAND = 'rgb(172, 0, 0)';

const cities = ['São Paulo/SP', 'Rio de Janeiro/RJ', 'Brasília/DF', 'Santa Catarina'];

const stats = [
  { value: '5', label: 'Estados de Atuação' },
  { value: 'Todo BR', label: 'Atendimento Online' },
  { value: '24/7', label: 'WhatsApp Disponível' },
];

export default function Atendimento() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgb(172, 0, 0) 1px, transparent 0px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: BRAND }}
            >
              Onde Estamos
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Áreas de Atendimento
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full mb-6"
            style={{ backgroundColor: BRAND }}
          ></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Presença em todo o Brasil com atendimento online e presencial
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div
            className="group relative p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden md:col-span-2 lg:col-span-1"
            style={{ backgroundColor: 'rgba(172, 0, 0, 0.05)', border: '2px solid rgb(172, 0, 0)' }}
          >
            <div
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10"
              style={{ backgroundColor: BRAND }}
            ></div>
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 shadow-lg"
              style={{ backgroundColor: BRAND }}
            >
              <Home width={28} height={28} className="lucide lucide-home text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Belém/PA</h3>
            <p className="text-gray-600 text-sm mb-4">Região Metropolitana (Sede)</p>
            <div className="mt-6 pt-6 border-t-2" style={{ borderColor: BRAND }}>
              <div className="flex items-start gap-3 mb-3">
                <MapPin
                  width={18}
                  height={18}
                  className="lucide lucide-map-pin mt-1 flex-shrink-0"
                  style={{ color: BRAND }}
                />
                <div className="text-sm text-gray-700">
                  <strong className="block mb-1" style={{ color: BRAND }}>
                    Escritório Central:
                  </strong>
                  Travessa Vileta, 1963
                  <br />
                  Marco, Belém/PA
                  <br />
                  CEP: 66095-346
                </div>
              </div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-white mt-4"
                style={{ backgroundColor: BRAND }}
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Atendimento Presencial e Online
              </div>
            </div>
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow: 'rgb(172, 0, 0) 0px 0px 0px 2px inset' }}
            ></div>
          </div>
          {cities.map((city, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden "
              style={{ backgroundColor: 'white', border: '2px solid rgb(229, 231, 235)' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 "
                style={{ backgroundColor: 'rgba(172, 0, 0, 0.1)' }}
              >
                <MapPin
                  width={28}
                  height={28}
                  className="lucide lucide-map-pin "
                  style={{ color: BRAND }}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{city}</h3>
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: 'rgb(172, 0, 0) 0px 0px 0px 2px inset' }}
              ></div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-bold mb-2" style={{ color: BRAND }}>
                  {s.value}
                </div>
                <p className="text-gray-700 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
