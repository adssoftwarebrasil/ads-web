import { Award, Shield, Sparkles, Headphones, CheckCircle, TrendingUp, Zap } from 'lucide-react'

export default function Differentials() {
  const differentials = [
    {
      icon: Award,
      title: '10+ Anos de Mercado',
      description: 'Atuação sólida desde 2016, sendo referência em energia solar no oeste baiano.',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Economia Real',
      description: 'Projetos inteligentes que reduzem sua conta de energia em até 95%.',
      color: 'from-green-400 to-emerald-600'
    },
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Trabalhamos apenas com as melhores marcas mundiais e certificações rigorosas.',
      color: 'from-blue-400 to-indigo-600'
    },
    {
      icon: CheckCircle,
      title: 'Soluções Full Service',
      description: 'Cuidamos de tudo: do projeto e homologação até a instalação e manutenção.',
      color: 'from-[rgb(187,212,46)] to-lime-600'
    },
    {
      icon: Headphones,
      title: 'Suporte Técnico',
      description: 'Time de especialistas prontos para garantir que seu sistema nunca pare de gerar.',
      color: 'from-purple-400 to-pink-600'
    },
    {
      icon: Sparkles,
      title: 'Inovação Constante',
      description: 'Estruturas metálicas próprias e tecnologia de ponta em cada instalação.',
      color: 'from-yellow-400 to-orange-500'
    },
  ]

  return (
    <section id="differentials" className="py-24 md:py-32 px-4 bg-[rgb(30,40,100)] relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute inset-0 bg-[url('https://storage.lucasmendes.dev/site-sp/gerasolenergia%2Fpredios-paineis-solares.webp')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[rgb(187,212,46)]/10 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[rgb(44,56,152)]/30 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[rgb(187,212,46)] mb-4">
            <Zap size={16} fill="currentColor" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Por que a Gerarsol?</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Nossos <span className="text-[rgb(187,212,46)]">Diferenciais</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Mais que painéis solares, entregamos engenharia de precisão e 
            compromisso com o seu retorno financeiro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-[rgb(187,212,46)]/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(187,212,46)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[rgb(187,212,46)] transition-all duration-500">
                    <Icon size={28} className="text-[rgb(187,212,46)] group-hover:text-[rgb(30,40,100)] transition-colors" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-[rgb(187,212,46)] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Estatísticas Integradas */}
        <div className="mt-20 py-12 px-8 rounded-[3rem] bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-black text-[rgb(187,212,46)]">10+</div>
              <div className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 italic">Anos de Estrada</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-white">1k+</div>
              <div className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 italic">Projetos Entregues</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-[rgb(187,212,46)]">95%</div>
              <div className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 italic">Economia Média</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-white">100%</div>
              <div className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 italic">Suporte Ativo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}