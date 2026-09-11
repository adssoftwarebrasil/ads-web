import { CheckCircle2, ArrowRight } from 'lucide-react';
import { waLink } from '../lib/site';

const FEATURES: { text: string; delay: number }[] = [
  { text: 'Equipe qualificada e experiente', delay: 300 },
  { text: 'Cobertura em todo território nacional', delay: 400 },
  { text: 'Sistema de economia circular', delay: 500 },
  { text: 'Certificações ambientais', delay: 600 },
  { text: 'Atendimento personalizado 24/7', delay: 700 },
  { text: 'Tecnologia de ponta', delay: 800 },
];

export default function About() {
  return (
    <section id="quem-somos" className="bg-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="relative transition-all duration-700 opacity-100 translate-x-0">
            <div className="relative overflow-hidden rounded-3xl shadow-xl group">
              <img
                src="https://storage.lucasmendes.dev/site-sp/indcom/img/quem-somos.webp"
                alt="Quem Somos - Grupo Indcom"
                className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-5 -right-5 px-6 py-3 bg-[rgb(130,196,92)] text-white rounded-full font-bold shadow-lg">
              Desde 2007
            </div>
          </div>
          <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <div className="text-sm font-semibold uppercase tracking-wider text-[rgb(130,196,92)] mb-4">
              Quem Somos
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[rgb(40,120,80)] leading-tight mb-6">
              Líderes em gestão integrada de resíduos
            </h2>
            <p className="text-base text-[rgba(45,55,65,0.8)] leading-relaxed mb-6">
              Desde 2007, o Grupo Indcom se destaca como referência em gestão ambiental de resíduos. Com um compromisso inabalável com a saúde pública e a preservação do meio ambiente, desenvolvemos soluções inovadoras e personalizadas para cada cliente.
            </p>
            <p className="text-base text-[rgba(45,55,65,0.8)] leading-relaxed mb-8">
              Nossa equipe altamente qualificada e experiente garante serviços de excelência, assegurando total satisfação e conformidade com todas as normas ambientais vigentes. Trabalhamos incansavelmente por um futuro mais limpo e sustentável.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {FEATURES.map((f) => (
                <div
                  key={f.text}
                  className="flex items-center gap-3 transition-all duration-500 opacity-100 translate-x-0"
                  style={{ transitionDelay: `${f.delay}ms` }}
                >
                  <CheckCircle2 className="lucide lucide-check-circle2 w-5 h-5 text-[rgb(130,196,92)] flex-shrink-0" />
                  <span className="text-[rgba(40,120,80,0.9)] font-medium">{f.text}</span>
                </div>
              ))}
            </div>
            <a
              href={waLink('Olá! Gostaria de conhecer mais sobre a história e atuação do Grupo Indcom.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[rgb(40,120,80)] to-[rgb(130,196,92)] text-white rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all"
            >
              Conheça Nossa História
              <ArrowRight className="lucide lucide-arrow-right w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
