import { motion } from "framer-motion";
import { CheckCircle, MessageCircle, ArrowRight, Zap } from "lucide-react";
import logoAm from "@/assets/logo-am.png";

const stats = [
  { value: "500+", label: "Empresas atendidas" },
  { value: "13+", label: "Anos de experiência" },
  { value: "10k+", label: "Exames realizados" },
  { value: "100%", label: "Conformidade legal" },
];

const badges = [
  "Conformidade legal",
  "Equipe especializada",
  "Atendimento ágil",
];

const WA_LINK =
  "https://wa.me/5561991364565?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-dark via-emerald to-emerald-light opacity-95" />
        {/* Abstract pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/20 blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/15 blur-3xl translate-y-1/3 -translate-x-1/4" />
        </div>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-8 pb-4 flex justify-center"
        >
          <img
            src={logoAm}
            alt="AM Clínica de Medicina do Trabalho"
            className="h-[110px] sm:h-[140px]"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-120px)] py-12">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white/90 mb-8 border border-white/10">
                <Zap className="h-4 w-4" />
                Atendimento rápido e sem burocracia
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
            >
              Soluções completas em{" "}
              <span className="relative">
                <span className="relative z-10 text-emerald-100">
                  Medicina e Segurança do Trabalho
                </span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-white/10 rounded-full -z-0" />
              </span>{" "}
              para sua empresa
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Reduza riscos trabalhistas, aumente a produtividade e mantenha sua
              empresa 100% regularizada
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            >
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-sm text-white/90"
                >
                  <CheckCircle className="h-4 w-4 text-emerald-200" />
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-emerald-dark shadow-xl shadow-black/10 transition-all hover:shadow-2xl hover:scale-105"
              >
                Solicitar orçamento
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/20 hover:border-white/50"
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right stats grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="group relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-6 sm:p-8 text-center transition-all hover:bg-white/15 hover:scale-105 hover:border-white/25"
              >
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 bg-emerald-dark/60 backdrop-blur-sm border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-6 sm:gap-12 justify-center text-sm text-white/80">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-200" />
              Atendimento em todo DF e nível nacional
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-200" />
              Equipe qualificada e experiente
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-200" />
              Laboratórios de excelência
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
