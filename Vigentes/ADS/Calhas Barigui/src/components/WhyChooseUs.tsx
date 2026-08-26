import { Clock, Lightbulb, Target, DollarSign } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Experiência Reconhecida',
    description: 'Mais de uma década de atuação no setor de calhas e sistemas de drenagem em Curitiba e região.',
  },
  {
    icon: Lightbulb,
    title: 'Inovação Constante',
    description: 'Sempre adotamos as melhores práticas e tecnologias do mercado para entregar o melhor resultado.',
  },
  {
    icon: Target,
    title: 'Entrega no Prazo',
    description: 'Cumprimos rigorosamente todos os prazos acordados com nossos clientes, sem surpresas.',
  },
  {
    icon: DollarSign,
    title: 'Melhor Custo-Benefício',
    description: 'Oferecemos qualidade premium sem comprometer o seu orçamento, com preços justos e competitivos.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/Calhas%20Barigui/maquina-fachini-dobradora-chapa-amarela-preta_1280x960.webp"
                  alt="Máquina dobradora"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden mt-8">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/Calhas%20Barigui/interior-galpao-fachini-grama-sintetica-pecas_1280x960.webp"
                  alt="Interior do galpão"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden -mt-4">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/Calhas%20Barigui/tubo-metalico-curvo-grama-verde-industrial_960x1280.webp"
                  alt="Tubos metálicos"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden mt-4">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/Calhas%20Barigui/fachada-distribuidora-calhas-bariqui-dia-nublado_1280x720.webp"
                  alt="Fachada Calhas Barigui"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 -z-10 bg-primary/5 rounded-3xl scale-105 rotate-2" />
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-4">
              Por que contratar?
            </span>
            <h2 className="font-heading font-black text-dark-900 text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
              A melhor escolha para
              <br />
              <span className="text-primary">suas calhas</span>
            </h2>
            <p className="text-dark-400 font-body text-base leading-relaxed mb-10">
              Conheça os motivos que fazem a Calhas Barigui ser referência em Curitiba e Região Metropolitana.
            </p>

            <div className="space-y-6">
              {reasons.map((item, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-dark-900 text-base mb-1">{item.title}</h3>
                    <p className="text-dark-400 font-body text-sm leading-relaxed">{item.description}</p>
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
