import { CheckCircle, ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const benefits = [
  'Análise tributária completa',
  'Identificação de oportunidades de economia',
  'Planejamento personalizado para seu negócio',
  'Sem compromisso ou custos iniciais',
];

export default function CtaImpostos() {
  return (
    <section className="py-20 bg-[rgb(47,55,56)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(245,134,52)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(245,134,52)]/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Está Pagando Impostos Demais?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Agende uma{' '}
            <strong className="text-[rgb(245,134,52)]">consultoria</strong> e
            descubra como reduzir sua carga tributária de forma legal e
            estratégica.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3 text-left">
                <CheckCircle
                  size={24}
                  className="text-[rgb(245,134,52)] flex-shrink-0"
                />
                <span className="text-white">{b}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contato"
              className="group bg-[rgb(245,134,52)] text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-[rgb(225,114,32)] transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-2xl"
            >
              Dúvidas? Entre em contato
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="https://wa.me/5566999215475?text=Olá! Gostaria de agendar uma consultoria sobre planejamento tributário."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[rgb(47,55,56)] px-10 py-5 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Chamar no WhatsApp
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Atendimento em Rondonópolis e todas as cidades do Mato Grosso
          </p>
        </div>
      </div>
    </section>
  );
}
