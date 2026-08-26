import { MessageCircle, Phone, Users, Star, Award, MapPin } from 'lucide-react';

const badges = [
  { icon: Users, iconClass: 'lucide lucide-users', label: '5.000+ Clientes' },
  { icon: Star, iconClass: 'lucide lucide-star', label: 'Nota 4.9' },
  { icon: Award, iconClass: 'lucide lucide-award', label: 'Credenciada' },
  { icon: MapPin, iconClass: 'lucide lucide-map-pin', label: 'Local' },
];

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">CONTRATE AGORA</div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6">Pronto Para a Melhor<span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Internet de Jaboatão?</span></h2>
          <p className="text-xl lg:text-2xl text-slate-300">Instalação grátis • Sem fidelidade • Suporte 24h</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <input type="text" placeholder="Seu nome completo" className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-white/50 backdrop-blur-sm" />
              <input type="tel" placeholder="(81) 9 9999-9999" className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-white/50 backdrop-blur-sm" />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <input type="text" placeholder="Seu endereço" className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-white/50 backdrop-blur-sm" />
              <select className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-cyan-400 focus:outline-none transition-colors text-white backdrop-blur-sm">
                <option className="bg-slate-900">Plano 100MB - R$ 69,90</option>
                <option className="bg-slate-900">Plano 200MB - R$ 79,90</option>
                <option className="bg-slate-900">Plano 300MB - R$ 89,90</option>
                <option className="bg-slate-900">Plano 500MB - R$ 99,90</option>
                <option className="bg-slate-900">Plano Empresarial</option>
              </select>
            </div>
            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 mb-4">CONTRATAR AGORA</button>
            <p className="text-center text-sm text-white/60">Resposta em até 2 horas • Sem compromisso</p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto mt-12">
          <p className="text-center text-lg mb-6 text-slate-300">Prefere falar conosco?</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="https://wa.me/5581997587500" className="group flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-5 rounded-xl font-bold hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105">
              <MessageCircle className="lucide lucide-message-circle w-6 h-6 group-hover:scale-110 transition-transform" />
              <div className="text-left"><div className="text-xs opacity-90">WhatsApp</div><div>(81) 9 9758-7500</div></div>
            </a>
            <a href="tel:+5581997587500" className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-5 rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Phone className="lucide lucide-phone w-6 h-6" />
              <div className="text-left"><div className="text-xs opacity-90">Telefone</div><div>(81) 9 9758-7500</div></div>
            </a>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
                <Icon className={`${b.iconClass} w-5 h-5`} />
                <span className="font-semibold text-sm">{b.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
