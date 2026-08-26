import { Check, MessageCircle } from 'lucide-react';

const HIGHLIGHTS = [
  'Promoções Especiais',
  'Feedback do Cliente',
  'Conexão com Nossos Clientes',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-[rgb(250,250,250)]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll relative">
            <img
              src="https://storage.lucasmendes.dev/site-sp/kissai%2FQuem%20somos.webp"
              alt="Quem Somos"
              className="rounded-3xl shadow-[0_10px_40px_rgba(150,1,0,0.2)] w-full"
            />
            <div className="absolute bottom-4 right-4 bg-[rgb(235,185,3)] text-[rgb(150,1,0)] w-28 h-28 rounded-full flex flex-col items-center justify-center font-bold animate-pulse">
              <span className="text-3xl">5+</span>
              <span className="text-sm">Anos</span>
            </div>
          </div>
          <div className="animate-on-scroll">
            <p className="text-[rgb(235,185,3)] text-lg font-semibold mb-2">
              Quem somos
            </p>
            <h2 className="text-[rgb(150,1,0)] text-4xl md:text-5xl font-bold mb-6">
              Kissai Pizza
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Fundada a partir do amor pela pizza e o desejo de oferecer
              qualidade, a Kissai Pizza tem se destacado nos últimos 5 anos no
              mercado. Oferecemos uma variedade de pizzas até encontrar a sua
              favorita, sempre buscando os melhores preços e ingredientes
              frescos. O compromisso com a satisfação do cliente nos torna uma
              referência em sabor e atendimento.
            </p>
            <div className="space-y-4 mb-8">
              {HIGHLIGHTS.map((text, i) => (
                <div
                  key={text}
                  className="flex items-center gap-3 animate-on-scroll"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="bg-[rgb(235,185,3)] rounded-full p-1">
                    <Check size={20} className="text-white" />
                  </div>
                  <span className="text-[rgb(150,1,0)] font-medium text-lg">
                    {text}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/5534996450016"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgb(235,185,3)] text-[rgb(150,1,0)] px-8 py-3 rounded-full font-semibold hover:brightness-90 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={20} />
              Enviar WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
