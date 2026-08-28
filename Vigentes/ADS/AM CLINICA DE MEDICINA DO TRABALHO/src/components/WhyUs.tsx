import { motion } from "framer-motion";
import { Zap, Handshake, Building2, UserCheck, Heart, Eye, Compass, Gem } from "lucide-react";

const differentials = [
  { icon: Zap, title: "Atendimento ágil", desc: "Sem burocracia, com rapidez e eficiência" },
  { icon: Handshake, title: "Parcerias sólidas", desc: "Parceria com clínicas e laboratórios referência no DF e Brasil" },
  { icon: Building2, title: "Estrutura completa", desc: "Equipamentos modernos e ambiente confortável" },
  { icon: UserCheck, title: "Equipe especializada", desc: "Profissionais com ampla experiência" },
  { icon: Heart, title: "Atendimento personalizado", desc: "Soluções sob medida para cada empresa" },
];

const values = [
  {
    icon: Eye,
    title: "Missão",
    desc: "Promover saúde e segurança no ambiente de trabalho, contribuindo para o bem-estar dos colaboradores e a conformidade legal das empresas.",
  },
  {
    icon: Compass,
    title: "Visão",
    desc: "Ser referência nacional em medicina e segurança do trabalho, reconhecida pela excelência, inovação e atendimento humanizado.",
  },
  {
    icon: Gem,
    title: "Valores",
    desc: "Ética, transparência, compromisso com a qualidade, respeito às pessoas e responsabilidade social.",
  },
];

export default function WhyUs() {
  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Por que escolher a AM Clínica?
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Diferenciais que fazem da nossa clínica a melhor parceira para sua empresa
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {differentials.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-xl bg-surface-elevated border border-border p-5 transition-all hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary flex-shrink-0">
                <d.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-0.5">{d.title}</h3>
                <p className="text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-primary/5 border border-primary/10 p-8 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
