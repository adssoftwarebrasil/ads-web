import { ClipboardCheck, Shield, Timer } from 'lucide-react';

interface Feature {
  icon: typeof ClipboardCheck;
  title: string;
}

const features: Feature[] = [
  { icon: ClipboardCheck, title: 'Rigoroso Controle de Qualidade' },
  { icon: Shield, title: 'Garantia em Todos os Produtos' },
  { icon: Timer, title: 'Pontualidade na Entrega' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 px-5 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="transition-all duration-1000 opacity-100 translate-x-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/Marco%20Placas%2Fimg%2Fsobre-nos.jpg"
              alt="Marco Placas - Sobre Nós"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
          <div className="transition-all duration-1000 delay-300 opacity-100 translate-x-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(3,0,0)] mb-6">
              Marco Placas: Tradição e Inovação desde 1920
            </h2>
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Com raízes que remontam a 1920, quando José Jacinto fundou a primeira indústria de
                placas em Minas Gerais, a Marco Placas carrega mais de 100 anos de tradição
                familiar. Há 41 anos no mercado sob nossa gestão, continuamos provando que
                modernização e qualidade caminham juntas.
              </p>
              <p>
                Nossa missão é clara: atender cada cliente de forma personalizada, superando
                expectativas em cada projeto de sinalização visual. Seja para grandes corporações,
                órgãos públicos ou profissionais liberais, entregamos excelência com a pontualidade
                que só décadas de experiência podem garantir.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="text-center p-6 bg-[rgb(240,240,240)] rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <Icon
                      className="lucide w-12 h-12 mx-auto mb-3 text-[rgb(167,28,31)]"
                      width={24}
                      height={24}
                    />
                    <h3 className="font-semibold text-[rgb(3,0,0)] mb-2">{feature.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
