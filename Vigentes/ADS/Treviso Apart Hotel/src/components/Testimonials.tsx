import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Eduardo',
    role: 'Representante Comercial',
    city: 'São Paulo – SP',
    text: 'Já fiquei no Treviso diversas vezes durante minhas viagens de trabalho a Linhares. A cozinha equipada no apartamento faz toda a diferença. Atendimento impecável, equipe sempre prestativa.',
    rating: 5,
  },
  {
    name: 'Fernanda Oliveira',
    role: 'Gerente de Projetos',
    city: 'Vitória – ES',
    text: 'Estrutura completa, localização excelente no centro. O café da manhã é farto e o estacionamento é uma comodidade a mais. Com certeza voltarei em minha próxima visita a Linhares.',
    rating: 5,
  },
  {
    name: 'Ricardo Mendonça',
    role: 'Engenheiro',
    city: 'Belo Horizonte – MG',
    text: 'Fiquei por um mês inteiro durante uma obra na região. A hospedagem mensal tem um ótimo custo-benefício. Senti-me em casa com toda a comodidade que precisava para trabalhar.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#fef5e6] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#b82626] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            O que dizem nossos hóspedes
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#212042] leading-tight">
            Experiências reais de<br className="hidden sm:block" /> quem já se hospedou
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-[#b82626] rounded-full" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 shadow-sm border border-[#a08f95]/10 hover:shadow-xl hover:border-[#b82626]/20 transition-all duration-300 relative"
            >
              <Quote size={32} className="text-[#b82626]/15 absolute top-5 right-5" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} fill="#b82626" stroke="none" />
                ))}
              </div>
              <p className="text-[#a08f95] text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#a08f95]/10">
                <div className="w-10 h-10 bg-[#212042] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#fef5e6] font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-[#212042] font-bold text-sm">{t.name}</p>
                  <p className="text-[#a08f95] text-xs">{t.role} · {t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#212042] rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#b82626" stroke="none" />
              ))}
            </div>
            <h3 className="text-[#fef5e6] font-bold text-2xl sm:text-3xl mb-1">
              Mais de 17 anos de excelência
            </h3>
            <p className="text-[#a08f95] text-sm">Avaliação 4.5+ no Google | Booking.com</p>
          </div>
          <a
            href="https://wa.me/552733734333?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Treviso%20Apart%20Hotel."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-[#b82626] hover:bg-[#9b1f1f] text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 text-sm tracking-wide shadow-lg"
          >
            Fazer minha reserva
          </a>
        </div>
      </div>
    </section>
  );
}
