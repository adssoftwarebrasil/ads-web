import { Wifi, Car, Coffee, Tv, Wind, Shield, Clock, MapPin, Star, Utensils } from 'lucide-react';

const amenities = [
  { icon: Wifi, title: 'Wi-Fi Gratuito', desc: 'Internet de alta velocidade em todos os ambientes' },
  { icon: Car, title: 'Estacionamento', desc: 'Garagem coberta e segura para seu veículo' },
  { icon: Coffee, title: 'Café da Manhã', desc: 'Café completo incluso em todas as diárias' },
  { icon: Tv, title: 'Smart TV', desc: 'Smart TV em todos os quartos' },
  { icon: Wind, title: 'Ar-Condicionado', desc: 'Clima controlado em todos os quartos' },
  { icon: Shield, title: 'Segurança 24h', desc: 'Monitoramento e recepção durante toda a estadia' },
  { icon: Clock, title: 'Check-in Flexível', desc: 'Horários adaptados às suas necessidades' },
  { icon: MapPin, title: 'Localização Central', desc: 'Pátio do Posto Ipanema — Araguaína, TO' },
  { icon: Utensils, title: 'Frigobar', desc: 'Frigobar disponível nos quartos selecionados' },
  { icon: Star, title: 'Atendimento VIP', desc: 'Serviço personalizado e atencioso 24 horas' },
];

export default function Amenities() {
  return (
    <section id="estrutura" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f68033] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#f68033] text-sm font-bold tracking-widest uppercase mb-3">
            Estrutura Completa
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Tudo que Você <span className="text-[#fff808]">Precisa</span>
          </h2>
          <p className="text-[#bdbec2] text-lg max-w-2xl mx-auto">
            Pensamos em cada detalhe para que sua estadia seja confortável, conveniente e memorável.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {amenities.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#f68033]/50 rounded-2xl p-5 text-center transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 bg-[#f68033]/10 group-hover:bg-[#f68033]/20 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300">
                <Icon className="text-[#f68033] group-hover:text-[#fff808] transition-colors duration-300" size={22} />
              </div>
              <h3 className="text-white font-bold text-sm mb-1">{title}</h3>
              <p className="text-[#bdbec2] text-xs leading-relaxed hidden sm:block">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 border-t border-white/10 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Hóspedes Atendidos' },
              { value: '12+', label: 'Anos de Experiência' },
              { value: '4.9', label: 'Avaliação Média' },
              { value: '24h', label: 'Atendimento Diário' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-5xl font-black text-[#fff808] mb-2">{value}</p>
                <p className="text-[#bdbec2] font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
