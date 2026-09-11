import { Zap, ShieldCheck, Clock } from 'lucide-react';

export default function Hero() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/556696502020?text=Ol%C3%A1!%20Quero%20pedir%20um%20buj%C3%A3o%20de%20g%C3%A1s.', '_blank');
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://storage.lucasmendes.dev/site-sp/sugas/img/hero-background.webp')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/90 via-brand-blue/75 to-brand-blue/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-yellow/20 border border-brand-yellow/40 text-brand-yellow text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-fade-in">
          <Zap size={14} className="fill-brand-yellow" />
          Entrega Rápida em Rondonópolis
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-white leading-tight mb-6 animate-fade-in-up">
          Gás de Cozinha{' '}
          <span className="text-brand-yellow">na Sua Porta</span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold">em Minutos!</span>
        </h1>

        <p className="text-lg sm:text-xl text-brand-white/85 max-w-2xl mx-auto mb-10 animate-fade-in-up leading-relaxed">
          Desde 2013 servindo Rondonópolis com confiança, qualidade e a entrega mais rápida da cidade.
          Nunca fique sem gás quando mais precisa.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-in-up">
          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-[#25D366]/40 hover:scale-105 transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pedir pelo WhatsApp
          </button>
          <a
            href="tel:+5566996502020"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border-2 border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-blue font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105"
          >
            Ligar Agora
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-in-up">
          {[
            { icon: <Zap size={22} className="text-brand-yellow" />, text: 'Entrega Ultrarrápida' },
            { icon: <ShieldCheck size={22} className="text-brand-yellow" />, text: 'Produto Certificado' },
            { icon: <Clock size={22} className="text-brand-yellow" />, text: 'Seg–Sáb 6:45 às 19:30' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-brand-white font-semibold px-5 py-3 rounded-xl"
            >
              {item.icon}
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-white to-transparent" />
    </section>
  );
}
