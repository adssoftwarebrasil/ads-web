import { Award, Gem, Wrench, ShieldCheck, Users, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Differential {
  Icon: LucideIcon;
  title: string;
  text: string;
}

const differentials: Differential[] = [
  {
    Icon: Award,
    title: 'Cutelaria Gaúcha',
    text: 'Trabalhamos com as melhores cutelarias do Sul: Doma Crioula, Corte Nobre, Tatu, D\'Ávila e Ferreiros Artesãos.',
  },
  {
    Icon: Gem,
    title: 'Aço Premium',
    text: 'Facas de aço carbono, inox e damasco, garantindo durabilidade e performance excepcional.',
  },
  {
    Icon: Wrench,
    title: 'Personalização de Facas',
    text: 'Serviço exclusivo de personalização de facas realizado na hora com precisão e cuidado.',
  },
  {
    Icon: ShieldCheck,
    title: 'Qualidade Garantida',
    text: 'Cada peça é cuidadosamente selecionada para atender aos mais altos padrões de qualidade.',
  },
  {
    Icon: Users,
    title: 'Atendimento Personalizado',
    text: 'Nossa equipe está pronta para ajudar você a encontrar a peça perfeita para suas necessidades.',
  },
  {
    Icon: Sparkles,
    title: 'Variedade Única',
    text: 'Além de facas, oferecemos katanas, canivetes, miniaturas em resina e bonecos colecionáveis.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(245,241,220)] text-[rgb(84,10,1)] px-4 py-2 rounded-full text-sm font-bold mb-4">
            NOSSOS DIFERENCIAIS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(84,10,1)] mb-6">
            Por Que Escolher a Bielliz?
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Combinamos tradição artesanal, qualidade premium e atendimento excepcional para oferecer
            a melhor experiência em cutelaria.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="group bg-gradient-to-br from-[rgb(245,241,220)] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[rgb(84,10,1)]"
            >
              <div className="bg-[rgb(84,10,1)] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[rgb(84,10,1)] mb-4">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[rgb(84,10,1)] to-[rgb(120,30,20)] rounded-2xl p-8 lg:p-12 text-center shadow-2xl">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Visite Nossa Loja Física</h3>
          <p className="text-[rgb(245,241,220)] text-lg mb-6 max-w-2xl mx-auto">
            Conheça pessoalmente nossa coleção completa e receba orientação especializada de nossa
            equipe. Estamos localizados no coração de Campinas.
          </p>
          <a
            href="#localizacao"
            className="inline-block bg-white text-[rgb(84,10,1)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(245,241,220)] transition-colors shadow-xl"
          >
            Ver Localização
          </a>
        </div>
      </div>
    </section>
  );
}
