import { Car, Shield, Award, ChevronDown } from 'lucide-react';

const features = [
  { icon: Car, title: 'Novos e Seminovos', text: 'Grande variedade de veículos selecionados' },
  { icon: Shield, title: 'Transparência Total', text: 'Negociação clara e sem surpresas' },
  { icon: Award, title: '20 Anos de Experiência', text: 'Expertise no setor automotivo' },
];

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("https://storage.lucasmendes.dev/site-sp/l2%20carros%2Fimg%2Fhero-fachada-loja-background-paralax.webp")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Realize o Sonho do<span className="block text-red-600 mt-2">Seu Carro Novo</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Há mais de 20 anos transformando sonhos em realidade com ética, transparência e o melhor atendimento de Divinópolis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://wa.me/5537999236447?text=Olá! Gostaria de conhecer os veículos disponíveis."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Ver Veículos Disponíveis
            </a>
            <button
              onClick={() => scrollTo('contato')}
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Falar com Especialista
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <f.icon className="w-10 h-10 text-red-600 mx-auto mb-3" />
                <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-300 text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo('sobre')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer z-10"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
