import { useReveal } from '../hooks/useReveal';

const CALENDAR_PATH =
  'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z';
const USERS_PATH =
  'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z';
const FACE_PATH =
  'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
const BOOK_PATH =
  'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253';
const HOME_PATH =
  'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6';
const TEAM_PATH =
  'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z';

const stats = [
  { icon: CALENDAR_PATH, value: '1997', label: 'Fundada em' },
  { icon: USERS_PATH, value: '25+', label: 'Anos de Experiência' },
  { icon: FACE_PATH, value: '0-6', label: 'Anos de Idade' },
];

const cards = [
  {
    icon: BOOK_PATH,
    title: 'Nosso Início',
    text: 'A Raio de Sol Encantado nasceu em outubro de 1997 do sonho de uma jovem em resgatar todo o universo de brincadeiras infantis. A ideia era mesclar este universo, esquecido em meio à modernização da sociedade, com o desenvolvimento intelectual das crianças.',
  },
  {
    icon: HOME_PATH,
    title: 'Espaços Planejados',
    text: 'Projetamos a escola com muito cuidado, pensando em espaços harmoniosos, que pudessem proporcionar às crianças liberdade de expressão, criatividade, bem-estar, conhecimento e muita diversão. Trabalhamos com abordagem pedagógica sociointeracionista, onde a construção do conhecimento se dá pela interação entre aluno e professor.',
  },
  {
    icon: TEAM_PATH,
    title: 'Equipe Qualificada',
    text: 'Selecionamos profissionais capacitados para desenvolver todo o potencial das crianças, oferecendo toda a praticidade que exige o dia a dia. Recebemos sempre de braços abertos aqueles que querem fazer parte da família Raio de Sol Encantado.',
  },
];

export default function Sobre() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const show = visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  return (
    <section id="sobre" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[rgb(73,172,213)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[rgb(252,198,47)] rounded-full blur-3xl"></div>
      </div>
      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <div className={`inline-block transition-all duration-1000 ${show}`}>
            <span className="inline-block px-4 py-2 bg-[rgb(73,172,213)]/10 text-[rgb(73,172,213)] rounded-full text-sm font-semibold mb-4">
              Nossa História
            </span>
          </div>
          <h2 className={`text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-1000 delay-100 ${show}`}>
            Mais de 25 Anos Transformando Vidas
          </h2>
          <p className={`text-gray-600 text-base lg:text-lg max-w-2xl mx-auto transition-all duration-1000 delay-200 ${show}`}>
            Uma jornada de dedicação, amor e educação de qualidade
          </p>
        </div>
        <div className={`grid grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto mb-16 lg:mb-20 transition-all duration-1000 delay-300 ${show}`}>
          {stats.map((s) => (
            <div
              key={s.value}
              className="group bg-gray-50 rounded-2xl p-4 lg:p-6 text-center border border-gray-200 hover:border-[rgb(73,172,213)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-3">
                <div className="bg-[rgb(73,172,213)] text-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} />
                  </svg>
                </div>
              </div>
              <div className="text-[rgb(224,68,72)] text-2xl lg:text-3xl font-bold mb-1">{s.value}</div>
              <div className="text-gray-600 text-xs lg:text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
        <div className={`max-w-2xl mx-auto mb-16 lg:mb-20 transition-all duration-1000 delay-[400ms] ${show}`}>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gray-100 rounded-3xl blur-xl opacity-50"></div>
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/raiodesolencantado%2Fimg%2Fsol-sorridente-alegre.webp"
                alt="Raio de Sol Encantado - Mascote"
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-xl transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className={`space-y-6 lg:space-y-8 max-w-4xl mx-auto transition-all duration-1000 delay-[600ms] ${show}`}>
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-200 hover:border-[rgb(73,172,213)] hover:shadow-lg transition-all duration-500"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[rgb(73,172,213)] text-white p-4 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={c.icon} />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-gray-900 font-bold text-xl lg:text-2xl mb-4">{c.title}</h3>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`text-center mt-16 lg:mt-20 transition-all duration-1000 delay-[800ms] ${show}`}>
          <a
            href="https://api.whatsapp.com/send?phone=551636203244&text=Olá! Gostaria de conhecer mais sobre a história e metodologia da escola."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[rgb(224,68,72)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[rgb(204,48,52)] hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95"
          >
            <span>Conheça Nossa Escola</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
