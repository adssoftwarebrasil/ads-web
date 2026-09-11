import { motion } from "framer-motion";
import { FileText, Stethoscope, GraduationCap, ArrowRight } from "lucide-react";

const WA_LINK =
  "https://wa.me/5561991364565?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.";

const services = [
  {
    icon: FileText,
    title: "Programas e Laudos",
    items: ["PGR", "PCMSO", "LTCAT", "PPP", "Insalubridade e Periculosidade"],
  },
  {
    icon: Stethoscope,
    title: "Exames Ocupacionais",
    items: ["ASO (todos os tipos)", "Audiometria", "Espirometria", "Eletrocardiograma", "Exame toxicológico"],
  },
  {
    icon: GraduationCap,
    title: "Treinamentos",
    items: ["NR's", "CIPA", "Primeiros socorros", "Ergonomia", "Qualidade de vida"],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 sm:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Soluções completas para manter sua empresa em conformidade com todas as normas trabalhistas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl bg-surface-elevated border border-border p-8 transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{s.title}</h3>
              <ul className="space-y-2.5">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:scale-105"
          >
            Solicitar orçamento
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
