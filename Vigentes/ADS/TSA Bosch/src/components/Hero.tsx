import { ArrowRight, CheckCircle } from 'lucide-react';

const features = [
  'Especialistas em Turbinas',
  'Direção Hidráulica',
  'Peças Originais Bosch',
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/tsa%20bosh%2Fimg%2Ftsa-fachada-hero-background-paralax.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[rgb(4,26,58)]/95 via-[rgb(4,26,58)]/85 to-[rgb(4,26,58)]/70"></div>
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-block mb-6 px-4 py-2 bg-[rgb(163,24,23)]/90 rounded-full backdrop-blur-sm shadow-lg">
            <p className="text-sm font-semibold">Desde 2025 • Goiânia - GO</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Especialistas em
            <span className="block text-[rgb(163,24,23)] mt-2">
              Turbinas e Direção Hidráulica
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Recuperação completa de turbinas e sistemas de direção para veículos
            pesados e a diesel. Qualidade certificada e atendimento especializado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
            <button
              onClick={() => scrollToSection('location')}
              className="bg-[rgb(163,24,23)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(143,20,20)] transition-all duration-200 flex items-center justify-center gap-2 shadow-2xl hover:shadow-[rgb(163,24,23)]/50 hover:scale-105"
            >
              Solicitar Orçamento
              <ArrowRight width={24} height={24} />
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-200"
            >
              Nossos Serviços
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10"
              >
                <CheckCircle
                  width={20}
                  height={20}
                  className="text-[rgb(163,24,23)] flex-shrink-0"
                />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
