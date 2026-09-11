import { MessageCircle, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-700"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/hotellarocca%2Ffrente%20do%20hotel.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <div className="space-y-8 mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            Hotel <span className="text-[rgb(190,0,3)]">La Rocca</span>
          </h1>
          <div className="h-1 w-32 bg-[rgb(190,0,3)] mx-auto"></div>
        </div>
        <div className="space-y-6 mb-20">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-100">
            Tradição e Conforto desde 1992
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
            Seu refúgio ideal em Goiânia. Hospitalidade calorosa e acomodações
            aconchegantes.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <a
            href="https://reservas.hotellarocca.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[rgb(190,0,3)] hover:bg-[rgb(160,0,3)] text-white font-bold px-12 py-6 rounded-full transition-all transform hover:scale-105 hover:shadow-2xl shadow-xl flex items-center gap-3 w-full sm:w-auto justify-center text-lg min-w-[280px]"
          >
            <MessageCircle
              size={24}
              className="lucide lucide-message-circle group-hover:rotate-12 transition-transform"
            />
            Faça Sua Reserva
          </a>
          <a
            href="#contato"
            className="group border-2 border-white hover:bg-white hover:text-black text-white font-bold px-12 py-6 rounded-full transition-all hover:shadow-xl w-full sm:w-auto flex items-center gap-3 justify-center text-lg backdrop-blur-sm min-w-[280px]"
          >
            <Phone
              size={24}
              className="lucide lucide-phone group-hover:rotate-12 transition-transform"
            />
            Fale Conosco
          </a>
        </div>
        <div className="mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-6 justify-center items-center backdrop-blur-md bg-black/30 py-5 px-10 rounded-full border border-white/20">
            <a
              href="tel:+5562983080229"
              className="flex items-center gap-3 hover:text-[rgb(190,0,3)] transition-colors font-semibold text-base group"
            >
              <Phone
                size={20}
                className="lucide lucide-phone group-hover:scale-110 transition-transform"
              />
              (62) 98308-0229
            </a>
            <span className="hidden sm:inline text-gray-400 text-xl">•</span>
            <a
              href="tel:+556232255216"
              className="flex items-center gap-3 hover:text-[rgb(190,0,3)] transition-colors font-semibold text-base group"
            >
              <Phone
                size={20}
                className="lucide lucide-phone group-hover:scale-110 transition-transform"
              />
              (62) 3225-5216
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
