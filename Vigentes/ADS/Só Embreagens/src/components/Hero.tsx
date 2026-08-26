import { ArrowRight, ShieldCheck, Award, Clock } from 'lucide-react';

const BADGES = [
  { icon: ShieldCheck, text: 'Garantia nos Serviços' },
  { icon: Award, text: '+15 Anos de Experiência' },
  { icon: Clock, text: 'Atendimento Rápido' },
];

export default function Hero() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5566996595500?text=Olá!%20Gostaria%20de%20um%20orçamento%20de%20embreagem.', '_blank');
  };

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'rgb(22, 17, 21)' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://storage.lucasmendes.dev/site-sp/so%20embreagens/img/hero-background.webp')`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(110deg, rgba(22,17,21,0.92) 0%, rgba(73,20,15,0.75) 50%, rgba(22,17,21,0.80) 100%)',
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgb(22,17,21))',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{
              background: 'rgba(234,34,37,0.15)',
              border: '1px solid rgba(234,34,37,0.4)',
              color: 'rgb(234, 34, 37)',
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'rgb(234,34,37)' }} />
            Especialistas em Embreagem — Sinop/MT
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
            style={{ color: '#fff' }}
          >
            Sua Embreagem{' '}
            <span
              className="relative inline-block"
              style={{ color: 'rgb(234, 34, 37)' }}
            >
              Recuperada
            </span>{' '}
            com Garantia e{' '}
            <span style={{ color: 'rgb(237, 219, 223)' }}>Qualidade</span>
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
            style={{ color: 'rgb(210, 210, 208)' }}
          >
            Mais de 15 anos remanufaturando e comercializando embreagens para carros,
            caminhões e tratores. Peças de procedência, mão de obra especializada
            e atendimento que gera confiança.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              style={{
                background: 'rgb(234, 34, 37)',
                color: '#fff',
                boxShadow: '0 8px 32px rgba(234,34,37,0.35)',
              }}
            >
              Solicitar Orçamento Grátis
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => handleScroll('#servicos')}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105"
              style={{
                border: '2px solid rgba(237,219,223,0.35)',
                color: 'rgb(237, 219, 223)',
                background: 'rgba(237,219,223,0.06)',
              }}
            >
              Ver Serviços
            </button>
          </div>

          <div className="flex flex-wrap gap-4">
            {BADGES.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgb(210, 210, 208)',
                }}
              >
                <Icon size={15} style={{ color: 'rgb(234, 34, 37)' }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
