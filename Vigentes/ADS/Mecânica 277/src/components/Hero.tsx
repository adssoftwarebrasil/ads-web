import { ArrowRight, Shield, Clock, Wrench } from 'lucide-react';

const badges = [
  { Icon: Shield, title: 'Qualidade', sub: 'Garantida' },
  { Icon: Clock, title: 'Atendimento', sub: 'Ágil' },
  { Icon: Wrench, title: 'Equipe', sub: 'Especializada' },
];

export default function Hero() {
  const scrollToContato = () => {
    const el = document.getElementById('contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/mecanica%20277/img/oficina-carros-rua-hero-background.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/85 to-[#0a0a0a]/70"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-3xl">
          <div className="inline-block mb-6">
            <span className="bg-[#f0e92c]/20 text-[#f0e92c] px-4 py-2 rounded-full text-sm font-semibold border border-[#f0e92c]/30">
              ✓ Mais de 20 anos de experiência
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Mecânica Automotiva de <span className="text-[#f0e92c]">Alta Performance</span> em Foz do Iguaçu
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            Especialistas em veículos leves, pesados e diesel. Atendemos frotas corporativas, plataformas orçamentárias e órgãos governamentais com excelência técnica e compromisso total.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={scrollToContato}
              className="flex items-center justify-center gap-2 bg-[#f0e92c] text-[#0a0a0a] px-8 py-4 rounded-lg font-bold hover:bg-[#e0d91c] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Solicitar Orçamento
              <ArrowRight className="lucide lucide-arrow-right" width={20} height={20} />
            </button>
            <a
              href="http://wa.me/5545998527494"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {badges.map(({ Icon, title, sub }) => (
              <div
                key={title}
                className="flex items-center gap-3 bg-[#0a0a0a]/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-[#595959]/30"
              >
                <div className="bg-[#f0e92c]/20 p-2 rounded-lg">
                  <Icon className="lucide text-[#f0e92c]" width={24} height={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">{title}</p>
                  <p className="text-gray-400 text-sm">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
