import { useEffect, useRef } from 'react';
import { CheckCircle2, Award, Users, Clock } from 'lucide-react';

const ABOUT_IMG_MAIN = 'https://storage.lucasmendes.dev/site-sp/gulgielmin%20transformadores/img/transformador-eletrico-cinza-com-radiadores-industriais_1200x1600.webp';
const ABOUT_IMG_SEC = 'https://storage.lucasmendes.dev/site-sp/gulgielmin%20transformadores/img/transformador-bobinas-cobre-palete-industrial_1200x1600.webp';

const FEATURES = [
  'Equipe técnica altamente qualificada',
  'Materiais de alta qualidade certificados',
  'Atendimento em toda a região de MT',
  'Garantia em todos os serviços realizados',
  'Diagnóstico técnico especializado',
  'Manutenção preventiva programada',
];

const BADGES = [
  { icon: Award, label: '+20 Anos', sub: 'de experiência' },
  { icon: Users, label: 'Centenas', sub: 'de clientes atendidos' },
  { icon: Clock, label: '7h às 18h', sub: 'de atendimento' },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll(
      '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right'
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-brand-light" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative animate-on-scroll-left order-2 lg:order-1">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={ABOUT_IMG_MAIN}
                  alt="Transformador elétrico industrial com radiadores"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -right-4 sm:-right-8 z-20 rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-36 sm:w-44 h-52 sm:h-64">
                <img
                  src={ABOUT_IMG_SEC}
                  alt="Bobinas de cobre de transformador industrial"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -top-4 -left-4 sm:-left-6 z-20 bg-brand-yellow rounded-2xl p-4 shadow-xl">
                <p className="text-brand-dark text-2xl sm:text-3xl font-black leading-none">+20</p>
                <p className="text-brand-dark text-xs font-semibold">Anos de<br />Experiência</p>
              </div>
            </div>

            <div className="flex gap-4 mt-16 sm:mt-12">
              {BADGES.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex-1 bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center"
                >
                  <Icon size={20} className="text-brand-yellow mx-auto mb-2" />
                  <p className="text-brand-dark font-black text-base leading-tight">{label}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll-right order-1 lg:order-2">
            <span className="text-brand-yellow-4 text-xs font-semibold tracking-widest uppercase block mb-3">
              Quem somos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark leading-tight mb-6">
              Referência em{' '}
              <span className="relative">
                <span className="relative z-10">Transformadores</span>
                <span
                  className="absolute bottom-1 left-0 right-0 h-3 bg-brand-yellow/40 -z-0"
                  aria-hidden="true"
                />
              </span>{' '}
              no Mato Grosso
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-4">
              A <strong className="text-brand-dark">Eletrotécnica Gulgielmin</strong> é uma empresa especializada
              em rebobinagem de transformadores de média tensão, com mais de 20 anos de experiência
              no mercado elétrico industrial. Sediada em Lucas do Rio Verde — MT, somos referência
              regional em soluções elétricas de alta performance.
            </p>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Nossa equipe técnica qualificada oferece atendimento profissional, garantindo qualidade,
              segurança e eficiência em cada serviço. Atuamos em diagnóstico técnico, reparos,
              manutenção preventiva e suporte completo para equipamentos elétricos industriais,
              atendendo empresas e indústrias em todo o estado do Mato Grosso.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-yellow-4 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5565996248334?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Gulgielmin."
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-yellow text-brand-dark font-bold text-sm px-8 py-3.5 rounded-full text-center hover:opacity-90 transition-all hover:scale-105 shadow-md"
              >
                Entre em Contato
              </a>
              <a
                href="#galeria"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#galeria')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-brand-dark/20 text-brand-dark font-semibold text-sm px-8 py-3.5 rounded-full text-center hover:border-brand-yellow-4 transition-all"
              >
                Ver Galeria
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
