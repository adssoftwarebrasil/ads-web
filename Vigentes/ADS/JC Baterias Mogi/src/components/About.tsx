import { Award, Check } from 'lucide-react';

const features = [
  'Mais de 13 anos de experiência',
  'Equipe técnica especializada',
  'Produtos de todas as marcas',
  'Atendimento profissional',
];

export default function About() {
  return (
    <section id="sobre" className="py-12 md:py-20 bg-light">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/JC%20BATERIAS%20MOGI%2Fimg%2Fvariedade-qualidade-nossos-produtos.webp"
              alt="Variedade de Baterias"
              className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <div className="inline-flex items-center gap-2 bg-primary-yellow/20 px-4 py-2 rounded-full">
              <Award size={20} className="lucide lucide-award text-primary-yellow" />
              <span className="text-primary-purple font-bold">Desde 2011</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-purple">
              Por que escolher a Baterias Mogi?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Com mais de uma década de experiência no mercado, a JC Baterias Mogi se destaca pela
              qualidade dos produtos e excelência no atendimento. Nossa equipe está em constante
              atualização para oferecer as melhores soluções em baterias automotivas e garantir a
              total satisfação dos nossos clientes.
            </p>
            <ul className="space-y-4">
              {features.map((feature, i) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-lg text-gray-700 animate-fadeInLeft"
                  style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-yellow rounded-full flex items-center justify-center">
                    <Check size={20} className="lucide lucide-check text-primary-purple" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-primary-purple rounded-xl">
                <div className="text-3xl md:text-4xl font-bold text-primary-yellow mb-1">13+</div>
                <div className="text-white text-sm md:text-base">Anos de Experiência</div>
              </div>
              <div className="text-center p-4 bg-primary-purple rounded-xl">
                <div className="text-3xl md:text-4xl font-bold text-primary-yellow mb-1">5000+</div>
                <div className="text-white text-sm md:text-base">Clientes Atendidos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
