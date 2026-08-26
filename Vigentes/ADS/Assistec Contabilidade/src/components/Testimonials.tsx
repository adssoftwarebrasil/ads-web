import { Star, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  initial: string;
  name: string;
  role: string;
}

const topRow: Testimonial[] = [
  {
    quote:
      '"A Assistec tem sido fundamental para a organização fiscal da minha propriedade. O atendimento é sempre ágil, personalizado e com muito conhecimento sobre o agronegócio. Recomendo de olhos fechados!"',
    initial: 'C',
    name: 'Carlos Eduardo Mendonça',
    role: 'Produtor Rural – Primavera do Leste',
  },
  {
    quote:
      '"Desde que contratei a Assistec, me libertei das preocupações com impostos e obrigações fiscais. A equipe é extremamente competente, pontual e sempre disponível para tirar dúvidas."',
    initial: 'A',
    name: 'Ana Paula Rodrigues',
    role: 'Proprietária de Comércio – Primavera do Leste',
  },
  {
    quote:
      '"Faz mais de 5 anos que estou com a Assistec. Minha empresa nunca teve problemas com o Fisco. O Vanderlei e a equipe sempre buscam as melhores soluções para o negócio crescer com segurança."',
    initial: 'R',
    name: 'Roberto Souza Lima',
    role: 'Engenheiro Agrônomo – Campo Verde',
  },
];

const bottomRow: Testimonial[] = [
  {
    quote:
      '"Atendimento incrível mesmo à distância! Faço tudo online e a Assistec cuida de toda a parte contábil da minha empresa com muita eficiência. Nota 10 em todos os aspectos."',
    initial: 'F',
    name: 'Fernanda Castro',
    role: 'Prestadora de Serviços – Poxoréu',
  },
  {
    quote:
      '"Profissionais sérios, éticos e com domínio total da área contábil e tributária. Abri minha empresa com a ajuda deles e desde então nunca tive problemas com nenhuma obrigação fiscal."',
    initial: 'J',
    name: 'José Aparecido Teixeira',
    role: 'Empresário – Santo Antônio do Leste',
  },
];

function Card({ item }: { item: Testimonial }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-brand-blue/30 hover:shadow-lg transition-all duration-300 relative">
      <Quote className="lucide lucide-quote text-brand-blue/20 absolute top-4 right-4" width={32} height={32} strokeWidth={2} />
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="lucide lucide-star text-yellow-400 fill-yellow-400"
            width={14}
            height={14}
            strokeWidth={2}
          />
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">{item.quote}</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-burgundy flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {item.initial}
        </div>
        <div>
          <div className="text-brand-burgundy font-semibold text-sm">{item.name}</div>
          <div className="text-gray-400 text-xs">{item.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-blue font-semibold text-sm tracking-widest uppercase mb-3">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-burgundy mb-5">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="lucide lucide-star text-yellow-400 fill-yellow-400"
                  width={24}
                  height={24}
                  strokeWidth={2}
                />
              ))}
            </div>
            <span className="text-brand-burgundy font-bold text-xl">5.0</span>
            <span className="text-gray-500 text-sm">— Avaliação no Google</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topRow.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2 lg:w-2/3 lg:mx-auto">
          {bottomRow.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5566999538963?text=Olá!%20Quero%20fazer%20parte%20dos%20clientes%20satisfeitos%20da%20Assistec%20Contabilidade!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200"
          >
            Quero ser mais um cliente satisfeito
          </a>
        </div>
      </div>
    </section>
  );
}
