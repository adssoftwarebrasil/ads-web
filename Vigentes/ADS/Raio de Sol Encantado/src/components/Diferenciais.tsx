import { useReveal } from '../hooks/useReveal';

interface Item {
  number: string;
  gradient: string;
  dotColor: string;
  barGradient: string;
  textColor: string;
  icon: string;
  title: string;
  text: string;
  delay: number;
}

const items: Item[] = [
  {
    number: '1',
    gradient: 'from-[rgb(252,198,47)] to-[rgb(255,210,80)]',
    dotColor: 'rgb(252,198,47)',
    barGradient: 'from-[rgb(252,198,47)] to-[rgb(255,210,80)]',
    textColor: 'rgb(252,198,47)',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    title: 'Abordagem Sociointeracionista',
    text: 'Trabalhamos com o Sistema de Ensino Expoente, integrado ao nosso projeto pedagógico anual, desenvolvendo projetos específicos para cada faixa etária.',
    delay: 300,
  },
  {
    number: '2',
    gradient: 'from-[rgb(73,172,213)] to-[rgb(100,190,230)]',
    dotColor: 'rgb(73,172,213)',
    barGradient: 'from-[rgb(73,172,213)] to-[rgb(100,190,230)]',
    textColor: 'rgb(73,172,213)',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    title: 'Espaços Harmoniosos',
    text: 'Ambientes projetados para proporcionar liberdade de expressão, criatividade, bem-estar e muita diversão em cada momento do aprendizado.',
    delay: 450,
  },
  {
    number: '3',
    gradient: 'from-[rgb(224,68,72)] to-[rgb(240,90,94)]',
    dotColor: 'rgb(224,68,72)',
    barGradient: 'from-[rgb(224,68,72)] to-[rgb(240,90,94)]',
    textColor: 'rgb(224,68,72)',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Horário Flexível',
    text: 'Funcionamento das 7h às 19h de segunda a sexta, com flexibilidade de horários para atender as necessidades das famílias.',
    delay: 600,
  },
];

export default function Diferenciais() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const show = visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';
  const showCard = visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';

  return (
    <section id="diferenciais" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(252,198,47)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(73,172,213)]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <div className={`inline-block transition-all duration-1000 ${show}`}>
            <span className="inline-block px-4 py-2 bg-[rgb(73,172,213)]/10 text-[rgb(73,172,213)] rounded-full text-sm font-semibold mb-4">
              Nossos Diferenciais
            </span>
          </div>
          <h2 className={`text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 delay-100 ${show}`}>
            Por Que Escolher a <span className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000">Raio de Sol Encantado</span>?
          </h2>
          <p className={`text-gray-600 text-base lg:text-lg max-w-2xl mx-auto transition-all duration-1000 delay-200 ${show}`}>
            Educação de qualidade com amor, dedicação e metodologia comprovada há mais de 25 anos
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {items.map((it) => (
            <div
              key={it.number}
              className={`group relative transition-all duration-1000 ${showCard}`}
              style={{ transitionDelay: `${it.delay}ms` }}
            >
              <div className="relative h-full bg-white rounded-2xl p-8 lg:p-10 border-2 border-gray-100 transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span className="text-gray-600 text-xl font-bold">{it.number}</span>
                </div>
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${it.gradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={it.icon} />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500" style={{ backgroundColor: it.dotColor }}></div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-bold leading-tight" style={{ color: it.textColor }}>
                    {it.title}
                  </h3>
                  <div className={`w-12 h-1 bg-gradient-to-r ${it.barGradient} rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-500`}></div>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{it.text}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20"></div>
              </div>
            </div>
          ))}
        </div>
        <div className={`text-center mt-16 lg:mt-20 transition-all duration-1000 delay-700 ${show}`}>
          <p className="text-gray-700 text-base lg:text-lg mb-6">Quer conhecer mais sobre nossa metodologia?</p>
          <a
            href="https://api.whatsapp.com/send?phone=551636203244&text=Olá! Gostaria de conhecer mais sobre a metodologia da escola."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[rgb(224,68,72)] to-[rgb(240,90,94)] text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95"
          >
            <span>Fale Conosco</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
