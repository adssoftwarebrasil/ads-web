import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-16 md:py-20 bg-plantae-green overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-black text-plantae-dark leading-tight mb-2">
              FÁCIL, RÁPIDO E SEGURO
            </h2>
            <p className="text-plantae-dark/70 text-base md:text-lg font-semibold">
              Comece agora e gerencie sua fazenda com eficiência máxima.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href="https://wa.me/5566992921858"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-plantae-dark text-white font-black px-8 py-4 rounded-full hover:bg-[#0e3d56] transition-all duration-200 hover:shadow-2xl hover:scale-105 text-sm"
            >
              Solicitar Demonstração
              <ArrowRight width={18} height={18} />
            </a>
            <a
              href="https://www.plantae.agr.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-plantae-dark text-plantae-dark font-bold px-8 py-4 rounded-full hover:bg-plantae-dark/10 transition-all duration-200 text-sm"
            >
              Acessar o Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
