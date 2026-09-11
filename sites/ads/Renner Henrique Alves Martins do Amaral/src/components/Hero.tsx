import { useEffect, useRef } from 'react';
import { Star, Shield, Award, ChevronDown } from 'lucide-react';

const BADGES = [
  { icon: Shield, label: 'Certificado SBP', sub: 'Reanimação Neonatal' },
  { icon: Award, label: 'Residência Médica', sub: 'HMCA – São Paulo' },
  { icon: Star, label: 'Avaliação 5,0', sub: 'No Google' },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* 1. Imagem de Fundo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://storage.lucasmendes.dev/site-sp/dr%20renner%20amaral%20pediatra/img/hero-background.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* 2. Overlay Gradiente Semi-transparente */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 252, 228, 0.9) 0%, rgba(238, 243, 251, 0.9) 60%, rgba(247, 249, 255, 0.9) 100%)',
        }}
      />

      {/* 3. Efeitos Radiais */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(76,108,163,0.07) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(76,108,163,0.05) 0%, transparent 40%)',
        }}
      />

      {/* Conteúdo Principal Centralizado */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24 flex flex-col items-center text-center">
        <div ref={ref} className="section-observe flex flex-col items-center w-full">
          
          {/* Badge Superior */}
          <div className="inline-flex items-center justify-center gap-2 bg-brand-blue/10 text-brand-blue text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide uppercase">
            <Shield size={13} />
            Pediatra em Itaúna – MG
          </div>

          {/* Título */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 max-w-4xl">
            Cuidado especializado{' '}
            <span className="text-brand-blue block">para cada criança.</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Do nascimento à adolescência, o Dr. Renner Amaral oferece acompanhamento
            pediátrico humanizado, com escuta ativa e orientação segura para toda a família.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14 justify-center w-full max-w-md sm:max-w-none">
            <a
              href="http://wa.me/553799766089"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.124 1.531 5.862L.057 23.166a.5.5 0 0 0 .613.635l5.457-1.432A11.937 11.937 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.802 9.802 0 0 1-5.045-1.394l-.361-.214-3.24.851.866-3.164-.235-.375A9.803 9.803 0 0 1 2.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z" />
              </svg>
              Agendar Consulta
            </a>
            <a
              href="tel:+553732421965"
              className="flex items-center justify-center gap-2 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 bg-white/50 backdrop-blur-sm"
            >
              (37) 3242-1965
            </a>
          </div>

          {/* Badges Inferiores */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mx-auto">
            {BADGES.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-brand-blue/10 shadow-sm"
              >
                <div className="w-10 h-10 bg-brand-blue-pale rounded-full flex items-center justify-center mb-3">
                  <Icon size={18} className="text-brand-blue" />
                </div>
                <span className="text-sm font-bold text-gray-800 leading-tight mb-1">{label}</span>
                <span className="text-xs text-gray-500 leading-tight">{sub}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Seta de Scroll */}
      <a
        href="#servicos"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-brand-blue/80 hover:text-brand-blue transition-colors animate-bounce-gentle z-10"
        aria-label="Role para baixo"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Saiba mais</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}