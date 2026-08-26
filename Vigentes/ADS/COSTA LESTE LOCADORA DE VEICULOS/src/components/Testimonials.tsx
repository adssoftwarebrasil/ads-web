import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    initials: 'DR',
    name: 'Dm Representações Sultan',
    time: '2 semanas atrás',
    text: '"Recomendo o serviço, Sr David estava no aeroporto para nos recepcionar no horário correto, carro novo, limpo, justo no valor do aluguel, na entrega do veículo estava no horário combinado, eu recomendo a Locadora Costa Leste."',
  },
  {
    initials: 'LS',
    name: 'Leandro Santos',
    time: '3 meses atrás',
    text: '"Muito bom o atendimento com o Davi só procura ele. Uma ótima indicação. Obrigado"',
  },
  {
    initials: 'TM',
    name: 'Thiago Maia',
    time: '3 meses atrás',
    text: '"Veículo (Fiat Argo) em ótimo estado (higienização), atendimento personalizado, facilidade e otimização para pagamento. Super indico 👏🏻👏🏻👏🏻👏🏻👏🏻"',
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 bg-gradient-to-b from-white to-[rgb(255,254,252)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(16,14,13)] mb-4">
            O Que Dizem <span className="text-[rgb(202,25,27)]">Nossos Clientes</span>
          </h2>
          <div className="w-24 h-1 bg-[rgb(202,25,27)] mx-auto mb-6"></div>
          <p className="text-xl text-[rgb(16,14,13)]/70 max-w-3xl mx-auto">
            Depoimentos reais de quem já confiou na Costa Leste
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.initials}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <Quote size={48} className="absolute top-6 right-6 text-[rgb(202,25,27)]/20" />
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center justify-center w-14 h-14 bg-[rgb(202,25,27)] text-[rgb(255,254,252)] rounded-full font-bold text-lg">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-[rgb(16,14,13)] text-lg">{t.name}</h4>
                  <p className="text-sm text-[rgb(16,14,13)]/60">{t.time}</p>
                </div>
              </div>
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[rgb(202,25,27)] text-[rgb(202,25,27)]" />
                ))}
              </div>
              <p className="text-[rgb(16,14,13)]/80 leading-relaxed italic">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-[rgb(16,14,13)] rounded-2xl p-8 sm:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={32}
                    className="fill-[rgb(202,25,27)] text-[rgb(202,25,27)]"
                  />
                ))}
              </div>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-[rgb(255,254,252)] mb-4">
              Avaliação 5 Estrelas
            </h3>
            <p className="text-xl text-[rgb(255,254,252)]/80 mb-8">
              Centenas de clientes satisfeitos recomendam nossos serviços
            </p>
            <a
              href="http://wa.me/5585986018954?text=Olá! Vi as avaliações e gostaria de alugar um carro."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[rgb(202,25,27)] text-[rgb(255,254,252)] px-8 py-4 rounded-full hover:bg-[rgb(143,25,19)] transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <span>Faça Sua Reserva</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
