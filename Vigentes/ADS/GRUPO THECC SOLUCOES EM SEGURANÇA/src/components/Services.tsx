import { Camera, Key, Hammer, Zap, Home, type LucideIcon } from 'lucide-react';

const services: { icon: LucideIcon; iconClass: string; title: string; desc: string; items: string[] }[] = [
  {
    icon: Camera,
    iconClass: 'lucide lucide-camera w-8 h-8 sm:w-10 sm:h-10 text-[#FFD700] group-hover:text-[#1A1A2E] transition-colors duration-300',
    title: 'SEGURANÇA ELETRÔNICA',
    desc: 'Soluções completas em monitoramento e proteção',
    items: ['Instalação de câmeras HD/IP', 'Sistemas de alarme', 'Cercas elétricas', 'Controle de acesso', 'Monitoramento remoto'],
  },
  {
    icon: Key,
    iconClass: 'lucide lucide-key w-8 h-8 sm:w-10 sm:h-10 text-[#FFD700] group-hover:text-[#1A1A2E] transition-colors duration-300',
    title: 'CHAVEIRO PROFISSIONAL',
    desc: 'Serviços especializados com qualidade e segurança',
    items: ['Abertura de portas e cofres', 'Cópia de chaves codificadas', 'Instalação de fechaduras', 'Chaves automotivas', 'Atendimento especializado'],
  },
  {
    icon: Hammer,
    iconClass: 'lucide lucide-hammer w-8 h-8 sm:w-10 sm:h-10 text-[#FFD700] group-hover:text-[#1A1A2E] transition-colors duration-300',
    title: 'SERRALHERIA',
    desc: 'Estruturas metálicas e proteções personalizadas',
    items: ['Portões de ferro e alumínio', 'Grades de proteção', 'Estruturas metálicas', 'Corrimãos e guarda-corpos', 'Projetos sob medida'],
  },
  {
    icon: Zap,
    iconClass: 'lucide lucide-zap w-8 h-8 sm:w-10 sm:h-10 text-[#FFD700] group-hover:text-[#1A1A2E] transition-colors duration-300',
    title: 'ELÉTRICA RESIDENCIAL',
    desc: 'Instalações elétricas seguras e eficientes',
    items: ['Instalação e manutenção', 'Quadros de distribuição', 'Automação de portões', 'Iluminação inteligente', 'Rede de dados'],
  },
  {
    icon: Home,
    iconClass: 'lucide lucide-home w-8 h-8 sm:w-10 sm:h-10 text-[#FFD700] group-hover:text-[#1A1A2E] transition-colors duration-300',
    title: 'AUTOMAÇÃO RESIDENCIAL',
    desc: 'Tecnologia e conforto para seu lar',
    items: ['Smart home completo', 'Controle por app', 'Integração de sistemas', 'Fechaduras inteligentes', 'Assistentes virtuais'],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-[#FFD700]/10 text-[#1A1A2E] px-4 py-2 rounded-full font-semibold text-xs sm:text-sm mb-4">O QUE FAZEMOS</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4 sm:mb-6 px-4">Nossos <span className="text-[#FFD700]">Serviços</span></h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto px-4">Oferecemos soluções completas em segurança, chaveiro e automação com qualidade profissional e atendimento diferenciado</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FFD700]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#FFD700] transition-colors duration-300">
                  <Icon className={s.iconClass} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E] mb-2 sm:mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">{s.desc}</p>
                <ul className="space-y-3">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start text-sm">
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#FFD700] rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="text-[#FFD700] font-semibold text-sm hover:text-[#1A1A2E] transition-colors duration-300 group-hover:translate-x-2 inline-flex items-center">Solicitar Orçamento
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path></svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-[#1A1A2E] to-[#16213E] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 px-4">Não encontrou o serviço que procura?</h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto px-4">Entre em contato conosco! Temos soluções personalizadas para suas necessidades</p>
            <a href="https://wa.me/556198449664?text=Olá!%20Preciso%20de%20um%20serviço%20personalizado" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#FFD700] text-[#1A1A2E] px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-[#FFC700] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">FALAR COM ESPECIALISTA</a>
          </div>
        </div>
      </div>
    </section>
  );
}
