import { Quote, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  city: string;
  unit: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Lugar maravilhoso, atendimento excelente, tudo que você procura, você acha aqui, preços baixos. E a atendente do caixa Francyele super carismática e educada. Melhor loja do estado de Sergipe!"',
    name: 'Tereza Cristina Lyra',
    city: 'Aracaju - SE',
    unit: 'Matriz',
  },
  {
    text: '"Ótimo lugar, estacionamento particular, atendimento exelente. Peças para todos tipos de veículos tanto a diesel como a gasolina. Ótimo preço, tanto como varejo ou atacado."',
    name: 'Neilton Andrade',
    city: 'Aracaju - SE',
    unit: 'Matriz',
  },
  {
    text: '"Um lugar muito bom para comprar peças para sua camionete e caminhão, lugar com ar condicionado, sala de espera. Eu recomendo!"',
    name: 'Fabio Games Alves',
    city: 'Aracaju - SE',
    unit: 'Matriz',
  },
  {
    text: '"Compro peças a mais de 3 anos com vendedor Welisson, sempre fui bem atendido e preço bem competitivo com as demais lojas de peças. Tem produtos similares e originais. Aprovado!"',
    name: 'Julio Cesar Da Maia',
    city: 'Maceió - AL',
    unit: 'Filial',
  },
  {
    text: '"Melhor loja para comprar peças para caminhão ou ônibus"',
    name: 'Jhon Hebert',
    city: 'Maceió - AL',
    unit: 'Filial',
  },
  {
    text: '"Tem um bom preço e um bom atendimento"',
    name: 'Marcone Henrique',
    city: 'Maceió - AL',
    unit: 'Filial',
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[rgb(216,32,38)]/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[rgb(28,58,122)]/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[rgb(216,32,38)]/10 text-[rgb(216,32,38)] rounded-full text-sm font-semibold">
            Depoimentos
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(28,58,122)] mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-700">
            A satisfação dos nossos clientes é o nosso maior patrimônio. Veja o que
            eles têm a dizer sobre nossos serviços.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8 relative"
            >
              <div className="absolute top-6 right-6 text-[rgb(216,32,38)]/10">
                <Quote className="w-16 h-16" />
              </div>
              <div className="flex items-center gap-1 mb-4 relative z-10">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[rgb(216,32,38)] text-[rgb(216,32,38)]"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10 italic">
                {t.text}
              </p>
              <div className="border-t pt-4 relative z-10">
                <p className="font-bold text-[rgb(28,58,122)]">{t.name}</p>
                <p className="text-sm text-gray-600">{t.city}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-[rgb(216,32,38)]/10 text-[rgb(216,32,38)] rounded-full text-xs font-semibold">
                  {t.unit}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[rgb(216,32,38)] mb-2">5.0</div>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[rgb(216,32,38)] text-[rgb(216,32,38)]"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">Avaliação Média</div>
            </div>
            <div className="h-16 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[rgb(28,58,122)] mb-2">500+</div>
              <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
            </div>
            <div className="h-16 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[rgb(28,58,122)] mb-2">13</div>
              <div className="text-sm text-gray-600">Anos de Confiança</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
