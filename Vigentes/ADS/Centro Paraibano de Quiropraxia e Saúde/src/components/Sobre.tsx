import { Star, GraduationCap, Award, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Credential {
  Icon: LucideIcon;
  iconClass: string;
  label: string;
}

const credentials: Credential[] = [
  { Icon: Star, iconClass: 'lucide lucide-star text-navy', label: 'Criador do Método Clix' },
  { Icon: GraduationCap, iconClass: 'lucide lucide-graduation-cap text-navy', label: 'Graduado em Fisioterapia' },
  { Icon: Award, iconClass: 'lucide lucide-award text-navy', label: 'Certificado em Método Busquet' },
  { Icon: Award, iconClass: 'lucide lucide-award text-navy', label: 'Diplomado em Quiropraxia' },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-cyan-500/20 rounded-[2.5rem] blur-3xl"></div>
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/centropbdequiropraxia/nosso-especialista.jpeg"
                  alt="Dr. Jonas Guimarães"
                  className="w-full h-[500px] md:h-[600px] object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:right-10 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 flex items-center gap-4 animate-float">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <div className="text-2xl">🏆</div>
                </div>
                <div>
                  <p className="text-navy font-bold text-lg leading-tight">Método Clix</p>
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                    16 anos de desenvolvimento
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <header className="mb-8">
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm mb-3 block">
                Nosso Especialista
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight mb-6">
                Criador do Exclusivo <br />
                <span className="text-cyan-500 italic">Método Clix</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Com anos de experiência clínica e constante aperfeiçoamento, o{' '}
                  <strong>Dr. Jonas Guimarães</strong> ultrapassou as barreiras das terapias
                  convencionais.
                </p>
                <p>
                  Após estudar e aplicar diversas técnicas internacionais, ele desenvolveu uma
                  abordagem própria e inovadora. O foco do seu trabalho deixou de ser apenas aliviar
                  sintomas para buscar e tratar a verdadeira raiz biomecânica de cada dor.
                </p>
              </div>
            </header>
            <blockquote className="border-l-4 border-cyan-500 pl-6 py-2 mb-10 bg-cyan-50/30 rounded-r-xl">
              <p className="text-gray-700 italic text-base leading-relaxed">
                "A vontade de ajudar minha mãe, que sofria com dores crônicas sem solução, despertou
                meu interesse pela saúde e me impulsionou a criar uma abordagem que realmente
                resolvesse a raiz do problema."
              </p>
              <footer className="text-navy font-bold text-sm mt-3">— Dr. Jonas Guimarães</footer>
            </blockquote>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                    <c.Icon width={20} height={20} className={c.iconClass} />
                  </div>
                  <span className="text-navy text-sm font-semibold leading-tight">{c.label}</span>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-navy hover:bg-navy-light text-white font-black px-10 py-5 rounded-2xl transition-all duration-300 hover:shadow-2xl shadow-navy/20"
            >
              Agendar com Dr. Jonas
              <ArrowRight
                width={20}
                height={20}
                className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
