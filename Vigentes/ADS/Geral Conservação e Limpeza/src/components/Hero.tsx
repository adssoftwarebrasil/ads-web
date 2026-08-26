import { Star, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

const features = [
  { title: 'Equipe 100%', subtitle: 'Certificada e Treinada' },
  { title: 'Atendimento', subtitle: 'Suporte Ágil 24/7' },
  { title: 'Normas Técnicas', subtitle: 'Conformidade Total' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/geral%20limpeza%2Fimg%2Fhero-background.png"
          alt="Ambiente corporativo limpo e organizado"
          className="w-full h-full object-cover object-right"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-[rgb(2,103,253)]/80 lg:bg-gradient-to-r lg:from-[rgb(2,103,253)]/90 lg:via-[rgb(2,103,253)]/5 lg:to-transparent"></div>
      <div className="container mx-auto px-4 relative z-20 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-2/3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 animate-fadeIn">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-semibold tracking-wide uppercase">
                Referência em Manaus e Região
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight animate-fadeIn text-left">
              Excelência e Confiança em <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 drop-shadow-sm">
                Serviços Terceirizados
              </span>
            </h1>
            <p
              className="text-lg md:text-xl text-blue-50 mb-10 leading-relaxed max-w-2xl animate-fadeIn text-left"
              style={{ animationDelay: '0.2s' }}
            >
              Transformamos o ambiente da sua empresa com soluções completas em limpeza, conservação e
              facilities. Equipes treinadas e gestão eficiente para você focar no seu negócio.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 mb-16 animate-fadeIn justify-start"
              style={{ animationDelay: '0.4s' }}
            >
              <a
                href="https://wa.me/5592981671587?text=Olá! Gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-3 bg-white text-[rgb(2,103,253)] px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="transform group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="tel:+5592981671587"
                className="flex items-center justify-center space-x-3 bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                <Phone size={20} />
                <span>(92) 98167-1587</span>
              </a>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-8 animate-fadeIn"
              style={{ animationDelay: '0.6s' }}
            >
              {features.map((f) => (
                <div key={f.title} className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">{f.title}</h3>
                    <p className="text-blue-100 text-sm">{f.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block w-1/3"></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-20 pointer-events-none"></div>
    </section>
  );
}
