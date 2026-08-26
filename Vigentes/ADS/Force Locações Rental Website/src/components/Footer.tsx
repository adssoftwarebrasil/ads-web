import { ArrowRight, Instagram, Clock, Phone, Mail, MapPin } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#empresa', label: 'Empresa' },
  { href: '#equipamentos', label: 'Equipamentos' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#orcamento', label: 'Orçamento' },
  { href: '#contato', label: 'Contato' },
];

const equipItems = [
  'Caminhão Munck', 'Guindaste 30t', 'Guindaste 70t',
  'Guindaste 100t', 'Guindaste 220t', 'Guindaste 300t',
];

export default function Footer() {
  return (
    <footer className="bg-white text-slate-800 border-t border-slate-200">
      <div className="bg-force-yellow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-force-dark-blue mb-2">
                Pronto para locar seu equipamento?
              </h3>
              <p className="text-force-dark-blue/80 font-medium">
                Solicite um orçamento gratuito agora mesmo!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#orcamento" className="group inline-flex items-center justify-center space-x-2 bg-force-dark-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-900 transition-all transform hover:scale-105 shadow-lg">
                <span>SOLICITAR ORÇAMENTO</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://wa.me/5591985785150" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg">
                <span>💬</span>
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src="https://storage.lucasmendes.dev/site-sp/force%2Flogo-force_page-0001-Photoroom.png" alt="Force Locações" className="h-16 w-auto mb-6" />
            <p className="text-slate-600 mb-6 leading-relaxed text-sm">
              Locação de guindastes e equipamentos para movimentação de cargas pesadas. Atendimento
              24h em Belém e todo o Pará.
            </p>
            <div className="space-y-3">
              <a href="https://instagram.com/forcelocacaobr" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center space-x-2 text-slate-600 hover:text-force-blue transition-colors">
                <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-force-yellow/50 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="font-medium">@forcelocacaobr</span>
              </a>
            </div>
            <div className="mt-6 bg-slate-100 rounded-lg p-4 border border-slate-200">
              <div className="flex items-start space-x-2">
                <Clock className="w-5 h-5 text-force-blue flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-bold text-slate-800 mb-1">Atendimento:</p>
                  <p className="text-slate-600">Segunda a Domingo - 24h</p>
                  <p className="text-slate-500 text-xs mt-1">Escritório: Seg-Sex, 08:00-18:00</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-force-blue uppercase mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-force-blue mr-3"></span>Navegação
            </h4>
            <ul className="space-y-3">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="group inline-flex items-center text-slate-600 hover:text-force-blue transition-colors">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{n.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-force-blue uppercase mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-force-blue mr-3"></span>Equipamentos
            </h4>
            <ul className="space-y-3">
              {equipItems.map((e) => (
                <li key={e}>
                  <a href="#equipamentos" className="group inline-flex items-center text-slate-600 hover:text-force-blue transition-colors text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-force-blue mr-3 opacity-50 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{e}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-force-blue uppercase mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-force-blue mr-3"></span>Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+5591985785150" className="group flex items-start space-x-3 text-slate-600 hover:text-force-blue transition-colors">
                  <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-force-yellow/50 transition-colors flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Ligue agora</p>
                    <p className="font-bold">(91) 98578-5150</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:aureliopassosrodrigues@gmail.com" className="group flex items-start space-x-3 text-slate-600 hover:text-force-blue transition-colors">
                  <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-force-yellow/50 transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">E-mail</p>
                    <p className="font-medium text-sm break-all">aureliopassosrodrigues@gmail.com</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-slate-600">
                  <div className="bg-slate-100 p-2 rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 text-force-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Endereço</p>
                    <p className="font-medium text-sm">
                      Tv. Francisco Caldeira<br />Castelo Branco, 27<br />Guamá, Belém - PA
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 my-12"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-600">
            <span>✓ 20+ anos de experiência</span>
            <span>✓ 50+ equipamentos</span>
            <span>✓ Atendimento 24/7</span>
            <span>✓ Cobertura em todo o Pará</span>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center text-sm text-slate-500">
            <p>© 2026 Force Locações - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
