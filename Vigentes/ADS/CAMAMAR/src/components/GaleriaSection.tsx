import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  { src: "/produtos/chapa-alveolar-1.jpeg", label: "Cobertura em policarbonato alveolar", span: "md:row-span-2" },
  { src: "/produtos/chapa-refletiva-1.jpeg", label: "Chapa alveolar refletiva", span: "" },
  { src: "/produtos/chapa-compacta-1.jpg", label: "Chapa compacta", span: "" },
  { src: "/produtos/chapa-alveolar-5.jpeg", label: "Estrutura em policarbonato", span: "" },
  { src: "/produtos/chapa-refletiva-5.jpeg", label: "Soluções em telhado", span: "" },
  { src: "/produtos/chapa-alveolar-8.jpeg", label: "Obras atendidas", span: "md:row-span-2" },
  { src: "/produtos/chapa-alveolar-3.jpeg", label: "Cobertura curva", span: "" },
  { src: "/produtos/chapa-refletiva-8.jpeg", label: "Aplicação refletiva", span: "" },
  { src: "/produtos/chapa-compacta-3.jpg", label: "Chapa compacta aplicada", span: "" },
  { src: "/produtos/chapa-alveolar-6.jpeg", label: "Cobertura residencial", span: "" },
];

const GaleriaSection = () => {
  useScrollReveal();
  return (
    <section id="galeria" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <p className="text-primary font-bold tracking-[0.3em] text-sm mb-3 uppercase">Nossa galeria</p>
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase text-foreground leading-none">
            Obras e <span className="text-primary">materiais</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {items.map((it, i) => (
            <div
              key={i}
              className={`reveal group relative overflow-hidden rounded-lg ${it.span}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={it.src}
                alt={it.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={800}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <div>
                  <p className="text-primary text-xs font-bold tracking-[0.25em] uppercase mb-1">Camamar</p>
                  <p className="text-white font-display font-bold text-xl uppercase leading-tight">{it.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaleriaSection;