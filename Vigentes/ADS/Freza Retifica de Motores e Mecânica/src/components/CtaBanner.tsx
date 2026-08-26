import WhatsAppIcon from './WhatsAppIcon';

export default function CtaBanner() {
  return (
    <section className="relative py-20 overflow-hidden bg-brand-red">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, rgb(255, 255, 255) 0px, rgb(255, 255, 255) 1px, transparent 0px, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      ></div>
      <div className="absolute -left-20 -top-20 w-64 h-64 bg-white/5 rounded-full"></div>
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-black/10 rounded-full"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight leading-tight">
          Seu motor com problema?
          <br />
          <span className="text-white/90">A gente resolve.</span>
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Entre em contato agora e receba um diagnóstico rápido. Atendemos em Sinop e região com qualidade garantida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="http://wa.me/5566996524291?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20com%20meu%20motor."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-brand-red hover:bg-brand-gray px-8 py-4 rounded-full text-base font-black tracking-wide transition-all duration-200 hover:shadow-xl"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Falar no WhatsApp
          </a>
          <a
            href="tel:+5566996524291"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-full text-base font-bold tracking-wide transition-all duration-200"
          >
            (66) 99652-4291
          </a>
        </div>
      </div>
    </section>
  );
}
