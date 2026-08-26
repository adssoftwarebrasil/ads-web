import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { WhatsAppIcon, ArrowRight, ChevronRightThin, BoltIcon } from './icons';
import { WHATSAPP_URL } from '../constants';

const IMG = 'https://storage.lucasmendes.dev/site-sp/jd-baterias%2Fimg%2F';

type Filter = 'Todos' | 'Categorias' | 'Marcas' | 'Serviços';

const CATEGORIES = [
  {
    title: 'Baterias para Carros e Motos',
    desc: 'Linha completa de baterias para automóveis e motocicletas de todas as marcas e modelos.',
    img: IMG + 'BATERIAS_PARA_CARROS_E_MOTOS.png',
    delay: '400ms',
  },
  {
    title: 'Baterias Start-Stop (EFB e AGM)',
    desc: 'Baterias especiais para veículos com sistema Start-Stop, garantindo alta resistência e durabilidade.',
    img: IMG + 'BATERIA_START_SHOP.png',
    delay: '500ms',
  },
  {
    title: 'Baterias Estacionárias',
    desc: 'Soluções para nobreaks, sistemas de energia solar, telecomunicações e segurança.',
    img: IMG + 'BATERIAS_ESTACIONARIAS.png',
    delay: '600ms',
  },
];

type SmallCard = {
  title: string;
  desc: string;
  img: string;
  type: 'marca' | 'servico';
  delay: string;
};

const SMALL_CARDS: SmallCard[] = [
  { title: 'Baterias Moura', desc: 'Baterias confiáveis e eficientes, reconhecidas pela qualidade e desempenho superior.', img: IMG + 'Baterias%20Moura.jpeg', type: 'marca', delay: '500ms' },
  { title: 'Baterias Heliar', desc: 'Performance excepcional com tecnologia avançada para máxima durabilidade.', img: IMG + 'Baterias%20Heliar.webp', type: 'marca', delay: '580ms' },
  { title: 'Baterias Tudor', desc: 'Alto padrão de qualidade com excelente potência de arranque.', img: IMG + 'Baterias%20Tudor.jpeg', type: 'marca', delay: '660ms' },
  { title: 'Baterias Cral', desc: 'Opções robustas com excelente potência e longa vida útil.', img: IMG + 'Baterias%20Cral.png', type: 'marca', delay: '740ms' },
  { title: 'Baterias Original', desc: 'Excelente custo-benefício com durabilidade e desempenho confiável.', img: IMG + 'Baterias%20Original.png', type: 'marca', delay: '820ms' },
  { title: 'Baterias Pioneiro', desc: 'Modelos confiáveis com ótimo custo-benefício para uso diário.', img: IMG + 'Baterias%20Pioneiro.png', type: 'marca', delay: '900ms' },
  { title: 'Baterias Zetta', desc: 'Novas opções no mercado para atender diversas necessidades.', img: IMG + 'Baterias%20Zetta.webp', type: 'marca', delay: '980ms' },
  { title: 'Baterias Excell', desc: 'Ótimo custo-benefício com desempenho consistente.', img: IMG + 'Baterias%20Excell.webp', type: 'marca', delay: '1060ms' },
  { title: 'Instalação Grátis', desc: 'Profissionais preparados para instalação imediata e segura.', img: IMG + 'Instalac%CC%A7a%CC%83o%20Gra%CC%81tis.jpeg', type: 'servico', delay: '1140ms' },
  { title: 'Entregas em Domicílio', desc: 'Receba sua bateria no conforto da sua casa com agilidade.', img: IMG + 'Entregas%20em%20Domici%CC%81lio.jpg', type: 'servico', delay: '1220ms' },
];

const FILTERS: Filter[] = ['Todos', 'Categorias', 'Marcas', 'Serviços'];

export default function Services() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [filter, setFilter] = useState<Filter>('Todos');

  const showFeatured = filter === 'Todos' || filter === 'Categorias';
  const showSmall = filter !== 'Categorias';

  const smallItems = SMALL_CARDS.filter((c) => {
    if (filter === 'Marcas') return c.type === 'marca';
    if (filter === 'Serviços') return c.type === 'servico';
    if (filter === 'Categorias') return false;
    return true;
  });

  const reveal = (extra: string) => (inView ? 'opacity-100 translate-y-0' : `opacity-0 ${extra}`);

  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#f8f9fa] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{ background: 'rgb(254, 186, 0)' }}></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5 blur-3xl" style={{ background: 'rgb(4, 51, 140)' }}></div>
      <div ref={ref} className="container mx-auto px-4 max-w-[1200px] relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            style={{ backgroundColor: 'rgba(254, 186, 0, 0.15)', color: 'rgb(4, 51, 140)' }}
          >
            <BoltIcon className="w-4 h-4" />
            Nossos Serviços
          </div>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 transition-all duration-700 delay-100 ${reveal('translate-y-4')}`}
            style={{ color: 'rgb(4, 51, 140)' }}
          >
            Soluções Completas em{' '}
            <span className="relative inline-block">
              Baterias
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 150 2 198 8" stroke="rgb(254, 186, 0)" strokeWidth="4" strokeLinecap="round"></path>
              </svg>
            </span>
          </h2>
          <p className={`text-[#555] text-lg md:text-xl max-w-[650px] mx-auto leading-relaxed transition-all duration-700 delay-200 ${reveal('translate-y-4')}`}>
            Oferecemos uma ampla variedade de baterias para veículos, entregas rápidas e instalação gratuita para sua
            total comodidade.
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-300 ${reveal('translate-y-4')}`}>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={
                filter === f
                  ? 'px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 text-white shadow-lg scale-105'
                  : 'px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 bg-white text-[#555] hover:bg-gray-100 shadow-sm'
              }
              style={filter === f ? { backgroundColor: 'rgb(4, 51, 140)' } : undefined}
            >
              {f}
            </button>
          ))}
        </div>

        {showFeatured && (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.title}
                  className={`group relative rounded-2xl overflow-hidden h-72 md:h-80 transition-all duration-700 ${reveal('translate-y-8')}`}
                  style={{ transitionDelay: cat.delay }}
                >
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to top, rgba(4, 51, 140, 0.95) 0%, rgba(4, 51, 140, 0.6) 50%, rgba(4, 51, 140, 0.2) 100%)' }}
                  ></div>
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{ backgroundColor: 'rgb(254, 186, 0)', color: 'rgb(4, 51, 140)' }}
                  >
                    Categoria
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      {cat.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2">{cat.desc}</p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:gap-3"
                      style={{ backgroundColor: 'rgb(254, 186, 0)', color: 'rgb(4, 51, 140)' }}
                    >
                      Solicitar Orçamento
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {showSmall && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {smallItems.map((card) => (
              <div
                key={card.title}
                className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${reveal('translate-y-8')}`}
                style={{ transitionDelay: card.delay }}
              >
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(4, 51, 140, 0.8)' }}
                  >
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: 'rgb(254, 186, 0)', color: 'rgb(4, 51, 140)' }}
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      Pedir Agora
                    </a>
                  </div>
                  {card.type === 'marca' ? (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold uppercase" style={{ backgroundColor: 'rgb(4, 51, 140)', color: 'white' }}>
                      Marca
                    </div>
                  ) : (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold uppercase" style={{ backgroundColor: 'rgb(254, 186, 0)', color: 'rgb(4, 51, 140)' }}>
                      Serviço
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[rgb(4,51,140)] transition-colors duration-300" style={{ color: 'rgb(26, 26, 26)' }}>
                    {card.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed mb-4 line-clamp-2">{card.desc}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 hover:gap-2.5"
                    style={{ color: 'rgb(4, 51, 140)' }}
                  >
                    Saiba Mais
                    <ChevronRightThin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${reveal('translate-y-4')}`}>
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 rounded-2xl"
            style={{ background: 'linear-gradient(135deg, rgb(4, 51, 140) 0%, rgb(6, 70, 180) 100%)' }}
          >
            <div className="text-white text-center sm:text-left">
              <p className="text-lg md:text-xl font-bold mb-1">Não encontrou o que procura?</p>
              <p className="text-white/80 text-sm">Trabalhamos com mais de 15 marcas. Fale conosco!</p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap"
              style={{ backgroundColor: 'rgb(254, 186, 0)', color: 'rgb(4, 51, 140)' }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
