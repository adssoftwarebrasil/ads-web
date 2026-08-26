import { Star, Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  { text: '"Aqui você é sempre bem recebido"', name: 'Lauriston Barros', role: 'Local Guide · 142 avaliações' },
  { text: '"A mais nova loja em componentes para esquadrias de alumínio. OBS com os melhores preços a pronta entrega. É verdade e um atendimento VIP"', name: 'Casa do Celular', role: 'Local Guide · 36 avaliações' },
  { text: '"Estava pesquisando o menor preço só encontrei aqui na Recife componentes, eles atendem bem rápido no ZAP"', name: 'Isaque Barbosa', role: 'Cliente' },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[rgb(231,195,37)] uppercase tracking-wide mb-2">Avaliações</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[rgb(12,27,76)] mb-4">O Que Nossos Clientes Dizem</h3>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="lucide lucide-star w-6 h-6 fill-[rgb(231,195,37)] text-[rgb(231,195,37)]" />
              ))}
            </div>
            <span className="text-2xl font-bold text-[rgb(12,27,76)]">5.0</span>
            <span className="text-gray-600">no Google</span>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Confiança construída com atendimento de excelência e produtos de qualidade</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[rgb(231,195,37)] rounded-full flex items-center justify-center shadow-lg">
                <Quote className="lucide lucide-quote w-6 h-6 text-white" />
              </div>
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="lucide lucide-star w-5 h-5 fill-[rgb(231,195,37)] text-[rgb(231,195,37)]" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">{t.text}</p>
              <div className="pt-4 border-t border-gray-200">
                <div className="font-bold text-[rgb(12,27,76)]">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center bg-[rgb(12,27,76)] rounded-2xl p-8 md:p-12">
          <h4 className="text-3xl font-bold text-white mb-4">Faça Parte dos Nossos Clientes Satisfeitos</h4>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">Junte-se a centenas de clientes que confiam na Recife Componentes para suas necessidades de esquadrias de alumínio e vidro</p>
          <a
            href="http://wa.me/558199266617"
            className="inline-flex items-center justify-center gap-2 bg-[rgb(231,195,37)] text-[rgb(12,27,76)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(187,133,19)] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Solicite Seu Orçamento Agora
          </a>
        </div>
      </div>
    </section>
  );
}
