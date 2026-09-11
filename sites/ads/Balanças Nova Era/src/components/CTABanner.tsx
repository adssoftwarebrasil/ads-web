import { Scale, Settings, Award } from 'lucide-react';

export default function CTABanner() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(1,98,177,0.92), rgba(0,61,107,0.88)), url('https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fimgi_45_image-2-1-1-1.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px),
                           repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px)`,
        }}
      ></div>

      <div className="absolute top-20 left-20 text-white/10 animate-float">
        <Scale size={100} strokeWidth={1} />
      </div>
      <div className="absolute bottom-20 right-20 text-white/10 animate-float-delayed">
        <Settings size={80} strokeWidth={1} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 animate-float-delayed-2">
        <Award size={200} strokeWidth={0.5} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 animate-fade-in-down">
          Precisa de Assistência Técnica para Suas Balanças?
        </h2>

        <p className="text-white/95 text-xl md:text-2xl mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Entre em contato agora e receba atendimento especializado
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="https://wa.me/5541972037264"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-12 py-5 rounded-lg font-bold text-xl hover:bg-[#20BA5A] transition-all transform hover:scale-105 flex items-center gap-3 shadow-2xl"
          >
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            (41) 9720-3764
          </a>

          <a
            href="#contato"
            className="bg-[#EA1E26] text-white px-12 py-5 rounded-lg font-bold text-xl hover:bg-[#B71820] transition-all transform hover:scale-105 flex items-center gap-3 shadow-2xl"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
