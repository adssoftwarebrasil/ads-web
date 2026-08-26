import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Pedro Vanderlei',
    reviews: '11 avaliações',
    text: '"Mercadoria e atendimento nota 10. A vendedora Thalia merece a maior parte dos créditos, uma excelente profissional, superou as críticas, e faz um atendimento super profissional. Eu compro e indico sempre!"',
  },
  {
    name: 'Kaleby Félix',
    reviews: '22 avaliações',
    text: '"Atendimento excelente! Lugar perfeito para fazer suas embalagens com aquele toque especial. Fora que eles possuem uma variação enorme de embalagens, vão de guardanapos, sanduicheiras, potes térmicos, etc!"',
  },
  {
    name: 'Carlos Alonso',
    reviews: '68 avaliações',
    text: '"Atendimento e eficiência na produção de embalagens em Goiânia"',
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(203,13,13)]/10 text-[rgb(203,13,13)] px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold uppercase tracking-wider">Depoimentos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(0,33,78)] mb-6">O Que Nossos Clientes Dizem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">A satisfação dos nossos clientes é nossa maior conquista</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative"
            >
              <div className="absolute -top-4 left-8">
                <div className="bg-[rgb(203,13,13)] p-3 rounded-full">
                  <Quote width={24} height={24} className="lucide lucide-quote text-white" />
                </div>
              </div>
              <div className="mb-6 mt-4">
                <h4 className="font-bold text-[rgb(0,33,78)] text-lg">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.reviews}</p>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    width={20}
                    height={20}
                    className="lucide lucide-star text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed italic">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-[rgb(0,33,78)] rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Faça Parte Dessa História de Sucesso</h3>
            <p className="text-xl text-gray-200 mb-8">
              Junte-se aos centenas de clientes satisfeitos que confiam na LR Personalizações para valorizar suas marcas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5562985597671?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[rgb(203,13,13)] text-white px-8 py-4 rounded-full hover:bg-[rgb(180,11,11)] transition-all duration-300 font-semibold shadow-xl hover:scale-105"
              >
                Solicitar Orçamento
              </a>
              <a
                href="https://www.google.com/maps/place/LR+Personaliza%C3%A7%C3%B5es+Embalagens/@-16.658927384109344,-49.18148532485141,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-[rgb(0,33,78)] px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-xl hover:scale-105"
              >
                Ver Mais Avaliações
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
