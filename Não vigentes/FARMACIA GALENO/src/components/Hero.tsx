import { Award, Heart, Clock, ArrowRight } from 'lucide-react';

const stats = [
  { Icon: Award, title: 'Qualidade', subtitle: 'Certificada' },
  { Icon: Heart, title: 'Atendimento', subtitle: 'Personalizado' },
  { Icon: Clock, title: '3 Unidades', subtitle: 'Em Teresina' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/farmacia%20galeno/img/galeno-sao-pedro-hero-matriz.webp"
          alt="Farmácia Galeno - Matriz São Pedro"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(40,84,48)]/95 via-[rgb(40,84,48)]/85 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-[rgb(230,217,182)] px-4 py-2 rounded-full mb-6 animate-fadeIn">
            <Award size={20} className="text-[rgb(40,84,48)]" />
            <span className="text-[rgb(40,84,48)] font-semibold text-sm md:text-base">38 Anos de Tradição no Piauí</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slideUp">
            Cuidando de Você com <span className="text-[rgb(230,217,182)]">Carinho e Confiança</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-slideUp" style={{ animationDelay: '0.1s' }}>
            A primeira farmácia de manipulação do Piauí. Especialistas em homeopatia, medicamentos personalizados, perfumes e cosméticos exclusivos. Qualidade comprovada que transforma vidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <a
              href="#produtos"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[rgb(164,190,125)] text-[rgb(40,84,48)] rounded-full font-semibold hover:bg-[rgb(230,217,182)] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <span>Conheça Nossos Produtos</span>
              <ArrowRight size={20} />
            </a>
            <a
              href="#unidades"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-full font-semibold hover:bg-white hover:text-[rgb(40,84,48)] transition-all duration-300"
            >
              <span>Nossas Unidades</span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slideUp" style={{ animationDelay: '0.3s' }}>
            {stats.map(({ Icon, title, subtitle }) => (
              <div key={title} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="bg-[rgb(164,190,125)] p-3 rounded-full">
                  <Icon size={24} className="text-[rgb(40,84,48)]" />
                </div>
                <div>
                  <p className="text-white font-semibold">{title}</p>
                  <p className="text-white/80 text-sm">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
