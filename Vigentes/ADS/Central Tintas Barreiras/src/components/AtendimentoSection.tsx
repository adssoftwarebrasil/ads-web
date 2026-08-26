import { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

const cities = [
  'Barreiras',
  'Cristópolis',
  'São Desidério',
  'Baianópolis',
  'Corrente - PI',
  'Formosa do Rio Preto',
  'Angical',
  'Divinópolis - GO',
  'Luís Eduardo Magalhães',
  'Cotegipe',
  'Riachão das Neves',
  'Bom Jesus do Piauí - PI',
  'Wanderlei',
];

const bairros = [
  'São Miguel',
  'Vila Brasil',
  'Santa Luzia',
  'Ouro Branco',
  'Novo Horizonte',
  'Barreirinhas',
  'Vila Rica',
  'Vila dos Funcionários',
  'Serra do Mimo',
  'Bandeirantes',
  'Loteamento Flamengo',
];

export default function AtendimentoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="atendimento" ref={sectionRef} className="py-20 bg-[#3f4196]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Atendemos Toda a Região
          </h2>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center animate-on-scroll opacity-0">
            Cidades Atendidas
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3 hover:bg-white/20 transition-all"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <MapPin className="w-5 h-5 text-[#fef011] flex-shrink-0" />
                <span className="text-white font-medium">{city}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center animate-on-scroll opacity-0">
            Bairros em Barreiras
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {bairros.map((bairro, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3 hover:bg-white/20 transition-all"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <MapPin className="w-5 h-5 text-[#fef011] flex-shrink-0" />
                <span className="text-white font-medium">{bairro}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
