import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleColor = light ? 'text-brand-beige' : 'text-brand-brown';
  const eyebrowColor = light ? 'text-brand-gold' : 'text-brand-red';
  const descriptionColor = light ? 'text-brand-beige/80' : 'text-brand-brown/80';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`max-w-3xl ${alignment}`}
    >
      {eyebrow && (
        <span
          className={`block mb-4 text-xs font-bold tracking-[0.25em] uppercase ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heavy text-4xl md:text-5xl lg:text-6xl leading-tight ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-6 text-lg md:text-xl font-book leading-relaxed ${descriptionColor}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
