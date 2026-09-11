import { GraduationCap, Trophy, Users } from 'lucide-react';

const cards = [
  {
    Icon: GraduationCap,
    title: 'Sistema Bernoulli',
    text: '1º lugar no ENEM nos últimos anos',
  },
  {
    Icon: Trophy,
    title: 'Resultados',
    text: 'Histórico de aprovações em medicina e engenharia',
  },
  {
    Icon: Users,
    title: 'Estrutura Completa',
    text: 'Quadra coberta, biblioteca e área de lazer',
  },
];

export default function Hero() {
  const scrollToSobre = () => {
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[rgb(95,0,102)] via-[rgb(171,24,66)] to-[rgb(234,58,35)]">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/8923177/pexels-photo-8923177.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transformando Sonhos em
            <span className="block bg-gradient-to-r from-[rgb(234,58,35)] to-white bg-clip-text text-transparent">
              Aprovações
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            O melhor ensino de Goiânia. Do 6º ano ao Ensino Médio, preparamos seu filho para conquistar as melhores
            universidades do país.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="http://wa.me/5562999690082?text=Olá! Gostaria de conhecer o Colégio Sinapse e saber mais sobre matrículas."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[rgb(171,24,66)] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Agende uma Visita
            </a>
            <button
              onClick={scrollToSobre}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[rgb(171,24,66)] transition-all duration-300 w-full sm:w-auto"
            >
              Conheça o Colégio
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {cards.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 transform hover:scale-105 transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-100">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
