export default function SpecialistBanner() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <a
          href="https://wa.me/5548991372058"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-brand-blue/30 hover:-translate-y-1"
          aria-label="Fale com um especialista da Sulltec Geradores pelo WhatsApp"
        >
          <img
            src="/fale-com-especialista.png"
            alt="Fale com um especialista da Sulltec Geradores — atendimento técnico e consultivo em geração de energia"
            className="w-full h-auto"
            loading="lazy"
          />
        </a>
        <a
          href="https://wa.me/5548991372058"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden mt-5 flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-base px-8 py-4 rounded-xl transition-colors"
        >
          Fale com um Especialista
        </a>
      </div>
    </section>
  );
}
