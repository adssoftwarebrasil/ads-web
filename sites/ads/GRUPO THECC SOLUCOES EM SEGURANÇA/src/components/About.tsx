import { Shield, Check, Zap, Award, Clock, Users, Star, type LucideIcon } from 'lucide-react';
import { scrollToId } from '../lib/scroll';

const features = [
  { title: 'Mão de obra qualificada e certificada', desc: 'Profissionais treinados' },
  { title: 'Atendimento 24 horas', desc: 'Sempre disponível' },
  { title: 'Materiais de primeira linha', desc: 'Alta qualidade' },
  { title: 'Garantia em todos os serviços', desc: 'Segurança garantida' },
  { title: 'Pontualidade e compromisso', desc: 'Prazos cumpridos' },
];

const stats: { icon: LucideIcon; iconClass: string; title: string; desc: string }[] = [
  { icon: Award, iconClass: 'lucide lucide-award w-8 h-8 sm:w-10 sm:h-10 text-[#FFD700] mx-auto mb-2 sm:mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300', title: 'Certificados', desc: 'Profissionais qualificados' },
  { icon: Clock, iconClass: 'lucide lucide-clock w-8 h-8 sm:w-10 sm:h-10 text-[#FFD700] mx-auto mb-2 sm:mb-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300', title: '24/7', desc: 'Suporte disponível' },
  { icon: Shield, iconClass: 'lucide lucide-shield w-8 h-8 sm:w-10 sm:h-10 text-[#FFD700] mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300', title: 'Garantia', desc: 'Em todos os serviços' },
  { icon: Users, iconClass: 'lucide lucide-users w-8 h-8 sm:w-10 sm:h-10 text-[#FFD700] mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300', title: 'Confiança', desc: 'Milhares de clientes' },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1A1A2E]/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
              <img src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=grupotech%2Fgrupotech.jpg&version_id=null" alt="Equipe Grupo THECC" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-br from-[#FFD700] to-[#FFC700] rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl border-2 sm:border-4 border-white hover:scale-110 transition-transform duration-300">
              <div className="text-[#1A1A2E] font-black text-3xl sm:text-4xl lg:text-5xl leading-none">27</div>
              <div className="text-[#1A1A2E] font-bold text-[10px] sm:text-xs mt-1 whitespace-nowrap">ANOS DE</div>
              <div className="text-[#1A1A2E] font-bold text-[10px] sm:text-xs whitespace-nowrap">EXPERIÊNCIA</div>
            </div>
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-[#FFD700]/20 hover:scale-110 transition-transform duration-300">
              <Star className="lucide lucide-star w-8 h-8 text-[#FFD700] fill-[#FFD700]" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center bg-gradient-to-r from-[#FFD700]/20 to-[#FFD700]/10 text-[#1A1A2E] px-5 py-2.5 rounded-full font-bold text-xs mb-6 border border-[#FFD700]/30">
              <Shield className="lucide lucide-shield w-4 h-4 mr-2 text-[#FFD700]" />QUEM SOMOS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#1A1A2E] mb-3 sm:mb-4 leading-tight">Grupo THECC</h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFC700] bg-clip-text text-transparent mb-4 sm:mb-6">Referência em Segurança</h3>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">Com <span className="font-bold text-[#FFD700]">27 anos no mercado</span>, o Grupo THECC é referência em segurança eletrônica e serviços de chaveiro em Vicente Pires, Águas Claras e região.</p>
            <div className="space-y-3 mb-8">
              {features.map((f) => (
                <div key={f.title} className="flex items-start group">
                  <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-[#FFD700] to-[#FFC700] rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                    <Check className="lucide lucide-check w-3 h-3 text-[#1A1A2E] font-bold" strokeWidth={3} />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold text-[#1A1A2E] text-sm">{f.title}</h4>
                    <p className="text-gray-600 text-xs">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-sm mb-8 bg-gray-50 p-4 rounded-xl border-l-4 border-[#FFD700]">
              <Zap className="lucide lucide-zap w-5 h-5 text-[#FFD700] inline mr-2" />Atendemos condomínios e público geral com soluções completas em segurança, serralheria, elétrica e automação residencial.
            </p>
            <button onClick={() => scrollToId('contato')} className="group relative bg-gradient-to-r from-[#FFD700] to-[#FFC700] text-[#1A1A2E] px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-black text-sm sm:text-base hover:from-[#FFC700] hover:to-[#FFB700] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden w-full sm:w-auto">
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative">SOLICITAR ORÇAMENTO</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-12 sm:mt-16">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="group relative bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 hover:border-[#FFD700]/50 transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/0 to-[#FFD700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <Icon className={s.iconClass} />
                  <div className="text-[#1A1A2E] font-black text-lg sm:text-xl lg:text-2xl mb-1">{s.title}</div>
                  <div className="text-gray-600 text-[10px] sm:text-xs font-semibold">{s.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
