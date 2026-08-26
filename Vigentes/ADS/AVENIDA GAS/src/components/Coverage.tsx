import { MapPin, CheckCircle } from 'lucide-react';

const neighborhoods = [
  { name: 'Jardim Imperial', delay: '0s' },
  { name: 'Centro', delay: '0.1s' },
  { name: 'Jardim das Violetas', delay: '0.2s' },
  { name: 'Setor Industrial', delay: '0.3s' },
  { name: 'Jardim Paraíso', delay: '0.4s' },
  { name: 'Vila Rica', delay: '0.5s' },
  { name: 'Residential Park', delay: '0.6s' },
  { name: 'E demais bairros de Sinop', delay: '0.7s' },
];

export default function Coverage() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-[#F8F9FA] to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-3 opacity-0">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="lucide lucide-map-pin w-10 h-10 text-[#DBCC5E]" />
              <h2 className="text-4xl lg:text-5xl font-bold text-[#021C3F]">
                Atendemos Todo Sinop
              </h2>
            </div>
            <h3 className="text-2xl font-semibold text-[#021C3F] mb-4">
              Com Foco no Jardim Imperial
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nossa base está estrategicamente localizada para oferecer entrega
              rápida em toda a região. Atendemos especialmente o Jardim Imperial e
              adjacências, garantindo que você nunca fique sem gás ou água.
            </p>
            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-[#021C3F] mb-4">
                Bairros Atendidos:
              </h4>
              {neighborhoods.map((n) => (
                <div
                  key={n.name}
                  className="flex items-center gap-3"
                  style={{ animationDelay: n.delay }}
                >
                  <CheckCircle className="lucide lucide-check-circle w-6 h-6 text-[#DBCC5E] flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{n.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 opacity-0" style={{ animationDelay: '0.3s' }}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/Avenida%20gas%2Fimg%2Fcilindros-gas-azul.webp"
              alt="Cilindros de Gás"
              className="w-full h-auto rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
