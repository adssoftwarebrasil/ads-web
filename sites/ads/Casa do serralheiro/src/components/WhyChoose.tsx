import { Truck, CheckCircle, Heart, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Reason {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

const reasons: Reason[] = [
  {
    Icon: Truck,
    title: 'Entrega Rápida',
    desc: 'Agilidade e pontualidade para que você não perca tempo em seus projetos.',
  },
  {
    Icon: CheckCircle,
    title: 'Qualidade dos Produtos',
    desc: 'Materiais com certificação e de primeira linha para garantir a durabilidade.',
  },
  {
    Icon: Heart,
    title: 'Atendimento Personalizado',
    desc: 'Uma equipe dedicada a entender suas necessidades e oferecer a melhor solução.',
  },
  {
    Icon: Award,
    title: 'Experiência e Tradição',
    desc: 'Mais de 40 anos de excelência e credibilidade no mercado metalúrgico.',
  },
];

export default function WhyChoose() {
  return (
    <section
      id="vantagens"
      className="relative py-32 overflow-hidden"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/casadoserralheirolavras%2Fcasadoserralheirolavras%2FPor%20que%20contratar.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/60"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Por que Escolher a Casa do Serralheiro?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Motivos para escolher nossa empresa
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              <reason.Icon className="w-12 h-12 text-[rgb(122,21,25)] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-white/80 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(122,21,25)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(90,15,18)] transition-all duration-300 font-bold text-lg"
          >
            Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
