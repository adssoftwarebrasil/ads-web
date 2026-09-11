import { Coffee, Wifi, Wind, Tv, Moon, Clock, MapPin, Shield } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const amenities = [
  {
    icon: Coffee,
    title: 'Café da Manhã',
    description: 'Café da manhã completo servido diariamente das 6h30 às 10h00.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi Gratuito',
    description: 'Conexão rápida em todas as dependências do hotel, sem custo adicional.',
    color: 'text-[#0aaff9]',
    bg: 'bg-blue-50',
  },
  {
    icon: Wind,
    title: 'Ar-Condicionado',
    description: 'Todas as suítes equipadas com ar-condicionado para seu máximo conforto.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
  },
  {
    icon: Tv,
    title: 'TV em Todas as Suítes',
    description: 'TV nas suítes simples e Smart TV nas suítes master, para entretenimento garantido.',
    color: 'text-slate-500',
    bg: 'bg-slate-50',
  },
  {
    icon: Moon,
    title: 'Pernoite Disponível',
    description: 'Modalidade pernoite das 22h às 7h para quem precisa de uma estadia rápida.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-50',
  },
  {
    icon: Clock,
    title: 'Recepção 24 Horas',
    description: 'Nossa equipe está disponível 24 horas por dia para atender todas as suas necessidades.',
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    icon: MapPin,
    title: 'Localização Estratégica',
    description: 'Na rota das praias de Mosqueiro, Salinas e Marudá. Acesso fácil a toda a região.',
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    icon: Shield,
    title: 'Ambiente Seguro',
    description: 'Ambiente tranquilo, seguro e monitorado para que sua estadia seja tranquila.',
    color: 'text-gold',
    bg: 'bg-yellow-50',
  },
];

export default function Amenities() {
  const { ref, inView } = useInView();

  return (
    <section id="estrutura" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              Estrutura e Serviços
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Tudo Para o Seu Conforto
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Uma estrutura completa pensada para tornar cada momento da sua estadia agradável e sem preocupações.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, i) => (
            <div
              key={i}
              className={`group rounded-2xl p-6 border border-gray-100 hover:border-[#0aaff9]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={22} className={item.color} />
              </div>
              <h3 className="font-semibold text-navy text-base mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 relative rounded-3xl overflow-hidden transition-all duration-700 delay-600 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <img
            src="https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FArea-Cafe-Da-Manha3.jpg"
            alt="Área do café da manhã"
            className="w-full h-72 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 to-navy/30" />
          <div className="absolute inset-0 flex items-center px-8 md:px-16">
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-3">
                <Coffee size={20} className="text-gold" />
                <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                  Café da Manhã Incluso
                </span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
                Comece o Dia do Jeito Certo
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Todos os dias, das 6h30 às 10h00, oferecemos um café da manhã completo e aconchegante. Uma experiência que vai além da alimentação — é o começo perfeito para um ótimo dia.
              </p>
              <div className="flex flex-wrap gap-3">
                {['6h30 às 10h00', 'Incluso em todas as diárias', 'Ambiente acolhedor'].map((tag, i) => (
                  <span key={i} className="bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-1.5 rounded-full border border-white/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
