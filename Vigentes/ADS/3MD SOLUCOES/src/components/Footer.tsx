import { Wifi, Instagram, MessageCircle, Phone, Clock, MapPin } from 'lucide-react';

const nav = ['Início', 'Planos Residenciais', 'Planos Empresariais', 'Cobertura', 'Contato'];
const plans = [
  { speed: '100MB', price: 'R$ 69,90/mês' },
  { speed: '200MB', price: 'R$ 79,90/mês' },
  { speed: '300MB', price: 'R$ 89,90/mês' },
  { speed: '500MB', price: 'R$ 99,90/mês' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl top-0 right-0"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl bottom-0 left-0"></div>
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Wifi className="lucide lucide-wifi w-6 h-6" />
              </div>
              <span className="text-2xl font-black">3MD</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">Internet fibra óptica de alta performance em Jaboatão dos Guararapes. Credenciada Intelbras com mais de 5.000 clientes satisfeitos.</p>
            <div className="flex gap-3">
              <a href="https://instagram.com/3md_solucoes" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 border border-white/10">
                <Instagram className="lucide lucide-instagram w-5 h-5" />
              </a>
              <a href="https://wa.me/5581997587500" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-500 transition-all duration-300 hover:scale-110 border border-white/10">
                <MessageCircle className="lucide lucide-message-circle w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Navegação</h3>
            <ul className="space-y-3">
              {nav.map((n, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm inline-flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors"></span>{n}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Nossos Planos</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              {plans.map((p, i) => (
                <li key={i} className="hover:text-cyan-400 transition-colors cursor-pointer"><span className="font-semibold">{p.speed}</span> - {p.price}</li>
              ))}
              <li className="pt-2"><a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors inline-flex items-center gap-1">Planos Corporativos →</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contato</h3>
            <div className="space-y-4">
              <a href="https://wa.me/5581997587500" className="flex items-start gap-3 text-slate-400 hover:text-green-400 transition-colors group">
                <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors flex-shrink-0">
                  <MessageCircle className="lucide lucide-message-circle w-5 h-5 text-green-400" />
                </div>
                <div className="text-sm"><div className="font-semibold text-white mb-0.5">WhatsApp</div><div>(81) 9 9758-7500</div></div>
              </a>
              <a href="tel:+5581997587500" className="flex items-start gap-3 text-slate-400 hover:text-blue-400 transition-colors group">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                  <Phone className="lucide lucide-phone w-5 h-5 text-blue-400" />
                </div>
                <div className="text-sm"><div className="font-semibold text-white mb-0.5">Telefone</div><div>(81) 9 9758-7500</div></div>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="lucide lucide-clock w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-sm"><div className="font-semibold text-white mb-0.5">Horários</div><div>Seg-Sex: 8h-12h / 14h-18h</div><div>Sábado: 8h-14h</div></div>
              </div>
              <div className="flex items-start gap-3 text-slate-400">
                <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="lucide lucide-map-pin w-5 h-5 text-orange-400" />
                </div>
                <div className="text-sm"><div className="font-semibold text-white mb-0.5">Localização</div><div>Jaboatão dos Guararapes - PE</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <div className="text-center lg:text-left">© 2025 <span className="text-white font-semibold">3MD Telecomunicações Ltda</span><span className="hidden sm:inline"> - CNPJ: 41.844.004/0001-33</span></div>
            <div className="flex flex-wrap justify-center gap-6">
              <span>Todos os direitos reservados</span>
              <span className="hidden sm:inline">•</span>
              <span>Desenvolvido com ❤️ em Pernambuco</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
