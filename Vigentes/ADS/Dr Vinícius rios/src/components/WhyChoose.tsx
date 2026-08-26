import { Stethoscope, Heart, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const items: { Icon: LucideIcon; title: string; text: string }[] = [
  {
    Icon: Stethoscope,
    title: 'Especialização em Coluna',
    text: 'Experiência dedicada exclusivamente ao tratamento de patologias da coluna vertebral, garantindo diagnóstico preciso e tratamentos eficazes.',
  },
  {
    Icon: Heart,
    title: 'Tratamento Personalizado',
    text: 'Cada paciente recebe um plano de tratamento exclusivo, adaptado às suas necessidades individuais, priorizando seu bem-estar em todas as etapas.',
  },
  {
    Icon: Zap,
    title: 'Tecnologia de Ponta',
    text: 'Utilizamos técnicas minimamente invasivas e as mais modernas tecnologias em cirurgia de coluna, reduzindo riscos e acelerando sua recuperação.',
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[rgb(241,241,255)] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Por Que Escolher Nossa Clínica?
          </h2>
          <p className="text-xl text-gray-600">
            Excelência em cuidados ortopédicos com foco na sua qualidade de vida
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map(({ Icon, title, text }, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-[#dbeafe] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Icon size={32} className="text-[#2563eb]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
