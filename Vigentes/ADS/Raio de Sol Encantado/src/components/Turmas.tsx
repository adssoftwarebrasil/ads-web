import { useReveal } from '../hooks/useReveal';
import WhatsAppIcon from './WhatsAppIcon';

interface Turma {
  color: string;
  image: string;
  alt: string;
  badge: string;
  icon: string;
  title: string;
  items: string[];
  delay: number;
}

const turmas: Turma[] = [
  {
    color: 'rgb(252,198,47)',
    image:
      'https://storage.lucasmendes.dev/site-sp/raiodesolencantado%2Fimg%2Fcadeiras-bebe-colorido.webp',
    alt: 'Berçário',
    badge: '0 - 1.4 anos',
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Berçário',
    items: ['Berçário I - 0 a 8 meses', 'Berçário II - 9 a 12 meses', 'Berçário III - 1 a 1,4 anos'],
    delay: 300,
  },
  {
    color: 'rgb(73,172,213)',
    image:
      'https://storage.lucasmendes.dev/site-sp/raiodesolencantado%2Fimg%2Fbrinquedos-coloridos-chao.webp',
    alt: 'Maternal',
    badge: '1.5 - 3 anos',
    icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6',
    title: 'Maternal',
    items: ['Maternal I - 1,5 a 2 anos', 'Maternal II - 2 a 3 anos'],
    delay: 450,
  },
  {
    color: 'rgb(224,68,72)',
    image:
      'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=raiodesolencantado%2Fimage_1.png&version_id=null',
    alt: 'Nível I e II',
    badge: '3 - 5 anos',
    icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
    title: 'Nível I e II',
    items: ['Nível I - 3 a 4 anos', 'Nível II - 4 a 5 anos'],
    delay: 600,
  },
  {
    color: 'rgb(252,198,47)',
    image:
      'https://storage.lucasmendes.dev/site-sp/raiodesolencantado%2Fimg%2Fsalas-infantis-cadeiras-brinquedos.webp',
    alt: 'Nível III',
    badge: '5 - 6 anos',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    title: 'Nível III',
    items: ['Nível III - 5 a 6 anos'],
    delay: 750,
  },
];

export default function Turmas() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const show = visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  return (
    <section
      id="turmas"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-[rgb(252,198,47)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[rgb(73,172,213)]/10 rounded-full blur-3xl"></div>
      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <div className={`inline-block transition-all duration-1000 ${show}`}>
            <span className="inline-block px-4 py-2 bg-[rgb(224,68,72)]/10 text-[rgb(224,68,72)] rounded-full text-sm font-semibold mb-4">
              Turmas por Faixa Etária
            </span>
          </div>
          <h2 className={`text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 delay-100 ${show}`}>
            Nossas <span className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000">Turmas</span>
          </h2>
          <p className={`text-gray-600 text-base lg:text-lg max-w-2xl mx-auto transition-all duration-1000 delay-200 ${show}`}>
            Turmas organizadas por idade para um desenvolvimento adequado e personalizado
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {turmas.map((t) => (
            <div
              key={t.title}
              className={`group relative transition-all duration-1000 ${show}`}
              style={{ transitionDelay: `${t.delay}ms` }}
            >
              <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: t.color }}></div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                    <span className="text-gray-800 text-xs font-semibold">{t.badge}</span>
                  </div>
                  <div
                    className="absolute top-3 right-3 text-white p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: t.color }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={t.icon} />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl lg:text-2xl font-bold mb-1" style={{ color: t.color }}>
                    {t.title}
                  </h3>
                  <div
                    className="w-12 h-1 rounded-full mb-5 transform origin-left group-hover:scale-x-150 transition-transform duration-500"
                    style={{ backgroundColor: t.color }}
                  ></div>
                  <ul className="space-y-3">
                    {t.items.map((item) => (
                      <li key={item} className="flex items-start space-x-3 group/item">
                        <div className="flex-shrink-0 mt-1.5">
                          <div
                            className="w-1.5 h-1.5 rounded-full group-hover/item:scale-150 transition-transform duration-300"
                            style={{ backgroundColor: t.color }}
                          ></div>
                        </div>
                        <span className="text-gray-700 text-sm lg:text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `linear-gradient(to bottom right, ${t.color}1a, ${t.color}0d)` }}></div>
              </div>
            </div>
          ))}
        </div>
        <div className={`text-center mt-16 lg:mt-20 transition-all duration-1000 delay-700 ${show}`}>
          <div className="bg-gradient-to-r from-[rgb(224,68,72)]/5 via-[rgb(252,198,47)]/5 to-[rgb(73,172,213)]/5 rounded-2xl p-8 lg:p-10 max-w-3xl mx-auto">
            <p className="text-gray-800 text-lg lg:text-xl font-semibold mb-4">Encontre a turma ideal para seu filho</p>
            <p className="text-gray-600 text-base mb-6">
              Entre em contato para mais informações sobre matrículas e disponibilidade
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=551636203244&text=Olá! Gostaria de informações sobre as turmas disponíveis."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[rgb(224,68,72)] to-[rgb(240,90,94)] text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95"
            >
              <span>Consultar Vagas</span>
              <WhatsAppIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
