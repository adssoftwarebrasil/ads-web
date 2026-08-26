import { ArrowRight, Clock, Heart, Shield } from 'lucide-react';

const features = [
  { icon: Clock, title: 'Atendimento 24h', desc: 'Disponível todos os dias' },
  { icon: Heart, title: 'Cuidado Humanizado', desc: 'Equipe qualificada e atenciosa' },
  { icon: Shield, title: 'Segurança Total', desc: 'Protocolos rigorosos de saúde' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[100dvh] flex items-center justify-center py-20 md:py-0"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/LOUISE%20POS%20OPERATORIO%2Flouise-imagem-local%2Fhero.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#282E6A]/90 via-[#282E6A]/80 to-[#624A7F]/85"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Cuidados Pós-Operatórios
            <br />
            <span className="text-[#F4F4DB]">com Excelência</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Recuperação segura e humanizada em Palmas - TO, com atendimento 24
            horas e equipe especializada para cuidar de você
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="https://wa.me/5563992135677"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#624A7F] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#7a5d9e] transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-3"
            >
              Agendar Atendimento
              <ArrowRight
                size={24}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#servicos"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
            >
              Conheça Nossos Serviços
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <f.icon size={40} className="text-[#F4F4DB] mb-3 mx-auto" />
                <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-white/80 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
