import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';

interface Servico {
  title: string;
  description: string;
  image: string;
}

const servicos: Servico[] = [
  {
    title: 'Baterias para Linha Leve',
    description: 'Ideal para carros de passeio, utilizando alta tecnologia.',
    image:
      'https://storage.lucasmendes.dev/site-sp/Center%20Baterias%2Fprodutos%2Fbateria-linha-leve02.png',
  },
  {
    title: 'Baterias para Linha Pesada',
    description: 'Para caminhões e veículos comerciais, alta durabilidade.',
    image:
      'https://storage.lucasmendes.dev/site-sp/Center%20Baterias%2Fprodutos%2Fbateria-linha-pesada.png',
  },
  {
    title: 'Baterias para Nobreaks',
    description: 'Proteja seus equipamentos com nossas baterias.',
    image:
      'https://storage.lucasmendes.dev/site-sp/Center%20Baterias%2Fprodutos%2Fbaterias-para-nobreak.png',
  },
  {
    title: 'Venda para Placas Solares',
    description: 'Oferecemos baterias para sistemas de energia solar.',
    image:
      'https://storage.lucasmendes.dev/site-sp/Center%20Baterias%2Fprodutos%2Fbateria-placa-solar01.png',
  },
  {
    title: 'Assistência e Socorro Elétrico',
    description: 'Atendimento para emergências elétricas.',
    image:
      'https://storage.lucasmendes.dev/site-sp/Center%20Baterias%2Fimg%2FAssist%C3%AAncia%20e%20Socorro%20El%C3%A9trico.webp',
  },
  {
    title: 'Instalação de Baterias',
    description: 'Instalação rápida e segura feita por nosso time treinado.',
    image:
      'https://storage.lucasmendes.dev/site-sp/Center%20Baterias%2Fprodutos%2Finstala%C3%A7%C3%A3o-de-bateria.png',
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="bg-[#F5F5F5] py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 fade-in">
            Nossos Serviços
          </h2>
          <p className="text-lg md:text-xl text-[#666] max-w-2xl mx-auto fade-in">
            Conheça nossos serviços especializados em baterias
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico) => (
            <div
              key={servico.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 overflow-hidden fade-in flex flex-col h-full"
            >
              <img
                src={servico.image}
                alt={servico.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-semibold text-secondary mb-3">
                  {servico.title}
                </h3>
                <p className="text-base text-[#666] leading-relaxed mb-5">
                  {servico.description}
                </p>
                <button
                  onClick={() =>
                    openWhatsApp(
                      `Olá, gostaria de saber mais sobre: ${servico.title}`
                    )
                  }
                  className="w-full mt-auto flex items-center justify-center gap-2 bg-[rgb(250,204,21)] text-black py-3 rounded-lg font-bold hover:brightness-105 hover:shadow-md transition-all duration-300"
                >
                  <MessageCircle className="lucide lucide-message-circle w-5 h-5" />
                  Fale Conosco
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
