import { Star, CheckCircle, ArrowRight, Phone } from 'lucide-react';

const features = [
  'Assistência Autorizada',
  'Venda de Equipamentos',
  'Peças Originais',
  'Manutenção Industrial',
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500 via-orange-600 to-amber-800"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://storage.lucasmendes.dev/site-sp/casadasbombasecompressores/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-400/30 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-300/20 rounded-full blur-[100px]"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full text-white mb-8 ring-1 ring-white/30 shadow-lg">
          <Star width={24} height={24} className="lucide lucide-star w-4 h-4 text-yellow-300 fill-yellow-300" />
          <span className="text-sm font-bold tracking-wider uppercase">Referência em Manaus desde 2002</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
          A Solução Definitiva em <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-200">
            Bombas e Compressores
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-white/95 max-w-3xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md">
          Não deixe sua operação parar. Somos sua parceira de confiança para{' '}
          <strong>assistência técnica autorizada</strong>, manutenção especializada e venda das melhores marcas do
          mercado.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-12 font-medium text-white/90">
          {features.map((f) => (
            <div
              key={f}
              className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full ring-1 ring-white/10"
            >
              <CheckCircle
                width={18}
                height={18}
                className="lucide lucide-check-circle "
                style={{ color: 'rgb(255, 163, 1)' }}
              />
              <span>{f}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a
            href="#contato"
            className="group relative overflow-hidden bg-white text-orange-700 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(255,163,1,0.5)] hover:shadow-[0_20px_35px_-10px_rgba(255,163,1,0.6)] hover:-translate-y-1 flex items-center gap-2"
          >
            <span className="relative z-10">Solicitar Orçamento Oficial</span>
            <ArrowRight
              width={24}
              height={24}
              className="lucide lucide-arrow-right relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform"
            />
            <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-orange-50/50"></div>
          </a>
          <a
            href="https://wa.me/5592984428836?text=Ol%C3%A1%2C%20estou%20no%20site%20e%20gostaria%20de%20falar%20com%20um%20especialista."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-transparent text-white border-2 border-white/70 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            <Phone width={20} height={20} className="lucide lucide-phone " />
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
