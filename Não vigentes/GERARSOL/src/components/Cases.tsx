import { TrendingDown, Sparkles, MapPin, Zap, BarChart3, ArrowRight } from 'lucide-react'

export default function Cases() {
  const cases = [
    {
      title: 'Sistema Fotovoltaico Rural',
      location: 'Zona Rural - Luís Eduardo Magalhães',
      type: 'Agronegócio',
      description:
        'Implementação de usina solar para redução de custos operacionais em irrigação e sede de fazenda.',
      result: 'Redução drástica no custo do kW/h operacional.',
      savings: '70%',
      specs: ['Estrutura de Solo', 'Inversores de Alta Potência', 'Monitoramento 24h']
    },
    {
      title: 'Eficiência Energética Comercial',
      location: 'Centro - Luís Eduardo Magalhães',
      type: 'Comércio',
      description:
        'Modernização do sistema elétrico e instalação de painéis em telhado cerâmico para loja de departamentos.',
      result: 'Payback estimado em menos de 3 anos.',
      savings: '65%',
      specs: ['Telhado Cerâmico', 'Iluminação LED Industrial', 'Subestação']
    },
  ]

  return (
    <section id="cases" className="py-16 md:py-32 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-xs md:text-sm font-bold text-[rgb(187,212,46)] mb-3 md:mb-4 uppercase tracking-widest">
              Performance Comprovada
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[rgb(44,56,152)] leading-tight">
              Cases que <span className="text-gray-400 font-light text-2xl sm:text-4xl">Geram Valor</span>
            </h3>
          </div>
          <p className="text-base md:text-lg text-gray-500 max-w-sm mx-auto md:mx-0">
            Transparência e resultados reais medidos na conta de energia dos nossos clientes.
          </p>
        </div>

        {/* Grid de Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {cases.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-gray-50 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-[rgb(44,56,152)]/10 transition-all duration-500"
            >
              {/* Header do Card */}
              <div className="p-6 md:p-8 pb-0 flex flex-row justify-between items-start gap-4">
                <div className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 shrink-0">
                  <Zap className="text-[rgb(187,212,46)]" size={24} md:size={32} />
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-full bg-[rgb(187,212,46)]/10 text-[rgb(44,56,152)] text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2">
                    {item.type}
                  </span>
                  <div className="flex items-center text-gray-500 text-[11px] md:text-sm justify-end">
                    <MapPin size={12} className="mr-1 text-[rgb(249,133,30)] shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h4 className="text-xl md:text-2xl font-bold text-[rgb(44,56,152)] mb-3 group-hover:text-[rgb(187,212,46)] transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
                  {item.description}
                </p>

                {/* Infográfico de Economia - Responsivo (Stack no Mobile) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 md:mb-8">
                  <div className="bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                    <TrendingDown className="absolute -right-2 -bottom-2 text-gray-100 opacity-50 group-hover:text-[rgb(187,212,46)] group-hover:opacity-10 transition-all" size={60} />
                    <div className="relative z-10">
                      <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Economia</p>
                      <p className="text-3xl md:text-4xl font-black text-[rgb(44,56,152)]">-{item.savings}</p>
                    </div>
                  </div>
                  <div className="bg-[rgb(44,56,152)] p-5 md:p-6 rounded-2xl md:rounded-3xl shadow-lg relative overflow-hidden">
                    <BarChart3 className="absolute -right-2 -bottom-2 text-white/5" size={60} />
                    <div className="relative z-10">
                      <p className="text-[10px] font-bold text-white/50 uppercase mb-1">Status</p>
                      <p className="text-lg md:text-xl font-bold text-white">100% Ok</p>
                    </div>
                  </div>
                </div>

                {/* Specs técnicas */}
                <div className="flex flex-wrap gap-2">
                  {item.specs.map((spec, sIdx) => (
                    <span key={sIdx} className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-200/50 px-2 md:px-3 py-1 rounded-md">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Ajustada para telas pequenas */}
        <div className="mt-12 md:mt-20 relative rounded-[2rem] md:rounded-[3rem] p-1 bg-[rgb(30,40,100)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(44,56,152)] to-transparent opacity-50"></div>
          
          <div className="relative z-10 bg-[rgb(30,40,100)] rounded-[1.9rem] md:rounded-[2.8rem] px-6 py-12 md:px-8 md:py-20 text-center border border-white/5">
            <div className="max-w-3xl mx-auto">
              <div className="bg-[rgb(187,212,46)]/10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                <Sparkles className="text-[rgb(187,212,46)]" size={32} md:size={40} />
              </div>
              <h4 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">
                Sua empresa pode ser <br className="hidden sm:block" />
                <span className="text-[rgb(187,212,46)]">nosso próximo case.</span>
              </h4>
              <p className="text-sm md:text-lg text-gray-300 mb-8 md:mb-10 px-2">
                Analisamos seu consumo e projetamos o sistema ideal para o máximo de retorno. 
                Sem custos iniciais para o orçamento.
              </p>
              <a
                href="https://api.whatsapp.com/send?1=pt_BR&phone=5577999719638&text=Ol%C3%A1%2C%20vim%20pelo%20Google.%20Gostaria%20de%20fazer%20um%20or%C3%A7amento."
                className="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 md:px-10 md:py-5 bg-[rgb(187,212,46)] text-[rgb(44,56,152)] font-black text-base md:text-xl rounded-xl md:rounded-2xl hover:bg-white transition-all duration-300 shadow-lg"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 md:ml-3 group-hover:translate-x-2 transition-transform" size={20} md:size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}