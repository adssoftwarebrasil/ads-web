const fleet = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/alo-cacambas/img/caminhao-amarelo-com-cargas-acopladas_382x510.webp',
    alt: 'Caminhão amarelo com cargas',
    wrapper:
      'relative overflow-hidden rounded-3xl group shadow-2xl transition-all duration-500 lg:row-span-2 h-[400px] lg:h-auto',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/alo-cacambas/img/caminhao-branco-carregado-com-tijolos-paletizados_382x510.webp',
    alt: 'Caminhão carregado com tijolos',
    wrapper:
      'relative overflow-hidden rounded-3xl group shadow-2xl transition-all duration-500 h-[250px] lg:h-auto',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/alo-cacambas/img/tres-caminhoes-estacionados-ceu-azul_680x510.webp',
    alt: 'Três caminhões estacionados',
    wrapper:
      'relative overflow-hidden rounded-3xl group shadow-2xl transition-all duration-500 h-[250px] lg:h-auto',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/alo-cacambas/img/caminhoes-amarelos-cacambas-estacionados-luz-do-dia_680x510.webp',
    alt: 'Frota amarela estacionada',
    wrapper:
      'relative overflow-hidden rounded-3xl group shadow-2xl transition-all duration-500 lg:col-span-2 h-[250px] lg:h-auto',
  },
];

export default function Fleet() {
  return (
    <section className="py-24 bg-[#343434]" id="frota">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#ffaf24]/20 text-[#ffaf24] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Nossa frota
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#fefefe] mb-4">
            Estrutura preparada para atender você
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto">
            Frota bem mantida, caminhões potentes e caçambas de qualidade — prontos para atender sua
            demanda com agilidade.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {fleet.map((item) => (
            <div key={item.alt} className={item.wrapper}>
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
