import { Droplet, Zap, Shield, Award } from 'lucide-react';

const FeaturesGrid = () => {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {/* Card 1 - Bombas d'Água */}
          <div className="bg-gradient-to-br from-imperio-light-blue to-imperio-mid-blue rounded-xl md:rounded-2xl p-6 md:p-8 text-white shadow-lg md:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <Droplet className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
              Bombas d'Água de Alta Performance
            </h3>
            <p className="text-white/90 text-sm md:text-base">
              Explore nossa seleção projetada para eficiência e durabilidade
              incomparáveis.
            </p>
          </div>

          {/* Card 2 - Ferramentas Elétricas */}
          <div className="bg-gradient-to-br from-imperio-blue to-imperio-mid-blue rounded-xl md:rounded-2xl p-6 md:p-8 text-white shadow-lg md:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <Zap className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
              Ferramentas Elétricas de Qualidade
            </h3>
            <p className="text-white/90 text-sm md:text-base">
              Encontre ferramentas de marcas renomadas para todas as suas
              necessidades profissionais.
            </p>
          </div>

          {/* Card 3 - Atendimento */}
          <div className="bg-gradient-to-br from-imperio-mid-blue to-imperio-light-blue rounded-xl md:rounded-2xl p-6 md:p-8 text-white shadow-lg md:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <Shield className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
              Atendimento Especializado
            </h3>
            <p className="text-white/90 text-sm md:text-base">
              Nossa equipe está pronta para oferecer suporte técnico e
              soluções personalizadas.
            </p>
          </div>

          {/* Card 4 - Soluções Inovadoras */}
          <div className="bg-gradient-to-br from-imperio-light-blue to-imperio-blue rounded-xl md:rounded-2xl p-6 md:p-8 text-white shadow-lg md:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <Award className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
              Soluções Inovadoras
            </h3>
            <p className="text-white/90 text-sm md:text-base">
              Transformamos suas ideias em realidade com produtos de ponta e
              tecnologia avançada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;