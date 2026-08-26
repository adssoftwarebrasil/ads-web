import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: '"Excelente atendimento e produtos de muita qualidade. É Caramuru sem erro!"',
    name: 'Felype Sampaio',
    role: '4 avaliações',
  },
  {
    text: '"Excelente loja com produtos de ótima qualidade. O vendedor foi muito atencioso."',
    name: 'Patricia Magalhães',
    role: '3 avaliações',
  },
  {
    text: '"A Caramuru é uma loja completa. Os preços são compatíveis com o mercado e a variedade de tintas e utensílios para pintura é bastante satisfatória."',
    name: 'Felipe Guilherme de Oliveira Melo',
    role: 'Local Guide - 24 avaliações',
  },
];

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Caramur%C3%BA+Tintas/@-8.067483,-39.124165,15z/data=!4m6!3m5!1s0x7a09186427802c9:0x96373278e5284fa8!8m2!3d-8.0674834!4d-39.1241652!16s%2Fg%2F11bw3y8l0y';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-bold text-sm mb-4">
            Depoimentos
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O Que Nossos Clientes <span className="text-blue-600">Dizem Sobre Nós</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes é o nosso maior prêmio. Veja o que eles têm a dizer
            sobre a experiência com a Caramurú Tintas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center">
                <Quote size={24} />
              </div>
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">{t.text}</p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={32} className="text-yellow-400 fill-yellow-400 mx-1" />
              ))}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Avaliação 5 Estrelas no Google</h3>
            <p className="text-blue-100 text-lg mb-8">
              Centenas de clientes satisfeitos comprovam a qualidade dos nossos produtos e
              atendimento. Faça parte dessa história de sucesso!
            </p>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Ver Todas as Avaliações
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
