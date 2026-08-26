import { Award } from 'lucide-react';

export default function Hero() {
  const scrollToServicos = () => {
    const el = document.getElementById('servicos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/exatidao%20contabilidade/img/hero-background-paralax.webp")',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="absolute inset-0 bg-[rgba(54,55,58,0.85)]"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-[rgb(202,162,106)]/20 backdrop-blur-sm border border-[rgb(202,162,106)] px-6 py-2 rounded-full mb-8">
            <Award className="w-5 h-5 text-[rgb(202,162,106)]" />
            <span className="text-[rgb(202,162,106)] font-semibold text-sm">50+ anos de experiência</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Contabilidade Estratégica que{' '}
            <span className="text-[rgb(202,162,106)]">Impulsiona o Crescimento</span> do Seu Negócio
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            Mais de 50 anos transformando números em decisões inteligentes. Soluções contábeis personalizadas para
            empresas que buscam segurança, eficiência e resultados sólidos em Goiânia.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/556232113304?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Exatidão%20Contabilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(202,162,106)] hover:bg-[rgb(204,162,74)] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-xl"
            >
              Falar com Especialista
            </a>
            <button
              onClick={scrollToServicos}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 border-2 border-white/30 hover:border-white/50"
            >
              Conhecer Nossos Serviços
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
