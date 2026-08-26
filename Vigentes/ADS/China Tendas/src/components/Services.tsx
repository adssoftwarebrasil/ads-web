interface Service {
  image: string;
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/chinatendas%2FSERVIC%CC%A7OS%2FLOCAC%CC%A7A%CC%83O%20DE%20TENDAS%2FWhatsApp%20Image%202025-11-06%20at%2010.53.12%20%281%29.jpeg',
    title: 'Locação de Tendas',
    desc: 'Aluguel de tendas para eventos, festas e ocasiões especiais. Entrega e montagem incluídas.',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/chinatendas%2FSERVIC%CC%A7OS%2FMONTAGEM%20DE%20TENTA%2FWhatsApp%20Image%202025-11-06%20at%2010.53.33.jpeg',
    title: 'Montagem de Tendas',
    desc: 'Equipe especializada para montagem profissional e segura das suas tendas.',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/chinatendas%2FSERVIC%CC%A7OS%2FTROCA%20DE%20LONA%20DE%20TENDA%20PIRAMIDAL%2FWhatsApp%20Image%202025-11-06%20at%2010.53.59%20%281%29.jpeg',
    title: 'Troca de Lona - Tenda Piramidal',
    desc: 'Renovação de lonas com materiais de alta qualidade e durabilidade.',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/chinatendas%2FSERVIC%CC%A7OS%2FTROCA%20DE%20LONA%20DE%20TENDA%20SANFONADA%2FWhatsApp%20Image%202025-11-06%20at%2010.53.48.jpeg',
    title: 'Troca de Lona - Tenda Sanfonada',
    desc: 'Manutenção completa para suas tendas sanfonadas. Agilidade e qualidade.',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/chinatendas%2FSERVIC%CC%A7OS%2FREFORMA%20EM%20GERAL%20EM%20TENDAS%2FWhatsApp%20Image%202025-11-06%20at%2010.57.38.jpeg',
    title: 'Reforma em Geral em Tendas',
    desc: 'Reformas completas e reparos estruturais. Sua tenda como nova novamente.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-black mb-3">Nossos Serviços</h2>
          <div className="w-16 h-1 bg-[rgb(211,14,9)] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-black mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
                <button className="bg-[rgb(211,14,9)] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[rgb(180,12,7)] transition-all w-full text-sm">
                  FAÇA SEU ORÇAMENTO
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
