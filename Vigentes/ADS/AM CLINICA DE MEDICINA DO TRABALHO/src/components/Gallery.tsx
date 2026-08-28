import { motion } from "framer-motion";
import clinica1 from "@/assets/clinica-1.jpeg";
import clinica2 from "@/assets/clinica-2.jpeg";
import clinica3 from "@/assets/clinica-3.jpeg";
import clinica4 from "@/assets/clinica-4.jpeg";
import clinica5 from "@/assets/clinica-5.jpeg";

const images = [
  { src: clinica2, alt: "Sala de espera da AM Clínica", position: "center" },
  { src: clinica1, alt: "Recepção da AM Clínica", position: "center" },
  { src: clinica3, alt: "Consultório médico com vista", position: "center" },
  { src: clinica5, alt: "Entrada da AM Clínica - Clínica da Família e Medicina do Trabalho", position: "center top" },
  { src: clinica4, alt: "Área de copa e atendimento", position: "center" },
];

export default function Gallery() {
  return (
    <section id="estrutura" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Nossa estrutura
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Conheça nosso espaço
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Ambiente moderno, confortável e equipado para oferecer o melhor atendimento à sua equipe
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border shadow-sm aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{ objectPosition: img.position }}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
