import { ArrowRight, Award, Package, Users } from 'lucide-react';

const stats = [
  { icon: Award, iconClass: 'lucide lucide-award text-white', value: '20+', label: 'Anos de Experiência' },
  { icon: Package, iconClass: 'lucide lucide-package text-white', value: '1000+', label: 'Projetos Entregues' },
  { icon: Users, iconClass: 'lucide lucide-users text-white', value: '500+', label: 'Clientes Satisfeitos' },
];

export default function Hero() {
  const scrollToProdutos = () => {
    const el = document.getElementById('produtos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/7289710/pexels-photo-7289710.jpeg"
          alt="Embalagens personalizadas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(0,33,78)]/95 via-[rgb(0,33,78)]/85 to-[rgb(0,33,78)]/70"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block bg-[rgb(203,13,13)] text-white px-4 py-2 rounded-full mb-6 animate-fadeIn">
            <span className="text-sm font-semibold">✨ Há 20 anos no mercado</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slideUp">
            Personalize Sua Marca com <span className="text-[rgb(203,13,13)]">Embalagens Premium</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-slideUp">
            Da embalagem à praticidade dos copos plásticos, nós personalizamos tudo para você! Adicione um toque exclusivo ao seu negócio ou evento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slideUp">
            <a
              href="https://wa.me/5562985597671?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[rgb(203,13,13)] text-white px-8 py-4 rounded-full hover:bg-[rgb(180,11,11)] transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-[rgb(203,13,13)]/50 hover:scale-105 group"
            >
              Solicitar Orçamento
              <ArrowRight
                width={20}
                height={20}
                className="lucide lucide-arrow-right ml-2 group-hover:translate-x-1 transition-transform"
              />
            </a>
            <button
              onClick={scrollToProdutos}
              className="inline-flex items-center justify-center bg-white text-[rgb(0,33,78)] px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-xl hover:scale-105"
            >
              Ver Produtos
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slideUp">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div className="bg-[rgb(203,13,13)] p-3 rounded-lg">
                    <Icon width={24} height={24} className={stat.iconClass} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
