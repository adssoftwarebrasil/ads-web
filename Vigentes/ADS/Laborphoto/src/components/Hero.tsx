import { Camera, Award, Clock } from 'lucide-react';

const features = [
  { Icon: Camera, title: 'Revelação Tradicional', text: 'Processo químico autêntico' },
  { Icon: Award, title: '40 Anos de Experiência', text: 'Pioneiros na região' },
  { Icon: Clock, title: 'Atendimento Rápido', text: 'Qualidade e agilidade' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/laborphoto%2Fimg%2Fhero-background.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(34,9,92)]/85 via-[rgb(6,51,133)]/80 to-[rgb(2,126,198)]/70"></div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold border border-white/30">
              40 Anos de Tradição em Brasília
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Preserve Suas Memórias com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
              Qualidade Profissional
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed">
            A única empresa no Guará com revelação tradicional em processo químico. Molduras
            personalizadas, restauração de fotos e serviços fotográficos completos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="http://wa.me/556192241725"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-[rgb(6,51,133)] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Solicitar Orçamento Grátis
            </a>
            <a
              href="#servicos"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Conheça Nossos Serviços
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {features.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-cyan-300 mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-200 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
