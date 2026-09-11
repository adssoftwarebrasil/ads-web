import { Star, Quote } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/5548988277661';

interface Depoimento {
  text: string;
  name: string;
  time: string;
  initial: string;
}

const depoimentos: Depoimento[] = [
  {
    text: '"A MoonLight é excelente, uma variedade de pijamas lindos e de muito bom gosto, todos super confortáveis e de extrema qualidade!!! Além disso, o atendimento é nota mil, compro com eles porque sei que não me arrependerei. Parabéns a loja!"',
    name: 'Paula Dutra',
    time: '3 meses atrás',
    initial: 'P',
  },
  {
    text: '"Excelente loja, atendimento personalizado, produtos de qualidade, embalagem de presente linda e sem custos adicionais por ela. Melhores pijamas da região. Adorei!"',
    name: 'Leticia Moraes',
    time: '10 meses atrás',
    initial: 'L',
  },
  {
    text: '"Excelente experiência, peças de altíssima qualidade e vendedoras super atenciosas. Célia e Leticia me deixaram confortável e ajudaram a escolher a melhor opção para mim. Virei cliente fiel."',
    name: 'Dagilla Moraes',
    time: '9 meses atrás',
    initial: 'D',
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[rgb(254,254,252)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[rgb(223,202,178)]/40 px-4 py-2 rounded-full mb-4">
            <Star width={18} height={18} className="text-[rgb(102,78,56)] fill-[rgb(102,78,56)]" />
            <span className="text-[rgb(102,78,56)] font-semibold text-sm">Avaliação 5.0 no Google</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(102,78,56)] mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg md:text-xl text-[rgb(102,78,56)]/70 max-w-2xl mx-auto">
            A satisfação de quem nos visita é o nosso maior orgulho
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {depoimentos.map((depoimento) => (
            <div
              key={depoimento.name}
              className="bg-gradient-to-br from-[rgb(254,254,252)] to-[rgb(223,202,178)]/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[rgb(223,202,178)]/30 relative"
            >
              <Quote width={40} height={40} className="absolute top-6 right-6 text-[rgb(223,202,178)] opacity-50" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} width={18} height={18} className="text-[rgb(102,78,56)] fill-[rgb(102,78,56)]" />
                ))}
              </div>
              <p className="text-[rgb(102,78,56)]/80 leading-relaxed mb-6 relative z-10">{depoimento.text}</p>
              <div className="flex items-center justify-between border-t border-[rgb(223,202,178)]/30 pt-4">
                <div>
                  <p className="font-bold text-[rgb(102,78,56)]">{depoimento.name}</p>
                  <p className="text-sm text-[rgb(102,78,56)]/60">{depoimento.time}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-[rgb(223,202,178)] to-[rgb(111,86,60)] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{depoimento.initial}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-[rgb(102,78,56)]/70 mb-6">Seja nosso próximo cliente satisfeito!</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(102,78,56)] text-[rgb(254,254,252)] px-8 py-4 rounded-full hover:bg-[rgb(111,86,60)] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            Agende Sua Visita
          </a>
        </div>
      </div>
    </section>
  );
}
