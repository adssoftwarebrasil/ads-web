import { ChefHat, Salad } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const reasons = [
  {
    Icon: ChefHat,
    name: 'chef-hat',
    title: 'Rodízio de Carnes',
    description: 'Mais de 20 variedades de cortes especiais',
  },
  {
    Icon: Salad,
    name: 'salad',
    title: 'Buffet com Variedades',
    description: 'Mais de 20 saladas frescas e temperos únicos',
  },
];

export default function WhyChoose() {
  const heading = useReveal<HTMLDivElement>();
  const cards = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-20 lg:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/CHURRASCARIA%20E%20PIZZARIA%20BEZERRO%20DE%20OURO%2Fimg%2FPor%20que%20contratar.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={heading.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            heading.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Por Que Escolher Nosso Rodízio?
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Descubra as razões pelas quais nosso rodízio se destaca entre os
            demais
          </p>
        </div>
        <div
          ref={cards.ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-300 ${
            cards.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-[rgb(31,29,30)] bg-opacity-90 p-8 rounded-2xl text-center hover:bg-opacity-100 transition-all duration-300 hover:scale-105"
            >
              <div className="w-20 h-20 bg-[rgb(180,137,27)] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <reason.Icon
                  width={40}
                  height={40}
                  className={`lucide lucide-${reason.name} text-[rgb(180,137,27)]`}
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="https://wa.me/556733265463"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgba(208,53,77,0.99)] text-white px-8 py-4 rounded-lg text-base font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
