const FLEET_IMAGES = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/portal%20da%20paz/img/carro-funebre-preto-estacionado-portal-da-paz_1280x960.webp',
    alt: 'Carro fúnebre Portal da Paz',
    label: 'Veículo de Translado',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/portal%20da%20paz/img/carro-funebre-preto-estacionado-servicos-funerarios_1280x960.webp',
    alt: 'Carro fúnebre serviços funerários',
    label: 'Frota Completa',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/portal%20da%20paz/img/carro-funebre-preto-portal-da-paz-estacionado_1280x960.webp',
    alt: 'Carro fúnebre preto Portal da Paz',
    label: 'Veículos Modernos',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/portal%20da%20paz/img/carro-funerario-preto-portal-da-paz-externo_680x510.webp',
    alt: 'Carro funerário externo Portal da Paz',
    label: 'Atendimento Regional',
  },
];

export default function Fleet() {
  return (
    <section id="frota" className="py-24 bg-[rgb(2,12,4)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[rgb(156,133,92)] text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            Nossa Frota
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Veículos{' '}
            <span className="text-[rgb(202,183,144)]">Equipados e Modernos</span>
          </h2>
          <p className="text-[rgb(146,171,185)] max-w-xl mx-auto text-base leading-relaxed">
            Nossa frota de veículos fúnebres é mantida com rigor técnico, garantindo translados
            seguros, pontuais e realizados com total respeito.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLEET_IMAGES.map((img) => (
            <div key={img.src} className="group rounded-2xl overflow-hidden shadow-lg relative">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,12,4,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-white font-semibold text-sm">{img.label}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-[rgba(2,12,4,0.7)] px-4 py-3 translate-y-0 group-hover:translate-y-full transition-transform duration-300">
                <span className="text-[rgb(202,183,144)] font-medium text-sm">{img.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[rgb(23,56,32)] bg-opacity-30 border border-[rgb(55,104,68)] border-opacity-30 rounded-2xl p-8 text-center">
          <p className="text-[rgb(211,212,205)] text-base sm:text-lg font-medium mb-4">
            Precisando de translado urgente? Estamos prontos para atender você agora.
          </p>
          <a
            href="http://wa.me/5591981493608?text=Olá,%20preciso%20de%20translado%20urgente."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[rgb(55,104,68)] hover:bg-[rgb(23,56,32)] text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-300 shadow-lg"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Solicitar Translado Agora
          </a>
        </div>
      </div>
    </section>
  );
}
