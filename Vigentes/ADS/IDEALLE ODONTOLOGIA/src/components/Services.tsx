import { useEffect, useRef } from 'react';
import {
  Sparkles,
  Smile,
  Layers,
  AlignJustify,
  Activity,
  Shield,
  Zap,
  Heart,
} from 'lucide-react';

const services = [
  {
    icon: <Zap size={22} />,
    title: 'Implantes Dentários',
    desc: 'Recupere a função e estética do seu sorriso com implantes de alta precisão, substituindo dentes perdidos de forma natural e duradoura.',
    highlight: 'Tratamento mais procurado',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Clareamento Dental',
    desc: 'Dentes até 8 tons mais brancos em poucas sessões. Procedimento seguro, supervisionado e com resultado imediato e duradouro.',
    highlight: null,
  },
  {
    icon: <Smile size={22} />,
    title: 'Facetas em Resina',
    desc: 'Corrija forma, cor e pequenos defeitos do sorriso com facetas de resina aplicadas diretamente, sem desgaste excessivo do dente.',
    highlight: null,
  },
  {
    icon: <Layers size={22} />,
    title: 'Prótese Dentária',
    desc: 'Próteses fixas e removíveis, incluindo o Protocolo sobre Implantes, para reabilitar sorrisos com estética e funcionalidade completa.',
    highlight: null,
  },
  {
    icon: <AlignJustify size={22} />,
    title: 'Aparelho Ortodôntico',
    desc: 'Dentes alinhados com aparelhos metálicos, estéticos ou invisíveis. Tratamento personalizado para cada perfil e necessidade.',
    highlight: null,
  },
  {
    icon: <Activity size={22} />,
    title: 'Canal (Endodontia)',
    desc: 'Tratamento de canal com tecnologia de última geração, eliminando a dor e preservando seu dente natural com máximo conforto.',
    highlight: null,
  },
  {
    icon: <Shield size={22} />,
    title: 'Estética Dentária',
    desc: 'Design do sorriso personalizado, harmonizando proporções, contornos e cor para um resultado autêntico e sofisticado.',
    highlight: null,
  },
  {
    icon: <Heart size={22} />,
    title: 'Limpeza & Prevenção',
    desc: 'Profilaxia profissional, orientação de higiene e exames preventivos. O cuidado contínuo que garante saúde bucal a longo prazo.',
    highlight: null,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    el.querySelectorAll('.animate-on-scroll').forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[rgb(146,114,84)] mb-3">
            Nossos Tratamentos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2a2016] mb-4">
            Cuide do seu sorriso com{' '}
            <span className="text-[rgb(146,114,84)]">quem entende</span>
          </h2>
          <p className="text-[rgba(131,123,109,0.996)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Oferecemos uma linha completa de tratamentos odontológicos, da prevenção à reabilitação
            total, com tecnologia e atenção personalizada em cada etapa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`animate-on-scroll delay-${Math.min((i % 4 + 1) * 100, 400)} group relative bg-[#faf7f4] hover:bg-[rgb(146,114,84)] border border-[rgba(146,114,84,0.15)] rounded-2xl p-6 transition-all duration-400 hover:shadow-xl hover:shadow-[rgba(146,114,84,0.2)] hover:-translate-y-1 cursor-default`}
            >
              {service.highlight && (
                <span className="absolute -top-3 left-4 bg-[rgb(146,114,84)] group-hover:bg-white text-white group-hover:text-[rgb(146,114,84)] text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full transition-colors duration-300">
                  {service.highlight}
                </span>
              )}
              <div className="w-11 h-11 rounded-xl bg-[rgba(146,114,84,0.12)] group-hover:bg-white/20 flex items-center justify-center text-[rgb(146,114,84)] group-hover:text-white mb-4 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="font-serif text-base font-semibold text-[#2a2016] group-hover:text-white mb-2 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-[rgba(131,123,109,0.996)] group-hover:text-white/85 leading-relaxed transition-colors duration-300">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <a
            href="https://wa.me/556696621999?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20tratamentos%20disponíveis."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[rgb(146,114,84)] hover:bg-[rgb(138,117,90)] text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(146,114,84,0.3)] hover:-translate-y-0.5"
          >
            Consultar sobre um tratamento
          </a>
        </div>
      </div>
    </section>
  );
}
