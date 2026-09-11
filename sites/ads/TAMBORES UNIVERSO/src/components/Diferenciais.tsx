import { Shield, Grid3x3, TrendingDown, Leaf } from 'lucide-react';

export default function Diferenciais() {
  const diferenciais = [
    {
      icon: Shield,
      title: 'Qualidade Superior',
      description: 'Utilizamos apenas materiais de alta qualidade em nossos produtos, garantindo que sejam resistentes e duráveis.',
      image: 'https://storage.lucasmendes.dev/site-sp/tamboresuniverso%2FQUALIDADE%20SUPERIOR.webp',
    },
    {
      icon: Grid3x3,
      title: 'Variedade de Tamanho e Modelo',
      description: 'Oferecemos uma ampla variedade de tamanhos e modelos de tambores e bombonas, permitindo que você encontre o produto perfeito.',
      image: 'https://storage.lucasmendes.dev/site-sp/tamboresuniverso%2FVARIEDADE%20DE%20TAMANHO%20E%20MODELO.webp',
    },
    {
      icon: TrendingDown,
      title: 'Preços Competitivos',
      description: 'Nossos preços são altamente competitivos, permitindo que você adquira produtos de qualidade superior a um preço justo.',
      image: 'https://storage.lucasmendes.dev/site-sp/tamboresuniverso%2FPREC%CC%A7OS%20COMPETITIVOS.webp',
    },
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      description: 'Nos preocupamos com o meio ambiente e oferecemos produtos sustentáveis e recicláveis, contribuindo para um futuro consciente.',
      image: 'https://storage.lucasmendes.dev/site-sp/tamboresuniverso%2FSUSTENTABILIDADE.webp',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#034D9B] mb-6">
          Por Que Escolher a Tambores Universo?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {diferenciais.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-xl h-[350px] md:h-[400px] group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#034D9B]/95 via-[#034D9B]/60 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
                <Icon className="w-8 h-8 md:w-10 md:h-10 mb-3" />
                <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-white/90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 md:mt-16 bg-gradient-to-r from-[#034D9B] to-[#0A85E3] rounded-3xl p-6 md:p-10 text-white">
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-center italic">
          "Somos uma das maiores e mais bem-conceituadas empresas no ramo de cochos e bebedouros de polietileno para bovinos, bem como tambores e bombonas plásticas para armazenagem e transporte de combustíveis em geral. Possuímos uma loja bem localizada e um Centro de Distribuição próprio, capaz de atender às vendas no atacado e varejo."
        </p>
      </div>
    </section>
  );
}
