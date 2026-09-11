import { Award, ArrowRight, Clock, MapPin } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    title: 'Horário',
    text: 'Seg a Sex: 07:00 às 18:00',
  },
  {
    icon: MapPin,
    title: 'Localização',
    text: 'Av. das Guianas, 911 - Boa Vista/RR',
  },
  {
    icon: Award,
    title: 'Qualidade',
    text: 'Produtos originais e garantidos',
  },
];

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/coimbra%20motopecas/loja-motos-fechada-hero-background.webp")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(2,73,137)]/95 via-[rgb(2,73,137)]/85 to-[rgb(2,73,137)]/70"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-[rgb(255,236,2)] text-[rgb(2,73,137)] px-6 py-2 rounded-full font-semibold mb-8 animate-pulse">
            <Award className="w-5 h-5" />
            <span>Mais de 10 anos no mercado</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Sua <span className="text-[rgb(255,236,2)]">Moto Peça</span> de
            Confiança em Boa Vista
          </h1>
          <p className="text-xl md:text-2xl text-[rgb(246,252,255)] mb-8 leading-relaxed">
            Produtos de qualidade, preços acessíveis e atendimento diferenciado.
            Tudo o que sua moto precisa em um só lugar!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="http://wa.me/559591557077?text=Olá! Gostaria de saber mais sobre produtos e serviços."
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto bg-[rgb(255,236,2)] text-[rgb(2,73,137)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(255,246,102)] transition-all duration-300 shadow-2xl hover:shadow-[rgb(255,236,2)]/50 flex items-center justify-center space-x-2"
            >
              <span>Fale Conosco no WhatsApp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={scrollToProducts}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[rgb(2,73,137)] transition-all duration-300"
            >
              Conheça Nossos Produtos
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              >
                <stat.icon className="w-12 h-12 text-[rgb(255,236,2)] mb-4 mx-auto" />
                <h3 className="text-white font-bold text-lg mb-2">
                  {stat.title}
                </h3>
                <p className="text-[rgb(246,252,255)]">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
