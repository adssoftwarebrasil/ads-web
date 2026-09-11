import { useEffect, useRef } from 'react';
import { ChevronDown, Shield, Phone, Landmark } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const offset = window.scrollY * 0.3;
        heroRef.current.style.backgroundPositionY = `calc(50% + ${offset}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    const el = document.querySelector('#servicos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden bg-[#003F5C]">
      {/* Imagem de Fundo */}
      <div
        ref={heroRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=araripe%20chagas%2Falteracoes%2FCapa.png&version_id=null')`,
        }}
      />
      
      {/* FILTROS SUAVIZADOS */}
      {/* 1. Filtro base super leve apenas para unificar as cores (reduzido de 40% para 15%) */}
      <div className="absolute inset-0 bg-[#003F5C]/15" />
      
      {/* 2. Gradiente da esquerda suavizado para revelar mais o fundo, mantendo a leitura do texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003F5C]/85 via-[#003F5C]/40 to-transparent" />
      
      {/* 3. Gradiente inferior suavizado */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#003F5C]/70 via-transparent to-transparent" />

      {/* Conteúdo Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20 flex-grow flex items-center">
        <div className="max-w-2xl text-left">
          
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#EAE6AE] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <Shield size={12} className="text-[#C9A84C]"/>
            Escritório de Advocacia em Goiânia — GO
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 drop-shadow-md">
            Escritório de Advocacia<br />
            <span className="text-[#C9A84C]">Araripe Chagas</span>
          </h1>

          <p className="text-white/90 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl drop-shadow-md">
            Advocacia de excelência para pessoas e empresas em Goiânia.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16">
            <button
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-[#C9A84C] hover:bg-[#C9A84C] text-[#C9A84C] hover:text-[#003F5C] font-bold text-base px-8 py-3 rounded-md transition-all duration-300 backdrop-blur-sm"
            >
              Entre em Contato
            </button>
            <div className="flex items-center gap-3 text-white text-xl font-bold drop-shadow-md">
                <Phone size={24} className="text-[#C9A84C]" />
                <span>(62) 98137-8684</span>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de Estatísticas */}
      <div className="relative z-10 w-full bg-[#003F5C] py-8 border-t border-[#C9A84C]/20 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          
          {/* +20 Anos */}
          <div className="flex items-center gap-4 text-white text-center md:text-left">
            <span className="text-5xl font-bold text-[#EAE6AE]">+20</span>
            <div className='flex flex-col'>
                <span className="text-lg font-medium">Anos</span>
                <span className="text-[#EAE6AE]/70 text-sm">de Experiência</span>
            </div>
          </div>

          {/* Separador vertical */}
          <div className="hidden md:block h-12 w-px bg-[#C9A84C]/30"></div>

          {/* +1000 Clientes */}
          <div className="flex items-center gap-4 text-white text-center md:text-left">
            <span className="text-5xl font-bold text-[#EAE6AE]">+1000</span>
            <div className='flex flex-col'>
                <span className="text-lg font-medium">Clientes</span>
                <span className="text-[#EAE6AE]/70 text-sm">Satisfeitos</span>
            </div>
          </div>

          {/* Separador vertical */}
          <div className="hidden md:block h-12 w-px bg-[#C9A84C]/30"></div>

          {/* Atuação Diversas Áreas */}
          <div className="flex items-center gap-4 text-white text-center md:text-left">
            <Landmark size={48} className="text-[#C9A84C]" />
            <div className='flex flex-col'>
                <span className="text-lg font-medium">Atuação em Diversas</span>
                <span className="text-[#EAE6AE]/70 text-sm">Áreas do Direito</span>
            </div>
          </div>

        </div>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10 text-[#C9A84C]/60 hover:text-[#C9A84C] transition-colors duration-200 animate-bounce drop-shadow-md"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}