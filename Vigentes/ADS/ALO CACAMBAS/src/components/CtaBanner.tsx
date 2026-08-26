import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-16 bg-[#ffaf24] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgb(52, 52, 52) 1px, transparent 1px), radial-gradient(circle at 80% 50%, rgb(52, 52, 52) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#343434] mb-4 max-w-2xl mx-auto leading-tight">
          Precisa de uma caçamba agora? Ligamos em minutos.
        </h2>
        <p className="text-[#343434]/70 text-base mb-8 max-w-lg mx-auto">
          Atendemos de segunda a sexta das 7h às 17h. Solicite já e receba a caçamba no mesmo dia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="http://wa.me/553491233322"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#343434] hover:bg-[#1e1e1e] text-[#fefefe] font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
          >
            Solicitar agora pelo WhatsApp
            <ArrowRight className="lucide lucide-arrow-right" width={18} height={18} />
          </a>
          <a
            href="tel:+553491233322"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#343434]/30 hover:border-[#343434] text-[#343434] font-bold text-base px-8 py-4 rounded-full transition-all duration-200"
          >
            (34) 9 9123-3322
          </a>
        </div>
      </div>
    </section>
  );
}
