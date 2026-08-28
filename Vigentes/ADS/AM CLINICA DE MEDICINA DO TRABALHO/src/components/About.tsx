import { motion } from "framer-motion";
import { Clock, Target, Users, ShieldCheck } from "lucide-react";

const features = [
  { icon: Clock, title: "Atendimento rápido", desc: "Sem filas e sem burocracia" },
  { icon: Target, title: "Diagnósticos precisos", desc: "Tecnologia e expertise" },
  { icon: Users, title: "Equipe qualificada", desc: "Profissionais especializados" },
  { icon: ShieldCheck, title: "Normas rigorosas", desc: "Cumprimento total da legislação" },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Quem somos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Sobre a AM Clínica
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
            A AM Clínica atua na prevenção, diagnóstico e gestão de saúde ocupacional, ajudando
            empresas a manterem seus colaboradores seguros e suas operações em conformidade com a lei. Com anos
            de experiência no mercado, somos referência em medicina do trabalho no Distrito Federal.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl bg-surface-elevated border border-border p-6 text-center transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
