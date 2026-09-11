import { Trophy, CheckCircle, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5575999369036';

interface Advantage {
  Icon: LucideIcon;
  title: string;
  text: string;
}

const advantages: Advantage[] = [
  {
    Icon: Trophy,
    title: 'Experiência Comprovada ao Longo dos Anos',
    text: 'Nossa longa trajetória garante expertise e confiança.',
  },
  {
    Icon: CheckCircle,
    title: 'Compromisso com a Qualidade',
    text: 'Utilizamos apenas os melhores materiais disponíveis.',
  },
  {
    Icon: Zap,
    title: 'Atendimento Ágil e Eficiente',
    text: 'Nossa equipe está sempre pronta para atender você.',
  },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Vantagens de Escolher <span className="text-[rgb(254,0,0)]">SS Escapamentos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra os benefícios de confiar seu veículo à nossa equipe.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {advantages.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-[rgb(254,0,0)] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Agende uma <span className="text-[rgb(254,0,0)]">Visita</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Visite-nos e conheça nossas instalações. Estamos prontos para oferecer o melhor
                atendimento e mostrar por que somos referência no setor automotivo.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[rgb(254,0,0)] hover:bg-[rgb(172,1,2)] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg text-center"
              >
                Agendar Visita
              </a>
            </div>
            <div className="relative h-[400px] md:h-auto">
              <img
                src="https://storage.lucasmendes.dev/site-sp/ssescapamentoeperformance%2FAgende%20uma%20Visita.jpg"
                alt="Agende uma Visita"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
