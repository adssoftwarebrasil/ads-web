import {
  Award,
  GraduationCap,
  Zap,
  Shield,
  Star,
  Heart,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';

interface Differential {
  icon: LucideIcon;
  title: string;
  text: string;
  delay: string;
  border: string;
  gradient: string;
  iconColor: string;
  check: string;
}

const differentials: Differential[] = [
  {
    icon: Award,
    title: 'Qualidade Garantida',
    text: 'Equipamentos de alta tecnologia para resultados superiores',
    delay: '0s',
    border: 'border-teal-500',
    gradient: 'from-teal-500/10 to-teal-600/5',
    iconColor: 'text-teal-500',
    check: 'text-teal-500',
  },
  {
    icon: GraduationCap,
    title: 'Profissionais Qualificados',
    text: 'Equipe experiente e altamente treinada em perfuração',
    delay: '0.1s',
    border: 'border-yellow-500',
    gradient: 'from-yellow-500/10 to-yellow-600/5',
    iconColor: 'text-yellow-500',
    check: 'text-yellow-500',
  },
  {
    icon: Zap,
    title: 'Atendimento Eficiente',
    text: 'Respostas rápidas e soluções ágeis para seu projeto',
    delay: '0.2s',
    border: 'border-teal-500',
    gradient: 'from-teal-500/10 to-teal-600/5',
    iconColor: 'text-teal-500',
    check: 'text-teal-500',
  },
  {
    icon: Shield,
    title: 'Compromisso com a Segurança',
    text: 'Protocolos rigorosos para garantir segurança em cada etapa',
    delay: '0.3s',
    border: 'border-[#004358]',
    gradient: 'from-[#004358]/10 to-[#004358]/5',
    iconColor: 'text-[#004358]',
    check: 'text-[#004358]',
  },
  {
    icon: Star,
    title: 'Experiência Reconhecida',
    text: 'Mais de 20 anos atendendo Jataí e região com excelência',
    delay: '0.4s',
    border: 'border-yellow-500',
    gradient: 'from-yellow-500/10 to-yellow-600/5',
    iconColor: 'text-yellow-500',
    check: 'text-yellow-500',
  },
  {
    icon: Heart,
    title: 'Atendimento Personalizado',
    text: 'Soluções customizadas para as necessidades específicas de cada cliente',
    delay: '0.5s',
    border: 'border-teal-500',
    gradient: 'from-teal-500/10 to-teal-600/5',
    iconColor: 'text-teal-500',
    check: 'text-teal-500',
  },
];

const badges = ['20+ Anos de Experiência', 'Equipamentos Modernos', 'Atendimento Personalizado'];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#004358] font-semibold text-sm uppercase tracking-wider bg-teal-50 px-4 py-2 rounded-full border border-teal-200">
              Nossos Diferenciais
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#004358] mb-4">Por Que Escolher a SOLO PERFURAÇÕES?</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Compromisso com excelência e satisfação do cliente em cada projeto
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {differentials.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="group relative"
                style={{ animation: `0.6s ease-out ${d.delay} 1 normal both running fadeInUp` }}
              >
                <div
                  className={`relative h-full flex items-start gap-4 p-6 bg-white rounded-xl hover:shadow-xl transition-all duration-300 border-l-4 ${d.border} overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${d.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${d.gradient} shadow-sm group-hover:shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <Icon className={`w-7 h-7 ${d.iconColor}`} />
                    </div>
                  </div>
                  <div className="relative z-10 flex-grow">
                    <h3 className="font-bold text-[#004358] mb-2 text-lg group-hover:text-teal-600 transition-colors">
                      {d.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{d.text}</p>
                  </div>
                  <CheckCircle2
                    className={`absolute top-4 right-4 w-5 h-5 ${d.check} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative mt-16">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-10 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
            </div>
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Award className="w-10 h-10 text-yellow-300" />
                <h3 className="text-3xl lg:text-4xl font-bold text-white">Pronto para Começar seu Projeto?</h3>
              </div>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Nossa equipe está pronta para oferecer a melhor solução em poços artesianos para você. Solicite um
                orçamento gratuito e sem compromisso!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => openWhatsApp('Olá! Gostaria de solicitar um orçamento gratuito.')}
                  className="group bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-3"
                >
                  Solicitar Orçamento Grátis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="https://wa.me/5564999919305?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20gratuito."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-teal-600 transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  Falar no WhatsApp
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                  </svg>
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/20">
                {badges.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300" />
                    <span className="text-sm font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
