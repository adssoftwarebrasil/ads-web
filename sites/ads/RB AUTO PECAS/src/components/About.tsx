import { Shield, Star, Clock, Award } from 'lucide-react';

const DIFERENCIAIS = [
  {
    icon: Shield,
    title: 'Confiança Comprovada',
    description: 'Experiência desde os anos 90 garantindo serviços de qualidade e peças confiáveis para nossos clientes.',
  },
  {
    icon: Star,
    title: 'Atendimento Premium',
    description: 'Cada cliente é recebido com atenção e carinho. Nossa prioridade é a sua satisfação total.',
  },
  {
    icon: Clock,
    title: 'Agilidade no Serviço',
    description: 'Trabalhamos com eficiência para que você perca o mínimo de tempo e volte logo à estrada.',
  },
  {
    icon: Award,
    title: 'Qualidade Garantida',
    description: 'Peças originais e alternativas de procedência garantida. Serviços executados com responsabilidade.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block text-red-500 text-xs font-bold tracking-widest uppercase mb-4">
              Nossa história
            </span>
            <h2 className="font-['Barlow_Condensed'] font-black text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
              TRADIÇÃO E
              <br />
              <span className="text-red-500">EXPERIÊNCIA</span>
              <br />
              DESDE OS ANOS 90
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-5">
              Somos a <strong className="text-white">RB Auto Peças</strong>, especializados na venda de peças e na prestação de serviços para toda a linha diesel. Trabalhamos com dedicação para oferecer produtos de qualidade e um atendimento ágil, transparente e confiável.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-5">
              Iniciamos nossas atividades em <strong className="text-white">2021</strong> como um recomeço, trazendo toda a experiência do nosso fundador, <strong className="text-white">Régio Moura</strong>, que atua no ramo desde os anos 90 na cidade de Acreúna.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Essa trajetória sólida é o que nos permite oferecer confiança, conhecimento técnico e excelência em tudo que fazemos. Conte com a RB Auto Peças para manter seu veículo sempre em perfeito funcionamento!
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl px-6 py-4 text-center">
                <span className="block font-['Barlow_Condensed'] font-black text-4xl text-red-500">+30</span>
                <span className="block text-gray-400 text-xs uppercase tracking-wide mt-1">Anos de Experiência</span>
              </div>
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl px-6 py-4 text-center">
                <span className="block font-['Barlow_Condensed'] font-black text-4xl text-white">2021</span>
                <span className="block text-gray-400 text-xs uppercase tracking-wide mt-1">Fundação da RB</span>
              </div>
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl px-6 py-4 text-center">
                <span className="block font-['Barlow_Condensed'] font-black text-4xl text-white">10+</span>
                <span className="block text-gray-400 text-xs uppercase tracking-wide mt-1">Cidades Atendidas</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DIFERENCIAIS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-6 hover:border-red-600/40 transition-all duration-300 group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-600/15 border border-red-600/20 mb-4 group-hover:bg-red-600/25 transition-colors duration-300">
                    <Icon size={22} className="text-red-500" />
                  </div>
                  <h3 className="font-['Barlow_Condensed'] font-bold text-white text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
