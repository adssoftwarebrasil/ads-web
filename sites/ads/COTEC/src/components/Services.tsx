import { Sparkles, ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const WA = 'https://wa.me/5579998311944';
const PARALLAX_IMG = 'https://storage.lucasmendes.dev/site-sp/cotec%2FQuem%20somos.webp';

interface Service {
  img: string;
  title: string;
  text: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/cotec%2FPro%CC%81tese%20Bio%CC%82nicas%20e%20Mioele%CC%81tricas.webp',
    title: 'Prótese Biônicas e Mioelétricas',
    text: 'Tecnologia avançada para recuperar funcionalidade e mobilidade com controle preciso',
    featured: true,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/cotec%2FPro%CC%81teses%20Ortope%CC%81dicas%20Membro%20Superior.webp',
    title: 'Próteses Membro Superior',
    text: 'Soluções personalizadas para membros superiores com máximo conforto e funcionalidade',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/cotec%2FPro%CC%81teses%20Ortope%CC%81dicas%20Membro%20Inferior.webp',
    title: 'Próteses Membro Inferior',
    text: 'Tecnologia avançada para reabilitação e mobilidade com estabilidade superior',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/cotec%2FSapatos%20Ortope%CC%81dicos.webp',
    title: 'Sapatos Ortopédicos',
    text: 'Calçados projetados para máxima ergonomia, suporte e conforto durante todo o dia',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/cotec%2FPalmilhas%20Personalizadas.webp',
    title: 'Palmilhas Personalizadas',
    text: 'Palmilhas feitas sob medida para correção postural e alívio de dores',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/cotec%2FO%CC%81rteses%20Ortope%CC%81dicas.webp',
    title: 'Órteses Ortopédicas',
    text: 'Suporte eficiente e personalizado para todas as condições ortopédicas',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FB6F11]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FB6F11]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-24 lg:py-32">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#FB6F11]/10 border-2 border-[#FB6F11]/20 rounded-full px-6 py-2.5 mb-6 transition-all duration-700 opacity-100 translate-y-0">
            <Sparkles className="lucide lucide-sparkles w-5 h-5 text-[#FB6F11]" />
            <span className="text-[#FB6F11] text-sm font-bold tracking-wide uppercase">Nossos Serviços</span>
          </div>
          <h2 className="text-[#333333] font-bold mb-6 transition-all duration-700 delay-100 text-4xl md:text-5xl lg:text-6xl opacity-100 translate-y-0">
            Conheça Nossas <span className="text-[#FB6F11]">Soluções</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed transition-all duration-700 delay-200 opacity-100 translate-y-0">
            Oferecemos uma variedade de produtos ortopédicos personalizados sob medida que atendem às suas necessidades
            específicas, proporcionando conforto e funcionalidade.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative transition-all duration-500 opacity-100 translate-y-0"
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="relative h-full overflow-hidden rounded-2xl lg:rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#FB6F11]/30">
                {s.featured && (
                  <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-[#FB6F11] to-[#e56410] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <Sparkles className="lucide lucide-sparkles w-4 h-4" />
                    DESTAQUE
                  </div>
                )}
                <div className="relative h-72 overflow-hidden bg-gray-100">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-all duration-700 scale-100 brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/90 via-[#333333]/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-1000 "></div>
                </div>
                <div className="relative p-6 lg:p-7 bg-white flex flex-col">
                  <h3 className="text-[#333333] font-bold text-xl lg:text-2xl mb-3 line-clamp-2 min-h-[3.5rem] leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-base lg:text-lg mb-6 line-clamp-3 flex-grow leading-relaxed">
                    {s.text}
                  </p>
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center justify-center gap-2 w-full text-center px-6 py-4 rounded-xl font-bold text-base transition-all duration-300 bg-[#FB6F11]/10 text-[#FB6F11] border-2 border-[#FB6F11]/30 hover:border-[#FB6F11]/50"
                  >
                    SAIBA MAIS
                    <ArrowRight className="lucide lucide-arrow-right w-5 h-5 transition-transform duration-300 " />
                  </a>
                </div>
                <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border-2 transition-colors duration-500 pointer-events-none border-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative overflow-hidden transition-all duration-700 delay-1000 opacity-100"
        style={{ minHeight: '600px' }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-fixed"
          style={{
            backgroundImage: `url("${PARALLAX_IMG}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
            filter: 'brightness(0.6)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FB6F11]/85 via-[#FB6F11]/75 to-[#e56410]/85"></div>
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 255, 255, 0.05) 10px, rgba(255, 255, 255, 0.05) 20px)',
            }}
          ></div>
        </div>
        <div className="relative z-10 px-6 md:px-8 py-20 lg:py-28 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 shadow-xl">
              <Sparkles className="lucide lucide-sparkles w-10 h-10 text-white" />
            </div>
            <h3 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight drop-shadow-lg">
              Não encontrou o que procurava?
            </h3>
            <p className="text-white/95 text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed font-medium drop-shadow-md">
              Nossa equipe de especialistas está pronta para criar a solução perfeita para você
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 bg-white text-[#FB6F11] px-10 py-5 rounded-full font-bold text-lg lg:text-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl"
            >
              <WhatsAppIcon className="w-7 h-7" />
              Fale com Nossos Especialistas
              <ArrowRight className="lucide lucide-arrow-right w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <div className="absolute top-8 left-8 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-8 right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
