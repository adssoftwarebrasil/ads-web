export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#003870] to-[#004a8f]">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Pronto para transformar seu sorriso?
        </h2>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Agende sua avaliação com nossa equipe de especialistas
        </p>
        <a
          href="https://wa.me/5581994073827?text=Olá! Gostaria de falar com um especialista da Clínica Werneck."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#003870] px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          Falar com Especialista
        </a>
      </div>
    </section>
  );
}
