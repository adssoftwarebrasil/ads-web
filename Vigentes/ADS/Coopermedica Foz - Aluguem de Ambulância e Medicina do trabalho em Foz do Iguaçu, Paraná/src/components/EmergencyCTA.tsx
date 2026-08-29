import { Phone, AlertCircle } from 'lucide-react';

export default function EmergencyCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-emergency"
        style={{
          backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/coopermedicafoz%2Fatendimento-medico-crianca%20(4).jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-emergency to-emergency/90"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm animate-pulse-slow">
            <AlertCircle className="text-white" size={40} />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Precisa de Atendimento Agora?
          </h2>

          <p className="text-xl md:text-2xl text-white/90">
            Nossa equipe está disponível 24 horas por dia para emergências
          </p>

          <div className="flex flex-col items-center gap-6">
            <a
              href="tel:+5545988038430"
              className="text-4xl md:text-5xl font-bold text-white hover:text-white/90 transition-colors"
            >
              (45) 98803-8430
            </a>

            <a
              href="tel:+5545988038430"
              className="bg-white text-emergency px-10 py-5 rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl font-bold text-lg flex items-center gap-3 group"
            >
              <Phone className="group-hover:rotate-12 transition-transform" size={24} />
              Ligar Agora
            </a>
          </div>

          <p className="text-white/80 text-sm">
            Atendimento 24 horas • 7 dias por semana • Incluindo feriados
          </p>
        </div>
      </div>
    </section>
  );
}
