import { Shield, Wrench, Users, TrendingUp } from 'lucide-react';

const cards = [
  {
    Icon: Shield,
    title: 'Qualidade Garantida',
    desc: 'Serviços executados com precisão e garantia de resultados duradouros',
  },
  {
    Icon: Wrench,
    title: 'Equipe Especializada',
    desc: 'Profissionais qualificados com vasta experiência em retífica automotiva',
  },
  {
    Icon: Users,
    title: 'Atendimento Personalizado',
    desc: 'Cada cliente recebe atenção especial e soluções sob medida',
  },
  {
    Icon: TrendingUp,
    title: 'Resultados Comprovados',
    desc: 'Histórico de sucesso com clientes satisfeitos em toda região',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sobre a <span className="text-[rgb(167,20,42)]">Anhanguera Retífica</span>
          </h2>
          <div className="w-24 h-1 bg-[rgb(167,20,42)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Referência em retífica de motores em Goiânia e região, oferecendo soluções completas
            para linha leve, média e pesada com tecnologia e expertise de mercado.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Mecânico trabalhando em motor"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-[rgb(167,20,42)] text-white p-8 rounded-xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold mb-2">100+</p>
              <p className="text-lg font-semibold">Clientes Satisfeitos</p>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Excelência e Compromisso com Resultados
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Fundada em 2016, a <strong>Anhanguera Retífica de Motores</strong> nasceu com o
              propósito de oferecer serviços de alta qualidade em retífica e manutenção automotiva
              para Goiânia e região. Com anos de experiência no mercado, consolidamos nossa
              reputação através da excelência técnica e atendimento personalizado.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nossa equipe especializada trabalha com motores de linha leve, média e pesada,
              garantindo precisão em cada serviço realizado. Atendemos clientes indicados e que
              confiam em nosso trabalho diferenciado, mantendo sempre o compromisso com a qualidade
              e a satisfação total.
            </p>
            <div className="bg-gray-50 border-l-4 border-[rgb(167,20,42)] p-6 rounded-r-xl">
              <p className="text-gray-700 italic">
                "Nossa missão é devolver a vida útil do seu motor com precisão técnica, qualidade
                garantida e atendimento que supera expectativas."
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="text-center p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[rgb(167,20,42)]"
            >
              <div className="bg-[rgb(167,20,42)] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon width={32} height={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
