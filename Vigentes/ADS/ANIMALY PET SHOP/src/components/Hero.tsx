import { Sparkles } from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=5511947279099&text&type=phone_number&app_absent=0';

const stats = [
  { value: '+15', label: 'Anos de experiência', color: 'text-[#38d060]' },
  { value: '+2000', label: 'Animais atendidos', color: 'text-[#b900ba]' },
  { value: '99%', label: 'Satisfação', color: 'text-[#38d060]' },
  { value: '5★', label: 'Avaliação média', color: 'text-[#b900ba]' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/animalyp%2Fhero.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
          <Sparkles className="text-[#38d060]" size={20} />
          <span className="text-white font-medium">Desde 2010</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Tudo que você procura e que seu{' '}
          <span className="bg-gradient-to-r from-[#b900ba] to-[#38d060] bg-clip-text text-transparent">
            pet merece
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Excelência em Banho e Tosa. Serviços de higiene e embelezamento com
          carinho e cuidado.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-[#b900ba] to-[#38d060] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Agendar Agora
          </a>
          <a
            href="#servicos"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Nossos Serviços
          </a>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
            >
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-white text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
