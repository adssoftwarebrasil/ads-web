import { useEffect, useState } from 'react';
import { ChevronDown, Award, MapPin } from 'lucide-react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://storage.lucasmendes.dev/site-sp/cientec/img/hero-background.webp)',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(62,64,150,0.88) 0%, rgba(5,145,211,0.65) 50%, rgba(188,51,54,0.70) 100%)',
        }}
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div
          className={`flex-1 text-white transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-sm font-semibold mb-6">
            <Award size={16} className="text-yellow-300" />
            <span>24 Anos de Tradição e Excelência</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-shadow-lg">
            Transforme sua{' '}
            <span
              className="relative inline-block"
              style={{
                background: 'linear-gradient(90deg, #fcd34d, #f97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              carreira
            </span>{' '}
            com quem é referência no Mato Grosso
          </h1>

          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 max-w-xl text-shadow">
            Cursos técnicos, graduação e capacitações profissionais em Sinop e região. Aprenda na prática com
            professores qualificados e entre no mercado de trabalho com confiança.
          </p>

          <div className="flex items-center gap-2 text-white/80 text-sm mb-8">
            <MapPin size={16} className="flex-shrink-0" />
            <span>Sinop e Lucas do Rio Verde — MT</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="http://wa.me/556699893074"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-white font-bold text-base shadow-2xl transition-all duration-200 hover:scale-105 hover:shadow-brand-red/40"
              style={{ backgroundColor: 'rgb(188, 51, 54)' }}
            >
              <WhatsAppIcon />
              Quero me Matricular
            </a>

            <a
              href="#cursos"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/50 text-white font-bold text-base transition-all duration-200 hover:bg-white/25 hover:scale-105"
            >
              Ver Cursos
              <ChevronDown size={18} />
            </a>
          </div>
        </div>

        <div
          className={`flex-shrink-0 w-full max-w-xs sm:max-w-sm lg:max-w-md transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
            <img
              src="https://storage.lucasmendes.dev/site-sp/cientec/img/propaganda-curso-tecnico-saude-cientec_1080x1350.webp"
              alt="Cursos Técnicos Cientec - Área da Saúde"
              className="w-full h-auto object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
