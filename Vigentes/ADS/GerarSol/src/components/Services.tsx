import { Sun, Zap, Wrench, Building, Lightbulb, Boxes, ArrowUpRight, Truck, Activity } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Sun,
      title: 'Placas Solares',
      description: 'Venda e instalação de sistemas fotovoltaicos de alta performance com monitoramento inteligente.',
      color: 'rgb(254,232,0)',
    },
    {
      icon: Wrench,
      title: 'Manutenção Especializada',
      description: 'Limpeza técnica, revisão de inversores e manutenção preventiva para garantir o máximo rendimento.',
      color: 'rgb(249,133,30)',
    },
    {
      icon: Zap,
      title: 'Engenharia Elétrica',
      description: 'Projetos de alta e baixa tensão, automação e laudos técnicos assinados por especialistas.',
      color: 'rgb(187,212,46)',
    },
    {
      icon: Boxes,
      title: 'Estruturas Metálicas',
      description: 'Fabricação própria de estruturas robustas para solo, telhados complexos e estacionamentos (carports).',
      color: 'rgb(44,56,152)',
    },
    {
      icon: Truck,
      title: 'Aluguel de Equipamentos',
      description: 'Locação de empilhadeiras, caminhões munck e guinchos para montagens e movimentação de cargas pesadas.',
      color: 'rgb(249,133,30)',
    },
    {
      icon: Activity,
      title: 'Projetos de Subestações',
      description: 'Desenvolvimento completo, execução e manutenção de subestações de energia para média e alta tensão.',
      color: 'rgb(254,232,0)',
    },
  ]

  return (
    <section id="services" className="relative py-24 md:py-32 px-4 bg-[#F8FAFC] overflow-hidden">
      
      {/* --- Elementos de Fundo --- */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
      </div>
      
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[rgb(187,212,46)]/10 rounded-full blur-[100px] z-0"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[rgb(44,56,152)]/5 rounded-full blur-[100px] z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-[rgb(44,56,152)] font-black uppercase tracking-[0.3em] text-xs mb-4 opacity-70">
              O que fazemos de melhor
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-[rgb(44,56,152)] leading-tight">
              Soluções Energéticas <br />
              <span className="text-[rgb(187,212,46)]">Ponta a Ponta</span>
            </h3>
          </div>
          <p className="text-slate-500 text-lg max-w-sm text-center md:text-right font-medium">
            Engenharia de precisão e suporte logístico para quem busca eficiência real.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-[2rem] p-10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border border-slate-200 transition-all duration-500 hover:shadow-2xl hover:shadow-[rgb(44,56,152)]/10 hover:-translate-y-2 overflow-hidden"
              >
                {/* Indicador de Cor Topo */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-500 group-hover:h-2"
                  style={{ backgroundColor: service.color }}
                ></div>

                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm border border-slate-50"
                    style={{ backgroundColor: `${service.color}10` }}
                  >
                    <Icon size={32} style={{ color: service.color }} />
                  </div>

                  <h4 className="text-2xl font-bold text-[rgb(44,56,152)] mb-4 transition-colors">
                    {service.title}
                  </h4>
                  
                  <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                    {service.description}
                  </p>

                  <div className="flex items-center text-sm font-black text-[rgb(44,56,152)] group-hover:text-[rgb(187,212,46)] transition-all duration-500">
                    SAIBA MAIS <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Marca d'água técnica */}
                <Icon 
                  size={140} 
                  className="absolute -right-10 -bottom-10 opacity-[0.03] text-slate-900 group-hover:opacity-[0.06] group-hover:scale-110 transition-all duration-700" 
                />
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col items-center">
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-slate-300 mb-8"></div>
            <a
                href="https://api.whatsapp.com/send?1=pt_BR&phone=5577999719638&text=Ol%C3%A1%2C%20vim%20pelo%20Google.%20Gostaria%20de%20fazer%20um%20or%C3%A7amento."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-12 py-5 bg-[rgb(44,56,152)] text-white font-black text-xl rounded-2xl hover:bg-[rgb(187,212,46)] hover:text-[rgb(44,56,152)] transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(44,56,152,0.3)]"
            >
                Solicitar Orçamento
                <Zap className="ml-3 fill-current group-hover:animate-pulse" size={20} />
            </a>
        </div>
      </div>
    </section>
  )
}