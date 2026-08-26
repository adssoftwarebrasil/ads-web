import { CheckCircle2 } from 'lucide-react';

const perks = ['Melhor preço garantido', 'Cancelamento grátis', 'Confirmação imediata'];

export default function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#435A4A] via-[#2D3A2F] to-[#435A4A] animate-gradient"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C8AF82] rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#C8AF82] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Reserve sua estadia no Royal Hotel
          </h2>
          <p className="text-xl md:text-2xl text-[#C8AF82] mb-12">
            Conforto, localização e qualidade garantidos
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {perks.map((p) => (
              <div
                key={p}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full"
              >
                <CheckCircle2 width={20} height={20} className="text-[#C8AF82]" />
                <span className="text-white font-medium">{p}</span>
              </div>
            ))}
          </div>
          <button className="px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-[#C8AF82] text-[#2C2C2C] hover:bg-[#D4AF37]  text-xl px-12 py-5 shadow-2xl hover:shadow-[#C8AF82]/50 animate-pulse">
            Fazer Reserva Agora
          </button>
          <p className="text-white/70 mt-6">
            Ou ligue:{' '}
            <a href="tel:+5567992365009" className="text-[#C8AF82] hover:text-white font-bold">
              (67) 9236-5009
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
