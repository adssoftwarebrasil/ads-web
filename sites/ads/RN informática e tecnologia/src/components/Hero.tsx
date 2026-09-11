import { Shield, Zap, Clock, ArrowRight } from 'lucide-react';

const features = [
  { icon: Zap, title: 'Rapidez', subtitle: 'Serviço ágil' },
  { icon: Shield, title: 'Confiança', subtitle: 'Transparência total' },
  { icon: Clock, title: 'Experiência', subtitle: '18 anos' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/rn%20informatica%2Fimg%2Fhero-background.webp"
          alt="Background Texture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/40"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-[rgb(1,102,52)]/10 text-[rgb(1,102,52)] px-4 py-2 rounded-full text-sm font-semibold">
              <Shield className="w-4 h-4" />
              <span>18 anos de experiência no mercado</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Seu Computador em <span className="text-[rgb(1,102,52)]">Boas Mãos</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-medium">
              Especialistas em manutenção e reparo de computadores, notebooks e impressoras em Feira de Santana.
              Atendimento rápido, confiável e com garantia.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex items-start space-x-3">
                    <div className="bg-[rgb(152,204,50)] p-2 rounded-lg shadow-sm">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{f.title}</p>
                      <p className="text-sm text-gray-700">{f.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5575981914422?text=Olá!%20Preciso%20de%20assistência%20técnica%20para%20meu%20equipamento."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-2 bg-[rgb(1,102,52)] text-white px-8 py-4 rounded-xl hover:bg-[rgb(1,82,42)] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-semibold text-lg"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+5575981914422"
                className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm text-[rgb(1,102,52)] px-8 py-4 rounded-xl border-2 border-[rgb(1,102,52)] hover:bg-[rgb(1,102,52)] hover:text-white transition-all duration-300 shadow-lg font-semibold text-lg"
              >
                <span>Ligar Agora</span>
              </a>
            </div>
            <p className="text-sm text-gray-600 font-medium flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Seg - Sex: 8:00 às 18:00 | Feira de Santana - BA</span>
            </p>
          </div>
          <div className="relative lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-white/50">
              <img
                src="https://storage.lucasmendes.dev/site-sp/rn%20informatica%2Fimg%2Fcomputador-fumaca-texto.webp"
                alt="Assistência técnica em computadores"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-xl sm:text-2xl font-bold drop-shadow-lg">
                  Problemas com seu equipamento? Resolvemos!
                </p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[rgb(152,204,50)] text-white px-6 py-3 rounded-xl shadow-xl z-10 animate-bounce">
              <p className="text-sm font-semibold">Atendimento rápido!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(152,204,50)]/30 rounded-full blur-3xl z-0 mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(1,102,52)]/30 rounded-full blur-3xl z-0 mix-blend-multiply"></div>
    </section>
  );
}
