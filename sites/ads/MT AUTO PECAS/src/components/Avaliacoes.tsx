import { Star, Quote } from 'lucide-react';

const depoimentos = [
  {
    text: '"Sempre com o melhor atendimento e melhor serviço da Região. Super indico!"',
    initial: 'D',
    name: 'Denison Cavalcante',
    time: '2 meses atrás',
  },
  {
    text: '"Loja com excelência em atendimento, ótimos profissionais e excelentes preços"',
    initial: 'A',
    name: 'Amerson Batista',
    time: '2 meses atrás',
  },
  {
    text: '"Essa é uma loja de peças automotiva de carro leves e pesados localizado na BR 316 em Marituba. Onde eu tenho ido comprar peças da minha van Ducato, eu tenho encontrado com bons preços e o melhor aceita cartão."',
    initial: 'F',
    name: 'Francinei Lucas',
    time: '1 ano atrás',
  },
];

export default function Avaliacoes() {
  return (
    <section id="avaliacoes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              O Que Nossos <span className="text-[rgb(4,152,134)]">Clientes</span> Dizem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Avaliações reais de clientes satisfeitos com nossos produtos e serviços
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.5</span>
              <span className="text-gray-600">no Google</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {depoimentos.map((d, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative"
              >
                <Quote size={40} className="text-[rgb(4,152,134)]/20 absolute top-6 right-6" />
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">{d.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[rgb(4,152,134)] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {d.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{d.name}</div>
                    <div className="text-sm text-gray-500">{d.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-[rgb(4,152,134)] to-[rgb(3,122,107)] rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Junte-se aos Nossos Clientes Satisfeitos</h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Milhares de clientes confiam na MT Auto Peças para manter seus veículos em perfeito estado. Venha fazer
              parte desse time!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/559191706760?text=Olá! Gostaria de fazer um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[rgb(4,152,134)] px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-semibold text-lg shadow-xl"
              >
                Solicitar Orçamento
              </a>
              <a
                href="https://www.instagram.com/grupomtautopecas/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all font-semibold text-lg"
              >
                Seguir no Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
