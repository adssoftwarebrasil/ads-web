import { Scale, Briefcase, FileText, Building2, Shield, Users } from 'lucide-react';

const services = [
  {
    icon: Scale,
    title: 'Direito Trabalhista',
    description: 'Rescisão indireta, horas extras, demissão por justa causa ou sem justa causa, contrato intermitente e contratos de experiência. Defendemos trabalhadores e empresas com estratégia e expertise.',
    tags: ['Rescisão Indireta', 'Horas Extras', 'FGTS'],
    highlight: true,
  },
  {
    icon: Shield,
    title: 'Propriedade Industrial',
    description: 'Registro de marcas e patentes junto ao INPI, proteção de inovações e ativos intelectuais. Garantimos que sua marca e tecnologia estejam protegidas juridicamente.',
    tags: ['Registro de Marca', 'Patentes', 'INPI'],
    highlight: true,
  },
  {
    icon: FileText,
    title: 'Serviços Extrajudiciais',
    description: 'Resolução de conflitos fora do judiciário, contratos, inventários, usucapião extrajudicial e conciliações. Soluções mais rápidas e econômicas para seu caso.',
    tags: ['Contratos', 'Inventário', 'Conciliação'],
    highlight: true,
  },
  {
    icon: Briefcase,
    title: 'Direito Empresarial',
    description: 'Consultoria jurídica para empresas, conformidade legal, recuperação judicial, falências e estruturação societária. Suporte estratégico para negócios de todos os portes.',
    tags: ['Consultoria', 'Recuperação Judicial', 'Societário'],
    highlight: false,
  },
  {
    icon: Users,
    title: 'Direito do Consumidor',
    description: 'Defesa dos direitos do consumidor em relações comerciais, práticas abusivas, cobranças indevidas e problemas com produtos e serviços.',
    tags: ['Direitos do Consumidor', 'Cobranças Indevidas'],
    highlight: false,
  },
  {
    icon: Building2,
    title: 'Direito Civil',
    description: 'Contratos civis, responsabilidade civil, família, sucessões e questões patrimoniais. Assessoria completa em demandas que envolvem relações entre pessoas e bens.',
    tags: ['Contratos', 'Família', 'Sucessões'],
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#F5F3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003F5C] mb-5">
            Áreas de Atuação
          </h2>
          <p className="text-[#003F5C]/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Atuamos em todo o Goiás com soluções jurídicas personalizadas para pessoas físicas e empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-default ${
                  service.highlight
                    ? 'bg-[#003F5C] text-white'
                    : 'bg-white text-[#003F5C] border border-[#003F5C]/10'
                }`}
              >
                {service.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#C9A84C] text-[#003F5C] text-xs font-bold px-2.5 py-1 rounded-full">
                      Destaque
                    </span>
                  </div>
                )}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    service.highlight
                      ? 'bg-[#C9A84C]/20 group-hover:bg-[#C9A84C]/30'
                      : 'bg-[#003F5C]/10 group-hover:bg-[#003F5C]/20'
                  }`}
                >
                  <Icon
                    size={26}
                    className={service.highlight ? 'text-[#EAE6AE]' : 'text-[#003F5C]'}
                  />
                </div>

                <h3
                  className={`text-xl font-bold mb-3 ${
                    service.highlight ? 'text-white' : 'text-[#003F5C]'
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed mb-5 ${
                    service.highlight ? 'text-white/70' : 'text-[#003F5C]/60'
                  }`}
                >
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        service.highlight
                          ? 'bg-white/10 text-[#EAE6AE]'
                          : 'bg-[#003F5C]/10 text-[#003F5C]'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="http://wa.me/556281124626"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#003F5C] hover:bg-[#004f70] text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            Consultar sobre meu caso
          </a>
        </div>
      </div>
    </section>
  );
}
