import { CalendarDays, CalendarRange, Check } from 'lucide-react';

const dailyFeatures = [
  'Check-in e check-out flexíveis',
  'Café da manhã incluso',
  'Wi-Fi de alta velocidade',
  'Estacionamento gratuito',
  'Recepção 24 horas',
  'Apartamento com sala e cozinha',
];

const monthlyFeatures = [
  'Tarifa especial mensal',
  'Limpeza periódica inclusa',
  'Café da manhã incluso',
  'Wi-Fi de alta velocidade',
  'Estacionamento gratuito',
  'Recepção 24 horas',
  'Apartamento com sala e cozinha',
  'Contas inclusas (água/luz)',
];

const audienceCards = [
  {
    title: 'Executivos e Representantes',
    desc: 'Localização central no coração de Linhares, Wi-Fi rápido e estrutura completa para trabalhar com conforto.',
    img: 'https://storage.lucasmendes.dev/site-sp/treviso%2Ftreviso%20hotel%2F3.jpeg',
  },
  {
    title: 'Turistas e Famílias',
    desc: 'Espaço amplo com cozinha para o final de semana, ideal para famílias que querem liberdade e conforto.',
    img: 'https://storage.lucasmendes.dev/site-sp/treviso%2Ftreviso%20hotel%2F6.jpeg',
  },
];

export default function Services() {
  const handleWhatsApp = (type: string) => {
    const msg = encodeURIComponent(`Olá! Tenho interesse em uma ${type} no Treviso Apart Hotel. Poderia me passar mais informações?`);
    window.open(`https://wa.me/552733734333?text=${msg}`, '_blank');
  };

  return (
    <section id="services" className="bg-[#212042] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#b82626] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            Nossas Opções
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fef5e6] leading-tight">
            Escolha o plano ideal para você
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-[#b82626] rounded-full" />
          </div>
          <p className="mt-5 text-[#a08f95] max-w-xl mx-auto text-base leading-relaxed">
            Seja para uma noite ou um mês inteiro, temos a solução perfeita com
            o melhor custo-benefício de Linhares.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#b82626]/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-[#212042] border border-[#b82626]/30 rounded-xl flex items-center justify-center">
                <CalendarDays size={22} className="text-[#b82626]" />
              </div>
              <div>
                <h3 className="text-[#fef5e6] font-bold text-xl">Diária</h3>
                <p className="text-[#a08f95] text-xs">Estadias de 1 a 29 noites</p>
              </div>
            </div>
            <ul className="space-y-3 mb-7">
              {dailyFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-[#fef5e6]/80 text-sm">
                  <Check size={15} className="text-[#b82626] flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleWhatsApp('diária')}
              className="w-full border-2 border-[#b82626] text-[#b82626] hover:bg-[#b82626] hover:text-white font-bold py-3 rounded-lg transition-all duration-200"
            >
              Consultar Disponibilidade
            </button>
          </div>

          <div className="bg-[#b82626] rounded-2xl p-8 shadow-2xl shadow-[#b82626]/20 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-[#fef5e6] text-[#b82626] text-xs font-bold px-3 py-1 rounded-full">
              MELHOR CUSTO-BENEFÍCIO
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <CalendarRange size={22} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Mensal</h3>
                <p className="text-white/70 text-xs">30 noites ou mais</p>
              </div>
            </div>
            <ul className="space-y-3 mb-7">
              {monthlyFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-white/90 text-sm">
                  <Check size={15} className="text-white flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleWhatsApp('hospedagem mensal')}
              className="w-full bg-white text-[#b82626] hover:bg-[#fef5e6] font-bold py-3 rounded-lg transition-all duration-200"
            >
              Solicitar Proposta Mensal
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-14">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#fef5e6] mb-2">Para quem é o Treviso?</h3>
            <p className="text-[#a08f95] text-sm">Atendemos diferentes perfis com a mesma qualidade</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {audienceCards.map((card, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden group">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#212042] via-[#212042]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="text-[#fef5e6] font-bold text-lg mb-1">{card.title}</h4>
                  <p className="text-[#fef5e6]/70 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
