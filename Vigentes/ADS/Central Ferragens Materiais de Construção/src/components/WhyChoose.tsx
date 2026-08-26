import { Shield, Award, ThumbsUp, Truck, Users, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  iconBg: string;
  title: string;
  text: string;
}

const features: Feature[] = [
  { Icon: Shield, iconBg: 'bg-blue-500', title: 'Qualidade Garantida', text: 'Trabalhamos apenas com materiais certificados e das melhores marcas do mercado.' },
  { Icon: Award, iconBg: 'bg-yellow-500', title: '30 Anos de Experiência', text: 'Mais de três décadas fornecendo materiais de qualidade para a região.' },
  { Icon: ThumbsUp, iconBg: 'bg-green-500', title: 'Melhor Preço da Região', text: 'Preços competitivos sem abrir mão da qualidade dos produtos.' },
  { Icon: Truck, iconBg: 'bg-orange-500', title: 'Entrega Rápida', text: 'Logística eficiente para garantir que sua obra não pare.' },
  { Icon: Users, iconBg: 'bg-purple-500', title: 'Atendimento Especializado', text: 'Equipe preparada para te ajudar a escolher os melhores produtos.' },
  { Icon: Clock, iconBg: 'bg-red-500', title: 'Pontualidade', text: 'Cumprimos prazos e horários para não atrasar seu projeto.' },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(1,0,104)] mb-4">Por Que Escolher a Central Ferragens?</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Somos a escolha certa para quem busca qualidade, experiência e comprometimento</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className={`${f.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <f.Icon width={32} height={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[rgb(1,0,104)] mb-3">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[rgb(1,0,104)] via-[rgb(15,23,138)] to-[rgb(1,0,104)] rounded-2xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Começar Seu Projeto?</h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Faça um orçamento sem compromisso e descubra por que somos a escolha preferida dos profissionais da região</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/553899492159" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-[rgb(1,0,104)] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-xl">Solicitar Orçamento Grátis</a>
              <a href="tel:3836762159" className="bg-white bg-opacity-20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-30 transition-all">Ligar Agora</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
