import { Quote, Star } from 'lucide-react';
import { WHATSAPP_URL } from '../utils';

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Excelente serviço de retífica! Meu caminhão estava com problemas sérios no motor e a equipe da Anhanguera resolveu tudo com muita competência. Recomendo!"',
    name: 'Carlos Eduardo Silva',
    role: 'Proprietário de Caminhão',
  },
  {
    text: '"Atendimento impecável e preço justo. A retífica do motor do meu carro ficou perfeita, e o prazo de entrega foi cumprido rigorosamente. Parabéns pelo profissionalismo!"',
    name: 'Marcos Antonio Ferreira',
    role: 'Motorista Autônomo',
  },
  {
    text: '"Já confio na Anhanguera há anos. Eles cuidam de toda a frota da minha empresa e nunca tive problemas. Qualidade e garantia que realmente funcionam!"',
    name: 'Roberto Alves Santos',
    role: 'Empresário do Transporte',
  },
  {
    text: '"Precisava fazer a retífica do motor do meu carro e encontrei a Anhanguera. Fiquei impressionado com a atenção aos detalhes e o cuidado com meu veículo. Serviço de primeira!"',
    name: 'João Pedro Oliveira',
    role: 'Proprietário de Veículo',
  },
  {
    text: '"Como mecânico, sempre indico a Anhanguera para meus clientes que precisam de retífica. A qualidade técnica deles é inquestionável e o atendimento é diferenciado."',
    name: 'Anderson Costa Lima',
    role: 'Mecânico Autônomo',
  },
  {
    text: '"Trabalho com transporte pesado e confio totalmente no trabalho da Anhanguera. Eles entendem das necessidades de quem trabalha na estrada e não pode perder tempo."',
    name: 'Fernando Henrique Souza',
    role: 'Proprietário de Frota',
  },
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O Que Nossos <span className="text-[rgb(167,20,42)]">Clientes Dizem</span>
          </h2>
          <div className="w-24 h-1 bg-[rgb(167,20,42)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nosso maior reconhecimento. Veja o que eles falam
            sobre a experiência com a Anhanguera Retífica de Motores.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative border-2 border-transparent hover:border-[rgb(167,20,42)]"
            >
              <Quote
                width={48}
                height={48}
                className="absolute top-6 right-6 text-[rgb(167,20,42)] opacity-20"
              />
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    width={20}
                    height={20}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">{t.text}</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Faça Parte dos Nossos Clientes Satisfeitos
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Entre em contato agora mesmo e descubra por que somos referência em retífica de
              motores em Goiânia. Sua satisfação é nossa prioridade!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[rgb(167,20,42)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(147,15,37)] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
              >
                Solicitar Orçamento Grátis
              </a>
              <a
                href="tel:+556235584336"
                className="flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold border-2 border-gray-200 w-full sm:w-auto"
              >
                Ligar (62) 3558-4336
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
