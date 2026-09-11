import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { whatsappLink } from '../utils/whatsapp'
import { imageUrl } from '../utils/image'

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen h-[100dvh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${imageUrl(siteConfig.hero.imagemBg, siteConfig.empresa.nome)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/65 to-primary-dark/95" />
      <div className="absolute inset-0 bg-grain opacity-40 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/0 to-transparent z-[1] pointer-events-none" />

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
        }}
        className="relative z-10 max-w-4xl mx-auto text-center px-4 md:px-6"
      >
        {siteConfig.hero.badges.length > 0 && (
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {siteConfig.hero.badges.map((badge, i) => (
              <span
                key={i}
                className="bg-white/10 backdrop-blur-md text-white text-xs md:text-sm font-medium px-4 py-1.5 rounded-full border border-white/25"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        )}

        <motion.h1
          variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tightish mb-6 text-balance"
        >
          {siteConfig.hero.titulo}
        </motion.h1>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {siteConfig.hero.subtitulo}
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-2 bg-accent text-primary font-semibold px-8 py-4 rounded-full text-base md:text-lg hover:bg-accent-light hover:shadow-2xl transition-all shadow-xl"
          >
            {siteConfig.hero.ctaTexto}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center gap-2 text-white/80 font-medium text-base hover:text-white transition-colors px-2 py-2"
          >
            Saiba mais <ArrowDown size={18} />
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={24} className="text-white/50" />
        </motion.div>
      </div>
    </section>
  )
}
