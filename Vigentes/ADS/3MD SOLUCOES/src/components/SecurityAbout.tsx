import { Camera, Smartphone, Shield, Bell, Cloud, Package, TrendingUp, CheckCircle, Zap, Sun, Award, MapPin, Users, Phone, Mail, Instagram, Clock, type LucideIcon } from 'lucide-react';

const securityItems = [
  { icon: Camera, iconClass: 'lucide lucide-camera', grad: 'from-blue-500 to-cyan-500', text: 'Câmeras HD Intelbras com visão noturna' },
  { icon: Smartphone, iconClass: 'lucide lucide-smartphone', grad: 'from-purple-500 to-pink-500', text: 'Acesso remoto via app iOS e Android' },
  { icon: Cloud, iconClass: 'lucide lucide-cloud', grad: 'from-emerald-500 to-teal-500', text: 'Gravação em nuvem e local' },
  { icon: Bell, iconClass: 'lucide lucide-bell', grad: 'from-orange-500 to-amber-500', text: 'Notificações instantâneas de movimento' },
  { icon: Shield, iconClass: 'lucide lucide-shield', grad: 'from-green-500 to-emerald-500', text: 'Instalação profissional inclusa' },
  { icon: Package, iconClass: 'lucide lucide-package', grad: 'from-indigo-500 to-purple-500', text: 'Pacotes combinados internet + monitoramento' },
];

interface Service {
  icon: LucideIcon;
  iconClass: string;
  grad: string;
  title: string;
  items: string[];
}

const services: Service[] = [
  { icon: Shield, iconClass: 'lucide lucide-shield', grad: 'from-blue-500 to-cyan-500', title: 'Segurança Eletrônica', items: ['Sistemas de Alarmes', 'Câmeras Analógicas e IP', 'Cerca Elétrica', 'Porteiro Eletrônico'] },
  { icon: Zap, iconClass: 'lucide lucide-zap', grad: 'from-purple-500 to-indigo-500', title: 'Telecomunicações', items: ['Internet Fibra Óptica', 'Cobertura em Barra de Jangada', 'Candeias, Piedade e Cajueiro Seco'] },
  { icon: Sun, iconClass: 'lucide lucide-sun', grad: 'from-yellow-500 to-orange-500', title: 'Energia Solar', items: ['Elaboração de Projetos', 'Homologação', 'Instalação e Manutenção'] },
];

const diffs = [
  { icon: Award, iconClass: 'lucide lucide-award', title: 'Agilidade e Excelência', desc: 'Superando expectativas desde 2016' },
  { icon: MapPin, iconClass: 'lucide lucide-map-pin', title: 'Cobertura Ampla', desc: 'Atendemos todo Jaboatão dos Guararapes' },
  { icon: Users, iconClass: 'lucide lucide-users', title: 'Estrutura Robusta', desc: '3 empresas no contrato para melhor atendimento' },
];

export default function SecurityAbout() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20 lg:mb-32">
          <div className="relative order-2 lg:order-1 animate-fadeInLeft">
            <div className="relative w-full h-80 sm:h-96 lg:h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-transparent rounded-3xl blur-3xl"></div>
              <div className="relative">
                <div className="relative w-56 h-40 sm:w-72 sm:h-52 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl flex items-center justify-center shadow-2xl animate-float">
                  <Camera className="lucide lucide-camera w-20 h-20 sm:w-28 sm:h-28 text-white" />
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-24 h-24 sm:w-36 sm:h-36 bg-white rounded-2xl flex items-center justify-center shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
                  <Smartphone className="lucide lucide-smartphone w-12 h-12 sm:w-20 sm:h-20 text-blue-600" />
                </div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-28 sm:h-28 bg-white rounded-2xl flex items-center justify-center shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                  <Shield className="lucide lucide-shield w-10 h-10 sm:w-14 sm:h-14 text-green-600" />
                </div>
                <div className="absolute top-1/4 -left-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                  <Bell className="lucide lucide-bell w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-1/4 -right-8 w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                  <Cloud className="lucide lucide-cloud w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2 animate-fadeInRight">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-lg">
              <Shield className="lucide lucide-shield w-4 h-4" />PARCEIRO OFICIAL INTELBRAS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-tight">Segurança Inteligente <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Integrada</span></h2>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">Monitore tudo pelo celular, em tempo real, com tecnologia de ponta</p>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {securityItems.map((it, i) => {
                const Icon = it.icon;
                return (
                  <div key={i} className="group flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300" style={{ animation: `0.4s ease-out ${i * 0.1}s 1 normal both running slideInLeft` }}>
                    <div className={`w-10 h-10 bg-gradient-to-br ${it.grad} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`${it.iconClass} w-5 h-5 text-white`} />
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 font-medium pt-1.5 leading-tight">{it.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-5 sm:p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-3">
                <Package className="lucide lucide-package w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed">Economize contratando internet + câmeras no mesmo pacote</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <span className="text-sm sm:text-base">MONTAR MEU SISTEMA</span>
                <Shield className="lucide lucide-shield w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm sm:text-base">VER CÂMERAS DISPONÍVEIS</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold mb-6 shadow-lg">
              <TrendingUp className="lucide lucide-trending-up w-4 h-4" />DESDE 2016
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6">3MD Soluções: Tecnologia e <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Conectividade</span></h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">Com 8 anos de atuação, transformamos o mercado em Jaboatão dos Guararapes com excelência e agilidade em tecnologia para residências e empresas.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="group bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2" style={{ animation: `0.6s ease-out ${i * 0.15}s 1 normal both running fadeInUp` }}>
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${s.grad} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon className={`${s.iconClass} w-8 h-8 sm:w-10 sm:h-10 text-white`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
                  <ul className="space-y-3">
                    {s.items.map((it, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm sm:text-base text-slate-700">
                        <CheckCircle className="lucide lucide-check-circle w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 mb-12 sm:mb-16 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.2),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.2),transparent_50%)]"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white text-center mb-8 sm:mb-12">Nossos Diferenciais</h3>
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {diffs.map((d, i) => {
                  const Icon = d.icon;
                  return (
                    <div key={i} className="text-center group">
                      <div className="inline-flex w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className={`${d.iconClass} w-8 h-8 sm:w-10 sm:h-10 text-white`} />
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{d.title}</h4>
                      <p className="text-sm sm:text-base text-slate-300">{d.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-4">Fale Conosco</h3>
              <p className="text-base sm:text-lg text-slate-600">Estamos prontos para atender você!</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
              <a href="https://wa.me/5581997587500" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="lucide lucide-phone w-7 h-7 text-white" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">WhatsApp</p>
                <p className="text-xs sm:text-sm text-slate-600">(81) 99758-7500</p>
              </a>
              <a href="mailto:3mdtelecom@gmail.com" className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="lucide lucide-mail w-7 h-7 text-white" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">E-mail</p>
                <p className="text-xs sm:text-sm text-slate-600 break-all">3mdtelecom@gmail.com</p>
              </a>
              <a href="https://instagram.com/3md_solucoes" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="lucide lucide-instagram w-7 h-7 text-white" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">Instagram/Facebook</p>
                <p className="text-xs sm:text-sm text-slate-600">@3md_solucoes</p>
              </a>
              <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="lucide lucide-clock w-7 h-7 text-white" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">Horário</p>
                <p className="text-xs sm:text-sm text-slate-600">08:00 às 18:00hs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
