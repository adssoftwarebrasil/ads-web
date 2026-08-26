import { MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-[#164972]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Pronto para Transformar a Gestão da Sua Empresa?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Fale com nossos especialistas e descubra como podemos ajudar seu negócio a crescer
        </p>
        <a
          href="https://wa.me/5562999732807?text=Olá! Gostaria de solicitar atendimento da Fonseca Contabilidade."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-[#164972] px-12 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-xl"
        >
          <MessageCircle className="w-6 h-6" />
          Solicitar Atendimento via WhatsApp
        </a>
      </div>
    </section>
  );
}
