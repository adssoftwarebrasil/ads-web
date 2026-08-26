import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: '"Super recomendo. Muitas opções. Atendimento diferenciado. Diálogo com a vendedora para ajudar nas dúvidas foi muito bom. Ótimos preços. Várias marcas para escolher material escolar. Indicação de itens para melhor aproveitamento. Tem um estacionamento ao lado da papelaria que é conveniado com a mesma. Eles tem atendimento via whatsapp também. Eles aceitam pagamento no vale cultura."',
    name: 'Hélber Silva',
    role: 'Local Guide',
  },
  {
    text: '"Papelaria no centro de campinas. Grande diversidade de produtos com bons preços. Atendimento especial. Colaboradoras atenciosas e solicitas. Vale a pena."',
    name: 'Raul Clemente Jr',
    role: 'Local Guide',
  },
  {
    text: '"Tudo que preciso de papelaria encontro lá. Me conquistaram pelo atendimento, gentis e competentes, nos faz sentir acolhida."',
    name: 'Regina Guaraldo',
    role: 'Local Guide',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="w-24 h-1 bg-[rgb(237,48,54)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Confira a opinião de quem já comprou conosco
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative"
            >
              <div className="absolute top-6 right-6 text-[rgb(61,61,147)] opacity-10">
                <Quote size={64} />
              </div>
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">{t.text}</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-br from-[rgb(237,48,54)] to-[rgb(217,28,34)] rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={32} className="text-yellow-300 fill-current mx-1" />
              ))}
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">Avaliação 5 Estrelas no Google</h3>
            <p className="text-lg text-red-100 mb-8 leading-relaxed">
              Junte-se aos nossos clientes satisfeitos e experimente o atendimento diferenciado da
              Papelaria Paulino
            </p>
            <a
              href="https://wa.me/5519982880081?text=Olá! Vi as avaliações e gostaria de fazer um pedido."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[rgb(237,48,54)] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
            >
              Faça Seu Pedido Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
