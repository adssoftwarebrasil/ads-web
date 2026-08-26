import { Zap, CheckCircle2, MapPin, MessageCircle, Phone } from 'lucide-react';
import { scrollToId } from '../lib/scroll';

const features = [
  'Produtos de alta durabilidade',
  'Amplo catálogo à pronta entrega',
  'Consultoria técnica especializada',
  'Soluções residenciais e comerciais',
];

function ShowroomCard() {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl bg-slate-900 aspect-[4/3] lg:aspect-square">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent z-10 pointer-events-none"></div>
      <img
        src="https://storage.lucasmendes.dev/site-sp/4k%20iluminacao/img/hero.webp"
        alt="Fachada da Loja 4K Iluminação"
        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-3 sm:p-4 rounded-xl flex items-center gap-3 sm:gap-4 shadow-lg hover:border-yellow-500/30 transition-colors">
          <div className="bg-yellow-400 p-2 rounded-lg text-slate-900 shrink-0 shadow-[0_0_10px_rgba(250,204,21,0.4)]">
            <MapPin size={20} />
          </div>
          <div>
            <p className="text-white font-bold text-xs sm:text-sm">Visite nosso Showroom</p>
            <p className="text-slate-300 text-[10px] sm:text-xs">As melhores soluções em LED</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/4k%20iluminacao%2Fimg%2Fhero-background-paralax.webp"
          alt="Background Iluminação Showroom"
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent lg:via-slate-950/40"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] mix-blend-overlay"></div>
      </div>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900/80 backdrop-blur-sm border border-yellow-500/30 rounded-full shadow-sm">
                <Zap size={16} className="text-yellow-400 fill-yellow-400" />
                <span className="text-yellow-100 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  Eficiência Energética &amp; Qualidade
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-xl">
                Transforme seus Ambientes com{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 filter drop-shadow-sm">
                  Iluminação
                </span>{' '}
                de Alta Performance
              </h1>
              <p className="text-lg text-slate-100 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-md font-medium">
                Especialistas em lâmpadas LED, fitas, luminárias e soluções completas. Economia, modernidade e o atendimento técnico que seu projeto merece.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto lg:mx-0">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 group/item drop-shadow">
                    <CheckCircle2
                      size={20}
                      className="text-yellow-400 flex-shrink-0 mt-1 group-hover/item:text-yellow-300 transition-colors"
                    />
                    <p className="text-slate-200 text-sm sm:text-base font-medium group-hover/item:text-white transition-colors">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="block lg:hidden w-full max-w-lg mx-auto py-6">
              <div className="relative group ">
                <div className="absolute inset-0 bg-yellow-500 rounded-3xl blur-3xl opacity-25 group-hover:opacity-40 transition-opacity duration-500 -z-10 transform translate-y-4"></div>
                <ShowroomCard />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToId('contato')}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold text-base uppercase tracking-wide rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(250,204,21,0.6)] shadow-lg"
              >
                <MessageCircle size={20} className="transition-transform group-hover:scale-110" />
                Fale com Especialista
              </button>
              <a
                href="tel:+556241410490"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900/60 backdrop-blur-md border border-slate-500 hover:border-yellow-400/50 text-white hover:text-yellow-400 font-bold text-base uppercase tracking-wide rounded-xl transition-all duration-300 hover:bg-slate-800/80 shadow-lg"
              >
                <Phone size={20} />
                (62) 4141-0490
              </a>
            </div>
          </div>
          <div className="hidden lg:block relative perspective-1000">
            <div className="relative group transform hover:rotate-1 transition-transform duration-500 z-20">
              <div className="absolute inset-0 bg-yellow-500 rounded-3xl blur-3xl opacity-25 group-hover:opacity-40 transition-opacity duration-500 -z-10 transform translate-y-4"></div>
              <ShowroomCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
