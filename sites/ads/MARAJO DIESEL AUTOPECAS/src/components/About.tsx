import { MessageCircle } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/5">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <div className="absolute top-0 left-0 w-[75%] h-[70%] rounded-lg overflow-hidden shadow-xl z-10">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/marajodi%2Fimg2%2Fquem-somos-1.png"
                  alt="Marajó Diesel - Imagem 1"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute top-[15%] right-0 w-[55%] h-[45%] rounded-lg overflow-hidden shadow-xl z-20 border-4 border-white">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/marajodi%2Fimg2%2Fquem-somos-2.png"
                  alt="Marajó Diesel - Imagem 2"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 left-[20%] w-[65%] h-[45%] rounded-lg overflow-hidden shadow-xl z-30 border-4 border-white">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/marajodi%2Fimg2%2Fquem-somos-3.png"
                  alt="Marajó Diesel - Imagem 3"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[rgb(255,116,16)] rounded-full -z-10 opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[rgb(1,51,153)] rounded-full -z-10 opacity-20"></div>
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(1,51,153)] mb-4">
              Quem Somos
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
              Marajó Diesel
            </h3>
            <div className="space-y-4 text-[rgb(84,84,84)] leading-relaxed">
              <p>
                A Marajó Diesel é uma empresa especializada em autopeças para
                caminhões e ônibus, atuando há mais de 10 anos no mercado de
                Palmas-TO e região.
              </p>
              <p>
                Nossa missão é fornecer peças de alta qualidade com atendimento
                diferenciado, garantindo a satisfação total de nossos clientes e a
                durabilidade dos veículos que mantêm o Brasil em movimento.
              </p>
              <p>
                Trabalhamos com os melhores fornecedores do mercado, oferecendo um
                catálogo completo de produtos para manutenção e reparo de veículos
                pesados.
              </p>
              <p>
                Nossa equipe especializada está sempre pronta para ajudar você a
                encontrar exatamente o que precisa, com agilidade e
                profissionalismo.
              </p>
            </div>
            <button
              onClick={() => scrollToSection('contato')}
              className="mt-8 inline-flex items-center gap-2 bg-[rgb(255,116,16)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[rgb(230,100,10)] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={24} />
              Entre em Contato via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
