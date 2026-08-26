import { Star } from 'lucide-react';

const testimonials = [
  {
    text: 'Atendimento rápido e eficiente, caçambas de excelente qualidade. Super recomendo para quem precisa de agilidade e confiança no serviço!',
    initials: 'DA',
    avatarClass: 'bg-[#ffaf24] text-[#343434]',
    name: 'Davy Aires',
    meta: '10 avaliações · Google',
  },
  {
    text: 'Bom atendimento. Entrega rápida. Não tive nenhum problema com o serviço, tudo saiu como combinado. Empresa séria e comprometida.',
    initials: 'WL',
    avatarClass: 'bg-[#343434] text-[#fefefe]',
    name: 'Wellington Lucas',
    meta: '1 avaliação · Google',
  },
  {
    text: 'Super recomendo! Atendimento impecável, entregaram tudo certinho e dentro do prazo. Empresa de confiança em Uberlândia!',
    initials: 'RV',
    avatarClass: 'bg-[#a9312e] text-[#fefefe]',
    name: 'Rebecca Vidoto',
    meta: '2 avaliações · Google',
  },
];

function Stars({ size }: { size: number }) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="lucide lucide-star text-[#ffaf24] fill-[#ffaf24]"
          width={size}
          height={size}
        />
      ))}
    </>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#ffaf24]/15 text-[#ec8f2b] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Avaliações reais
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#343434] mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Stars size={22} />
            <span className="text-[#343434] font-bold ml-1">5.0</span>
          </div>
          <p className="text-[#343434]/55 text-sm">Avaliações no Google Meu Negócio</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                <Stars size={16} />
              </div>
              <p className="text-[#343434]/75 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${t.avatarClass}`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[#343434] font-bold text-sm">{t.name}</div>
                  <div className="text-[#343434]/45 text-xs">{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
