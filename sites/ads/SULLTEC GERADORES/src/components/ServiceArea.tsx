import { MapPin } from 'lucide-react';

const cities: string[] = [
  'Florianópolis',
  'São José',
  'Palhoça',
  'Santo Amaro',
  'Imbituba',
  'Garopaba',
  'Tubarão',
  'Criciúma',
  'Morro da Fumaça',
  'Içara',
  'Braço do Norte',
  'Orleans',
  'Lages',
  'Tijucas',
  'São João Batista',
  'Canelinha',
  'Brusque',
  'Blumenau',
  'Indaial',
  'Itajaí',
  'Guaramirim',
  'Jaraguá do Sul',
  'Joinville',
  'São Francisco do Sul',
  'Araquari',
  'Porto Belo',
  'Bombas',
  'Bombinhas',
  'Governador Celso Ramos',
];

export default function ServiceArea() {
  return (
    <section
      id="atendimento"
      className="py-20 md:py-28 bg-brand-blue relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgb(255, 255, 255) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        ></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <MapPin width={12} height={12} className="lucide lucide-map-pin " />
            Área de Atendimento
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Atendemos Todo o Estado de{' '}
            <span className="text-brand-red">Santa Catarina</span>
          </h2>
          <p className="text-white/60 max-w-lg mx-auto text-base leading-relaxed">
            Com base em Palhoça, levamos energia confiável a dezenas de
            municípios catarinenses.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <div
              key={city}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/15 border border-white/10 hover:border-brand-red/40 text-white/80 hover:text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 cursor-default"
            >
              <MapPin
                width={12}
                height={12}
                className="lucide lucide-map-pin text-brand-red shrink-0"
              />
              {city}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-white/50 text-sm">
            Não encontrou sua cidade? Entre em contato — atendemos toda Santa
            Catarina.
          </p>
          <a
            href="https://wa.me/5548991372058"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            Verificar Disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}
