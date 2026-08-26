import { Handshake, Sparkles } from 'lucide-react';

export default function Partners() {
  const partners = [
    {
      name: 'Fertiliza',
      logo: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FParceiroLogoFertiliza.png',
    },
    {
      name: 'Giro',
      logo: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FParceiroLogoGiro.png',
    },
    {
      name: 'Grafsolo',
      logo: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FParceiroLogoGrafsolo.png',
    },
    {
      name: 'Indigo',
      logo: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FParceiroLogoIndigo.png',
    },
    {
      name: 'Rizobacter',
      logo: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FParceiroLogoRizobacter.png',
    },
    {
      name: 'Sementes Batavo',
      logo: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FParceiroLogoSementesBatavo.png',
    },
    {
      name: 'Pasto Farma',
      logo: 'https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FParceirologoPastoFarma.png',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0a2e13] via-[#0d3317] to-[#12441f] relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      
      {/* Padrão de grid sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #fdaf2a 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4 bg-yellow-400/10 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-400/20">
            <Handshake className="w-5 h-5 text-[#fdaf2a]" />
            <span className="text-[#fdaf2a] font-bold text-sm uppercase tracking-wider">
              Nossos Parceiros
            </span>
            <Sparkles className="w-4 h-4 text-[#fdaf2a]" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Cresça com Quem{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
              Entende do Campo
            </span>
          </h2>
          
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Trabalhamos com os líderes do agronegócio para oferecer as melhores soluções e tecnologias para o produtor rural.
          </p>
        </div>

        {/* Grid de parceiros */}
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 mb-12 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10 hover:from-white/10 hover:to-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 w-48 h-40 flex items-center justify-center border border-white/10 hover:border-yellow-400/30 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Efeito de brilho ao hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent"></div>
              </div>
              
              {/* Borda animada */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(253,175,42,0.3)]"></div>
              </div>

              {/* Logo */}
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-auto max-h-20 object-contain transition-all duration-500 opacity-90 group-hover:opacity-100 group-hover:scale-110 relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
          <p className="text-white/90 text-lg lg:text-xl mb-6 font-medium">
            Quer ser nosso parceiro ou conhecer mais sobre nossas colaborações?
          </p>
          <a
            href="https://wa.me/5567999564186"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0d3317] px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(253,175,42,0.6)] transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
          >
            {/* Efeito de brilho deslizante */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <Handshake className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Entre em Contato</span>
          </a>
        </div>
      </div>
    </section>
  );
}