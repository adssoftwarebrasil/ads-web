import { Filter } from 'lucide-react';
import { properties } from '../data/properties';
import PropertyCard from './PropertyCard';

export default function Accommodations() {
  return (
    <section id="acomodacoes" className="py-24 px-4 sm:px-6 lg:px-8 bg-clean-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
            <div className="mx-4 w-3 h-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          </div>
          <div className="relative mb-8">
            <h2 className="font-heading font-bold text-clean-dark text-4xl sm:text-5xl lg:text-6xl mb-4 relative z-10">
              Nossas
              <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
                Acomodações
              </span>
            </h2>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-emerald-100/30 to-teal-100/30 rounded-full blur-3xl -z-10"></div>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <p className="font-body text-xl text-clean-secondary leading-relaxed mb-6">
              Experiências únicas na capital goiana
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-emerald-700 font-medium">Selecionados</span>
              </div>
              <div className="flex items-center space-x-2 bg-teal-50 px-4 py-2 rounded-full border border-teal-100">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-teal-700 font-medium">Preparados</span>
              </div>
              <div className="flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-emerald-700 font-medium">Únicos</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-3 px-6 py-3 rounded-full border-2 transition-all duration-300 border-slate-200 bg-white text-clean-dark hover:border-clean-accent hover:bg-clean-accent hover:text-white">
                <Filter className="lucide lucide-filter w-5 h-5" />
                <span className="font-medium">Filtros</span>
              </button>
            </div>
            <div className="text-clean-secondary">
              <span className="font-medium text-clean-accent">37</span>
              <span className="text-sm"> de 37 imóveis</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} delay={index * 100} />
          ))}
        </div>
        <div className="text-center mt-24 space-y-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-heading font-semibold text-2xl text-clean-dark mb-6">
              Não encontrou o que procura?
            </h3>
            <p className="font-body text-clean-secondary mb-10 text-lg leading-relaxed">
              Entre em contato conosco e encontraremos a acomodação perfeita para você.
            </p>
            <button className="inline-flex items-center space-x-3 bg-clean-accent text-white px-10 py-4 rounded-full font-body font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span>Falar com Especialista</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
