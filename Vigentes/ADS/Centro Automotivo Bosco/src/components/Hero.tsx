import { CheckCircle, Clock, Award, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL, PHONE_TEL } from '../constants';

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-32 pb-12"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/centro%20automotivo%20bosco%2Fimg%2Fhero-background.webp")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(10,33,75)]/95 via-[rgb(10,33,75)]/85 to-[rgb(10,33,75)]/70"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-8 animate-fade-in text-white">
          <div className="inline-block">
            <span className="bg-[rgb(204,53,49)] text-white px-4 py-2 rounded-full text-sm font-semibold">
              Mais de 20 anos de experiência
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Excelência em
            <span className="block text-[rgb(204,53,49)]">Manutenção Automotiva</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Referência em Fortaleza para cuidar do seu veículo com qualidade, segurança e
            profissionalismo. Equipamentos modernos e equipe altamente qualificada.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-[rgb(204,53,49)] flex-shrink-0" />
              <span className="text-sm md:text-base">Atendimento de Excelência</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-6 h-6 text-[rgb(204,53,49)] flex-shrink-0" />
              <span className="text-sm md:text-base">Serviço Ágil</span>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="w-6 h-6 text-[rgb(204,53,49)] flex-shrink-0" />
              <span className="text-sm md:text-base">Garantia Total</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[rgb(204,53,49)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(184,43,39)] transition-all duration-300 shadow-2xl hover:shadow-[rgb(204,53,49)]/50 flex items-center justify-center space-x-2 transform hover:scale-105 w-full sm:w-auto"
            >
              <span>Agendar Agora</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="bg-white text-[rgb(10,33,75)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl flex items-center justify-center space-x-2 border-2 border-white w-full sm:w-auto"
            >
              <span>Ligar Agora</span>
            </a>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 pt-8 border-t border-white/20 w-full">
            <div className="text-center">
              <div className="text-3xl font-bold text-[rgb(204,53,49)]">20+</div>
              <div className="text-sm text-gray-300">Anos de Experiência</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[rgb(204,53,49)]">60 mil +</div>
              <div className="text-sm text-gray-300">Clientes Satisfeitos</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[rgb(204,53,49)]">100%</div>
              <div className="text-sm text-gray-300">Garantia</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

export default Hero;
