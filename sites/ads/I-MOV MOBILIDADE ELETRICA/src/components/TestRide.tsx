import { Calendar, Phone } from 'lucide-react';

export default function TestRide() {
  return (
    <section id="test-ride" className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#035772] via-[#024557] to-black"
        style={{
          backgroundImage: 'url("https://storage.lucasmendes.dev/site-sp/i-move%2FX12%20-%201000W.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundBlendMode: 'overlay',
          opacity: 0.3,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#035772]/80 to-black/90"></div>
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up space-y-8">
          <div className="inline-block animate-pulse-custom">
            <div className="text-[#e0fd2c] text-2xl sm:text-3xl font-bold mb-4">
              ⚡ EXPERIMENTE ANTES DE COMPRAR ⚡
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            AGENDE SEU TEST RIDE GRATUITO
          </h2>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
            Venha sentir a liberdade de pilotar uma bike elétrica de verdade
          </p>
          <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://wa.me/5541988248004?text=Olá! Gostaria de agendar um test ride gratuito"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#e0fd2c] text-black px-10 py-5 rounded-full font-bold text-xl hover:bg-white transition-all duration-300 hover:scale-110 shadow-2xl flex items-center gap-3 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <Calendar width={24} height={24} />
              AGENDAR AGORA
            </a>
            <a
              href="tel:+5541988248004"
              className="text-white border-2 border-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-[#035772] transition-all duration-300 hover:scale-110 shadow-2xl flex items-center gap-3"
            >
              <Phone width={24} height={24} />
              (41) 98824-8004
            </a>
          </div>
          <p className="text-gray-300 text-lg pt-4">
            Atendimento de segunda a sexta, das 9h às 18h
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
