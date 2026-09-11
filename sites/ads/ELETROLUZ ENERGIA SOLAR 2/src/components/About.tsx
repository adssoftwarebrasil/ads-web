import { Star } from 'lucide-react';
import { BLUE, BLUE_LIGHT, YELLOW } from '../theme';
import { useInView } from '../useInView';

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p
              className={`text-sm font-semibold tracking-wider mb-4 transition-all duration-600 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0'
              }`}
              style={{ color: BLUE_LIGHT, letterSpacing: '2px' }}
            >
              NOSSA HISTÓRIA
            </p>
            <h2
              className={`text-3xl lg:text-5xl font-bold mb-6 leading-tight transition-all duration-600 delay-200 ${
                inView ? 'opacity-100 translate-x-0' : 'opacity-0'
              }`}
              style={{ color: BLUE }}
            >
              48 Anos de Tradição e Inovação
            </h2>
            <div className="space-y-5 text-lg leading-relaxed" style={{ color: 'rgb(60, 60, 60)' }}>
              <p className={`transition-all duration-600 delay-400 ${inView ? 'opacity-100' : 'opacity-0'}`}>
                A Eletroluz nasceu há 48 anos, na cidade de Barreiras – BA, com o propósito de
                oferecer materiais elétricos de qualidade para a região. Ao longo das décadas,
                construiu uma reputação sólida, baseada em confiança, integridade e compromisso com o
                cliente.
              </p>
              <p className={`transition-all duration-600 delay-600 ${inView ? 'opacity-100' : 'opacity-0'}`}>
                Sempre atenta às mudanças do mercado e às novas demandas, há 7 anos a Eletroluz deu um
                passo ousado e inovador: passou a atuar também no segmento de energia solar, unindo sua
                tradição à tecnologia sustentável.
              </p>
              <p className={`transition-all duration-600 delay-800 ${inView ? 'opacity-100' : 'opacity-0'}`}>
                Hoje, a Eletroluz é reconhecida por ser um ponto de referência em qualidade,
                atendimento e inovação, oferecendo soluções completas — do material elétrico à energia
                solar fotovoltaica.
              </p>
            </div>
            <a
              href="#contato"
              className={`inline-block mt-8 px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 hover:shadow-lg ${
                inView ? 'opacity-100 translate-x-0' : 'opacity-0'
              }`}
              style={{ backgroundColor: BLUE, transitionDelay: '1s' }}
            >
              Entre em Contato
            </a>
          </div>
          <div className="relative">
            <div
              className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-600 ${
                inView ? 'opacity-100 scale-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '1s' }}
            >
              <img
                src="https://storage.lucasmendes.dev/site-sp/eletroluz%2Fimg%2FFACHADA%20ELETRO.webp"
                alt="Fachada Eletroluz Barreiras"
                className="w-full h-auto object-cover"
                style={{ minHeight: '400px', maxHeight: '500px' }}
              />
            </div>
            <div
              className={`absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 rounded-2xl p-6 lg:p-8 shadow-xl transition-all duration-600 ${
                inView ? 'opacity-100 translate-x-0' : 'opacity-0'
              }`}
              style={{ backgroundColor: YELLOW, transitionDelay: '1.4s' }}
            >
              <div className="flex items-center space-x-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(0, 73, 176, 0.1)' }}
                >
                  <Star width={32} height={32} className="lucide lucide-star " style={{ color: BLUE }} />
                </div>
                <div>
                  <div className="text-5xl font-bold" style={{ color: BLUE }}>
                    48
                  </div>
                  <div className="text-lg font-semibold" style={{ color: BLUE }}>
                    Anos de Experiência
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
