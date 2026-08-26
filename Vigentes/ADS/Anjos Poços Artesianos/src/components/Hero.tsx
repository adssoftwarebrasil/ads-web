import { Droplets, ArrowRight, Clock, MapPin } from 'lucide-react';
import { WhatsAppIcon, WHATSAPP_URL } from './icons';

const scrollToContato = () => {
  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 lg:pt-20 lg:pb-0 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/anjos%20pocos%20artesianos/img/hero.webp"
          alt="Perfuração de poços artesianos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/85 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-400/30">
            <p className="text-blue-100 font-medium flex items-center gap-2">
              <Droplets className="w-4 h-4" />
              28 Anos de Experiência
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Soluções Completas em
            <span className="block text-blue-300 mt-2">Poços Artesianos</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-50 mb-8 leading-relaxed">
            Perfuração e manutenção de poços artesianos e semiartesianos para
            empresas, chácaras, fazendas e irrigação em Mato Grosso. Qualidade
            tem nome: Anjos Poços Artesianos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={scrollToContato}
              className="group flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold text-lg"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-xl font-semibold text-lg"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Chamar no WhatsApp
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <Clock className="w-8 h-8 text-blue-300 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold">Horário</p>
                <p className="text-blue-100 text-sm">7h-11h | 13h-17h30</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <MapPin className="w-8 h-8 text-blue-300 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold">Localização</p>
                <p className="text-blue-100 text-sm">Sinop - MT</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <Droplets className="w-8 h-8 text-blue-300 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold">Especialidade</p>
                <p className="text-blue-100 text-sm">Sedimentos e Rocha</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
