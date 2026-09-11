import { Quote, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  location: string;
  time: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Melhor supermercado de Indiara! Produtos sempre frescos, preços justos e atendimento excepcional. Faço todas as minhas compras aqui e recomendo para todos."',
    name: 'Maria Silva',
    location: 'Indiara, GO',
    time: 'Há 2 semanas',
  },
  {
    text: '"O açougue é simplesmente perfeito! As carnes são de primeira qualidade e os açougueiros são muito atenciosos. A padaria também é maravilhosa, pão quentinho todos os dias!"',
    name: 'João Santos',
    location: 'Indiara, GO',
    time: 'Há 1 mês',
  },
  {
    text: '"Adoro fazer compras no Conquista! O hortifruti tem produtos fresquinhos e de ótima qualidade. Os funcionários são sempre simpáticos e prestativos. Nota 10!"',
    name: 'Ana Paula Costa',
    location: 'Indiara, GO',
    time: 'Há 3 semanas',
  },
  {
    text: '"Supermercado de referência na cidade! Preços competitivos, variedade de produtos e um ambiente sempre limpo e organizado. Parabéns pela excelência!"',
    name: 'Carlos Eduardo',
    location: 'Indiara, GO',
    time: 'Há 1 semana',
  },
  {
    text: '"Sou cliente há anos e nunca me decepcionei. A qualidade dos produtos e o atendimento são sempre impecáveis. O Conquista faz parte da minha rotina!"',
    name: 'Fernanda Oliveira',
    location: 'Indiara, GO',
    time: 'Há 2 meses',
  },
  {
    text: '"Excelente supermercado! Destaque para o horário de funcionamento, das 6h às 21h é perfeito para quem trabalha. Sempre encontro tudo que preciso."',
    name: 'Roberto Alves',
    location: 'Indiara, GO',
    time: 'Há 1 mês',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(255,204,0)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(221,40,45)]/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[rgb(221,40,45)] font-bold text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-4">
            O Que Nossos <span className="text-[rgb(221,40,45)]">Clientes Dizem</span>
          </h2>
          <div className="w-20 h-1 bg-[rgb(255,204,0)] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa. Veja o que eles têm a dizer sobre nós
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative"
            >
              <div className="absolute -top-4 -left-4 bg-[rgb(255,204,0)] p-3 rounded-full shadow-lg">
                <Quote size={24} className="text-[rgb(221,40,45)]" />
              </div>
              <div className="flex gap-1 mb-4 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="fill-[rgb(255,204,0)] text-[rgb(255,204,0)]" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">{t.text}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
                <span className="text-xs text-gray-400">{t.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full">
            <div className="flex -space-x-2">
              {['A', 'B', 'C', 'D'].map((letter) => (
                <div
                  key={letter}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[rgb(221,40,45)] to-[rgb(200,30,35)] border-2 border-white flex items-center justify-center text-white font-bold text-sm"
                >
                  {letter}
                </div>
              ))}
            </div>
            <div className="text-left ml-2">
              <p className="font-bold text-gray-900">1.000+ clientes satisfeitos</p>
              <p className="text-sm text-gray-600">Avaliação média de 4.8 estrelas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
