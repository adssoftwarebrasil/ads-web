import { Settings, Wrench, Award } from 'lucide-react';

const services = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/novocampo%2FPec%CC%A7as.jpg',
    icon: Settings,
    iconName: 'lucide-settings',
    title: 'Peças',
    desc: 'Orientação especializada para agricultores',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/novocampo%2FManutenc%CC%A7a%CC%83o.jpg',
    icon: Wrench,
    iconName: 'lucide-wrench',
    title: 'Manutenção',
    desc: 'Serviços para garantir o funcionamento das máquinas',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/novocampo%2FPo%CC%81s%20Venda.jpg',
    icon: Award,
    iconName: 'lucide-award',
    title: 'Pós Venda',
    desc: 'Implementos para preparo e colheita de solo',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A385C] mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-[#001F7A] font-semibold mb-3">
            Conheça nossos serviços especializados
          </p>
          <p className="text-lg text-[#424242] max-w-3xl mx-auto">
            Oferecemos uma variedade de serviços projetados para atender todas as
            suas necessidades agrícolas, desde a venda de peças até manutenção e
            consultoria.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 overflow-hidden border-t-4 border-[#4CAF50] group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="bg-[#F8D617] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon
                      width={28}
                      height={28}
                      className={`lucide ${s.iconName} text-[#1A385C]`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A385C] mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[#424242] mb-4">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
