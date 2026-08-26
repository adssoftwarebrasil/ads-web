import { useEffect, useRef } from 'react';
import { Car, Lock, Key, Shield, Wrench, Home, Package, Zap } from 'lucide-react';

const SERVICES = [
  {
    icon: Car,
    title: 'Chave Automotiva',
    description: 'Cópia, reparo e programação de chaves automotivas de todas as marcas. Canivete VW, Fiat, Jeep Renegade e mais.',
    highlight: true,
  },
  {
    icon: Lock,
    title: 'Fechadura Digital',
    description: 'Instalação e manutenção de fechaduras digitais. Tecnologia de ponta para mais segurança e conforto na sua casa.',
    highlight: false,
  },
  {
    icon: Key,
    title: 'Cópia de Chaves',
    description: 'Cópias precisas de chaves residenciais, comerciais e automotivas. Rapidez e qualidade garantidas.',
    highlight: false,
  },
  {
    icon: Shield,
    title: 'Abertura de Cofre',
    description: 'Abertura e manutenção de cofres com segurança e discrição. Atendemos residências e empresas.',
    highlight: false,
  },
  {
    icon: Home,
    title: 'Abertura de Portas',
    description: 'Ficou trancado do lado de fora? Nossa equipe vai até você com rapidez para resolver o problema.',
    highlight: false,
  },
  {
    icon: Wrench,
    title: 'Troca de Fechaduras',
    description: 'Substituição completa de fechaduras residenciais e comerciais com os melhores produtos do mercado.',
    highlight: false,
  },
  {
    icon: Package,
    title: 'Controle de Portão',
    description: 'Duplicação e programação de controles remotos de portão. Compatibilidade com as principais marcas.',
    highlight: false,
  },
  {
    icon: Zap,
    title: 'Emergência 24h',
    description: 'Atendimento emergencial noturno e 24 horas para situações urgentes. Ligue agora, estamos prontos!',
    highlight: true,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const cards = sectionRef.current?.querySelectorAll('.section-animate');
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" ref={sectionRef} className="bg-brand-gray-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-animate text-center mb-14">
          <span className="inline-block text-brand-yellow text-sm font-semibold uppercase tracking-widest mb-3">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-white mb-4">
            Serviços Especializados
          </h2>
          <p className="text-brand-white/60 text-base sm:text-lg max-w-2xl mx-auto">
            Soluções completas em segurança para veículos, residências e empresas.
            Atendimento técnico de excelência desde 1994.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`section-animate group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 cursor-default ${
                  service.highlight
                    ? 'bg-brand-yellow border-brand-yellow'
                    : 'bg-brand-black/40 border-white/8 hover:border-brand-yellow/40 hover:bg-brand-black/60'
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    service.highlight
                      ? 'bg-brand-black/20'
                      : 'bg-brand-yellow/10 group-hover:bg-brand-yellow/20'
                  }`}
                >
                  <Icon
                    size={24}
                    className={service.highlight ? 'text-brand-black' : 'text-brand-yellow'}
                  />
                </div>
                <h3
                  className={`font-bold text-base mb-2 ${
                    service.highlight ? 'text-brand-black' : 'text-brand-white'
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    service.highlight ? 'text-brand-black/70' : 'text-brand-white/55'
                  }`}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="section-animate text-center mt-12">
          <a
            href="http://wa.me/5519988923111?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-black font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,192,1,0.4)] hover:-translate-y-1"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Solicitar Orçamento Grátis
          </a>
        </div>
      </div>
    </section>
  );
}
