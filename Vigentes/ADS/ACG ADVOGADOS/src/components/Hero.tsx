import { Scale, Shield, Award } from 'lucide-react';

const features = [
  {
    Icon: Scale,
    title: '+9 Anos de Experiência',
    text: 'Tradição e conhecimento a serviço dos seus direitos',
  },
  {
    Icon: Shield,
    title: 'Equipe Especializada',
    text: 'Advogados pós-graduados nas mais diversas áreas do direito',
  },
  {
    Icon: Award,
    title: 'Atendimento em Todo TO',
    text: 'Presença em Palmas, Araguaína, Gurupi e Taguatinga',
  },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/8111831/pexels-photo-8111831.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(16,17,12)]/95 via-[rgb(16,17,12)]/85 to-[rgb(16,17,12)]/75"></div>
      </div>
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6 inline-block">
            <span className="bg-[rgb(175,145,93)]/20 text-[rgb(175,145,93)] px-4 py-2 rounded-full text-sm font-semibold tracking-wider border border-[rgb(175,145,93)]/30">
              DESDE 2015 EM PALMAS - TO
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Defenda Seus Direitos com <span className="text-[rgb(175,145,93)]">Excelência Jurídica</span>
          </h1>
          <p className="text-xl md:text-2xl text-[rgb(199,195,192)] mb-8 leading-relaxed max-w-3xl">
            Escritório de advocacia especializado em defender servidores públicos, empresas e pessoas físicas em todo o
            Estado do Tocantins. Experiência, compromisso e resultados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="http://wa.me/556399974853"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(175,145,93)] text-[rgb(16,17,12)] px-8 py-4 rounded-lg hover:bg-[rgb(199,195,192)] transition-all duration-300 text-center font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Consulta Gratuita
            </a>
            <a
              href="#sobre"
              className="border-2 border-[rgb(175,145,93)] text-[rgb(175,145,93)] px-8 py-4 rounded-lg hover:bg-[rgb(175,145,93)] hover:text-[rgb(16,17,12)] transition-all duration-300 text-center font-bold text-lg"
            >
              Conheça Nossa História
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {features.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="bg-white/5 backdrop-blur-sm border border-[rgb(175,145,93)]/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
              >
                <Icon size={40} className="text-[rgb(175,145,93)] mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
                <p className="text-[rgb(199,195,192)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[rgb(16,17,12)] to-transparent z-10"></div>
    </section>
  );
}
