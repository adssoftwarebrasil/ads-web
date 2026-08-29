import { Quote, Star } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Testimonial {
  text: string;
  name: string;
  initial: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"O atendimento do Atacadão das Baterias foi excepcional. Encontrei a bateria ideal para meu carro e ainda ganhei um ótimo preço!"',
    name: 'João Silva',
    initial: 'J',
  },
  {
    text: '"Sempre que preciso de uma bateria, vou ao Atacadão. A equipe é muito atenciosa e sempre me ajuda com a melhor escolha."',
    name: 'Maria Oliveira',
    initial: 'M',
  },
  {
    text: '"Com certeza é a melhor loja de baterias de Ribeirão Preto! Sou cliente há anos e nunca tive problemas."',
    name: 'Carlos Santos',
    initial: 'C',
  },
  {
    text: '"Adorei a experiência de compra! Recomendo a todos que precisam de baterias de qualidade."',
    name: 'Ana Souza',
    initial: 'A',
  },
  {
    text: '"Pessoal super atencioso e preço justo. Estão de parabéns pelo atendimento, principalmente o Técnico Sr. Carlos, que explica tudo certinho!"',
    name: 'Daniel Constantino',
    initial: 'D',
  },
  {
    text: '"Nota 10.. agilidade na chegada e na troca... muito bom!!! Super educados e prestativos. Recomendo!"',
    name: 'Elis Brasil',
    initial: 'E',
  },
  {
    text: '"Excelente atendimento, preço justo, entrega e montagem rápida. Super recomendo!"',
    name: 'Viviane Zanon',
    initial: 'V',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(251,35,51)] font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. Veja o que eles têm a dizer sobre
            nós.
          </p>
          <div className="w-24 h-1 bg-[rgb(251,35,51)] mx-auto rounded-full mt-6"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className={`bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative flex flex-col justify-between
                ${index === 6 ? 'md:col-span-2 md:mx-auto md:w-[calc(50%-1rem)] lg:col-span-1 lg:col-start-2 lg:w-full lg:mx-0' : ''}`}
            >
              <div>
                <div className="absolute top-4 right-4 text-[rgb(251,35,51)] opacity-20">
                  <Quote size={48} className="lucide lucide-quote " />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="lucide lucide-star fill-[rgb(251,35,51)] text-[rgb(251,35,51)]"
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">{t.text}</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200 mt-auto">
                <div className="w-12 h-12 bg-gradient-to-br from-[rgb(41,97,169)] to-[rgb(31,77,149)] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">Cliente Verificado</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">Junte-se a centenas de clientes satisfeitos!</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[rgb(251,35,51)] text-white px-10 py-5 rounded-full hover:bg-[rgb(231,15,31)] transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Solicite Seu Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
