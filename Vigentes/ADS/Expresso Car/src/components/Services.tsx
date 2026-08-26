import { MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/site';

const services = [
  {
    title: 'Película de Proteção de Pintura',
    image:
      'https://storage.lucasmendes.dev/site-sp/expressocarse/Peli%CC%81cula%20de%20Protec%CC%A7a%CC%83o%20de%20Pintura.webp',
    description:
      'A PPF é uma tecnologia desenvolvida para proteger a lataria do veículo contra riscos, arranhões, impactos leves e agentes externos.',
  },
  {
    title: 'Polimento de Vidro Automotivo',
    image:
      'https://storage.lucasmendes.dev/site-sp/expressocarse/Polimento%20de%20Vidro%20Automotivo.webp',
    description:
      'Serviço técnico especializado que remove manchas, riscos leves, marcas de palheta e sinais de desgaste causados pelo tempo.',
  },
  {
    title: 'Reparo Rápido de Amassados',
    image:
      'https://storage.lucasmendes.dev/site-sp/expressocarse/Reparo%20Ra%CC%81pido%20de%20Amassados%20com%20Acabamento%20Impeca%CC%81vel.jpg',
    description:
      'Na Expresso Car, seu veículo volta ao estado original em poucas horas com acabamento impecável.',
  },
  {
    title: 'Polimento Técnico',
    image:
      'https://storage.lucasmendes.dev/site-sp/expressocarse/Polimento%20Te%CC%81cnico-%20Brilho%20e%20Protec%CC%A7a%CC%83o%20Que%20Impressionam.jpg',
    description:
      'Brilho e Proteção Que Impressionam. Remova riscos leves, recupere o brilho e proteja a pintura com polimento técnico profissional.',
  },
  {
    title: 'Vitrificação Expresso Car',
    image:
      'https://storage.lucasmendes.dev/site-sp/expressocarse/Servic%CC%A7os%20de%20Vitrificac%CC%A7a%CC%83o%20Expresso%20Car.webp',
    description:
      'Proteja seu carro com tecnologia de vitrificação cerâmica 9H – Nível 1 e Nível 2 para proteção máxima.',
  },
  {
    title: 'Lavagem Técnica Profissional',
    image:
      'https://storage.lucasmendes.dev/site-sp/expressocarse/Lavagem%20Te%CC%81cnica%20Profissional%20para%20Valorizar%20Seu%20Carro.jpg',
    description:
      'Mais do que limpeza, um cuidado de verdade com seu veículo. Escolha o tipo de lavagem ideal e surpreenda-se com o resultado.',
  },
  {
    title: 'Serviços Adicionais',
    image:
      'https://storage.lucasmendes.dev/site-sp/expressocarse/Servic%CC%A7os%20Adicionais.jpg',
    description:
      'Detalhes que fazem a diferença no seu veículo. Conheça nossa linha completa de serviços complementares.',
  },
  {
    title: 'Cuidados para Motos',
    image:
      'https://storage.lucasmendes.dev/site-sp/expressocarse/Cuide%20da%20Sua%20Moto%20com%20Quem%20Entende%20de%20Detalhes.jpg',
    description:
      'Do básico ao mais completo, temos o tratamento ideal para deixar sua moto com aparência de nova e protegida por muito mais tempo.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-red-600 text-sm font-bold tracking-widest uppercase mb-4">
            Nossos serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Descubra nossos serviços
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Oferecemos uma gama completa de serviços automotivos para cuidar do seu veículo da
            melhor forma.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-red-600 font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  Mais Detalhes
                  <ArrowRight className="lucide lucide-arrow-right" width={14} height={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-600/30 hover:scale-105"
          >
            <MessageCircle className="lucide lucide-message-circle" width={20} height={20} />
            Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
