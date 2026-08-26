import { Wrench, Zap, Package, Drill, ArrowRight, type LucideIcon } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';

interface Service {
  icon: LucideIcon;
  title: string;
  text: string;
  delay: string;
  border: string;
  gradient: string;
  iconColor: string;
  iconBg: string;
  btnText: string;
  btnBorder: string;
  btnHover: string;
  corner: string;
}

const services: Service[] = [
  {
    icon: Wrench,
    title: 'Manutenção de Poços',
    text: 'Serviço completo de manutenção preventiva e corretiva para poços artesianos',
    delay: '0s',
    border: 'hover:border-teal-500',
    gradient: 'from-teal-500/10 to-teal-600/5',
    iconColor: 'text-teal-500',
    iconBg: 'from-teal-500/10 to-teal-600/5',
    btnText: 'text-teal-500',
    btnBorder: 'border-teal-500',
    btnHover: 'hover:from-teal-500/10 to-teal-600/5',
    corner: 'text-teal-500',
  },
  {
    icon: Zap,
    title: 'Bombas Submersas',
    text: 'Venda e instalação de bombas submersas de alta performance e durabilidade',
    delay: '0.15s',
    border: 'hover:border-yellow-500',
    gradient: 'from-yellow-500/10 to-yellow-600/5',
    iconColor: 'text-yellow-500',
    iconBg: 'from-yellow-500/10 to-yellow-600/5',
    btnText: 'text-yellow-500',
    btnBorder: 'border-yellow-500',
    btnHover: 'hover:from-yellow-500/10 to-yellow-600/5',
    corner: 'text-yellow-500',
  },
  {
    icon: Package,
    title: 'Venda de Materiais',
    text: 'Fornecimento completo de materiais para instalação e manutenção de poços',
    delay: '0.3s',
    border: 'hover:border-[#004358]',
    gradient: 'from-[#004358]/10 to-[#004358]/5',
    iconColor: 'text-[#004358]',
    iconBg: 'from-[#004358]/10 to-[#004358]/5',
    btnText: 'text-[#004358]',
    btnBorder: 'border-[#004358]',
    btnHover: 'hover:from-[#004358]/10 to-[#004358]/5',
    corner: 'text-[#004358]',
  },
  {
    icon: Drill,
    title: 'Instalação de Poço',
    text: 'Perfuração e instalação completa de poços artesianos com acompanhamento técnico',
    delay: '0.45s',
    border: 'hover:border-teal-500',
    gradient: 'from-teal-500/10 to-teal-600/5',
    iconColor: 'text-teal-500',
    iconBg: 'from-teal-500/10 to-teal-600/5',
    btnText: 'text-teal-500',
    btnBorder: 'border-teal-500',
    btnHover: 'hover:from-teal-500/10 to-teal-600/5',
    corner: 'text-teal-500',
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider bg-teal-50 px-4 py-2 rounded-full">
              O que oferecemos
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#004358] mb-4">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Soluções completas para todas as suas necessidades em poços artesianos
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative"
                style={{ animation: `0.6s ease-out ${s.delay} 1 normal both running fadeInUp` }}
              >
                <div
                  className={`relative bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-transparent ${s.border} overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                  <div className="relative z-10 flex flex-col items-center text-center h-full">
                    <div className="mb-6 relative">
                      <div
                        className={`absolute inset-0 ${s.iconColor} opacity-10 rounded-full blur-xl scale-150 group-hover:scale-175 transition-transform duration-300`}
                      ></div>
                      <div
                        className={`relative bg-gradient-to-br ${s.iconBg} rounded-full p-5 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-12 h-12 ${s.iconColor}`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#004358] mb-4 group-hover:text-teal-600 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed flex-grow">{s.text}</p>
                    <button
                      onClick={() => openWhatsApp(`Olá! Gostaria de mais informações sobre ${s.title}.`)}
                      className={`mt-auto px-6 py-3 rounded-lg ${s.btnText} font-semibold bg-white border-2 ${s.btnBorder} hover:bg-gradient-to-r ${s.btnHover} transition-all duration-300 flex items-center gap-2 group-hover:gap-3 shadow-sm hover:shadow-md`}
                    >
                      Solicitar
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 ${s.corner} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">Não encontrou o que procura? Entre em contato conosco!</p>
          <a
            href="https://wa.me/5564999919305?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Falar com Especialista
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
