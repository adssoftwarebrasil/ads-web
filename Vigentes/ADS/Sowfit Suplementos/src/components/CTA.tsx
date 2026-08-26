import { MessageCircle, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-white rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-white mb-6">Pronto Para Transformar Seus Resultados?</h2>
          <p className="text-white/90 text-xl md:text-2xl leading-relaxed">
            Fale agora com nossos especialistas e descubra os melhores suplementos para seu objetivo
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
            <a
              href="https://wa.me/553497228602?text=Olá! Vim pelo site e gostaria de mais informações sobre os suplementos."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-white text-primary hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-lg transition-all hover:shadow-2xl hover:scale-105 animate-pulse-slow"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Falar no WhatsApp</span>
            </a>
            <a
              href="tel:3434807593"
              className="flex items-center space-x-3 text-white hover:text-gray-100 font-bold text-lg transition-all"
            >
              <Phone className="w-6 h-6" />
              <span>Ligar Agora: (34) 3480-7593</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
