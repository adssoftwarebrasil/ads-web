import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const stats = [
  { value: '5.000+', label: 'Clientes Ativos', wrap: 'from-blue-50 to-cyan-50 border-blue-100', text: 'from-blue-600 to-cyan-600', star: false },
  { value: '4.9', label: 'Avaliação Média', wrap: 'from-amber-50 to-yellow-50 border-amber-100', text: 'from-amber-600 to-yellow-600', star: true },
  { value: '99%', label: 'Recomendação', wrap: 'from-green-50 to-emerald-50 border-green-100', text: 'from-green-600 to-emerald-600', star: false },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">DEPOIMENTOS</div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-4">Mais de 5.000 Clientes Satisfeitos</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Veja o que nossos clientes dizem sobre a experiência 3MD</p>
        </div>
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-100">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Quote className="lucide lucide-quote w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <img src="https://ui-avatars.com/api/?name=Joao+Santos&background=3b82f6&color=fff&size=80" alt="João Santos" className="w-24 h-24 rounded-2xl shadow-lg ring-4 ring-blue-100" />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex gap-1 mb-4 justify-center lg:justify-start">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xl text-slate-700 mb-6 leading-relaxed font-medium min-h-[80px]">"Contratei o plano empresarial para minha loja e não me arrependo. Link dedicado faz toda diferença. Equipe técnica muito profissional."</p>
                  <div>
                    <div className="font-bold text-slate-900 text-lg">João Santos</div>
                    <div className="text-slate-600 text-sm">Empresário • Piedade, Jaboatão</div>
                  </div>
                </div>
              </div>
            </div>
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 hidden lg:flex w-14 h-14 bg-white rounded-full items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 text-slate-900 border border-slate-200">
              <ChevronLeft className="lucide lucide-chevron-left w-6 h-6" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 hidden lg:flex w-14 h-14 bg-white rounded-full items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 text-slate-900 border border-slate-200">
              <ChevronRight className="lucide lucide-chevron-right w-6 h-6" />
            </button>
          </div>
          <div className="flex justify-center gap-3 mt-8 lg:hidden">
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all">
              <ChevronLeft className="lucide lucide-chevron-left w-5 h-5" />
            </button>
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all">
              <ChevronRight className="lucide lucide-chevron-right w-5 h-5" />
            </button>
          </div>
          <div className="flex gap-2 items-center justify-center mt-6">
            <button className="h-2 rounded-full transition-all duration-300 w-2 bg-slate-300 hover:bg-slate-400"></button>
            <button className="h-2 rounded-full transition-all duration-300 w-8 bg-gradient-to-r from-blue-600 to-cyan-600"></button>
            <button className="h-2 rounded-full transition-all duration-300 w-2 bg-slate-300 hover:bg-slate-400"></button>
            <button className="h-2 rounded-full transition-all duration-300 w-2 bg-slate-300 hover:bg-slate-400"></button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <div key={i} className={`bg-gradient-to-br ${s.wrap} rounded-2xl p-8 text-center border`}>
              {s.star ? (
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className={`text-5xl font-black bg-gradient-to-r ${s.text} bg-clip-text text-transparent`}>{s.value}</span>
                  <Star className="lucide lucide-star w-10 h-10 fill-yellow-400 text-yellow-400" />
                </div>
              ) : (
                <div className={`text-5xl font-black bg-gradient-to-r ${s.text} bg-clip-text text-transparent mb-2`}>{s.value}</div>
              )}
              <div className="text-slate-700 font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
