import institucionalBg from "@/assets/institucional-bg.jpg";
import obrasBg from "@/assets/obras-bg.jpg";

const SobreSection = () => {
  return (
    <section className="py-16 bg-background">
      <div>
        <div className="text-center mb-10 px-4">
          <p className="text-primary font-bold tracking-widest text-sm mb-3">SOBRE A CAMAMAR</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-wider mb-4">
            QUALIDADE QUE CONSTRÓI CONFIANÇA
          </h2>
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="h-px w-16 bg-primary" />
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="h-px w-16 bg-primary" />
          </div>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Soluções inteligentes e materiais de alta performance
            para a construção civil e muito mais.
          </p>
        </div>

        {/* Institucional */}
        <div className="flex flex-col md:flex-row mb-3 overflow-hidden">
          <div className="md:w-1/2">
            <img
              src={institucionalBg}
              alt="Obras Camamar"
              className="w-full h-full object-cover min-h-[320px]"
              loading="lazy"
              width={960}
              height={500}
            />
          </div>
          <div className="md:w-1/2 bg-primary p-10 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4 tracking-wider">INSTITUCIONAL</h3>
            <p className="text-primary-foreground/95 text-sm leading-relaxed mb-6">
              Consolidada no mercado brasileiro por conta de seu excelente desempenho, a CAMAMAR é uma
              empresa que foi fundada em 1995. Desde então, oferece as melhores e mais inteligentes soluções
              tecnológicas na área da construção civil, tudo isso por um ótimo custo benefício e sem perder a
              qualidade do trabalho.
            </p>
            <a
              href="https://wa.me/5562982972917"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start border border-primary-foreground text-primary-foreground px-8 py-2 text-xs font-bold tracking-wider hover:bg-primary-foreground hover:text-primary transition"
            >
              VER MAIS
            </a>
          </div>
        </div>

        {/* Obras */}
        <div className="flex flex-col md:flex-row-reverse overflow-hidden">
          <div className="md:w-1/2">
            <img
              src={obrasBg}
              alt="Obras Camamar"
              className="w-full h-full object-cover min-h-[320px]"
              loading="lazy"
              width={960}
              height={500}
            />
          </div>
          <div className="md:w-1/2 bg-primary p-10 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4 tracking-wider">OBRAS</h3>
            <p className="text-primary-foreground/95 text-sm leading-relaxed mb-6">
              CAMAMAR é uma empresa que possui experiência incrível e, por isso, possui uma jornada marcada de
              obras impressionantes. Idealizadas por seus engenheiros, se destacam pela sua tecnologia,
              beleza e funcionalidade. Confira alguns dos principais e se encante com o nosso portfólio!
            </p>
            <a
              href="https://wa.me/5562982972917"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start border border-primary-foreground text-primary-foreground px-8 py-2 text-xs font-bold tracking-wider hover:bg-primary-foreground hover:text-primary transition"
            >
              VER MAIS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
