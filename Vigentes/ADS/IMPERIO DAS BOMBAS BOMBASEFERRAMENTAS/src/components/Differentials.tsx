import { Package, CheckCircle, Truck } from 'lucide-react';

const Differentials = () => {
  return (
    <section className="bg-imperio-dark text-white py-12 md:py-16 lg:py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* Card 1 - Estoque */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-imperio-light-blue rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Package className="text-white w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Estoque Sempre Atualizado
            </h3>
            <p className="text-imperio-ice/80 text-sm md:text-base">
              Garantimos produtos em pronta entrega para atender sua demanda
              com máxima agilidade.
            </p>
          </div>

          {/* Card 2 - Condições */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <CheckCircle className="text-white w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Condições Facilitadas
            </h3>
            <p className="text-imperio-ice/80 text-sm md:text-base">
              Oferecemos prestações e descontos que cabem no seu bolso, sem
              comprometer a qualidade.
            </p>
          </div>

          {/* Card 3 - Entrega */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Truck className="text-white w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Entrega Rápida e Segura
            </h3>
            <p className="text-imperio-ice/80 text-sm md:text-base">
              Comprometemo-nos com prazos de entrega ágeis e eficientes em
              toda Belém e região.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;