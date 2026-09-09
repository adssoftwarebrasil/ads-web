import { motion } from 'framer-motion';
import { ArrowRight, ChefHat, Clock, Users } from 'lucide-react';
import type { Recipe } from '../data/recipes';

interface RecipeCardProps {
  recipe: Recipe;
  index?: number;
  onView?: (recipe: Recipe) => void;
}

export default function RecipeCard({ recipe, index = 0, onView }: RecipeCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card-hover transition-all duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/70 via-transparent to-transparent" />
        <span className="absolute top-5 left-5 inline-flex items-center px-3 py-1 rounded-full bg-brand-gold text-brand-brown text-xs font-bold tracking-wider uppercase">
          {recipe.category}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-7 md:p-8">
        <h3 className="font-extrabold text-2xl text-brand-brown leading-tight mb-3">
          {recipe.title}
        </h3>
        <p className="text-sm font-book text-brand-brown/75 leading-relaxed mb-6">
          {recipe.description}
        </p>

        <div className="flex items-center gap-5 text-xs font-medium text-brand-brown/70 mb-6 pb-6 border-b border-brand-beige-dark">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-brand-red" /> {recipe.time}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ChefHat className="w-4 h-4 text-brand-red" /> {recipe.difficulty}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users className="w-4 h-4 text-brand-red" /> {recipe.servings}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onView?.(recipe)}
          className="inline-flex items-center justify-between gap-2 mt-auto text-brand-brown font-bold text-sm uppercase tracking-wider group/btn"
        >
          <span className="border-b-2 border-brand-gold pb-1 group-hover/btn:border-brand-red transition-colors">
            Ver Receita
          </span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.article>
  );
}
