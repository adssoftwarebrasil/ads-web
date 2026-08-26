import { ArrowRight } from 'lucide-react';

const WA_URL = 'https://api.whatsapp.com/send?phone=5541998468028&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      // min-h-[100svh] e py-20 garantem que não vai quebrar/cortar no mobile
      className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden py-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://storage.lucasmendes.dev/site-sp/Calhas%20Barigui/operarios-trabalhando-maquina-metalurgica-galpao_1280x960.webp')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/80 to-dark-900/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-xs font-heading font-semibold tracking-widest uppercase">
              Distribuidora Especializada
            </span>
          </div>

          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6">
            Calhas de{' '}
            <span className="text-primary">Qualidade</span>
            <br />
            em Curitiba
          </h1>

          <p className="text-dark-200 text-base sm:text-lg font-body leading-relaxed mb-8 max-w-xl">
            Distribuidora especializada em calhas, rufos, coifas, condutores, chapas, dutos, selantes e acessórios. Mais de 10 anos protegendo suas construções com qualidade e eficiência.
          </p>

          {/* w-full no mobile e botões ocupando 100% da largura, adaptando no sm:w-auto */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-dark-900 font-heading font-bold text-sm sm:text-base px-7 py-4 rounded-xl hover:bg-primary-400 transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Falar no WhatsApp
              <ArrowRight size={18} />
            </a>
            <button
              onClick={() => scrollTo('produtos')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-heading font-semibold text-sm sm:text-base px-7 py-4 rounded-xl hover:bg-white/15 transition-all duration-200 backdrop-blur-sm"
            >
              Ver Produtos
            </button>
          </div>
        </div>
      </div>

      {/* Ocultei o "Role para baixo" no mobile para evitar que sobreponha os botões em telas pequenas */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce">
        <span className="text-dark-400 text-xs font-body tracking-widest uppercase">Role</span>
        <div className="w-px h-8 bg-gradient-to-b from-dark-400 to-transparent" />
      </div>
    </section>
  );
}