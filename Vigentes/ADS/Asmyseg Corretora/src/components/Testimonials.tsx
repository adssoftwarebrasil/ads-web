import { Star } from 'lucide-react';

const testimonials = [
  {
    text: 'Pessoal muito atencioso, eficiente e serio. Realizam os meus seguros ha muitos anos, extremamente profissionais, recomendo',
    name: 'Beatriz Moraes',
    date: '22/04/2025',
  },
  {
    text: 'Excelente atendimento',
    name: 'Adelmo Takemori',
    date: '19/04/2025',
  },
  {
    text: 'Excelente atendimento e agilidade, buscando atender todas nossas solicitações. A alguns anos que minha família utiliza para cotação e sempre conseguimos os melhores valores.',
    name: 'Willian Pereira de Souza',
    date: '16/04/2025',
  },
  {
    text: 'Excelente! Atendimento impecável. Sempre gentis e prestativos!!!',
    name: 'Paola Pinheiro',
    date: '15/04/2025',
  },
  {
    text: 'Sou cliente há mais de 20 anos, sempre fui muito bem atendida, inclusive qdo mais preciso que são as etapas de comunicado de sinistro ou até mesmo em uma negociação de preço. Não sou do tipo que pede desconto todo ano. Apenas qdo preciso. Alfredo, para mim, é um modelo de profissional a ser seguido. Agradeço à toda equipe!',
    name: 'Danielle Sabarense',
    date: '14/04/2025',
  },
  {
    text: 'Equipe super atenciosa e prestativa! Serviço de alta qualidade!',
    name: 'By U Cosmetics',
    date: '11/04/2025',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-[#256C8F] font-semibold tracking-wide uppercase mb-2">
            Depoimentos
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos clientes
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 min-h-[100px]">
                {t.text}
              </p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
