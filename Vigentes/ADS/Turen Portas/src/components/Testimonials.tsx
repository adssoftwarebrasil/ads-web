import { Star, Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  initials: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'Instalei as portas WPC da Turen em todos os banheiros e ficou incrível! Além de lindas, ainda são totalmente impermeáveis. Recomendo demais para quem busca qualidade de verdade.',
    initials: 'MR',
    name: 'Marcela Rodrigues',
    role: 'Proprietária Residencial',
  },
  {
    text: 'Indico a Turen Portas para todos os meus clientes. Material de altíssimo padrão, entrega pontual e atendimento impecável. Diferencial enorme no mercado de Sinop.',
    initials: 'CE',
    name: 'Carlos Eduardo Fonseca',
    role: 'Engenheiro Civil',
  },
  {
    text: 'Como arquiteta, não abro mão de qualidade nos projetos. As portas da Turen têm um acabamento impecável e o material WPC é exatamente o que eu precisava para ambientes úmidos. Cliente fidelizada!',
    initials: 'AL',
    name: 'Ana Lúcia Mendes',
    role: 'Arquiteta de Interiores',
  },
  {
    text: 'Fechei um pedido grande para um condomínio e a Turen atendeu perfeitamente. Prazo, qualidade e preço justo. Com certeza vou fechar novos contratos com eles.',
    initials: 'RT',
    name: 'Rafael Torres',
    role: 'Construtor',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#005143]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#ECC4A4] font-semibold text-sm uppercase tracking-widest">
            Avaliações
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} width={22} height={22} className="text-[#DE8F52] fill-[#DE8F52]" />
              ))}
            </div>
            <span className="text-white font-bold text-xl">5.0</span>
            <span className="text-[#ECC4A4]/70 text-sm">no Google</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/8 border border-white/10 rounded-2xl p-6 hover:bg-white/12 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
            >
              <Quote width={24} height={24} className="text-[#DE8F52] mb-4" />
              <p className="text-[#ECC4A4]/85 text-sm leading-relaxed flex-1 mb-6">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#DE8F52] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">{t.name}</p>
                  <p className="text-[#ECC4A4]/60 text-xs">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mt-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} width={12} height={12} className="text-[#DE8F52] fill-[#DE8F52]" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
