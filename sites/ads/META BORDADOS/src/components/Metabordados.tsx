import { Instagram, Scissors, Sparkles, Tag, Zap, Star, Palette, ArrowRight } from 'lucide-react';

export default function Metabordados() {
  const services = [
    { icon: Scissors, title: 'Bordados', description: 'Personalização de alta precisão para fardamentos e enxovais.' },
    { icon: Palette, title: 'Sublimação', description: 'Cores vibrantes e toque zero para tecidos sintéticos.' },
    { icon: Star, title: 'Patches', description: 'Apliques bordados com acabamento termocolante ou costurado.' },
    { icon: Tag, title: 'Etiquetas', description: 'Identificação profissional para marcas e confecções.' },
    { icon: Zap, title: 'Termocolantes', description: 'Logos e artes aplicadas com alta resistência térmica.' },
    { icon: Sparkles, title: 'Strass', description: 'Brilho e sofisticação aplicados com precisão industrial.' }
  ];

  const portfolioItems = [
    { type: 'video', src: 'https://storage.lucasmendes.dev/site-sp/metabordados%2Fnvoa%2F%23bordadolivre%20%23bordadoindustrial.mp4' },
    { type: 'image', src: 'https://storage.lucasmendes.dev/site-sp/metabordados%2Fnvoa%2F2.jpeg' },
    { type: 'image', src: 'https://storage.lucasmendes.dev/site-sp/metabordados%2Fnvoa%2F3.jpeg' },
    { type: 'image', src: 'https://storage.lucasmendes.dev/site-sp/metabordados%2Fnvoa%2F4.jpeg' },
    { type: 'image', src: 'https://storage.lucasmendes.dev/site-sp/metabordados%2Fnvoa%2F5.jpeg' },
    { type: 'image', src: 'https://storage.lucasmendes.dev/site-sp/metabordados%2Fnvoa%2F6.jpeg' },
    { type: 'image', src: 'https://storage.lucasmendes.dev/site-sp/metabordados%2Fnvoa%2F7.jpeg' },
    { type: 'image', src: 'https://storage.lucasmendes.dev/site-sp/metabordados%2Fnvoa%2F8.jpeg' }
  ];

  return (
    <section id="metabordados" className="py-16 md:py-28 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header - Estilo Industrial Dark */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-12 bg-[#F7D061]"></span>
              <span className="text-[#F7D061] text-xs uppercase tracking-[0.3em] font-bold">Nosso Core Business</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              Metabordados
            </h2>
            <p className="mt-6 text-neutral-300 text-xl font-light leading-relaxed">
              Referência nacional em personalização têxtil industrial. Atendemos empresas, confecções e marcas de todo o Brasil com tecnologia de última geração e 24 anos de expertise.
            </p>
          </div>

          <a 
            href="https://instagram.com/metabordados" 
            target="_blank"
            className="group flex items-center gap-3 bg-neutral-900 border border-neutral-800 px-5 py-3 rounded-xl hover:border-[#F7D061] transition-all"
          >
            <Instagram size={18} className="text-[#F7D061]" />
            <span className="text-sm font-medium">@metabordados</span>
          </a>
        </div>

        {/* Grid de Serviços - Glassmorphism Dark */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative group p-10 rounded-3xl bg-neutral-900/70 border-2 border-neutral-800 hover:border-[#F7D061] hover:bg-neutral-900 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-neutral-800 text-[#F7D061] group-hover:bg-[#F7D061] group-hover:text-black transition-colors duration-500">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#F7D061] opacity-0 group-hover:opacity-100 transition-opacity">
                  Solicitar Orçamento <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Portfólio - Display Minimalista */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl md:text-4xl font-bold">Nossos Trabalhos</h3>
            <div className="h-[1px] flex-1 mx-8 bg-neutral-800 hidden md:block"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-900 shadow-xl">
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={`Trabalho ${index + 1}`}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-sm font-medium uppercase tracking-widest">Ver Detalhes</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-neutral-900 border-2 border-[#F7D061] rounded-2xl p-12 max-w-3xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Pronto para personalizar?</h3>
              <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                Transforme suas ideias em realidade. Atendemos pedidos de todos os tamanhos com qualidade industrial e prazos ágeis.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-[#F7D061] text-black px-10 py-5 rounded-xl font-bold hover:bg-[#f0c34a] hover:scale-105 transition-all duration-300"
              >
                Solicitar Orçamento
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}