import { Target, TrendingUp, Heart, Shield } from 'lucide-react';

const features = [
  {
    icon: Target,
    iconClass: 'lucide lucide-target text-white',
    title: 'Nosso Objetivo',
    text: 'Valorizar sua marca no produto final, tornando cada embalagem única',
  },
  {
    icon: TrendingUp,
    iconClass: 'lucide lucide-trending-up text-white',
    title: 'Diferencial',
    text: 'Mix completo de produtos e valores competitivos no mercado',
  },
  {
    icon: Heart,
    iconClass: 'lucide lucide-heart text-white',
    title: 'Compromisso',
    text: 'Mostramos a importância da sua marca em embalagens de delivery',
  },
  {
    icon: Shield,
    iconClass: 'lucide lucide-shield text-white',
    title: 'Confiança',
    text: 'Referência reconhecida por concorrentes e clientes em Goiânia',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5025666/pexels-photo-5025666.jpeg"
                alt="Equipe LR Personalizações"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0,33,78)]/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[rgb(203,13,13)] text-white p-8 rounded-2xl shadow-2xl">
              <p className="text-5xl font-bold">20+</p>
              <p className="text-lg font-medium">Anos de Excelência</p>
            </div>
          </div>
          <div>
            <div className="inline-block bg-[rgb(203,13,13)]/10 text-[rgb(203,13,13)] px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold uppercase tracking-wider">Sobre Nós</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(0,33,78)] mb-6 leading-tight">
              Valorizando Sua Marca Há 20 Anos
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A LR Personalizações nasceu com um propósito claro: <strong>valorizar a marca dos nossos clientes</strong> através de embalagens personalizadas de alta qualidade. Com duas décadas de experiência, somos referência em Goiânia no mercado de personalização.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nossa expertise é reconhecida até por empresas concorrentes que terceirizam suas personalizações conosco. Isso demonstra a confiança que construímos no mercado através da qualidade e do compromisso com cada projeto.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex items-start space-x-4">
                    <div className="bg-[rgb(203,13,13)] p-3 rounded-lg flex-shrink-0">
                      <Icon width={24} height={24} className={f.iconClass} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[rgb(0,33,78)] mb-1">{f.title}</h3>
                      <p className="text-gray-600 text-sm">{f.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <a
              href="https://wa.me/5562985597671?text=Olá!%20Gostaria%20de%20conhecer%20melhor%20a%20LR%20Personalizações."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[rgb(0,33,78)] text-white px-8 py-4 rounded-full hover:bg-[rgb(0,50,120)] transition-all duration-300 font-semibold shadow-xl hover:scale-105"
            >
              Conheça Nossa História
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
