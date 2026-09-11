import { Headphones, Phone } from 'lucide-react';
import { BLUE, YELLOW, WA_POSVENDA_MSG_ACC } from '../theme';
import { useInView } from '../useInView';

export default function PosVenda() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden" style={{ backgroundColor: BLUE }}>
      <div className="absolute inset-0 opacity-15">
        <img
          src="https://storage.lucasmendes.dev/site-sp/eletroluz%2Fimg%2Fpos-vendas.webp"
          alt="Pós-venda"
          className="w-full h-full object-cover"
        />
      </div>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div
            className={`w-24 h-24 rounded-3xl flex items-center justify-center flex-shrink-0 transition-all duration-700 ${
              inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(254, 201, 1, 0.3)',
              boxShadow: 'rgba(254, 201, 1, 0.1) 0px 0px 30px',
            }}
          >
            <Headphones width={48} height={48} className="lucide lucide-headphones " style={{ color: YELLOW }} />
          </div>
          <div
            className={`flex-1 text-center lg:text-left transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
              Suporte Pós-Venda <span style={{ color: YELLOW }}>Especializado</span>
            </h2>
            <p className="text-xl text-white/90 font-medium max-w-2xl">
              Garantimos a performance do seu investimento. Nossa equipe está pronta para te atender
              após a instalação.
            </p>
          </div>
          <div
            className={`flex-shrink-0 transition-all duration-700 delay-500 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <a
              href={WA_POSVENDA_MSG_ACC}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 rounded-2xl font-black text-xl flex items-center space-x-4 transition-all duration-300 hover:scale-105 overflow-hidden"
              style={{ backgroundColor: YELLOW, color: BLUE, boxShadow: 'rgba(254, 201, 1, 0.4) 0px 10px 30px' }}
            >
              <Phone width={24} height={24} className="lucide lucide-phone fill-current" />
              <span className="uppercase tracking-tight">Falar com Pós-Venda</span>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shine-fast"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
