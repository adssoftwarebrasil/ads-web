import { CheckCircle } from 'lucide-react';

const reasons = [
  { text: 'Lavagem e higienização - Diversos tipos de limpeza automotiva para atender sua necessidade', delay: '0.3s' },
  { text: 'Troca de óleo de câmbio e motor - Aparelhos modernos para realizar manutenções necessárias ao seu veículo', delay: '0.4s' },
  { text: 'Especialistas certificados - Mão de obra qualificada e experiente', delay: '0.5s' },
  { text: 'Melhor custo-benefício da região', delay: '0.6s' },
];

export default function WhyHire() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 transition-all duration-800 opacity-100 translate-x-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/box40%2Fimg%2FPor%20que%20contratar.webp"
                alt="Por que contratar Box 40"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                style={{ boxShadow: 'rgba(212, 175, 55, 0.3) 0px 0px 60px' }}
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 transition-all duration-800 opacity-100 translate-x-0" style={{ transitionDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Por Que Contratar?</h2>
            <p className="text-lg md:text-xl text-gold-light mb-8 leading-relaxed">
              Excelência na execução dos serviços, maior proteção e segurança na condução do seu veículo.
            </p>
            <div className="space-y-6">
              {reasons.map((reason) => (
                <div
                  key={reason.text}
                  className="flex items-start space-x-4 transition-all duration-800 opacity-100 translate-x-0"
                  style={{ transitionDelay: reason.delay }}
                >
                  <CheckCircle size={28} className="lucide lucide-check-circle text-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg leading-relaxed">{reason.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
