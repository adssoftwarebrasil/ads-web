import { Heart, Cpu } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const BG_URL =
  'https://storage.lucasmendes.dev/site-sp/csamanaus/Por%20que%20contratar%3F.png';

export default function WhyChoose() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url("${BG_URL}")` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Por que escolher o CSA?
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Escolher a CSA é garantir qualidade
          </h3>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            para suas necessidades auditivas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6">
              <Heart className="lucide lucide-heart w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Experiência e Qualificação</h4>
            <p className="text-gray-200 leading-relaxed">
              Mais de 34 anos de atuação no mercado auditivo
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Cpu className="lucide lucide-cpu w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Avaliação Gratuita</h4>
            <p className="text-gray-200 leading-relaxed">
              Teste auditivo para ajudar na escolha do produto ideal
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Agende seu Teste Auditivo
          </a>
          <p className="text-white mt-4 text-sm">Entre em contato e faça sua avaliação gratuita</p>
        </div>
      </div>
    </section>
  );
}
