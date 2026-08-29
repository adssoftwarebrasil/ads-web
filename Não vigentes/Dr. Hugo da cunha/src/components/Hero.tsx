import { Award, ArrowRight } from 'lucide-react';

const stats = [
  { value: '20+', label: 'Anos' },
  { value: '3', label: 'Sociedades' },
  { value: '100%', label: 'Dedicação' },
];

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#012a4a] via-[#024074] to-[#013560]">
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-sky-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-800/30 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-24 lg:py-24">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left flex flex-col justify-center order-1">
            <div className="inline-flex items-center gap-2 bg-sky-400/10 backdrop-blur-md px-4 py-2 rounded-full border border-sky-400/20 mx-auto lg:mx-0 w-fit">
              <Award className="w-4 h-4 text-sky-400" />
              <span className="text-sky-100 text-xs sm:text-sm font-medium tracking-wide">CRM-GO 8972 | RQE 5327</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight">Cirurgia Vascular de<span className="block text-sky-400 mt-1 lg:mt-2">Excelência</span></h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">Tratamento moderno de varizes com tecnologia laser e técnicas minimamente invasivas para sua saúde e recuperação rápida.</p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start pt-2">
              <a href="https://wa.me/556285815846" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-[#024074] px-6 lg:px-8 py-3 lg:py-3.5 rounded-full font-bold text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-sky-400/30 hover:-translate-y-1">Agendar Consulta<ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" /></a>
              <a href="#procedures" className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-6 lg:px-8 py-3 lg:py-3.5 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 border border-white/20 hover:border-white/40">Ver Procedimentos</a>
            </div>
            <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8 border-t border-white/10 max-w-md mx-auto lg:mx-0">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-sky-400">{s.value}</p>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center items-center order-2">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
              <div className="absolute inset-0 bg-sky-500 rounded-[2rem] lg:rounded-[2.5rem] blur-2xl lg:blur-3xl opacity-20 transform translate-y-4"></div>
              <div className="relative aspect-[3/4] w-full">
                <img src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=HUGO%20DA%20CUNHA%2Fimage%2080.png&version_id=null" alt="Dr. Hugo da Cunha" loading="eager" className="relative z-10 w-full h-full object-cover object-top rounded-2xl lg:rounded-3xl shadow-2xl border-2 lg:border-4 border-white/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
