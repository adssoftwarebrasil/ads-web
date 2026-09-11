import { Users, ShieldCheck, HeartPulse } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Anos de Experiência', sub: 'No mercado de purificadores' },
  { value: '200+', label: 'Avaliações 5 Estrelas', sub: 'Satisfação garantida' },
  { value: '1.5k+', label: 'Clientes Atendidos', sub: 'Em toda a região' },
  { value: '10+', label: 'Modelos Soft', sub: 'Pronta entrega' },
];

export default function WhyChoose() {
  return (
    <section
      className="relative py-24 bg-cover bg-center bg-fixed overflow-hidden"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/homefilt%2FPor%20Que%20Contratar-imgdefundo.jpeg")',
      }}
    >
      <div className="absolute inset-0 bg-blue-900/90 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-transparent to-blue-900/50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Diferenciais Home Filter
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Por Que Nos <span className="text-cyan-400">Escolher?</span>
          </h2>
          <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
            Garantimos mais do que apenas um aparelho; entregamos saúde, suporte técnico especializado e a confiança de uma revenda autorizada.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="group bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-white/10 hover:border-cyan-400/50 transition-all duration-500">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
              <div className="bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.4)] p-5 rounded-3xl group-hover:rotate-12 transition-transform duration-500">
                <Users className="lucide lucide-users text-white" width={32} height={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Atendimento Humanizado</h3>
                <p className="text-blue-100/70 text-lg leading-relaxed">
                  Não somos apenas vendedores. Nosso time técnico analisa sua necessidade para indicar o purificador ideal para seu fluxo de água.
                </p>
              </div>
            </div>
          </div>
          <div className="group bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-white/10 hover:border-cyan-400/50 transition-all duration-500">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
              <div className="bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)] p-5 rounded-3xl group-hover:rotate-12 transition-transform duration-500">
                <ShieldCheck className="lucide lucide-shield-check text-white" width={32} height={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Garantia e Originalidade</h3>
                <p className="text-blue-100/70 text-lg leading-relaxed">
                  Trabalhamos exclusivamente com produtos originais Soft Everest, garantindo peças genuínas e a maior durabilidade do mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="relative group bg-white p-8 rounded-[2rem] text-center shadow-xl hover:shadow-cyan-900/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute -bottom-4 -right-4 text-slate-100 group-hover:text-cyan-50 transition-colors">
                <HeartPulse className="lucide lucide-heart-pulse" width={80} height={80} />
              </div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-black text-blue-900 mb-2 tracking-tighter">
                  {s.value}
                </div>
                <div className="text-slate-800 font-bold text-sm md:text-base uppercase tracking-wide mb-1">
                  {s.label}
                </div>
                <div className="text-slate-400 text-xs font-medium">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
