import {
  Briefcase,
  Calculator,
  FileText,
  Scale,
  Search,
  ClipboardList,
} from 'lucide-react';

const SERVICES = [
  {
    Icon: Search,
    title: 'Consultoria Jurídica',
    desc: 'Análise estratégica do seu caso com orientação clara e objetiva, para que você tome as melhores decisões com segurança jurídica.',
    area: 'Trabalhista & Previdenciário',
  },
  {
    Icon: ClipboardList,
    title: 'Planejamento Previdenciário e Trabalhista',
    desc: 'Mapeamos sua história laboral e previdenciária para identificar o melhor momento e a melhor forma de requerer seus benefícios.',
    area: 'Previdenciário',
  },
  {
    Icon: Calculator,
    title: 'Cálculo Previdenciário e Trabalhista',
    desc: 'Revisão e cálculo técnico de benefícios, verbas rescisórias, horas extras, adicionais e demais direitos assegurados em lei.',
    area: 'Trabalhista & Previdenciário',
  },
  {
    Icon: Briefcase,
    title: 'Realização de Diligências',
    desc: 'Acompanhamento presencial e representação em audiências, agências do INSS, Cartórios e demais órgãos públicos.',
    area: 'Processual',
  },
  {
    Icon: FileText,
    title: 'Elaboração de Contratos e Documentos',
    desc: 'Contratos de trabalho, distrato, acordos extrajudiciais e outros documentos jurídicos redigidos com precisão e proteção para você.',
    area: 'Contratual',
  },
  {
    Icon: Scale,
    title: 'Ações Trabalhistas e Previdenciárias',
    desc: 'Representação judicial completa: desde o ajuizamento até a execução da sentença, em defesa dos seus direitos na Justiça do Trabalho e Federal.',
    area: 'Judicial',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage:
            "url('https://storage.lucasmendes.dev/site-sp/lima%20advocacia/img/logo-lima-advocacia-ouro-fundo-marmore_1080x1080.webp')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-sans text-xs tracking-[0.4em] text-[#A1825A] uppercase mb-3">
            O que Fazemos
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-5">
            Serviços Jurídicos
          </h2>
          <div className="section-divider mb-5" />
          <p className="font-sans text-[#BBB39D] max-w-xl mx-auto leading-relaxed">
            Atuamos em todas as etapas da sua demanda jurídica — do primeiro atendimento à
            execução da decisão final.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const { Icon, title, desc, area } = service;
            return (
              <div
                key={title}
                className="animate-on-scroll group relative bg-white/[0.03] border border-white/10 hover:border-[#A1825A]/50 rounded-sm p-7 transition-all duration-400 hover:bg-[#A1825A]/5 cursor-default"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="absolute top-0 left-0 w-0 h-px bg-[#A1825A] group-hover:w-full transition-all duration-500" />
                <div className="w-12 h-12 rounded-sm gold-gradient flex items-center justify-center mb-5">
                  <Icon size={20} className="text-white" />
                </div>
                <span className="inline-block font-sans text-[10px] tracking-[0.3em] text-[#A1825A] uppercase mb-2">
                  {area}
                </span>
                <h3 className="font-serif text-base text-white mb-3 leading-snug">{title}</h3>
                <p className="font-sans text-sm text-[#BBB39D] leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
