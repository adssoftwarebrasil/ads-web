import { Cpu, Wrench, Droplets, Cable, Wind, Settings2 } from 'lucide-react';

const SERVICES = [
  {
    icon: Cpu,
    title: 'Reparo de Módulos Eletrônicos',
    description:
      'Diagnóstico e reparo de módulos do motor Scania, Volvo, Mercedes, Iveco e outras marcas. Recuperamos o computador do seu caminhão com precisão.',
  },
  {
    icon: Settings2,
    title: 'Reparo de ECA / Cervo ECA',
    description:
      'Especialistas em reparo de ECA Scania e sistemas de controle eletrônico avançado. Resolvemos falhas que outros não conseguem.',
  },
  {
    icon: Droplets,
    title: 'Sistema Arla 32',
    description:
      'Reparo de bomba do Arla, dosadora, sensor NOx e fornecimento de peças. Mantenha o sistema de pós-tratamento funcionando perfeitamente.',
  },
  {
    icon: Cable,
    title: 'Reparo e Revisão de Chicotes',
    description:
      'Identificação de falhas e reparo completo de chicotes elétricos. Evite problemas intermitentes e pane na estrada.',
  },
  {
    icon: Wind,
    title: 'Limpeza de Catalisador',
    description:
      'Recupere o desempenho do motor com nossa limpeza especializada de catalisador. Mais potência, menos consumo e emissões dentro da norma.',
  },
  {
    icon: Wrench,
    title: 'Diagnóstico Eletrônico',
    description:
      'Diagnóstico computadorizado com equipamentos de última geração para identificar falhas ocultas e prevenir paradas inesperadas.',
  },
];

const WHATSAPP_URL = 'http://wa.me/556596363222?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Master%20Truck.';

export default function Services() {
  return (
    <section id="servicos" className="bg-[#010101] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#F07013] text-sm font-semibold tracking-widest uppercase">O que fazemos</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#FFFFFD]">
            Serviços Especializados em Caminhões
          </h2>
          <p className="mt-4 text-[#FFFFFD]/50 max-w-2xl mx-auto text-lg">
            Da eletrônica ao sistema de emissões, resolvemos os problemas mais complexos com rapidez e garantia de qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group relative bg-[#FFFFFD]/[0.03] border border-[#FFFFFD]/10 rounded-xl p-7 hover:border-[#F07013]/40 hover:bg-[#F07013]/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#F07013]/10 group-hover:bg-[#F07013]/20 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300">
                <s.icon size={22} className="text-[#F07013]" />
              </div>
              <h3 className="text-[#FFFFFD] font-bold text-lg mb-3 leading-snug">{s.title}</h3>
              <p className="text-[#FFFFFD]/50 text-sm leading-relaxed">{s.description}</p>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F07013]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F07013] hover:bg-[#d4600f] text-[#FFFFFD] font-bold text-base px-8 py-4 rounded transition-colors duration-200 shadow-lg shadow-[#F07013]/20"
          >
            Solicitar Orçamento Agora
          </a>
        </div>
      </div>
    </section>
  );
}
