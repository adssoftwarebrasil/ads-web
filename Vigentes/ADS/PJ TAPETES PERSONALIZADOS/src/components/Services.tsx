import { MessageCircle } from 'lucide-react';

const services = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pjtapete%2FMaterial%20de%20Alta%20Qualidade.jpg',
    title: 'Material de Alta Qualidade',
    text: 'Trabalhamos apenas com os melhores materiais do mercado, garantindo durabilidade e sofisticação em cada peça.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pjtapete%2FProduc%CC%A7a%CC%83o%20sob%20Medida.jpg',
    title: 'Produção sob Medida',
    text: 'Cada tapete é produzido sob medida, adaptando-se perfeitamente às dimensões e necessidades do seu espaço.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pjtapete%2FModelos%20Diversos.webp',
    title: 'Modelos Diversos',
    text: 'Amplo catálogo com mais de 500 modelos diferentes para você escolher e personalizar conforme seu estilo.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pjtapete%2FDesign%20Exclusivo.jpg',
    title: 'Design Exclusivo',
    text: 'Criamos designs únicos e personalizados que transformam seu tapete em uma verdadeira obra de arte.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pjtapete%2FCapachos%20Personalizados.jpg',
    title: 'Capachos Personalizados',
    text: 'Capachos customizados que dão as boas-vindas com estilo e elegância na entrada da sua casa ou empresa.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[rgb(183,40,26)] mb-4">
            Nossos Serviços Personalizados
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Soluções completas e exclusivas em tapetes sob medida para
            transformar seu ambiente.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-t-4 border-[rgb(183,40,26)]">
                <div className="h-52 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed flex-grow">
                    {service.text}
                  </p>
                  <button className="flex items-center space-x-2 text-white bg-[rgb(183,40,26)] hover:bg-[rgb(150,30,20)] px-6 py-3 rounded-full transition-all duration-300 w-full justify-center font-semibold mt-4 shadow-lg">
                    <MessageCircle
                      className="lucide lucide-message-circle"
                      width={20}
                      height={20}
                    />
                    <span>Solicitar Via WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
