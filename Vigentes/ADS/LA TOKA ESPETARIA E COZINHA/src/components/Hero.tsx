import { MapPin, UtensilsCrossed, ChevronDown } from 'lucide-react';
import { scrollToId } from '../lib/scroll';
import { useIfoodPicker } from '../lib/ifood';

export default function Hero() {
  const abrirIfood = useIfoodPicker();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 parallax"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/La%20Toka%20Espetaria%2Fimgi_10_473069010_122131967930426027_2147807271604572917_n.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="transform transition-all duration-1000 translate-y-0 opacity-100">
          <img
            src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=La%20Toka%20Espetaria%2Flogo.png&version_id=null"
            alt="La Toka Espetaria"
            className="h-24 md:h-32 w-auto mx-auto mb-8 animate-fade-in"
            loading="eager"
          />
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-shadow mb-6 transform transition-all duration-1000 delay-300 translate-y-0 opacity-100">
          Espetinhos, Jantinhas e Cerveja Gelada no Coração de Goiânia
        </h1>
        <p className="text-lg md:text-2xl text-[#FFD700] text-shadow-sm mb-8 transform transition-all duration-1000 delay-500 translate-y-0 opacity-100">
          Sabor autêntico e qualidade que você pode confiar. Agora com duas unidades: Setor Bueno e Jardim Atlântico!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transform transition-all duration-1000 delay-700 translate-y-0 opacity-100">
          <button
            onClick={() => scrollToId('localizacao')}
            className="bg-[#F93131] hover:bg-[#C41E3A] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-xl animate-pulse-slow"
          >
            <MapPin className="lucide lucide-map-pin w-6 h-6" />
            VENHA NOS VISITAR
          </button>
          <button
            onClick={abrirIfood}
            className="bg-[#EA1D2C] hover:bg-[#D01826] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-xl"
          >
            <UtensilsCrossed className="lucide lucide-utensils-crossed w-6 h-6" />
            PEÇA PELO IFOOD
          </button>
          <button
            onClick={() => scrollToId('cardapio')}
            className="border-2 border-white text-white hover:bg-white hover:text-[#F93131] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            CONHEÇA O CARDÁPIO
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 transform transition-all duration-1000 delay-1000 translate-y-0 opacity-100">
          <div className="bg-white bg-opacity-10 backdrop-blur-md px-6 py-3 rounded-full animate-float">
            <p className="text-white font-semibold">Aberto Todos os Dias</p>
          </div>
          <div
            className="bg-white bg-opacity-10 backdrop-blur-md px-6 py-3 rounded-full animate-float"
            style={{ animationDelay: '0.5s' }}
          >
            <p className="text-white font-semibold">17:30 às 23:30</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="lucide lucide-chevron-down w-8 h-8 text-white" />
      </div>
    </section>
  );
}
