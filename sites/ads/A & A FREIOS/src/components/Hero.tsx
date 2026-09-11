import { Award, MapPin, Zap, ArrowRight } from 'lucide-react';

const heroBg =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=aeafreios%2Fhero.webp&version_id=null';

const badges = [
  { icon: Award, color: 'text-yellow-400', label: 'Oficina Certificada' },
  { icon: MapPin, color: 'text-blue-400', label: 'Atende Todo Brasil' },
  { icon: Zap, color: 'text-green-400', label: 'Scanner Ponta' },
];

export default function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[rgb(8,36,75)]">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Caminhão em oficina - Fundo" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(8,36,75)] via-transparent to-[rgb(8,36,75)] opacity-80"></div>
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-8 shadow-lg">
          <Award className="lucide lucide-award text-[rgb(230,10,12)] w-4 h-4" />
          <span className="text-gray-100 text-xs md:text-sm font-bold tracking-wider uppercase">
            Top 3 Brasil • Especialista ABS
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          Inteligência <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-200 to-gray-400">
            Automotiva
          </span>
        </h1>
        <p className="text-lg text-gray-300 mb-10 max-w-xl font-light leading-relaxed">
          Diagnóstico avançado e reparo de unidades de comando para frota pesada. A tecnologia que seu caminhão precisa.
        </p>
        <button
          onClick={scrollToContact}
          className="group relative bg-[rgb(230,10,12)] hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(230,10,12,0.3)] hover:shadow-[0_0_30px_rgba(230,10,12,0.5)] flex items-center gap-3 hover:-translate-y-1"
        >
          Solicitar Análise
          <ArrowRight className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <div className="mt-16 flex flex-wrap justify-center gap-4 w-full opacity-90">
          {badges.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.label}
                className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default"
              >
                <Icon className={`${b.color} w-4 h-4`} />
                <span className="text-gray-200 text-sm font-medium">{b.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
