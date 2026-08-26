import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronUp, Minus, Plus, X } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import Section from './Section.jsx'

const LIMITE_INICIAL = 8

export default function Galeria() {
  if (!siteConfig.galeria.length) return null
  const secao = siteConfig.secoes.galeria

  const [aberta, setAberta] = useState(null)
  const [verTodas, setVerTodas] = useState(false)

  const visiveis = verTodas ? siteConfig.galeria : siteConfig.galeria.slice(0, LIMITE_INICIAL)
  const temMais = siteConfig.galeria.length > LIMITE_INICIAL

  useEffect(() => {
    if (aberta === null) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setAberta(null)
      if (e.key === 'ArrowRight')
        setAberta((i) => (i === null ? null : (i + 1) % siteConfig.galeria.length))
      if (e.key === 'ArrowLeft')
        setAberta((i) =>
          i === null ? null : (i - 1 + siteConfig.galeria.length) % siteConfig.galeria.length,
        )
    }

    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [aberta])

  return (
    <>
      <Section id="galeria" className="bg-gray-50">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-dark mb-3">
            Portfólio
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 tracking-tightish text-balance">
            {secao.titulo}
          </h2>
          {secao.subtitulo && (
            <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg">{secao.subtitulo}</p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {visiveis.map((foto, i) => (
            <button
              key={i}
              onClick={() => setAberta(i)}
              aria-label={`Abrir foto: ${foto.alt}`}
              className="group relative overflow-hidden rounded-2xl aspect-square bg-gray-200 focus:outline-none focus:ring-4 focus:ring-accent/50"
            >
              <img
                src={foto.src}
                alt={foto.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors" />
              {foto.legenda && (
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white p-4 text-sm text-left opacity-0 group-hover:opacity-100 transition">
                  {foto.legenda}
                </figcaption>
              )}
            </button>
          ))}
        </div>

        {temMais && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVerTodas((v) => !v)}
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-primary-dark transition-colors shadow-soft"
            >
              {verTodas ? (
                <>
                  <Minus size={18} /> Ver menos
                </>
              ) : (
                <>
                  <Plus size={18} /> Ver mais fotos ({siteConfig.galeria.length - LIMITE_INICIAL})
                </>
              )}
            </button>
          </div>
        )}
      </Section>

      <AnimatePresence>
        {aberta !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setAberta(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                setAberta(null)
              }}
              aria-label="Fechar"
              className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            >
              <X size={22} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setAberta((i) =>
                  i === null ? null : (i - 1 + siteConfig.galeria.length) % siteConfig.galeria.length,
                )
              }}
              aria-label="Anterior"
              className="absolute left-3 md:left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setAberta((i) => (i === null ? null : (i + 1) % siteConfig.galeria.length))
              }}
              aria-label="Próxima"
              className="absolute right-3 md:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition rotate-180"
            >
              <ChevronLeft size={22} />
            </button>

            <motion.figure
              key={aberta}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[85vh] flex flex-col items-center gap-4"
            >
              <img
                src={siteConfig.galeria[aberta].src}
                alt={siteConfig.galeria[aberta].alt}
                className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl"
              />
              {siteConfig.galeria[aberta].legenda && (
                <figcaption className="text-white/80 text-sm text-center max-w-2xl">
                  {siteConfig.galeria[aberta].legenda}
                </figcaption>
              )}
            </motion.figure>

            <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs items-center gap-2">
              <ChevronUp size={12} className="rotate-90" /> Use as setas para navegar
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
