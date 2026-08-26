import { Trophy, Shield, CheckCircle2, Headphones, Rocket, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const reasons: { Icon: LucideIcon; title: string; text: string }[] = [
  { Icon: Trophy, title: '8 Anos de Experiência', text: 'Experiência consolidada com milhares de campanhas bem-sucedidas em diversos segmentos do mercado.' },
  { Icon: Shield, title: 'Maior da América Latina', text: 'Liderança reconhecida em impulsionamento digital, com presença forte em todo o continente.' },
  { Icon: CheckCircle2, title: 'Especialistas Certificados', text: 'Equipe altamente qualificada com certificações em Google Ads e Meta Business.' },
  { Icon: Headphones, title: 'Atendimento Personalizado', text: 'Equipe dedicada para entender suas necessidades e criar estratégias sob medida.' },
  { Icon: Rocket, title: 'Resultados Comprovados', text: 'ROI mensurável com métricas transparentes e relatórios detalhados de performance.' },
  { Icon: Users, title: 'Suporte Especializado', text: 'Time de especialistas disponível para garantir o sucesso contínuo das suas campanhas.' },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#19355E] mb-4">
            Por Que Escolher a ADS Software?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Diferenciais que nos tornam referência em marketing digital e desenvolvimento
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="group relative bg-gradient-to-br from-[#EBFFF4] to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1264C6] to-[#33a753] rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#19355E] to-[#1264C6] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#19355E] mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[#19355E] via-[#1264C6] to-[#19355E] rounded-2xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Transforme Seu Negócio Hoje</h3>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Junte-se às empresas que já conquistaram resultados extraordinários com nossas estratégias
          </p>
          <a
            href="https://wa.me/558007800040"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#33a753] hover:bg-[#2d9249] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Solicitar Consulta Gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
