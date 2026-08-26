import { Award, Tag, Star, Heart } from 'lucide-react';

const items = [
  { Icon: Award, title: 'Qualidade Garantida', text: 'Produtos selecionados com rigoroso controle de qualidade' },
  { Icon: Tag, title: 'Preços Competitivos', text: 'Atacado e varejo com os melhores valores do mercado' },
  { Icon: Star, title: 'Variedade', text: 'Amplo catálogo para atender todas as necessidades' },
  { Icon: Heart, title: 'Atendimento Personalizado', text: 'Equipe dedicada para te ajudar na melhor escolha' },
];

export default function WhyChoose() {
  return (
    <section className="py-20 lg:py-32" style={{ backgroundColor: 'rgb(155, 39, 40)' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="transition-all duration-1000 opacity-100 translate-y-0">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Por Que Escolher a MN Enxovais?</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">Sua confiança é nossa prioridade</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map(({ Icon, title, text }) => (
              <div key={title} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white bg-opacity-10 mb-6 group-hover:bg-opacity-20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={40} className="text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">{title}</h3>
                <p className="text-white opacity-90 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
