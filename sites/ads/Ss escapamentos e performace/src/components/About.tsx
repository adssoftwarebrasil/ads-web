import { Shield, Award, Users } from 'lucide-react';

const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5575999369036';

const features = [
  {
    Icon: Shield,
    title: 'Confiabilidade e Segurança',
    text: 'Realizamos serviços com honestidade e transparência.',
  },
  {
    Icon: Award,
    title: 'Materiais de Qualidade',
    text: 'Utilizamos apenas os melhores materiais disponíveis.',
  },
  {
    Icon: Users,
    title: 'Atendimento Personalizado',
    text: 'Cada cliente é único e merece um serviço sob medida.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quem <span className="text-[rgb(254,0,0)]">Somos</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Na <strong>SS Escapamentos e Performance</strong>, nosso comprometimento vai além do
              simples conserto ou troca de peças. Atuamos com dedicação, honestidade e transparência,
              para que você saia satisfeito e seguro.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Utilizamos materiais da mais alta qualidade e oferecemos garantia em nossos serviços,
              sempre em busca das melhores soluções para cada tipo de veículo.
            </p>
            <div className="space-y-4">
              {features.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="bg-[rgb(254,0,0)] p-3 rounded-lg">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-[rgb(254,0,0)] hover:bg-[rgb(172,1,2)] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Fale Conosco
            </a>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/ssescapamentoeperformance%2FQuem%20somos.jpg"
              alt="Quem Somos - SS Escapamentos"
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
