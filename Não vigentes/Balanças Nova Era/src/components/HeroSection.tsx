import { Award, Settings, Scale, Lightbulb } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100vh] flex items-center overflow-hidden pt-32 md:pt-40 pb-16"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(1,98,177,0.9), rgba(0,61,107,0.7)), url('https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=balan%C3%A7as%20nova%20era%2FWhatsApp%20Image%202025-11-17%20at%2015.50.15.jpeg&version_id=null')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-white text-6xl animate-float">
          <Scale size={80} strokeWidth={1} />
        </div>
        <div className="absolute bottom-40 left-40 text-white text-6xl animate-float-delayed">
          <Settings size={60} strokeWidth={1} />
        </div>
        <div className="absolute top-40 right-40 text-white text-6xl animate-float-delayed-2">
          <Award size={70} strokeWidth={1} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in-down">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Assistência Técnica em Balanças
          </h1>

          <h2 className="text-2xl md:text-3xl text-white font-bold mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Equipamentos de todas as marcas
          </h2>

          <div className="bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-lg p-6 mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-3">
              <Award className="text-[#EA1E26]" size={32} />
              <p className="text-white text-lg md:text-xl font-bold">
                Autorizado pelo Instituto de Pesos e Medidas do Estado do Paraná
              </p>
            </div>
          </div>

          <p className="text-white/95 text-lg md:text-xl mb-10 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            Mais de 30 anos de experiência no mercado. Atendimento ágil para mercados, padarias e indústrias em Curitiba e região.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <a
              href="https://wa.me/5541972037264"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#20BA5A] transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Falar no WhatsApp
            </a>

            <a
              href="#servicos"
              className="bg-[#EA1E26] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#B71820] transition-all transform hover:scale-105 flex items-center justify-center shadow-xl"
            >
              Nossos Serviços
            </a>
          </div>
        </div>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
          {[
            { text: '+30 Anos de Experiência', icon: Award, delay: '1s' },
            { text: 'Autorizado IPEM-PR', icon: Award, delay: '1.15s' },
            { text: 'Atendimento Rápido', icon: Lightbulb, delay: '1.3s' },
            { text: 'Todas as Marcas', icon: Settings, delay: '1.45s' },
          ].map((badge, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-lg shadow-xl border-l-4 border-[#EA1E26] animate-slide-in-right opacity-0"
              style={{ animationDelay: badge.delay, animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-3">
                <badge.icon className="text-[#0162B1]" size={24} />
                <span className="text-[#333333] font-bold text-sm whitespace-nowrap">
                  {badge.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F9FC] to-transparent"></div>
    </section>
  );
}
