import { MapPin } from 'lucide-react';

const cidades = [
  'Rondonópolis',
  'Sinop',
  'Sorriso',
  'Lucas do Rio Verde',
  'Matupá',
  'Nova Mutum',
  'Primavera do Leste',
  'Campo Verde',
];

export default function Atendimento() {
  return (
    <section id="atendimento" className="py-20 lg:py-28 bg-white">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">
            <span className="w-8 h-px bg-brand-red"></span>Área de atendimento
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold text-brand-navy leading-[1.05] text-balance">
            Presença forte em todo o Mato Grosso e envios para o Brasil.
          </h2>
          <p className="mt-5 text-brand-ink/75 text-lg leading-relaxed">
            Sede em Rondonópolis — MT, com atendimento direcionado ao norte do estado e entregas
            ágeis para as principais cidades do agro e do transporte.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {cidades.map((cidade) => (
            <div
              key={cidade}
              className="group flex items-center gap-3 p-4 rounded-xl border border-black/5 bg-[rgb(250,250,251)] hover:bg-brand-navy hover:border-brand-navy transition-all duration-300"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white group-hover:bg-brand-red text-brand-red group-hover:text-white transition-colors shadow-sm">
                <MapPin className="lucide lucide-map-pin w-4 h-4" />
              </span>
              <span className="font-semibold text-brand-ink group-hover:text-white transition-colors">
                {cidade}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
