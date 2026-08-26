import { Star, Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  initial: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"A melhor loja de Uberlândia e região e com os melhores vendedores"',
    initial: 'A',
    name: 'Alan Oliveira',
  },
  {
    text: '"Fiquei muito satisfeito: tive um atendimento eficiente e agradável e estou muito satisfeito com o colchão que me enviaram. O produto era de pronta entrega e recebi em casa no mesmo dia que comprei. Recomendo bastante."',
    initial: 'L',
    name: 'Lucas F. de Paula',
  },
  {
    text: '"Excelente. Fomos muito bem atendidos, desde a compra até a entrega que foi cumprida (prazo) conforme combinado. Estão de parabéns, recomendamos sempre Colchões Ortobom Afonso Pena. Obrigado"',
    initial: 'A',
    name: 'Adilson Bastos',
  },
];

const stats: { value: string; boldLabel?: string; label: string; withStars?: boolean }[] = [
  { value: '5.0', label: 'Avaliação Média', withStars: true },
  { value: '100%', boldLabel: 'Satisfação', label: 'Clientes Satisfeitos' },
  { value: '5+', boldLabel: 'Anos', label: 'Servindo Uberlândia' },
];

export default function Testimonials() {
  return (
    <section
      id="avaliacoes"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span>Avaliações de Clientes</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação de quem confia na Ortobom Afonso Pena
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[rgb(0,0,160)]/10" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[rgb(0,0,160)] to-[rgb(0,0,200)] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {t.initial}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">Cliente Verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.value} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-[rgb(0,0,160)]">
                  {s.value}
                </div>
                {s.withStars && (
                  <div className="flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                )}
                {s.boldLabel && (
                  <p className="text-gray-900 font-semibold">{s.boldLabel}</p>
                )}
                <p className="text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Seja o próximo cliente satisfeito! Venha nos visitar e comprove a
            qualidade Ortobom.
          </p>
          <a
            href="https://wa.me/553492322203?text=Olá!%20Vi%20as%20avaliações%20e%20gostaria%20de%20conhecer%20os%20produtos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Quero Comprar Agora
          </a>
        </div>
      </div>
    </section>
  );
}
