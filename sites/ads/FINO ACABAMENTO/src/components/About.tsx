import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Qualidade garantida',
  'Marcas líderes no Brasil',
  'Soluções completas para obras e reformas',
  '13 anos de experiência no mercado',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              Sobre a Fino Acabamento
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Há <strong>13 anos</strong> somos referência em pisos e revestimentos, com uma trajetória sólida como loja exclusiva do Grupo Elizabeth.
            </p>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Com a integração ao Grupo Mohawk, ampliamos nosso portfólio e hoje oferecemos as principais marcas do mercado: <strong>Eliane, Elizabeth e Decortiles</strong>, com as melhores opções em porcelanatos e cerâmicas de alto padrão.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Expandimos para uma linha completa de pisos vinílicos, texturas, metais e cubas para cozinha, eletros e complementos em revestimentos decorativos cimentícios, unindo design, durabilidade e inovação para transformar qualquer ambiente.
            </p>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-black flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/FINOACABAMENTO%2Fquemsomos.jpeg"
                alt="Fino Acabamento - Nossa Loja"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
