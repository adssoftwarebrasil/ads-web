import { Coffee, Croissant, Apple, Star } from 'lucide-react';

const items = [
  { icon: Coffee, label: 'Cafés e Bebidas Quentes' },
  { icon: Croissant, label: 'Pães e Bolos Caseiros' },
  { icon: Apple, label: 'Frutas Frescas da Estação' },
];

export default function Breakfast() {
  return (
    <section className="relative py-16 md:py-24 lg:py-28 overflow-hidden bg-[#435A4A]">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>
      <div className="hidden md:block absolute top-10 left-10 w-32 h-32 bg-[#C8AF82]/20 rounded-full blur-3xl"></div>
      <div className="hidden md:block absolute bottom-10 right-10 w-40 h-40 bg-[#C8AF82]/20 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          <div className="relative transition-all duration-1000 opacity-100 translate-x-0">
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/royal%20hotel%2Fcadedamanhaa.jpg"
                  alt="Café da Manhã Colonial Royal Hotel"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
              <div className="absolute top-6 left-6 bg-[#D4AF37] text-white px-5 py-3 rounded-full shadow-xl z-10 animate-pulse">
                <div className="flex items-center gap-2">
                  <Star width={20} height={20} fill="white" strokeWidth={0} />
                  <span className="font-bold text-lg">8.5</span>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-[#C8AF82]/20 to-transparent rounded-3xl -z-10 blur-xl"></div>
            </div>
          </div>
          <div className="text-white space-y-5 sm:space-y-6 transition-all duration-1000 delay-300 opacity-100 translate-x-0">
            <div className="inline-flex items-center gap-2 bg-[#C8AF82] text-[#2C2C2C] px-4 sm:px-5 py-2 rounded-full font-semibold text-xs sm:text-sm">
              <Coffee className="sm:w-[18px] sm:h-[18px]" width={16} height={16} />
              <span>Incluso na diária</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              Café Colonial <br />
              <span className="text-[#C8AF82]">Apreciado por Todos</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90">
              Comece seu dia com nosso delicioso café da manhã colonial, muito apreciado pelos
              nossos hóspedes. Uma experiência gastronômica completa para tornar sua manhã especial.
            </p>
            <div className="space-y-3 pt-2">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 sm:gap-4 bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="bg-[#C8AF82] p-2 sm:p-2.5 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                      <Icon className="sm:w-[22px] sm:h-[22px] text-[#2C2C2C]" width={20} height={20} />
                    </div>
                    <span className="font-medium text-sm sm:text-base lg:text-lg">{item.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-5">
              <p className="text-xs sm:text-sm lg:text-base text-white/90 leading-relaxed">
                <strong className="text-[#C8AF82]">Horário:</strong> Servido diariamente das 6h às 9h
              </p>
            </div>
            <button className="bg-[#C8AF82] hover:bg-[#D4AF37] text-[#2C2C2C] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto text-sm sm:text-base">
              Reserve e Aproveite
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
