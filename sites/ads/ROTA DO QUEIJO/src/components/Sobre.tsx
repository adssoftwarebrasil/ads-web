import { Award, Users, Sparkles, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const features: Feature[] = [
  { icon: Award, title: 'Qualidade Premium', desc: 'Produtos de primeira linha cuidadosamente selecionados' },
  { icon: Users, title: 'Equipe Especializada', desc: 'Profissionais qualificados e apaixonados pelo que fazem' },
  { icon: Sparkles, title: 'Ilhas Gastronômicas', desc: 'Montagens personalizadas para tornar seu evento único' },
  { icon: Heart, title: 'Atendimento Impecável', desc: 'Compromisso com a satisfação de cada cliente' },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-[rgb(254,254,254)]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-[rgb(197,162,3)]/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[rgb(197,162,3)]/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/rota%20do%20queijo/img/foto-equipe.webp"
                alt="Equipe Rota do Queijo"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-[rgb(197,162,3)] text-[rgb(32,29,30)] p-8 rounded-2xl shadow-xl max-w-xs">
                <p className="text-4xl font-bold mb-1">9+</p>
                <p className="text-sm font-semibold">Anos de Excelência</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-6">
              <span className="text-[rgb(197,162,3)] font-bold text-sm tracking-wider uppercase">
                Nossa História
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(32,29,30)] mt-3 mb-6 leading-tight">
                Uma Jornada de Sabor e Dedicação
              </h2>
            </div>
            <div className="space-y-4 text-[rgb(32,29,30)]/80 text-base md:text-lg leading-relaxed mb-8">
              <p>
                Nossa jornada iniciou em <strong className="text-[rgb(32,29,30)]">2016</strong>,
                realizando exposições de alguns de nossos produtos em vários espaços do Distrito
                Federal e sempre sentindo a necessidade de expandir os negócios.
              </p>
              <p>
                Em <strong className="text-[rgb(32,29,30)]">2019</strong>, inauguramos o empório Rota
                do Queijo, trazendo produtos diferenciados para nossos clientes. Com o crescimento da
                demanda, ampliamos nossa equipe em <strong className="text-[rgb(32,29,30)]">2022</strong>{' '}
                e lançamos nossa lanchonete e restaurante.
              </p>
              <p>
                Nosso principal diferencial é a montagem de{' '}
                <strong className="text-[rgb(32,29,30)]">ilhas gastronômicas de frios</strong>, além
                da produção de{' '}
                <strong className="text-[rgb(32,29,30)]">tábuas de frios personalizadas</strong>.
                Oferecemos também um ambiente aconchegante com lanches e almoço de segunda à
                sexta-feira.
              </p>
              <p className="font-semibold text-[rgb(32,29,30)]">
                Nosso compromisso é entregar qualidade, sofisticação e sabor, utilizando produtos de
                primeira linha.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-[rgb(197,162,3)]/5 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(197,162,3)]/10 rounded-xl flex items-center justify-center">
                    <f.icon width={24} height={24} className="text-[rgb(197,162,3)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[rgb(32,29,30)] mb-1">{f.title}</h3>
                    <p className="text-sm text-[rgb(32,29,30)]/70">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
