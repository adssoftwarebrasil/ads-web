import { Quote, Star } from 'lucide-react';

const WHATSAPP = 'http://wa.me/5562985811343';

const testimonials = [
  {
    text: 'Muito satisfeito! Indústria confiável de reservatórios metálicos, bebedouros para gado e tanques de combustível, combinando alto padrão de fabricação, engenharia aplicada e excelente relação custo-benefício. Seus produtos demonstram desempenho estável em campo, durabilidade superior e opções de customização que atendem desde pequenas propriedades até aplicações industriais.',
    initial: 'L',
    name: 'Lucas Gouveia Castilho',
    when: 'Há 3 meses',
  },
  {
    text: 'Melhor preço do mercado, usam material de primeira qualidade comprei uma caixa de 10 mil litros e foi entregue antes do prazo combinado, já estou pedindo outra para meu rancho!!! Muito bom de negociar com o pessoal lá também. Nota 10000',
    initial: 'W',
    name: 'Wendel Cardoso Faleiro',
    when: 'Há 3 meses',
  },
  {
    text: 'Uma ótima empresa no ramo eu fiquei muito satisfeito com a entrega do serviço.',
    initial: 'W',
    name: 'Wagner Tarcio',
    when: 'Há 3 meses',
  },
];

function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-[rgba(9,9,35)] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgba(12,132,227,0.05)] rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[rgba(12,132,227,0.2)] border border-[rgba(12,132,227,0.5)] rounded-full">
            <span className="text-[rgba(12,132,227)] font-semibold text-sm uppercase tracking-wide">
              Depoimentos
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-[rgba(198,198,207)] max-w-3xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior reconhecimento. Veja o que eles têm a dizer sobre
            nossos produtos e serviços.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] backdrop-blur-sm border border-[rgba(198,198,207,0.1)] rounded-2xl p-8 hover:border-[rgba(12,132,227,0.5)] transition-all duration-500 hover:shadow-2xl hover:shadow-[rgba(12,132,227,0.15)] hover:-translate-y-2"
            >
              <Quote
                size={48}
                className="absolute top-6 right-6 text-[rgba(12,132,227,0.2)] group-hover:text-[rgba(12,132,227,0.4)] transition-colors duration-500"
              />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-[rgba(12,132,227)] fill-[rgba(12,132,227)]"
                  />
                ))}
              </div>
              <p className="text-[rgba(198,198,207)] mb-6 leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-4 pt-4 border-t border-[rgba(198,198,207,0.1)]">
                <div className="w-12 h-12 bg-gradient-to-br from-[rgba(12,132,227,0.3)] to-[rgba(12,132,227,0.1)] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{t.initial}</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <p className="text-sm text-[rgba(198,198,207)]">{t.when}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-[rgba(198,198,207)] mb-6">Junte-se aos nossos clientes satisfeitos</p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[rgba(12,132,227)] hover:bg-[rgba(12,132,227,0.9)] text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Solicite Seu Orçamento Agora
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
