import { ShieldCheck, Award, Clock, MessageCircle, Phone, Star } from 'lucide-react';

const HERO_IMG = 'https://storage.lucasmendes.dev/site-sp/lojao%20do%20parabrisa/img/homens-trocando-parabrisa.webp';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[rgb(1,160,199)] via-[rgb(1,150,189)] to-[rgb(1,140,179)] overflow-hidden pt-20"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="transition-all duration-700 opacity-100 translate-y-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Especialistas em Parabrisas e Vidros Automotivos em Salvador
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
              Qualidade Superior, Preço Justo e Atendimento que Faz a Diferença. Atendemos carros, caminhões e ônibus com garantia e equipe especializada.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white text-sm font-medium transition-all duration-700 delay-100 opacity-100 translate-y-0">
                <ShieldCheck width={18} height={18} />
                Desde 2005
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white text-sm font-medium transition-all duration-700 delay-200 opacity-100 translate-y-0">
                <Award width={18} height={18} />
                Melhor Preço
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white text-sm font-medium transition-all duration-700 delay-300 opacity-100 translate-y-0">
                <Clock width={18} height={18} />
                Atendimento Rápido
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="http://wa.me/557188114690?text=Olá! Gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[rgb(1,160,199)] font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle width={22} height={22} />
                Solicite um Orçamento
              </a>
              <a
                href="tel:+557132583386"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-[rgb(1,160,199)] transition-all duration-300"
              >
                <Phone width={22} height={22} />
                Ligue Agora
              </a>
            </div>
          </div>
          <div className="relative transition-all duration-700 delay-400 opacity-100 translate-x-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/30">
              <img
                src={HERO_IMG}
                alt="Profissionais instalando parabrisa"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur p-6 rounded-2xl shadow-xl max-w-xs">
              <Star width={32} height={32} className="text-yellow-500 mb-2" />
              <p className="font-bold text-xl text-gray-800 mb-1">19 anos de experiência</p>
              <p className="text-gray-600 text-sm">Referência em Salvador</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
