import { MapPin, Phone, ChevronDown } from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=556233396922&text&type=phone_number&app_absent=0';

const stats = [
  { value: '15+', label: 'Anos de Experiência' },
  { value: '10+', label: 'Serviços Especializados' },
  { value: '9', label: 'Cidades Atendidas' },
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
            'url("https://storage.lucasmendes.dev/site-sp/RETOCAR/carros-em-reparacao-mecanica-elevador-automotivo_773x580.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0A0A0A]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="lucide lucide-map-pin text-[#DB151F]" width={14} height={14} />
            <span className="text-gray-400 text-xs md:text-sm tracking-widest uppercase font-medium">
              Santa Terezinha de Goiás
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            A Oficina Mais <span className="text-[#DB151F]">Completa</span> de
            <br />
            Santa Terezinha
          </h1>
          <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl">
            Mais de 15 anos de experiência em soluções automotivas completas. Transparência,
            seriedade e excelência em cada atendimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#DB151F] hover:bg-[#b8101a] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/50 hover:-translate-y-0.5 text-base"
            >
              <Phone className="lucide lucide-phone" width={18} height={18} />
              Agendar Serviço
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all duration-300 hover:-translate-y-0.5 text-base backdrop-blur-sm"
            >
              Ver Serviços
            </a>
          </div>
          <div className="flex flex-wrap gap-8 mt-12">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black text-[#DB151F]">{stat.value}</span>
                <span className="text-gray-400 text-xs md:text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gray-400 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="lucide lucide-chevron-down" width={28} height={28} />
      </a>
    </section>
  );
}
