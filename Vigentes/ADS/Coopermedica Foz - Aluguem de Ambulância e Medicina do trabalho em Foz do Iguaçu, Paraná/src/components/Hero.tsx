import { Ambulance, ArrowRight, Clock, Users, Award } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-primary via-secondary to-purple-dark pt-20 md:pt-24 relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left space-y-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              Há mais de 50 anos em Foz do Iguaçu
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Atendimento Médico de Emergência Quando Você Mais Precisa
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Locação de ambulâncias, atendimento domiciliar e medicina do trabalho com equipe experiente e atendimento 24h
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5545988038430?text=Olá!%20Preciso%20de%20uma%20ambulância."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emergency text-white px-8 py-4 rounded-lg hover:bg-emergency/90 transition-all hover:shadow-2xl font-semibold flex items-center justify-center gap-2 group"
              >
                <Ambulance className="group-hover:scale-110 transition-transform" />
                Solicitar Ambulância
              </a>
              <button
                onClick={() => scrollToSection('servicos')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-all font-semibold flex items-center justify-center gap-2 group"
              >
                Nossos Serviços
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="flex flex-col items-center text-center">
                <Award className="text-white/90 mb-2" size={32} />
                <p className="text-white text-sm font-medium">50+ anos de experiência</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="text-white/90 mb-2" size={32} />
                <p className="text-white text-sm font-medium">Atendimento 24/7</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="text-white/90 mb-2" size={32} />
                <p className="text-white text-sm font-medium">Equipe especializada</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/coopermedicafoz%2Fatendimento-em-ambulancia_6_11zon.jpg"
                alt="Atendimento em Ambulância"
                className="rounded-2xl shadow-2xl animate-float w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold text-primary">50+</p>
                <p className="text-gray-600 font-medium">Anos de História</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
