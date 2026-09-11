import { Check, MessageCircle } from 'lucide-react';

const badges = [
  'Corte Sob Medida',
  'Entrega Rápida',
  'Qualidade Certificada',
  '31 Anos de Experiência',
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/uber%20espumas%2Fimg%2Fhero.webp"
          alt="Espumas de fundo"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000b2e]/95 via-[#00155c]/90 to-[#00218b]/70"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl space-y-8 animate-fadeIn text-center lg:text-left mx-auto lg:mx-0">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-sm">
            Espumas Sob Medida
            <span className="block text-blue-200 mt-2">para Tapeceiros em Uberlândia</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
            A única empresa em Uberlândia especializada em corte sob medida de espumas premium.
            Precisão milimétrica, zero desperdício e entrega rápida para seu negócio.
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start py-4">
            {badges.map((badge) => (
              <div
                key={badge}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-sm font-medium text-white transition-all hover:bg-white/20"
              >
                <Check
                  className="lucide lucide-check text-blue-300"
                  width={16}
                  height={16}
                  strokeWidth={3}
                />
                {badge}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a
              href="#contato"
              className="bg-white text-[#00218b] px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-900/30 active:scale-95 text-center"
            >
              Solicitar Orçamento Grátis
            </a>
            <a
              href="https://wa.me/5534991421598"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#00218b] hover:border-white transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm active:scale-95"
            >
              <MessageCircle
                className="lucide lucide-message-circle group-hover:animate-pulse"
                width={20}
                height={20}
              />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
