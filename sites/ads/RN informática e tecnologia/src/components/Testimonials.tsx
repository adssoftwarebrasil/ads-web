import { Quote, Star } from 'lucide-react';

const testimonials = [
  { text: '"Atendimento diferenciado e agilidade nos serviços!! Indico muito."', name: 'Nathielle Cunha' },
  { text: '"Serviço rápido e atendimento top. Gostei muito!"', name: 'Murilo Soares' },
  { text: '"Excelente atendimento e serviço de qualidade."', name: 'Arlison Andrade' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(152,204,50)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(1,102,52)]/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O Que Nossos <span className="text-[rgb(1,102,52)]">Clientes Dizem</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[rgb(152,204,50)] hover:-translate-y-2 relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[rgb(1,102,52)] to-[rgb(1,82,42)] rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center space-x-1 mb-4 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[rgb(152,204,50)] text-[rgb(152,204,50)]" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">{t.text}</p>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-bold text-gray-900 text-lg">{t.name}</p>
                <p className="text-sm text-gray-500">Cliente verificado</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 sm:p-12 shadow-lg max-w-4xl mx-auto border border-gray-100">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-8 h-8 fill-[rgb(152,204,50)] text-[rgb(152,204,50)]" />
            <span className="text-4xl font-bold text-gray-900">5.0</span>
          </div>
          <p className="text-xl text-gray-700 font-semibold mb-2">Avaliação média dos clientes</p>
          <p className="text-gray-600 mb-6">Baseado em anos de atendimento e centenas de clientes satisfeitos</p>
          <a
            href="https://www.google.com/maps/place/RN+INFORMATICA/@-12.254244,-38.9629207,17z/data=!4m8!3m7!1s0x71437b80116eb51:0xc3c20e7c6ff7e905!8m2!3d-12.254244!4d-38.9603458!9m1!1b1!16s%2Fg%2F11c5q8h6kl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[rgb(1,102,52)] font-semibold hover:text-[rgb(152,204,50)] transition-colors"
          >
            Ver mais avaliações no Google →
          </a>
        </div>
      </div>
    </section>
  );
}
