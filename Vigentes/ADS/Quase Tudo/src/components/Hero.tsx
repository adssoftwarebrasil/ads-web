import { Award, ArrowRight, Sparkles, Users } from 'lucide-react';

const stats = [
  { value: '31+', label: 'Anos no Mercado' },
  { value: '5000+', label: 'Produtos' },
  { value: '100%', label: 'Satisfação' },
];

const features = [
  {
    Icon: Sparkles,
    title: 'Design Exclusivo',
    text: 'Puxadores e decorações que fazem a diferença no seu projeto',
  },
  {
    Icon: Award,
    title: 'Qualidade Garantida',
    text: 'Todas as marcas e acabamentos para seu projeto',
  },
  {
    Icon: Users,
    title: 'Atendimento Personalizado',
    text: 'Equipe especializada para te ajudar na escolha perfeita',
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(45,45,45)]/95 via-[rgb(45,45,45)]/90 to-black/95 z-10"></div>
        <img
          src="https://storage.lucasmendes.dev/site-sp/Quase%20Tudo/img/background-img.webp"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="inline-flex items-center space-x-2 bg-[rgb(212,171,85)]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[rgb(212,171,85)]/30">
              <Award width={20} height={20} className="text-[rgb(212,171,85)]" />
              <span className="text-sm font-medium text-[rgb(212,171,85)]">31 Anos de Excelência</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Transforme Seus Ambientes com{' '}
              <span className="text-[rgb(212,171,85)]">Elegância e Estilo</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              A maior variedade de puxadores para móveis e portas, decorações exclusivas e acessórios para banheiro em Goiânia. Qualidade e sofisticação em cada detalhe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 bg-[rgb(212,171,85)] text-[rgb(45,45,45)] px-8 py-4 rounded-full hover:bg-[rgb(226,31,22)] hover:text-white transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight width={20} height={20} />
              </a>
              <a
                href="http://wa.me/556293252626"
                className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 font-semibold text-lg border-2 border-white/30"
              >
                <span>Fale no WhatsApp</span>
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-[rgb(212,171,85)]">{stat.value}</div>
                  <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-[rgb(212,171,85)] rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  {features.map(({ Icon, title, text }) => (
                    <div key={title} className="flex items-start space-x-4">
                      <div className="bg-[rgb(212,171,85)] p-3 rounded-xl">
                        <Icon width={24} height={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                        <p className="text-gray-300">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          className="w-full h-16 sm:h-24 text-white"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}
