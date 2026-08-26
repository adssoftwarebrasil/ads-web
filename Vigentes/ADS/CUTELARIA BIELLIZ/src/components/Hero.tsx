import { ArrowRight, Award, Clock, MapPin } from 'lucide-react';

const features = [
  { Icon: Award, title: 'Qualidade Garantida', text: 'Produtos de cutelarias renomadas do Sul' },
  { Icon: Clock, title: 'Atendimento Especial', text: 'Seg-Sex 08h-19h | Sáb 08h-17h' },
  { Icon: MapPin, title: 'Centro de Campinas', text: 'Av. Senador Saraiva, 573' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-12 sm:pt-0 sm:pb-0"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(84,10,1)] via-[rgb(120,30,20)] to-black opacity-90 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/cutelaria%20bielliz%2Fgaleria%20de%20produtos%2Fprodutos-expostos%20%2815%29.webp")',
        }}
      ></div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center h-full flex flex-col justify-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Tradição e Qualidade em
            <span className="block text-[rgb(245,241,220)] mt-2">Cutelaria Artesanal</span>
          </h1>
          <p className="text-lg sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Descubra facas artesanais de aço carbono, inox e damasco. Qualidade gaúcha, atendimento
            personalizado e tradição em cada peça.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#produtos"
              className="group bg-[rgb(245,241,220)] text-[rgb(84,10,1)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-all duration-300 flex items-center gap-2 shadow-xl w-full sm:w-auto justify-center"
            >
              Conheça Nossos Produtos
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/5519992079201"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[rgb(84,10,1)] transition-all duration-300 shadow-xl w-full sm:w-auto"
            >
              Fale Conosco
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <Icon size={32} className="mx-auto mb-3 text-[rgb(245,241,220)]" />
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-300 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
