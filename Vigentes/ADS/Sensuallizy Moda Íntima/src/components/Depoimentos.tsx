import { Quote, Star } from 'lucide-react';

const STARS_IMG = 'https://storage.lucasmendes.dev/site-sp/sensuallizy%20moda%20intima%2Fimg3%2Favaliacao-5-estrelas.webp';

interface Depoimento {
  text: string;
  name: string;
  when: string;
}

const depoimentos: Depoimento[] = [
  {
    text: '"Atendimento on-line excelente! As atendentes são ágeis, sempre dispostas a enviar fotos dos produtos e ainda montam um condicional rápido e caprichado. No presencial, o atendimento também é impecável: sempre simpáticas, prestativas e sem aquela pressão de venda, deixando a gente totalmente à vontade."',
    name: 'Ana Claudia Eidam',
    when: '4 meses atrás',
  },
  {
    text: '"Adoro a loja sou cliente há muitos anos! As peças são lindas e duram muito... além do atendimento das meninas que é excelente. Super indico 🙏🏼"',
    name: 'Casa Molinari',
    when: '4 meses atrás',
  },
  {
    text: '"Sou cliente a 8 anos, e não troco por outra, lingerie de alta qualidade, até parece que tem vida vitalícia, kkk pq nunca acaba. Super recomendo a loja e atendimento, são ótimos."',
    name: 'Erika Cristina Queiroz',
    when: '4 meses atrás',
  },
];

export default function Depoimentos() {
  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block">
            <span className="text-[#E24244] font-semibold text-sm tracking-wider uppercase">Depoimentos</span>
            <div className="h-1 w-16 bg-[#E24244] mt-2 mx-auto"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#212423] mt-6 mb-6 leading-tight">
            O Que Nossas Clientes<span className="block text-[#E24244]">Dizem Sobre Nós</span>
          </h2>
          <p className="text-[#212423]/70 text-lg leading-relaxed">
            A confiança e satisfação de nossas clientes são o que nos motiva todos os dias.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {depoimentos.map((d) => (
            <div key={d.name} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#E24244]/20 relative group">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#E24244]/10 group-hover:bg-[#E24244] flex items-center justify-center transition-all duration-500">
                <Quote className="lucide lucide-quote w-6 h-6 text-[#E24244] group-hover:text-white transition-colors duration-500" />
              </div>
              <div className="flex gap-1 mb-4 mt-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="lucide lucide-star w-5 h-5 fill-[#E24244] text-[#E24244]" />
                ))}
              </div>
              <p className="text-[#212423]/80 leading-relaxed mb-6 italic">{d.text}</p>
              <div className="pt-6 border-t border-gray-100">
                <p className="font-semibold text-[#212423]">{d.name}</p>
                <p className="text-sm text-[#212423]/60 mt-1">{d.when}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16 animate-fade-in">
          <img src={STARS_IMG} alt="Avaliação 5 Estrelas no Google - Sensuallizy" className="w-full max-w-4xl h-auto" />
        </div>
      </div>
    </section>
  );
}
