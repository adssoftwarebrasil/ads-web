import { Droplets, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-900"
    >
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-slow-zoom"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/homefilt%2Fhero%20.jpeg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary/60 to-black/80"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 animate-bounce-slow">
            <Droplets className="lucide lucide-droplets text-cyan-400" width={48} height={48} />
          </div>
        </div>
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-400/10 border border-cyan-400/20 rounded-full">
          Revendedor Autorizado Soft Everest
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
          Saúde e Bem-Estar em <span className="text-cyan-400">Cada Gole</span>
        </h1>
        <div className="space-y-4 mb-10">
          <p className="text-lg sm:text-2xl text-slate-200 font-light max-w-2xl mx-auto">
            Purificadores e Bebedouros de Água <span className="font-semibold text-white">Home Filter</span>
          </p>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
            Tecnologia que elimina impurezas e garante a pureza total para sua família ou empresa.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://api.whatsapp.com/send?phone=556284455153&text=Olha..."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-green-600 rounded-full hover:bg-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] active:scale-95"
          >
            FALE NO WHATSAPP
            <ArrowRight className="lucide lucide-arrow-right ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" width={24} height={24} />
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block opacity-50 hover:opacity-100 transition-opacity">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1.5">
          <div className="w-1 h-2 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
