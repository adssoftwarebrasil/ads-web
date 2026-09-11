import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { site } from '../config/site';
import Section from './Section';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  if (!site.faq.length) return null;
  const heading = site.secoes.faq;

  return (
    <Section id="faq">
      <div className="text-center mb-12 md:mb-16">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-dark mb-3">
          FAQ
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 tracking-tightish text-balance">
          {heading.titulo}
        </h2>
        {heading.subtitulo && (
          <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg">{heading.subtitulo}</p>
        )}
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {site.faq.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className={`rounded-2xl border transition-colors overflow-hidden ${
                isOpen ? 'bg-white border-accent/40 shadow-soft' : 'bg-white border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
              >
                <span className="font-display font-bold text-primary text-base md:text-lg leading-tight">
                  {item.pergunta}
                </span>
                <span
                  className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-accent text-primary rotate-45' : 'bg-accent/10 text-accent-dark'
                  }`}
                >
                  <Plus size={16} />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-secondary leading-relaxed">{item.resposta}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
