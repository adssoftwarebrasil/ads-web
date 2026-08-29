import { Award, ArrowRight, Heart, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ backgroundColor: 'rgb(178, 155, 133)' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08] mix-blend-overlay pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/tathiane%20guimaraes%2Fatualizadas%2Fhero-background.webp")',
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              <Award className="w-4 h-4" />
              <span>8 anos transformando sorrisos</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Seu sorriso merece o melhor cuidado
            </h1>
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed max-w-lg">
              Clínica multidisciplinar especializada em odontologia de excelência, nutrição e
              psicologia. Cuidado integrado para o seu bem-estar completo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/553791564540"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-800 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
              >
                Agendar Consulta
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center border-2 border-black text-black px-8 py-4 rounded-full text-base font-semibold hover:bg-black hover:text-white transition-all bg-transparent"
              >
                Conheça a Clínica
              </a>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-black/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">210m²</div>
                <div className="text-sm text-gray-700 mt-1 font-medium">de estrutura</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">5</div>
                <div className="text-sm text-gray-700 mt-1 font-medium">consultórios</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">8+</div>
                <div className="text-sm text-gray-700 mt-1 font-medium">anos de experiência</div>
              </div>
            </div>
          </div>
          <div className="relative lg:mt-0 mt-10">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 ring-1 ring-black/5">
              <img
                src="https://storage.lucasmendes.dev/site-sp/tathiane%20guimaraes%2Fatualizadas%2Frecepcao.webp"
                alt="Consultório Tathiane Guimarães"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs ring-1 ring-black/5 animate-fade-in-up">
              <div className="flex items-center space-x-4">
                <div className="bg-black rounded-full p-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">1000+</div>
                  <div className="text-sm text-gray-600">Pacientes atendidos</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-2 sm:-right-6 bg-black text-white p-6 rounded-2xl shadow-xl animate-fade-in-down">
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8" />
                <div>
                  <div className="text-sm font-medium">Equipe</div>
                  <div className="text-xs opacity-90">Multidisciplinar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
