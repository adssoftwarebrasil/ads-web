import { Truck, Zap, CheckCircle } from 'lucide-react';

const services = [
  {
    emoji: '🚗',
    title: 'Bateria de Carro',
    desc: 'Baterias para todos os modelos de veículos leves, incluindo modelos com tecnologia Start-Stop.',
    features: ['Start-Stop compatível', 'Todas as marcas', 'Instalação gratuita'],
    href: 'http://wa.me/556593448962?text=Ol%C3%A1!%20Preciso%20de%20uma%20Bateria%20para%20meu%20carro.',
  },
  {
    emoji: '🏍️',
    title: 'Bateria de Moto',
    desc: 'Soluções específicas para motocicletas de todas as cilindradas, nacionais e importadas.',
    features: ['Modelos nacionais e importados', 'Alta durabilidade', 'Pronta entrega'],
    href: 'http://wa.me/556593448962?text=Ol%C3%A1!%20Preciso%20de%20uma%20Bateria%20para%20minha%20moto.',
  },
  {
    emoji: '🚛',
    title: 'Bateria de Caminhão',
    desc: 'Baterias de alta capacidade e resistência para frotas e caminhões de trabalho pesado.',
    features: ['Alta amperagem', 'Resistência superior', 'Atendimento à frota'],
    href: 'http://wa.me/556593448962?text=Ol%C3%A1!%20Preciso%20de%20uma%20Bateria%20para%20meu%20caminh%C3%A3o.',
  },
  {
    emoji: '🚜',
    title: 'Bateria de Trator',
    desc: 'Baterias robustas para máquinas agrícolas e equipamentos de grande porte.',
    features: ['Máquinas agrícolas', 'Equipamentos pesados', 'Alta performance'],
    href: 'http://wa.me/556593448962?text=Ol%C3%A1!%20Preciso%20de%20uma%20Bateria%20para%20meu%20trator.',
  },
];

const benefits = [
  {
    icon: <Truck className="lucide lucide-truck text-[#F7EE30]" width={22} height={22} />,
    title: 'Entrega Grátis',
    desc: 'Levamos até você em Cuiabá e Várzea Grande sem custo adicional.',
  },
  {
    icon: <Zap className="lucide lucide-zap text-[#F7EE30]" width={22} height={22} />,
    title: 'Instalação Grátis',
    desc: 'Nossa equipe instala na hora, no seu local, sem cobrar nada a mais.',
  },
  {
    icon: <CheckCircle className="lucide lucide-check-circle text-[#F7EE30]" width={22} height={22} />,
    title: 'Garantia Assegurada',
    desc: 'Todas as baterias com garantia de fábrica e suporte técnico especializado.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#F6FBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 section-enter">
          <span className="inline-block text-[#1003AD] font-bold text-sm uppercase tracking-widest mb-3">
            O que oferecemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#000E27] mb-4">
            Baterias para Todo Tipo de Veículo
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Da moto ao caminhão, temos a bateria certa com a melhor relação custo-benefício de Cuiabá e Várzea
            Grande.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="section-enter battery-card bg-white rounded-2xl p-6 border border-gray-100 card-hover cursor-pointer group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#000E27] flex items-center justify-center mb-5 text-2xl group-hover:bg-[#1003AD] transition-colors duration-300">
                {s.emoji}
              </div>
              <h3 className="text-lg font-bold text-[#000E27] mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <ul className="space-y-1.5 mb-5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F7EE30] flex-shrink-0"></span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#F6FBFC] text-[#1003AD] border border-[#1003AD]/20 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#1003AD] hover:text-white hover:border-[#1003AD] transition-all duration-200"
              >
                Solicitar Orçamento
              </a>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 section-enter">
          {benefits.map((b) => (
            <div key={b.title} className="flex gap-4 bg-[#000E27] rounded-2xl p-6 text-white group">
              <div className="w-12 h-12 rounded-xl bg-[#F7EE30]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F7EE30]/20 transition-colors">
                {b.icon}
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">{b.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
