import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcos Oliveira',
    role: 'Empresário',
    text: 'O Dr. Araripe resolveu meu caso trabalhista com muita competência. Fui atendido com atenção e clareza em cada etapa. Recomendo de olhos fechados!',
    stars: 5,
    initials: 'MO',
    color: 'bg-blue-600',
  },
  {
    name: 'Fernanda Costa',
    role: 'Analista de RH',
    text: 'Precisei registrar minha marca e o escritório foi incrível! Me orientaram em todo o processo junto ao INPI. Equipe jovem, dinâmica e muito profissional.',
    stars: 5,
    initials: 'FC',
    color: 'bg-teal-600',
  },
  {
    name: 'Roberto Almeida',
    role: 'Empreendedor',
    text: 'Excelente escritório! Me senti acolhido desde o primeiro contato. Resolveram minha situação de forma rápida e transparente. Cinco estrelas com certeza.',
    stars: 5,
    initials: 'RA',
    color: 'bg-amber-600',
  },
  {
    name: 'Carla Mendonça',
    role: 'Servidora Pública',
    text: 'Fui muito bem assessorada no meu processo de rescisão indireta. O advogado é atencioso, explica tudo com clareza e luta pelos seus direitos de verdade.',
    stars: 5,
    initials: 'CM',
    color: 'bg-rose-600',
  },
  {
    name: 'Paulo Henrique',
    role: 'Comerciante',
    text: 'Precisei de consultoria empresarial e fui muito bem atendido. A equipe da Araripe Chagas tem um conhecimento vasto e me deu total segurança jurídica.',
    stars: 5,
    initials: 'PH',
    color: 'bg-green-700',
  },
  {
    name: 'Juliana Ferreira',
    role: 'Professora',
    text: 'Desde o primeiro atendimento senti confiança. Me ajudaram com um processo cível complexo com muita dedicação. Estou muito satisfeita com o resultado!',
    stars: 5,
    initials: 'JF',
    color: 'bg-cyan-700',
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-24 bg-[#F5F3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">
            O que dizem sobre nós
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003F5C] mb-5">
            Avaliações dos Clientes
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={28} className="fill-[#C9A84C] text-[#C9A84C]" />
              ))}
            </div>
            <span className="text-5xl font-bold text-[#003F5C]">5.0</span>
          </div>
          <p className="text-[#003F5C]/60 text-sm">Avaliação no Google Meu Negócio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#003F5C]/5 relative"
            >
              <Quote size={32} className="text-[#EAE6AE] absolute top-6 right-6" />
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-[#003F5C] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#003F5C]/50 text-xs">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[#C9A84C] text-[#C9A84C]" />
                ))}
              </div>
              <p className="text-[#003F5C]/70 text-sm leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/search/Araripe+Chagas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#003F5C] hover:text-[#C9A84C] font-semibold text-sm transition-colors duration-200 border-b-2 border-[#C9A84C]/40 hover:border-[#C9A84C] pb-0.5"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
