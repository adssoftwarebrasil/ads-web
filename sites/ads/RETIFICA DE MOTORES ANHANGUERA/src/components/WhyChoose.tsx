import { Target, Award, ThumbsUp, Zap, HeartHandshake, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../utils';

interface Reason {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

const reasons: Reason[] = [
  {
    Icon: Target,
    title: 'Precisão Técnica',
    desc: 'Utilizamos equipamentos de última geração e técnicas avançadas para garantir a máxima precisão em cada serviço de retífica realizado.',
  },
  {
    Icon: Award,
    title: 'Experiência Comprovada',
    desc: 'Mais de 8 anos de atuação no mercado, atendendo diversos tipos de motores com excelência e qualidade reconhecida pelos clientes.',
  },
  {
    Icon: ThumbsUp,
    title: 'Garantia de Qualidade',
    desc: 'Todos os nossos serviços possuem garantia, proporcionando segurança e tranquilidade para nossos clientes em cada trabalho realizado.',
  },
  {
    Icon: Zap,
    title: 'Agilidade no Atendimento',
    desc: 'Entendemos a importância do seu tempo. Por isso, trabalhamos com agilidade sem comprometer a qualidade dos serviços prestados.',
  },
  {
    Icon: HeartHandshake,
    title: 'Atendimento Humanizado',
    desc: 'Cada cliente é único e merece atenção especial. Oferecemos atendimento personalizado e consultoria técnica especializada.',
  },
  {
    Icon: Clock,
    title: 'Horário Flexível',
    desc: 'Atendemos de segunda a sexta, das 7:30 às 18:00, com horários que se adaptam à rotina dos nossos clientes em Goiânia.',
  },
];

const stats = [
  { value: '8+', label: 'Anos de Mercado' },
  { value: '100+', label: 'Clientes Atendidos' },
  { value: '3', label: 'Linhas de Serviço' },
  { value: '100%', label: 'Satisfação' },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Por Que Escolher a <span className="text-[rgb(167,20,42)]">Anhanguera?</span>
          </h2>
          <div className="w-24 h-1 bg-[rgb(167,20,42)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossos diferenciais fazem toda a diferença na qualidade e eficiência dos serviços
            prestados. Conheça o que nos torna referência em Goiânia.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[rgb(167,20,42)]"
            >
              <Icon width={40} height={40} className="text-[rgb(167,20,42)] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-br from-[rgb(167,20,42)] to-red-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Especialização em Linha Leve, Média e Pesada
              </h3>
              <p className="text-lg mb-6 opacity-95 leading-relaxed">
                Nossa equipe altamente qualificada possui expertise para trabalhar com todos os
                tipos de motores, desde automóveis de passeio até caminhões e veículos industriais
                de grande porte.
              </p>
              <p className="text-lg opacity-95 leading-relaxed mb-8">
                Independente da complexidade do serviço, você pode contar com a Anhanguera Retífica
                para devolver a performance e eficiência do seu motor.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[rgb(167,20,42)] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Solicite Seu Orçamento
              </a>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                  <p className="text-4xl font-bold mb-2">{value}</p>
                  <p className="text-sm opacity-90">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
