export default function CtaBanner() {
  return (
    <section className="bg-[rgb(240,27,38)] py-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full"></div>
        <div className="absolute right-20 -top-10 w-32 h-32 bg-black/10 rounded-full"></div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
            Proteja seu imóvel com quem é especialista.
          </h3>
          <p className="text-white/80 mt-2 text-base">
            Orçamento grátis, entrega imediata e atendimento personalizado.
          </p>
        </div>
        <a
          href="https://wa.me/5519981442455?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20gratuito."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 bg-white text-[rgb(240,27,38)] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl text-base whitespace-nowrap"
        >
          Quero Meu Orçamento Agora
        </a>
      </div>
    </section>
  );
}
