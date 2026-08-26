import { ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';

const BG = 'https://storage.lucasmendes.dev/site-sp/vaap%20lubrificantes/img/hero-background.webp';
const WA_LINK = 'https://wa.me/556584438839?text=Olá!%20Gostaria%20de%20agendar%20um%20serviço.';

const stats = [
  { icon: Clock, value: '+10 Anos', label: 'de Experiência' },
  { icon: Star, value: '4.9★', label: 'Avaliação Google' },
  { icon: ShieldCheck, value: 'Autorizado', label: 'Castrol Auto Service' },
];

export default function Hero() {
  const scrollToServices = () => {
    const el = document.querySelector('#servicos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-green/20 border border-brand-green/40 text-brand-green-light rounded-full px-4 py-2 text-sm font-semibold mb-6 backdrop-blur-sm animate-fade-in">
            <ShieldCheck size={16} />
            Autorizado Castrol Auto Service — Lucas do Rio Verde, MT
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight text-shadow mb-6 animate-fade-in-up">
            Proteja Seu Motor com a{' '}
            <span className="text-brand-green">Melhor Tecnologia</span>{' '}
            do Mercado
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl animate-fade-in-up animate-delay-200">
            Mais de 10 anos oferecendo troca de óleo, fluido de câmbio automático e radiador
            com produtos <strong className="text-white">100% originais Castrol</strong> — atendimento
            personalizado que você merece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-brand-green/30 hover:scale-105 active:scale-95 text-base"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar pelo WhatsApp
            </a>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white hover:text-gray-900 hover:border-white hover:shadow-lg hover:scale-105 active:scale-95 text-base backdrop-blur-sm"
            >
              Ver Nossos Serviços
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl animate-fade-in-up animate-delay-500">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-green/30 flex items-center justify-center">
                <Icon size={20} className="text-brand-green-light" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight">{value}</p>
                <p className="text-gray-300 text-xs">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow hidden md:block">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
