import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: '"Dispensa comentários, os guris são 100% e tudo que você precisar eles dão um jeito se não tiver no estoque. E sem contar que manda mensagem no WhatsApp, sempre estão à disposição para te auxiliar no que precisar. Os preços são bons e as peças de qualidade. Super recomendo!"',
    name: 'Ciro Both',
    role: 'Cliente',
  },
  {
    text: '"Auto Peças Diniz é show! É sempre bom negociar com eles. O atendimento é 10!"',
    name: 'Geraldo Da Cruz',
    role: 'Cliente',
  },
  {
    text: '"Ótimo atendimento! Profissionais qualificados e sempre dispostos a ajudar."',
    name: 'Julio Cesar Dias de Almeida',
    role: 'Cliente',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[rgb(237,23,21)] font-semibold text-sm uppercase tracking-wider">
              Depoimentos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O Que Nossos{' '}
            <span className="text-[rgb(237,23,21)]">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação de nossos clientes é o que nos move a continuar
            oferecendo o melhor serviço.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
            >
              <div className="absolute -top-4 -left-4 bg-[rgb(237,23,21)] w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="lucide lucide-quote text-white" width={28} height={28} />
              </div>
              <div className="flex gap-1 mb-4 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="lucide lucide-star text-yellow-400 fill-yellow-400"
                    width={20}
                    height={20}
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                {t.text}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-gray-900 text-lg">{t.name}</div>
                <div className="text-gray-500 text-sm">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-yellow-50 px-6 py-3 rounded-full border border-yellow-200">
            <Star className="lucide lucide-star text-yellow-500 fill-yellow-500" width={24} height={24} />
            <span className="text-gray-800 font-semibold text-lg">
              Avaliação 5 Estrelas no Google
            </span>
            <Star className="lucide lucide-star text-yellow-500 fill-yellow-500" width={24} height={24} />
          </div>
        </div>
      </div>
    </section>
  );
}
