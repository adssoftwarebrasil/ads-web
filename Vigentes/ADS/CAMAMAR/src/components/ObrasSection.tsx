import obrasBg from "@/assets/obras-bg.jpg";

const ObrasSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-0 border-2 border-primary overflow-hidden">
        <div className="md:w-3/5 bg-primary p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4 tracking-wider">OBRAS</h2>
          <p className="text-primary-foreground/90 text-sm leading-relaxed mb-6">
            CAMAMAR é uma empresa que possui experiência incrível e, por isso, possui uma jornada marcada de obras
            impressionantes. Idealizadas por seus engenheiros, se destacam pela sua tecnologia, beleza e funcionalidade.
            Confira alguns dos principais e se encante com o nosso portfólio!
          </p>
          <a href="https://wa.me/5562982972917" target="_blank" rel="noopener noreferrer" className="self-start border border-primary-foreground text-primary-foreground px-8 py-2 text-xs font-bold tracking-wider hover:bg-primary-foreground hover:text-primary transition">
            VER MAIS
          </a>
        </div>
        <div className="md:w-2/5">
          <img
            src={obrasBg}
            alt="Obras Camamar"
            className="w-full h-full object-cover min-h-[250px]"
            loading="lazy"
            width={1920}
            height={512}
          />
        </div>
      </div>
    </section>
  );
};

export default ObrasSection;
