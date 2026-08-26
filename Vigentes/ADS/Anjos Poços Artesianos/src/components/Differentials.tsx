import {
  Award,
  Wrench,
  Truck,
  Shield,
  CheckCircle,
  Clock,
  LucideIcon,
} from 'lucide-react';
import { WhatsAppIcon, WHATSAPP_URL } from './icons';

interface Differential {
  icon: LucideIcon;
  title: string;
  text: string;
}

const differentials: Differential[] = [
  {
    icon: Award,
    title: '28 Anos de Tradição',
    text: 'Experiência consolidada desde a década de 1990, com centenas de projetos bem-sucedidos em toda região de Mato Grosso.',
  },
  {
    icon: Wrench,
    title: 'Equipamentos de Ponta',
    text: 'Máquinas modernas, compressores potentes e ferramentas especializadas para perfuração em qualquer tipo de terreno.',
  },
  {
    icon: Truck,
    title: 'Frota Completa',
    text: 'Caminhões e equipamentos próprios que garantem agilidade e eficiência em todos os projetos.',
  },
  {
    icon: Shield,
    title: 'Perfuração Especializada',
    text: 'Capacidade de perfuração em sedimentos e rocha, com revestimentos de 4", 6", 8" e 10" conforme necessidade.',
  },
  {
    icon: CheckCircle,
    title: 'Garantia de Qualidade',
    text: 'Trabalho executado com excelência, sempre zelando pela satisfação e segurança dos nossos clientes.',
  },
  {
    icon: Clock,
    title: 'Atendimento Ágil',
    text: 'Equipe dedicada pronta para atender em horário comercial e oferecer soluções rápidas para suas necessidades.',
  },
];

const scrollToContato = () => {
  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
};

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por Que Escolher a Anjos?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nossos diferenciais garantem o melhor resultado para seu projeto
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentials.map((d) => (
            <div
              key={d.title}
              className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <d.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{d.title}</h3>
              <p className="text-gray-600 leading-relaxed">{d.text}</p>
            </div>
          ))}
        </div>
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 px-8 py-16 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Qualidade Tem Nome
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Anjos Poços Artesianos - Sempre zelando pelo nosso cliente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-xl font-semibold text-lg"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Falar com Especialista
              </a>
              <button
                onClick={scrollToContato}
                className="inline-flex items-center justify-center bg-blue-700 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition-all duration-300 shadow-xl font-semibold text-lg"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
