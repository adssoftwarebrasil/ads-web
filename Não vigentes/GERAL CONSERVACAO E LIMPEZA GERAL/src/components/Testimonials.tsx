import { Star, Quote } from 'lucide-react';

const testimonials = [
  { text: '"De confiança, não êxito em chamar."', name: 'Giovana Campos', reviews: '7 avaliações', time: 'uma semana atrás' },
  { text: '"Trabalho de excelência."', name: 'Cassia Aparecida Lopes da Silva', reviews: '2 avaliações', time: '15 horas atrás' },
  { text: '"Qualidade e comprometimento super indico."', name: 'James França', reviews: '1 avaliação', time: 'um dia atrás' },
  {
    text: '"Empresa extremamente profissional e comprometida com a qualidade do serviço prestado. Atendimento excelente e equipe super preparada. Super recomendo para quem busca confiança e eficiência."',
    name: 'Juliana Campos',
    reviews: '4 avaliações',
    time: 'um dia atrás',
  },
  {
    text: '"Uma empresa de excelência, com profissionais extremamente competentes e comprometidos com o melhor resultado. Atendimento diferenciado e trabalho impecável. Super recomendo!"',
    name: 'Luiza Campos',
    reviews: '3 avaliações',
    time: 'um dia atrás',
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[rgb(3,171,255)] font-semibold text-sm md:text-base uppercase tracking-wider mb-4 block">
              Avaliações
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A satisfação dos nossos clientes é nossa maior conquista. Veja o que eles têm a dizer sobre
              nossos serviços.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[rgb(2,103,253)] to-[rgb(3,171,255)] mx-auto rounded-full mt-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2 relative"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-[rgb(3,171,255)] opacity-20" />
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">{t.text}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900 text-lg">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.reviews}</p>
                  <p className="text-xs text-gray-400 mt-1">{t.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-[rgb(2,103,253)] to-[rgb(3,171,255)] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-300 text-yellow-300" />
              ))}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">5.0 Estrelas no Google</h3>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Nosso compromisso com a excelência se reflete nas avaliações dos nossos clientes. Junte-se a
              centenas de empresas satisfeitas.
            </p>
            <a
              href="https://wa.me/5592981671587?text=Olá! Vi as avaliações e gostaria de contratar os serviços."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-[rgb(2,103,253)] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl transform hover:scale-105"
            >
              <span>Solicite seu Orçamento Agora</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
