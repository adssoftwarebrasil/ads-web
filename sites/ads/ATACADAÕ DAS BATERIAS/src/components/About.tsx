import { CheckCircle2 } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const features = [
  'Mais de 40 anos de experiência no mercado',
  'Equipe altamente capacitada e treinada',
  'Atendimento personalizado e humanizado',
  'Produtos de qualidade garantida',
  'Assistência técnica especializada',
  'Soluções para todos os tipos de veículos',
];

const IMG_01 =
  'https://storage.lucasmendes.dev/site-sp/atacadao%20das%20baterias%2Fimg%2Fquem-somos-01.webp';
const IMG_02 =
  'https://storage.lucasmendes.dev/site-sp/atacadao%20das%20baterias%2Fimg%2Fquem-somos-02.webp';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(251,35,51)] font-semibold text-sm uppercase tracking-wider">
            Quem Somos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Atacadão das Baterias
          </h2>
          <div className="w-24 h-1 bg-[rgb(251,35,51)] mx-auto rounded-full"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Com mais de <span className="font-bold text-[rgb(41,97,169)]">40 anos de experiência</span>,
              o Atacadão das Baterias se destaca no mercado automotivo de Ribeirão Preto pela qualidade
              de seus produtos e pela excelência no atendimento.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Trabalhamos com <span className="font-bold text-[rgb(41,97,169)]">todos os tipos de baterias</span>,
              oferecendo soluções que atendem desde automóveis até veículos pesados. Nossa equipe é
              altamente capacitada e está sempre pronta para oferecer a melhor assistência, garantindo a
              satisfação de nossos clientes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Aqui, a <span className="font-bold text-[rgb(41,97,169)]">confiança e a segurança</span> na
              hora da compra são prioridades. Conte com atendimento 24 horas, garantia em todos os produtos
              e entrega rápida na região de Ribeirão Preto.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="lucide lucide-check-circle2 text-[rgb(251,35,51)] flex-shrink-0 mt-1"
                  />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[rgb(251,35,51)] text-white px-8 py-4 rounded-full hover:bg-[rgb(231,15,31)] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 mt-6"
            >
              Conheça Nossos Produtos
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src={IMG_01}
                  alt="Atacadão das Baterias - Qualidade"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src={IMG_02}
                  alt="Atacadão das Baterias - Experiência"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
