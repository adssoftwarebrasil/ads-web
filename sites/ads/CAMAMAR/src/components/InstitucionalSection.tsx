import institucionalBg from "@/assets/institucional-bg.jpg";

const InstitucionalSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row min-h-[350px]">
      <div className="md:w-1/2 relative">
        <img
          src={institucionalBg}
          alt="Obras Camamar"
          className="w-full h-full object-cover min-h-[300px]"
          loading="lazy"
          width={1920}
          height={600}
        />
      </div>
      <div className="md:w-1/2 bg-primary p-10 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-primary-foreground mb-4 tracking-wider">INSTITUCIONAL</h2>
        <p className="text-primary-foreground/90 text-sm leading-relaxed mb-6">
          Consolidada no mercado brasileiro por conta de seu excelente desempenho, a CAMAMAR é uma empresa que foi fundada em 1995.
          Desde então, oferece as melhores e mais inteligentes soluções tecnológicas na área da construção civil,
          tudo isso por um ótimo custo benefício e sem perder a qualidade do trabalho.
        </p>
        <a href="https://wa.me/5562982972917" target="_blank" rel="noopener noreferrer" className="self-start border border-primary-foreground text-primary-foreground px-8 py-2 text-xs font-bold tracking-wider hover:bg-primary-foreground hover:text-primary transition">
          VER MAIS
        </a>
      </div>
    </section>
  );
};

export default InstitucionalSection;
