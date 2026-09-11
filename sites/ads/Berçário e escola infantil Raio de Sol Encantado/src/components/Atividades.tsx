import { useReveal } from '../hooks/useReveal';

interface Atividade {
  gradient: string;
  name: string;
  icon: string;
  fill?: boolean;
  delay: number;
}

const atividades: Atividade[] = [
  { gradient: 'from-pink-500 to-pink-600', name: 'Ballet', delay: 300, icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z||M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { gradient: 'from-red-500 to-red-600', name: 'Judô', delay: 380, icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { gradient: 'from-green-500 to-green-600', name: 'Futebol', delay: 460, icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { gradient: 'from-purple-500 to-purple-600', name: 'Musicalização', delay: 540, icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3' },
  { gradient: 'from-blue-500 to-blue-600', name: 'Inglês', delay: 620, icon: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129' },
  { gradient: 'from-indigo-500 to-indigo-600', name: 'Robótica', delay: 700, icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { gradient: 'from-cyan-500 to-cyan-600', name: 'Circo', delay: 780, fill: true, icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm5 0c.83 0 1.5-.67 1.5-1.5S12.83 8 12 8s-1.5.67-1.5 1.5S11.17 11 12 11zm5 0c.83 0 1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5S16.17 11 17 11zm-5 4c2.33 0 4.32 1.45 5.12 3.5H6.88c.8-2.05 2.79-3.5 5.12-3.5z' },
  { gradient: 'from-teal-500 to-teal-600', name: 'Educação Física', delay: 860, icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
];

export default function Atividades() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const show = visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';
  const showCard = visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';

  return (
    <section id="atividades" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[rgb(73,172,213)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[rgb(252,198,47)] rounded-full blur-3xl"></div>
      </div>
      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <div className={`inline-block transition-all duration-1000 ${show}`}>
            <span className="inline-block px-4 py-2 bg-[rgb(73,172,213)]/10 text-[rgb(73,172,213)] rounded-full text-sm font-semibold mb-4">
              Desenvolvimento Integral
            </span>
          </div>
          <h2 className={`text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 delay-100 ${show}`}>
            Atividades Extras
          </h2>
          <p className={`text-gray-600 text-base lg:text-lg max-w-2xl mx-auto transition-all duration-1000 delay-200 ${show}`}>
            Amplie o potencial do seu filho com nossas atividades complementares
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto mb-12">
          {atividades.map((a) => (
            <div
              key={a.name}
              className={`group relative transition-all duration-1000 ${showCard}`}
              style={{ transitionDelay: `${a.delay}ms` }}
            >
              <div className="relative bg-white rounded-2xl shadow-md hover:shadow-xl p-6 lg:p-8 text-center transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="relative mb-4 flex justify-center">
                  <div className={`bg-gradient-to-br ${a.gradient} text-white p-4 rounded-xl shadow-md group-hover:scale-110 transition-all duration-500`}>
                    <svg className="w-8 h-8" fill={a.fill ? 'currentColor' : 'none'} stroke={a.fill ? undefined : 'currentColor'} viewBox="0 0 24 24">
                      {a.fill ? (
                        <path d={a.icon} />
                      ) : (
                        a.icon.split('||').map((p, i) => (
                          <path key={i} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={p} />
                        ))
                      )}
                    </svg>
                  </div>
                </div>
                <h3 className="relative text-gray-900 text-base lg:text-lg font-bold">{a.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-700 ${show}`}>
          <div className="relative bg-gray-50 rounded-2xl shadow-lg p-8 lg:p-10 border border-gray-200">
            <div className="flex justify-center mb-6">
              <div className="bg-[rgb(73,172,213)] text-white p-5 rounded-2xl shadow-md">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
            </div>
            <div className="relative text-center space-y-3">
              <h3 className="text-gray-900 text-2xl lg:text-3xl font-bold">Convênio com Escolas de Natação</h3>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                Oferecemos parceria com as melhores escolas de natação da região para complementar o desenvolvimento físico e motor das crianças
              </p>
              <div className="inline-flex items-center space-x-2 bg-[rgb(73,172,213)]/10 px-4 py-2 rounded-full mt-4">
                <svg className="w-5 h-5 text-[rgb(73,172,213)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[rgb(73,172,213)] font-semibold text-sm">Atividade Opcional</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`text-center mt-12 lg:mt-16 transition-all duration-1000 delay-1000 ${show}`}>
          <a
            href="https://api.whatsapp.com/send?phone=551636203244&text=Olá! Gostaria de saber mais sobre as atividades extras oferecidas."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[rgb(224,68,72)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[rgb(204,48,52)] hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95"
          >
            <span>Saiba Mais Sobre as Atividades</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
