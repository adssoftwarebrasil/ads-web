import { Star } from 'lucide-react';

type Testimonial = {
  text: string;
  initials: string;
  name: string;
  location: string;
};

const testimonials: Testimonial[] = [
  {
    text: 'Contratei a Art & madeiras para fazer o deck da minha piscina e o resultado superou todas as expectativas. A equipe é extremamente profissional, respeitou todos os prazos e o acabamento ficou impecável. Recomendo de olhos fechados!',
    initials: 'MS',
    name: 'Mariana Silva',
    location: 'Deck em Aparecida de Goiânia',
  },
  {
    text: 'Precisava de um pergolado para a área de churrasqueira e a Art & madeiras entregou um trabalho excepcional. Além da qualidade da madeira, o design ficou perfeito com a arquitetura da casa. Muito satisfeito!',
    initials: 'RF',
    name: 'Roberto Fernandes',
    location: 'Pergolado em Goiânia',
  },
  {
    text: 'Fizeram o playground dos meus filhos e a dedicação foi incrível. Cuidaram de cada detalhe pensando na segurança das crianças. O resultado foi lindo e muito resistente. As crianças adoraram!',
    initials: 'JC',
    name: 'Juliana Costa',
    location: 'Playground em Senador Canedo',
  },
  {
    text: 'Trabalho sério e comprometido. Instalaram o piso de madeira no meu escritório e transformaram completamente o ambiente. A pontualidade e a limpeza durante a obra me impressionaram muito.',
    initials: 'CE',
    name: 'Carlos Eduardo',
    location: 'Piso em Aparecida de Goiânia',
  },
  {
    text: 'Contratei para fazer uma cerca e acabei fazendo também o deck. A honestidade e transparência em todo o processo me deram total confiança. O valor investido vale cada centavo pela qualidade entregue.',
    initials: 'PA',
    name: 'Patrícia Alves',
    location: 'Cerca e Deck em Goiânia',
  },
  {
    text: 'Já é o segundo projeto que faço com a Art & madeiras. Voltei porque sei que posso confiar. A experiência deles é notável em cada etapa, desde o planejamento até a execução. Empresa nota 10!',
    initials: 'FS',
    name: 'Fernando Santos',
    location: 'Forro em Aparecida de Goiânia',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-amber-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-amber-600 font-semibold text-sm md:text-base uppercase tracking-wider">
            DEPOIMENTOS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900">O Que Nossos Clientes Dizem</h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto">
            A satisfação de quem confia no nosso trabalho é o nosso maior reconhecimento.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 space-y-6 border border-stone-200 relative"
            >
              <div className="absolute top-6 left-6 text-amber-600/20 text-6xl font-serif leading-none">
                &ldquo;
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="lucide lucide-star text-amber-500 w-5 h-5 fill-current"
                  />
                ))}
              </div>
              <p className="text-stone-700 leading-relaxed text-base italic relative z-10">{t.text}</p>
              <div className="w-12 h-1 bg-amber-600 mt-6"></div>
              <div className="flex items-center gap-4 mt-6">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-600 font-bold text-lg">{t.initials}</span>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-stone-900 text-lg">{t.name}</div>
                  <div className="text-stone-500 text-sm">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
