import { Search, TrendingUp, Key, FileText, Headphones as HeadphonesIcon, Shield } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Consultoria Estratégica',
    desc: 'Análise de mercado, cenário econômico e potencial de valorização para decisões de investimento mais seguras.',
  },
  {
    icon: TrendingUp,
    title: 'Lançamentos no Litoral',
    desc: 'Acesso aos melhores lançamentos imobiliários no litoral do Ceará antes de chegarem ao mercado aberto.',
  },
  {
    icon: Key,
    title: 'Compra e Venda',
    desc: 'Intermediação profissional na compra e venda de imóveis litorâneos com foco em rentabilidade e valorização.',
  },
  {
    icon: FileText,
    title: 'Assessoria Jurídica',
    desc: 'Acompanhamento completo da documentação, contratos e regularização do imóvel com total segurança.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Atendimento Personalizado',
    desc: 'Dedicação exclusiva ao perfil de cada investidor. Encontramos a oportunidade certa para seus objetivos.',
  },
  {
    icon: Shield,
    title: 'Segurança e Transparência',
    desc: 'Todos os imóveis verificados e regularizados. Transparência total em cada etapa da negociação.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-[#002e33] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-white/60 text-xs font-bold tracking-widest uppercase mb-4">
            <div className="w-8 h-px bg-white/30" />
            Nossos Serviços
            <div className="w-8 h-px bg-white/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tudo Que Você Precisa
            <br />
            <span className="text-white/70 font-light italic">
              Num Só Lugar
            </span>
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto">
            Da pesquisa estratégica à entrega das chaves, oferecemos uma jornada completa para
            quem quer investir no litoral cearense com responsabilidade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-[#00484e] border border-white/10 hover:border-white/25 rounded-2xl p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-5 group-hover:bg-white/20 transition-colors">
                <service.icon size={22} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{service.desc}</p>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-white/20 transition-all duration-500 rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
