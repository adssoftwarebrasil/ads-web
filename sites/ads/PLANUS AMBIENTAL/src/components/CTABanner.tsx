import { ArrowRight, AlertCircle } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1A472A] to-[#2d5e42] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8BC34A] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-red-400/30">
            <AlertCircle className="text-red-300 mr-2" size={20} />
            <span className="text-white text-sm font-medium">Atenção: Não conformidade pode resultar em multas pesadas</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Não deixe que questões ambientais afetem o crescimento da sua empresa
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Converse com nossos especialistas e descubra como podemos proteger e impulsionar o seu negócio
          </p>

          <a
            href="https://wa.me/5562981874429"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center bg-[#8BC34A] text-[#1A472A] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Fale Conosco e Evite Riscos
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
