import { Quote, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"O ACG Advogados me ajudou a conquistar minha promoção por merecimento que estava sendo negada há anos. A equipe foi extremamente profissional, sempre me mantendo informada sobre cada etapa do processo. Recomendo de olhos fechados!"',
    name: 'Maria Silva Santos',
    role: 'Servidora Pública Estadual',
  },
  {
    text: '"Precisava de assessoria tributária urgente para minha empresa. O escritório não só resolveu o problema como também implementou um planejamento tributário que reduziu significativamente nossos custos. Profissionalismo e competência definem o ACG."',
    name: 'João Carlos Pereira',
    role: 'Empresário',
  },
  {
    text: '"Estava com problemas na minha aposentadoria do INSS. A equipe do ACG foi muito atenciosa, explicou tudo de forma clara e conseguiu a revisão do meu benefício. Gratidão por todo o suporte e dedicação!"',
    name: 'Ana Paula Rodrigues',
    role: 'Aposentada',
  },
  {
    text: '"Como produtor rural, sempre tive dúvidas sobre questões ambientais e contratuais. O ACG me oferece consultoria preventiva que evita problemas futuros. É tranquilidade para focar no meu negócio."',
    name: 'Roberto Alves Costa',
    role: 'Produtor Rural',
  },
  {
    text: '"Excelente escritório! Me auxiliaram em uma questão trabalhista complexa com muita competência. Sempre disponíveis para tirar dúvidas e com um atendimento humanizado. Super recomendo!"',
    name: 'Carla Mendes Lima',
    role: 'Servidora Municipal',
  },
  {
    text: '"O ACG cuida de toda a parte jurídica da minha empresa. Desde contratos até questões trabalhistas, sempre com soluções rápidas e eficazes. É ter um departamento jurídico completo ao meu lado."',
    name: 'Fernando Souza Oliveira',
    role: 'Empresário',
  },
];

export default function Avaliacoes() {
  return (
    <section id="avaliacoes" className="py-24 bg-[rgb(16,17,12)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(175,145,93)] font-bold text-sm tracking-widest uppercase">Avaliações</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">O Que Nossos Clientes Dizem</h2>
          <p className="text-xl text-[rgb(199,195,192)] max-w-3xl mx-auto leading-relaxed">
            A confiança e satisfação dos nossos clientes são nosso maior reconhecimento
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[rgb(30,31,27)] border border-[rgb(175,145,93)]/20 rounded-xl p-8 hover:bg-[rgb(38,39,34)] hover:border-[rgb(175,145,93)]/40 transition-all duration-300"
            >
              <Quote size={40} className="text-[rgb(175,145,93)] mb-4" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-[rgb(175,145,93)] fill-[rgb(175,145,93)]" />
                ))}
              </div>
              <p className="text-[rgb(199,195,192)] mb-6 leading-relaxed italic">{t.text}</p>
              <div className="border-t border-[rgb(175,145,93)]/20 pt-4">
                <p className="text-white font-bold">{t.name}</p>
                <p className="text-[rgb(175,145,93)] text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <p className="text-[rgb(199,195,192)] text-lg mb-6">Quer ter a mesma experiência positiva?</p>
          <a
            href="http://wa.me/556399974853"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(175,145,93)] text-[rgb(16,17,12)] px-8 py-4 rounded-lg hover:bg-[rgb(199,195,192)] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Entre em Contato Agora
          </a>
        </div>
      </div>
    </section>
  );
}
