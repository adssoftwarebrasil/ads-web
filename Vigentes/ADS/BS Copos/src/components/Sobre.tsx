import { Sparkles, Award, CheckCircle2, MapPin } from 'lucide-react';
import { WHATSAPP_URL } from '../data';

const features = [
  { Icon: Award, title: 'Pioneiros no MS', subtitle: 'Referência regional' },
  { Icon: CheckCircle2, title: 'Entrega Ágil', subtitle: 'Compromisso com prazo' },
  { Icon: MapPin, title: 'Localização Central', subtitle: 'Campo Grande - MS' },
  { Icon: Sparkles, title: 'Qualidade Premium', subtitle: 'Acabamento impecável' },
];

export default function Sobre() {
  return (
    <section id="sobre" className="w-full py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-slate-50 rounded-full blur-[100px] -z-10"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#000EFF]/10 rounded-[2.5rem] -z-10 group-hover:top-0 group-hover:left-0 transition-all duration-500"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/bscomerc%2FQuem%20somos.jpeg"
                alt="Equipe BS Copos"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-4 md:right-8 bg-[#000EFF] text-white p-8 rounded-[2rem] shadow-2xl shadow-blue-500/40 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-center">
                <span className="block text-5xl font-black mb-1">14+</span>
                <span className="text-xs uppercase tracking-widest font-bold opacity-90 leading-tight">
                  Anos de <br /> Experiência
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#000EFF] text-sm font-bold uppercase tracking-wider">
                <Sparkles width={16} height={16} />
                Tradição e Inovação
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Pioneirismo que transforma <span className="text-[#000EFF]">cada brinde.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Na **BS Copos**, não apenas personalizamos produtos; criamos memórias tangíveis. Como
                pioneiros no Mato Grosso do Sul, nossa jornada de 14 anos é pautada pela busca
                incessante da perfeição em cada detalhe.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map(({ Icon, title, subtitle }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors"
                >
                  <div className="p-2 bg-white rounded-xl shadow-sm">
                    <Icon width={24} height={24} className="text-[#000EFF]" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{title}</p>
                    <p className="text-xs text-slate-500">{subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-[#000EFF] text-white px-10 py-5 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl active:scale-95 group"
              >
                Conheça Nossa História
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Award width={18} height={18} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
