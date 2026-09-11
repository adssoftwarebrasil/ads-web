import { Wrench, Layers, Paintbrush, PackageCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categorias = [
  {
    icon: Layers,
    title: "Cimento e Argamassa",
    desc: "Bases sólidas para qualquer obra. Marcas líderes e entrega rápida.",
  },
  {
    icon: Wrench,
    title: "Ferramentas",
    desc: "Ferramentas profissionais para todos os tipos de aplicação.",
  },
  {
    icon: PackageCheck,
    title: "Acabamentos",
    desc: "Soluções em vedação, fixação e acabamento de alta performance.",
  },
  {
    icon: Paintbrush,
    title: "Tintas",
    desc: "Linhas premium para proteção e estética de ambientes internos e externos.",
  },
];

const CategoriasSection = () => {
  useScrollReveal();
  return (
    <section id="produtos" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-primary font-bold tracking-[0.3em] text-sm mb-3 uppercase">Nossas categorias</p>
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase text-foreground leading-none">
            Tudo para sua <span className="text-primary">obra</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className="reveal group relative bg-white border border-border rounded-lg p-8 flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)] overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500" />
              <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <Icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" strokeWidth={1.8} />
              </div>
              <h3 className="font-display font-bold text-2xl uppercase mb-3 text-foreground">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{desc}</p>
              <a
                href="https://wa.me/5562982972917"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold text-sm tracking-wider uppercase hover:underline"
              >
                Ver mais →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriasSection;