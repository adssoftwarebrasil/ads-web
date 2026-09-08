import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: 'easeOut' }}
    >
      <Link
        to={`/produtos/${product.id}`}
        className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card-hover transition-all duration-500"
      >
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-brand-gold/10 to-brand-red/5">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full bg-brand-red text-white text-xs font-bold tracking-wider uppercase">
            {product.category}
          </span>
        </div>

        <div className="flex flex-col flex-1 p-6 md:p-7">
          <h3 className="font-extrabold text-xl text-brand-brown leading-snug mb-3">
            {product.name}
          </h3>
          <p className="text-sm font-book text-brand-brown/75 leading-relaxed mb-6 flex-1 line-clamp-3">
            {product.description}
          </p>
          <span className="inline-flex items-center justify-between gap-2 mt-auto px-5 py-3 rounded-full bg-brand-gold text-brand-brown font-bold text-sm uppercase tracking-wider group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
            <span>Ver Detalhes</span>
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
