import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: '"Agência onde transforma seu sonho em realidade! Empresa com atendimento super humano, pensando não apenas em vender o carro mais sim no conforto e condições do cliente. Empresa transparente com carros com ótimos preços e negociação. Excelente atendimento da vendedora Renata. Obrigado Tati pelo atendimento e por ajudar na conquista do automóvel. Super indico a empresa e parabenizo toda a equipe."',
    name: 'Paulo Soares',
    when: 'Há 1 mês',
  },
  {
    text: '"Excelente atendimento! O Leonardo demonstra profissionalismo e transparência em todo o processo de compra e venda de veículos. Carros revisados, com histórico bem explicado e preços justos. Além disso, a atenção no pós-venda faz toda a diferença. Recomendo fortemente a quem busca confiança e seriedade no mercado de seminovos."',
    name: 'Rodrigo Lemgruber',
    when: 'Há 4 meses',
  },
  {
    text: '"Excelente atendimento, tds estão de parabéns a taty o leo e a Renata super recomendo, mt atenciosos, quer compra um veículo de procedência, vai pra melhor L2 carros."',
    name: 'Patricia Gomes',
    when: 'Há 1 mês',
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Depoimentos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">O Que Nossos Clientes Dizem</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A satisfação de quem já realizou o sonho com a gente é nossa maior conquista
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-red-600 text-red-600" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-red-600 opacity-20" />
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">{t.text}</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-black text-lg">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.when}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-full">
            <div className="flex -space-x-2">
              {['A', 'B', 'C', 'D'].map((l) => (
                <div
                  key={l}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 border-2 border-white flex items-center justify-center text-white font-bold"
                >
                  {l}
                </div>
              ))}
            </div>
            <div className="text-left ml-2">
              <p className="font-bold text-black">Mais de 1.000 clientes satisfeitos</p>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-red-600 text-red-600" />
                <span className="text-sm text-gray-600">5.0 avaliação média</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Sua opinião é muito importante para nós!</p>
          <a
            href="https://www.google.com/maps/place/L2+CARROS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Deixe Sua Avaliação
          </a>
        </div>
      </div>
    </section>
  );
}
