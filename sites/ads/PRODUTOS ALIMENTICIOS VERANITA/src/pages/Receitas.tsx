import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChefHat, Clock, Users, X } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import RecipeCard from '../components/RecipeCard';
import { recipes, type Recipe } from '../data/recipes';

export default function Receitas() {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [selected, setSelected] = useState<Recipe | null>(null);

  const filters = useMemo(() => {
    const unique = new Set(recipes.map((recipe) => recipe.category));
    return ['Todas', ...Array.from(unique)];
  }, []);

  const filtered =
    activeCategory === 'Todas'
      ? recipes
      : recipes.filter((recipe) => recipe.category === activeCategory);

  return (
    <>
      <section className="bg-brand-gold text-brand-brown relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gold via-brand-gold/85 to-brand-gold/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <span className="inline-block px-4 py-2 rounded-full bg-brand-red text-white text-xs font-bold tracking-[0.25em] uppercase mb-6">
            Inspiração na cozinha
          </span>
          <h1 className="font-heavy text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
            Receitas para quem
            <br />
            <span className="text-brand-red">ama sabor</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-book text-brand-brown/85 leading-relaxed">
            Descubra pratos especiais feitos com produtos Veranita. Tradição que combina com a sua
            mesa.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap gap-2 mb-14 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveCategory(filter)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === filter
                    ? 'bg-brand-red text-white shadow-soft'
                    : 'bg-white text-brand-brown hover:bg-brand-gold'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((recipe, index) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                index={index}
                onView={(item) => setSelected(item)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <SectionTitle
            eyebrow="Compartilhe sua receita"
            title={<>O sabor Veranita na sua cozinha</>}
            description="Tem uma receita preferida com nossos produtos? Envie para a gente e quem sabe ela aparece por aqui!"
          />
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            key="recipe-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-brown/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 overflow-y-auto"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-brand-cream rounded-3xl shadow-card-hover"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Fechar"
                className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/95 text-brand-brown flex items-center justify-center hover:bg-brand-gold transition-colors shadow-soft"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/9] overflow-hidden rounded-t-3xl">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 md:p-10">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-gold text-brand-brown text-xs font-bold tracking-wider uppercase mb-4">
                  {selected.category}
                </span>
                <h2 className="font-heavy text-3xl md:text-4xl text-brand-brown leading-tight">
                  {selected.title}
                </h2>
                <p className="mt-4 text-base font-book text-brand-brown/80 leading-relaxed">
                  {selected.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-6 text-sm font-medium text-brand-brown/85 pb-8 border-b border-brand-beige-dark">
                  <span className="inline-flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-red" /> {selected.time}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <ChefHat className="w-4 h-4 text-brand-red" /> {selected.difficulty}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Users className="w-4 h-4 text-brand-red" /> {selected.servings}
                  </span>
                </div>

                <div className="mt-8 grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="font-extrabold text-lg text-brand-brown mb-4 uppercase tracking-wider">
                      Ingredientes
                    </h3>
                    <ul className="space-y-2.5 text-sm font-book text-brand-brown/80 leading-relaxed">
                      {selected.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 shrink-0" />
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-brand-brown mb-4 uppercase tracking-wider">
                      Modo de Preparo
                    </h3>
                    <ol className="space-y-3 text-sm font-book text-brand-brown/80 leading-relaxed">
                      {selected.steps.map((step, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="font-extrabold text-brand-red shrink-0">
                            {index + 1}.
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
