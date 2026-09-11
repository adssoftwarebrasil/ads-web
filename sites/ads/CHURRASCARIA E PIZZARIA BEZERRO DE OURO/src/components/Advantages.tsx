import { Utensils, Users } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const advantages = [
  {
    Icon: Utensils,
    name: 'utensils',
    title: 'Variedade Inigualável',
    description: 'Mais de 20 tipos de saladas, carnes e acompanhamentos',
  },
  {
    Icon: Users,
    name: 'users',
    title: 'Ambiente Familiar',
    description: 'Perfeito para encontros com amigos e família',
  },
];

export default function Advantages() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="vantagens" className="py-20 lg:py-28 bg-[rgb(31,29,30)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/CHURRASCARIA%20E%20PIZZARIA%20BEZERRO%20DE%20OURO%2Fimg%2FVantagens.jpg"
              alt="Vantagens Bezerro de Ouro"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Vantagens de Escolher Bezerro de Ouro
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Descubra por que somos a melhor escolha para sua refeição
            </p>
            <div className="space-y-6 mb-8">
              {advantages.map((adv) => (
                <div
                  key={adv.title}
                  className="flex items-start space-x-4 bg-[rgb(41,39,40)] p-6 rounded-xl hover:bg-[rgb(51,49,50)] transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-[rgb(180,137,27)] bg-opacity-20 rounded-lg flex items-center justify-center">
                    <adv.Icon
                      width={28}
                      height={28}
                      className={`lucide lucide-${adv.name} text-[rgb(180,137,27)]`}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {adv.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/556733265463?text=Olá! Gostaria de conhecer o menu."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(180,137,27)] text-white px-8 py-4 rounded-lg text-base font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Conheça Nosso Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
