import { ArrowRight, Heart, Award, Users } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-20 lg:pt-24 overflow-hidden">
      <div className="relative bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
                  Ouça todos os <span className="text-[rgb(246,182,31)]">SONS</span> da vida com mais{' '}
                  <span className="text-[rgb(246,182,31)]">CLAREZA</span> e{' '}
                  <span className="text-[rgb(246,182,31)]">QUALIDADE</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  Soluções auditivas personalizadas que transformam vidas. Atendimento humanizado,
                  tecnologia de ponta e profissionais especializados em Cuiabá.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="http://wa.me/5565999818250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[rgb(246,182,31)] text-black px-8 py-4 rounded-full font-semibold hover:bg-[rgb(226,162,11)] transition-all shadow-lg hover:shadow-xl group"
                >
                  Agende Sua Avaliação Gratuita
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="inline-flex items-center justify-center border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-all"
                >
                  Conheça a BEEVOX
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[rgb(246,182,31)]/10 rounded-full mb-3">
                    <Heart className="w-6 h-6 text-[rgb(246,182,31)]" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Atendimento Humanizado</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[rgb(246,182,31)]/10 rounded-full mb-3">
                    <Award className="w-6 h-6 text-[rgb(246,182,31)]" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Profissionais Capacitados</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[rgb(246,182,31)]/10 rounded-full mb-3">
                    <Users className="w-6 h-6 text-[rgb(246,182,31)]" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Soluções Personalizadas</p>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes%2Fhero.png&version_id=null"
                  alt="Atendimento na BEEVOX - Soluções Auditivas"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[rgb(246,182,31)] rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[rgb(246,182,31)] rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  );
}