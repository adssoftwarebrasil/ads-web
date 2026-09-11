import { ArrowRight, Car } from 'lucide-react';

export default function Hero() {
  const videoUrl = "https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=map-locacoes%2Fnovasfotos%2FVideo-Motos.mp4&version_id=null";

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] lg:min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        {/* Overlay para garantir contraste do texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            Liberdade sobre Rodas em São Luís
          </h1>
          <p className="text-xl lg:text-2xl text-white mb-4 animate-fadeInUp animation-delay-200">
            Alugue carros e motos com qualidade, segurança e atendimento humanizado desde 2018
          </p>
          <p className="text-lg text-gray-200 mb-8 animate-fadeInUp animation-delay-400">
            Locação de veículos na Grande São Luís com manutenção preventiva e os melhores preços do mercado
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-600">
            <a
              href="#contato"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
            >
              Alugar Agora
              <ArrowRight size={20} />
            </a>
            <a
              href="#veiculos"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              Ver Veículos
              <Car size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Efeito de transição para a próxima seção */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}