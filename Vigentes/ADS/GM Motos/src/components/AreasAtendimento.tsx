import { MapPin } from 'lucide-react';

const cidades = [
  'Rondonópolis',
  'Jaciara',
  'Primavera do Leste',
  'Poxoréu',
  'Guiratinga',
  'Alto Garças',
  'Pedra Preta',
  'Sonora',
];

export default function AreasAtendimento() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-brand-red via-brand-red-dark to-brand-red overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute -top-20 left-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 right-10 w-60 h-60 bg-black/30 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-10">
          <div className="flex-1">
            <p className="text-white/80 text-xs font-bold uppercase tracking-[0.3em] mb-3">
              Áreas de atendimento
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Atendemos toda a região.
              <br className="hidden sm:block" />
              Venha de onde estiver.
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {cidades.map((cidade) => (
            <div
              key={cidade}
              className="group inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm hover:bg-white hover:text-black text-white border border-white/20 px-5 py-2.5 rounded-full font-semibold text-sm transition-all cursor-default"
            >
              <MapPin
                className="lucide lucide-map-pin text-white group-hover:text-brand-red transition-colors"
                width={14}
                height={14}
              />
              {cidade}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
