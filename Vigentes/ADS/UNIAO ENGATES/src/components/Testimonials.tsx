import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: '"Desde que conheci a União Engates fiquei impressionado com a seriedade das pessoas envolvidas na fábrica e do grau de comprometimento dessas pessoas. A União Engates é meu fornecedor já há alguns anos e sei que essa parceria é duradora pela seriedade dessa empresa."',
    author: '— Waldir Rossi',
  },
  {
    text: '"Eu estou muito satisfeito com a União Engates que fornece produtos para minha empresa já há tantos anos. Temos trabalhado muito com muita seriedade e dedicação, sabemos que a cada dia nossas empresas serão cada vez mais reconhecidas no mercado brasileiro."',
    author: '— João Batista Dias',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-14">
        <h2 className="text-[rgb(175,11,18)] text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 md:mb-14">
          Depoimentos de Clientes
        </h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-[#F8F9FA] rounded-xl p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[rgb(175,11,18)]"
            >
              <Quote className="lucide lucide-quote text-[rgb(175,11,18)] mb-4" width={48} height={48} strokeWidth={1.5} />
              <p className="text-[#2C2C2C] text-base md:text-lg leading-relaxed mb-6 italic">{t.text}</p>
              <p className="text-[rgb(175,11,18)] font-bold text-lg">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
