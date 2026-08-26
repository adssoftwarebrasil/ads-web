const items = [
  { img: 'https://storage.lucasmendes.dev/site-sp/advice%2Fimg%2Fsala-espera-cadeiras-verdes.webp', label: 'Sala de Espera' },
  { img: 'https://storage.lucasmendes.dev/site-sp/advice%2Fimg%2Fconsultorio-medico-vazio.webp', label: 'Consultório Médico' },
  { img: 'https://storage.lucasmendes.dev/site-sp/advice%2Fimg%2Fcabine-acustica-equipamentos.webp', label: 'Cabine Acústica' },
  { img: 'https://storage.lucasmendes.dev/site-sp/advice%2Fimg%2Fsala-audiometria-vazia.webp', label: 'Sala de Audiometria' },
  { img: 'https://storage.lucasmendes.dev/site-sp/advice%2Fimg%2Fescritorio-cadeiras-verdes.webp', label: 'Escritório' },
  { img: 'https://storage.lucasmendes.dev/site-sp/advice%2Fimg%2Fcorredor-linha-colorida.webp', label: 'Corredor' },
  { img: 'https://storage.lucasmendes.dev/site-sp/advice%2Fimg%2Flaptop-mesa-cabine.webp', label: 'Estação de Trabalho' },
  { img: 'https://storage.lucasmendes.dev/site-sp/advice%2Fimg%2Fmesa-escritorio-decoracao-parede.webp', label: 'Administrativo' },
];

const alts = [
  'Sala de Espera',
  'Consultório Médico',
  'Cabine Acústica',
  'Sala de Audiometria',
  'Escritório',
  'Corredor da Clínica',
  'Estação de Trabalho',
  'Ambiente Administrativo',
];

export default function Structure() {
  return (
    <section id="estrutura" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="text-brand-500 font-semibold text-sm tracking-wider uppercase">
            Nossa Estrutura
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mt-3 mb-4">
            Infraestrutura Moderna e Completa
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Ambientes projetados para oferecer conforto, segurança e eficiência em cada atendimento.
          </p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mt-4"></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((item, i) => (
            <div
              key={item.label}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] transition-all duration-700 opacity-100 scale-100"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={item.img}
                alt={alts[i]}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-semibold text-xs sm:text-sm">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
