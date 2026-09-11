import { ArrowRight } from 'lucide-react';

const HERO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=anjoscolchao%2Fhero1.png&version_id=null';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={HERO}
          alt="Anjos Colchões e Sofás"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#004A69]/95 via-[#004A69]/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl animate-fadeInUp">
          <div className="inline-block mb-8">
            <div className="h-1 w-24 bg-gradient-to-r from-[#D1AD6E] via-[#D1AD6E] to-transparent"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Conforto &amp;<br />
            <span className="text-[#D1AD6E]">Tecnologia</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed font-light">
            Operação inovadora e aconchegante inspirada em padrões internacionais.
            Ambientes com design especial para proporcionar conforto e experiências
            inigualáveis. Produtos que surpreendem pelo acabamento, qualidade e
            tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <a
              href="#gallery"
              className="group bg-[#D1AD6E] text-[#004A69] px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3"
            >
              Conheça Nossos Produtos
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="#about"
              className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#004A69] transition-all duration-300 transform hover:scale-105"
            >
              Nossa História
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
