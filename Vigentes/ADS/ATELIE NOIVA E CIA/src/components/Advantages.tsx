import { Sparkles, Award, Users, Globe, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';

const CARDS = [
  { Icon: Sparkles, title: 'Alta Qualidade', desc: 'Tecidos nobres e confecção impecável' },
  { Icon: Award, title: 'Variedade de Modelos', desc: 'Opções para todos os gostos e estilos' },
  { Icon: Users, title: 'Atendimento Personalizado', desc: 'Consultoria especializada para cada cliente' },
  { Icon: Globe, title: 'Excelência Comprovada', desc: 'Vestidos que cruzaram fronteiras' },
];

const BENEFITS = [
  { title: 'Peças Exclusivas', desc: 'Modelos sofisticados para todos os estilos' },
  { title: 'Atendimento Especializado', desc: 'Consultoria para a escolha perfeita' },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Por que Contratar?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">A elegância e sofisticação que você merece</p>
          <p className="text-base md:text-lg text-gray-500 mt-4 max-w-3xl mx-auto">Nosso objetivo é transformar sonhos em realidade, oferecendo experiências únicas e memoráveis.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {CARDS.map(({ Icon, title, desc }) => (
            <div key={title} className="group bg-gradient-to-br from-[#FAFFEF] to-white border border-gray-200 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#721515] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-br from-[#721515] to-[#8b1a1a] rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Vantagens</h3>
            <p className="text-lg text-[#FAFFEF]/90">Por que escolher a Ateliê Noiva e Cia?</p>
            <p className="text-base text-[#FAFFEF]/80 mt-2 max-w-2xl mx-auto">Nosso compromisso é com a qualidade, atendimento e exclusividade, garantindo experiências únicas para nossos clientes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <h4 className="text-xl font-bold mb-2">{b.title}</h4>
                <p className="text-[#FAFFEF]/90">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => openWhatsApp()}
              className="group inline-flex items-center gap-3 bg-white hover:bg-[#FAFFEF] text-[#721515] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Enviar WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
