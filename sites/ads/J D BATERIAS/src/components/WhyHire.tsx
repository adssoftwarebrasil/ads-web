import { Calendar, Tag } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { WHATSAPP_URL } from '../constants';

export default function WhyHire() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: 'rgb(4, 51, 140)' }}>
      <div ref={ref} className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/jd-baterias%2Fimg%2FPor%20que%20contratar.jpg"
              alt="Por que contratar"
              className="w-full rounded-3xl border-4"
              style={{ borderColor: 'rgb(254, 186, 0)' }}
            />
          </div>
          <div className={`space-y-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'rgb(254, 186, 0)' }}>
              Por Que Contratar?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Experiência e Qualidade em Cada Atendimento</h2>
            <p className="text-white text-lg opacity-90">
              Garantimos qualidade, segurança e o melhor atendimento na hora de escolher a bateria para o seu veículo.
            </p>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgb(254, 186, 0)' }}>
                    <Calendar size={28} style={{ color: 'rgb(4, 51, 140)' }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">+10 Anos de Mercado</h3>
                    <p className="text-white opacity-80">Experiência sólida atendendo Natal e região.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgb(254, 186, 0)' }}>
                    <Tag size={28} style={{ color: 'rgb(4, 51, 140)' }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">+15 Marcas Disponíveis</h3>
                    <p className="text-white opacity-80">As melhores opções reunidas em um só lugar.</p>
                  </div>
                </div>
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-xl font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: 'rgb(254, 186, 0)', color: 'rgb(4, 51, 140)' }}
            >
              Solicite um Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
