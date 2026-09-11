import { MessageCircle, CheckCircle } from 'lucide-react';

export function UrgencyCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] to-[#FF6B00] animate-gradient"></div>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Precisa de Bateria ou Radiador Agora?
          </h2>

          <p className="text-2xl md:text-3xl text-[#FCD34D] mb-10 font-semibold">
            Entregamos até 23:30! Atendimento rápido e garantido.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="https://wa.me/5592981059681"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-[#059669] text-white px-12 py-6 rounded-xl hover:brightness-110 transition-all transform hover:scale-105 text-xl font-bold shadow-2xl animate-pulse-slow"
            >
              <MessageCircle className="w-8 h-8" />
              <span>WHATSAPP 1</span>
            </a>
            <a
              href="https://wa.me/5592995262436"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-[#059669] text-white px-12 py-6 rounded-xl hover:brightness-110 transition-all transform hover:scale-105 text-xl font-bold shadow-2xl animate-pulse-slow"
            >
              <MessageCircle className="w-8 h-8" />
              <span>WHATSAPP 2</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-[#FCD34D]" />
              <span className="text-lg font-semibold">(92) 98105-9681</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-[#FCD34D]" />
              <span className="text-lg font-semibold">(92) 99526-2436</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-[#FCD34D]" />
              <span className="text-lg font-semibold">Resposta em minutos!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
