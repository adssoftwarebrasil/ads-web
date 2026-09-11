const vehicles = [
  {
    file: 'carro-de-remocao',
    alt: 'Veículo de remoção da Funerária Uberaba',
    label: 'Veículo de Remoção',
    note: 'Remoções a qualquer hora do dia ou da noite',
    span: 'sm:col-span-3 lg:col-span-2',
    height: 'h-52',
  },
  {
    file: 'carro-de-cortejo',
    alt: 'Carro de cortejo branco da Funerária Uberaba',
    label: 'Carro de Cortejo',
    note: 'Acompanhamento do cortejo com discrição',
    span: 'sm:col-span-3 lg:col-span-2',
    height: 'h-52',
  },
  {
    file: 's10-de-cortejo',
    alt: 'S10 de cortejo da Funerária Uberaba',
    label: 'Carro de Cortejo S10',
    note: 'Plantão 24 horas para atendimento imediato',
    span: 'sm:col-span-6 lg:col-span-2',
    height: 'h-52',
  },
  {
    file: 'carro-de-viagem',
    alt: 'Veículo de viagem da Funerária Uberaba',
    label: 'Veículo de Viagem',
    note: 'Translados de longa distância com segurança',
    span: 'sm:col-span-3 lg:col-span-3',
    height: 'h-52 lg:h-64',
  },
  {
    file: 'montana-branca-de-cortejo',
    alt: 'Montana branca de cortejo da Funerária Uberaba',
    label: 'Montana de Cortejo',
    note: 'Frota própria, revisada e sempre pronta',
    span: 'sm:col-span-3 lg:col-span-3',
    height: 'h-52 lg:h-64',
  },
];

export default function Fleet() {
  return (
    <section className="py-20 bg-[rgb(29,29,29)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[rgb(65,150,229)] mb-3">
            Nossa Frota
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(247,246,249)] mb-4">
            Veículos Modernos e Bem Cuidados
          </h2>
          <p className="text-[rgb(247,246,249)]/60 max-w-xl mx-auto text-base">
            Contamos com frota própria para garantir translado, remoção e cortejo com pontualidade,
            segurança e dignidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-6 gap-5">
          {vehicles.map((vehicle, idx) => (
            <div
              key={vehicle.file}
              className={`group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-[rgb(249,240,69)]/40 transition-all duration-300 ${vehicle.span}`}
            >
              <div className={`overflow-hidden ${vehicle.height}`}>
                <img
                  src={`/img/frota/${vehicle.file}-1280.webp`}
                  srcSet={`/img/frota/${vehicle.file}-640.webp 640w, /img/frota/${vehicle.file}-1280.webp 1280w`}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  alt={vehicle.alt}
                  width={1280}
                  height={719}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-[rgb(247,246,249)] font-semibold text-sm">{vehicle.label}</p>
                <p className="text-[rgb(247,246,249)]/55 text-xs mt-1 leading-snug">
                  {vehicle.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
