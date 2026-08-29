import { Lightbulb, Truck, Handshake, GraduationCap, Cog, Headphones, LucideIcon } from 'lucide-react';

const WHATSAPP = 'http://wa.me/5562985811343';

interface Differential {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const differentials: Differential[] = [
  {
    icon: Lightbulb,
    title: 'Projetos Exclusivos',
    desc: 'Trabalhamos com projetos personalizados e exclusivos, desenvolvidos especialmente para atender suas necessidades específicas.',
  },
  {
    icon: Truck,
    title: 'Frota Própria',
    desc: 'Contamos com frota própria para garantir entregas em todo o Brasil com segurança, agilidade e pontualidade.',
  },
  {
    icon: Handshake,
    title: 'Flexibilidade nas Negociações',
    desc: 'Oferecemos condições comerciais flexíveis e adaptadas à realidade de cada cliente, facilitando a aquisição de nossos produtos.',
  },
  {
    icon: GraduationCap,
    title: 'Profissionais Capacitados',
    desc: 'Nossa equipe é composta por profissionais treinados e capacitados para exercer suas funções com excelência e segurança.',
  },
  {
    icon: Cog,
    title: 'Engenharia Especializada',
    desc: 'Equipe de engenharia apta para enfrentar qualquer desafio técnico, garantindo soluções inovadoras e eficientes.',
  },
  {
    icon: Headphones,
    title: 'Pós-Venda de Qualidade',
    desc: 'Oferecemos suporte completo após a venda, com assistência técnica e acompanhamento para garantir sua satisfação.',
  },
];

function Differentials() {
  return (
    <section id="diferenciais" className="py-20 lg:py-32 bg-[rgba(9,9,35)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[rgba(12,132,227,0.05)] to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgba(12,132,227,0.1)] rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[rgba(12,132,227,0.2)] border border-[rgba(12,132,227,0.5)] rounded-full">
            <span className="text-[rgba(12,132,227)] font-semibold text-sm uppercase tracking-wide">
              Nossos Diferenciais
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Por Que Escolher a TAP Metal?
          </h2>
          <p className="text-lg text-[rgba(198,198,207)] max-w-3xl mx-auto">
            Combinamos experiência, tecnologia e compromisso com a excelência para entregar soluções que
            superam expectativas.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] backdrop-blur-sm border border-[rgba(198,198,207,0.1)] rounded-2xl p-8 hover:border-[rgba(12,132,227,0.5)] transition-all duration-500 hover:shadow-2xl hover:shadow-[rgba(12,132,227,0.15)] hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[rgba(12,132,227)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[rgba(12,132,227,0.2)] to-[rgba(12,132,227,0.05)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon size={32} className="text-[rgba(12,132,227)]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[rgba(12,132,227)] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[rgba(198,198,207)] leading-relaxed">{item.desc}</p>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[rgba(12,132,227,0.05)] to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[rgba(12,132,227,0.1)] to-[rgba(12,132,227,0.05)] border border-[rgba(12,132,227,0.3)] rounded-2xl p-8 lg:p-12 max-w-4xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Pronto para iniciar seu projeto?</h3>
            <p className="text-lg text-[rgba(198,198,207)] mb-6">
              Entre em contato conosco e descubra como podemos transformar suas necessidades em soluções
              eficientes e duradouras.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[rgba(12,132,227)] hover:bg-[rgba(12,132,227,0.9)] text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Fale com Nossos Especialistas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Differentials;
