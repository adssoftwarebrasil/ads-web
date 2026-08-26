import { MapPin } from 'lucide-react';

const cities = [
  'Sinop',
  'Sorriso',
  'Vera',
  'Santa Carmem',
  'Feliz Natal',
  'Marcelândia',
  'Ipiranga do Norte',
  'Guarantã do Norte',
  'Colíder',
  'Alta Floresta',
  'Nova Canaã',
  'Peixoto de Azevedo',
  'União do Sul',
  'Cláudia',
  'Lucas do Rio Verde',
  'Nova Mutum',
  'Matupá',
  'Carlinda',
  'Primavera do Leste',
  'Campo Novo do Parecis',
  'Tangará da Serra',
  'Querência',
  'Itaúba',
  'Nova Bandeirantes',
  'Juara',
  'Juína',
  'Tabaporã',
  'Campo de Júlio',
  'Nova Monte Verde',
  'União do Norte',
  'Novo Progresso',
  'Castelo dos Sonhos',
  'Santarém',
  'Altamira',
  'Miritituba',
  'São Félix do Xingu',
  'Tapurah',
  'Brasnorte',
  'Porto dos Gaúchos',
  'Nova Ubiratã',
  'Paranatinga',
  'Paranaíta',
  'Apiacás',
  'Cotriguaçu',
  'Denise',
  'Confresa',
];

export default function Regions() {
  return (
    <section
      id="regioes"
      className="bg-neutral-950 py-20 md:py-32 px-4 md:px-8 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgb(213, 162, 34) 1px, transparent 0px)',
          backgroundSize: '24px 24px',
        }}
      ></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14">
          <span className="text-[#d5a222] text-xs md:text-sm tracking-[0.4em] uppercase font-medium">
            Área de Atendimento
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white mt-4 leading-tight text-balance">
            Atuamos em Sinop e em toda a região
          </h2>
          <p className="text-neutral-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            Nossa cobertura abrange mais de 40 municípios, conectando compradores, locatários e
            investidores às melhores oportunidades.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center max-w-5xl mx-auto">
          {cities.map((city) => (
            <div
              key={city}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-200 text-sm hover:border-[#d5a222] hover:text-[#d5a222] transition-colors duration-300"
            >
              <MapPin size={12} className="text-[#d5a222]" />
              {city}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
