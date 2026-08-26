import { Globe, Smartphone, Headphones, GraduationCap, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const differentials: Differential[] = [
  {
    icon: Globe,
    title: 'Software 100% Online',
    description:
      'Acesse de qualquer lugar, com qualquer computador. Sem investimento em servidores ou equipamentos especiais.',
    delay: 300,
  },
  {
    icon: Smartphone,
    title: 'Aplicativo Móvel',
    description:
      'Trabalhe off-line com o aplicativo e sincronize os dados quando quiser. Perfeito para uso no campo.',
    delay: 400,
  },
  {
    icon: Headphones,
    title: 'Suporte de Alto Nível',
    description:
      'Equipe especializada pronta para ajudar. Atendimento rápido e eficiente para solucionar suas dúvidas.',
    delay: 500,
  },
  {
    icon: GraduationCap,
    title: 'Treinamentos Ilimitados',
    description:
      'Treine sua equipe quantas vezes precisar, sem custo adicional. Garantia de domínio total do sistema.',
    delay: 600,
  },
  {
    icon: Shield,
    title: 'Fácil, Rápido e Seguro',
    description:
      'Interface intuitiva pensada para produtores rurais. Lançamentos simples que qualquer colaborador domina rapidamente.',
    delay: 700,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="transition-all duration-700 opacity-100 translate-x-0">
            <span className="inline-block text-plantae-blue font-black text-sm tracking-widest uppercase mb-4">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-plantae-dark leading-tight mb-6">
              COM O PLANTAE,
              <br />
              <span className="text-plantae-blue">SUA FAZENDA É GERIDA</span>
              <br />
              DE FORMA SIMPLES E EFICIENTE.
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              A Plantae Gestão Agrícola foi fundada em 2005 a partir da necessidade real de
              organização dos produtores rurais da região de Sorriso - Mato Grosso, um dos maiores
              polos de produção de grãos do Brasil.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              Com mais de 20 anos no mercado, atendemos produtores em todo o Brasil, com foco na
              gestão de propriedades de produção de grãos em geral — alinhando o administrativo ao
              operacional para que você obtenha os resultados reais da produção.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Nosso diferencial está na praticidade com que o sistema aborda os lançamentos, de forma
              intuitiva tanto para o escritório administrativo quanto para o operacional no campo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5566992921858"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-plantae-dark text-white font-black px-8 py-4 rounded-full hover:bg-plantae-blue transition-all duration-200 hover:shadow-xl text-sm"
              >
                Falar com Especialista
              </a>
              <a
                href="https://www.plantae.agr.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-plantae-dark text-plantae-dark font-bold px-8 py-4 rounded-full hover:bg-plantae-dark/5 transition-all duration-200 text-sm"
              >
                www.plantae.agr.br
              </a>
            </div>
          </div>
          <div className="relative transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <div className="absolute inset-0 bg-plantae-teal/10 rounded-3xl transform rotate-3"></div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/plantae/Plantae_Organiza.png"
              alt="Plantae - Organize sua gestão"
              className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl object-contain"
            />
          </div>
        </div>
        <div className="border-t border-gray-100 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-black text-plantae-dark mb-3">
              Por que escolher o Plantae?
            </h3>
            <p className="text-gray-500">Diferenciais que fazem a diferença no dia a dia.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {differentials.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-plantae-cream/50 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 opacity-100 translate-y-0"
                  style={{ transitionDelay: `${item.delay}ms` }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-plantae-blue/10 flex items-center justify-center mb-4">
                    <Icon width={24} height={24} className="text-plantae-blue" />
                  </div>
                  <h4 className="font-black text-plantae-dark text-sm mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
