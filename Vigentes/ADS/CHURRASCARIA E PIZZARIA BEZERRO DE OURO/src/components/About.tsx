import { Award, Users, Home, Star } from 'lucide-react';

const features = [
  { Icon: Award, name: 'award', text: 'Pioneira no rodízio de churrasco no MS' },
  {
    Icon: Users,
    name: 'users',
    text: 'Buffet exclusivo com opções frescas e diversificadas',
  },
  {
    Icon: Home,
    name: 'home',
    text: 'Ambiente único que combina rusticidade e conforto',
  },
  { Icon: Star, name: 'star', text: 'Excelência reconhecida por nossos clientes' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 opacity-100 translate-y-0">
          <div className="order-2 lg:order-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/CHURRASCARIA%20E%20PIZZARIA%20BEZERRO%20DE%20OURO%2Fimg%2FQuem%20somos.jpg"
              alt="Churrascaria Bezerro de Ouro"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block bg-[rgb(180,137,27)] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              27 anos de tradição
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(31,29,30)] mb-6">
              Churrascaria Bezerro de Ouro
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
              <p>
                Fundada em 1996, a Churrascaria Bezerro de Ouro é referência em
                qualidade e tradição em Campo Grande/MS. Foi a primeira
                churrascaria a implementar o sistema de rodízio no estado de Mato
                Grosso do Sul, marcando sua história como pioneira no segmento.
              </p>
              <p>
                Nossa missão é oferecer o melhor churrasco, aliado a um
                atendimento impecável e um ambiente aconchegante e rústico, que
                remete à tranquilidade do campo.
              </p>
              <p>
                Com uma estrutura completamente amadeirada, proporcionamos uma
                experiência única que combina sabor, conforto e tradição. Nosso
                rodízio inclui uma seleção de carnes premium, um buffet exclusivo
                com mais de 20 variedades de saladas e pratos quentes servidos
                diretamente à mesa.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((f) => (
                <div key={f.name} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[rgb(180,137,27)] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <f.Icon
                      width={20}
                      height={20}
                      className={`lucide lucide-${f.name} text-[rgb(180,137,27)]`}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
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
      </div>
    </section>
  );
}
