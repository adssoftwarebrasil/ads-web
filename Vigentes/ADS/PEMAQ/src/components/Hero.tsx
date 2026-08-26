import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

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
            'url("https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2Fhero.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-[#B87333]/30"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Locação de Máquinas
            <br />
            <span className="text-[#FFA500]">Profissionais</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Qualidade e Eficiência no Atendimento com Frota Variada de Equipamentos e Assistência
            Técnica 24h
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#FFA500] hover:bg-[#FF8C00] text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Solicitar Orçamento
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#equipamentos"
              className="inline-flex items-center gap-3 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Ver Equipamentos
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-[#FFA500] text-3xl font-bold mb-2">50+</h3>
              <p className="text-white text-sm">Máquinas Disponíveis</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-[#FFA500] text-3xl font-bold mb-2">24h</h3>
              <p className="text-white text-sm">Suporte Técnico</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-[#FFA500] text-3xl font-bold mb-2">4 Anos</h3>
              <p className="text-white text-sm">de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
