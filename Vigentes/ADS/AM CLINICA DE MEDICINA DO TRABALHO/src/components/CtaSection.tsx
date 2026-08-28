import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/5561991364565?text=Ol%C3%A1!%20Preciso%20regularizar%20minha%20empresa.";

export default function CtaSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-dark via-emerald to-emerald-light" />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Precisa regularizar sua empresa ou realizar exames ocupacionais?
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Fale agora com nossa equipe e tenha atendimento rápido e eficiente
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-xl bg-white px-10 py-5 text-lg font-bold text-emerald-dark shadow-2xl shadow-black/10 transition-all hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" />
            Falar no WhatsApp agora
          </a>
          <p className="mt-6 text-sm text-white/60">
            Atendimento rápido | Resposta imediata
          </p>
        </motion.div>
      </div>
    </section>
  );
}
