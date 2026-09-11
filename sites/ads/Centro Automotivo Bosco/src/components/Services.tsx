import { Droplet, Zap, Wind, Disc, Cable, Cog, type LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Service {
  title: string;
  text: string;
  image: string;
  alt: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    title: 'Troca de Óleo',
    text: 'Troca completa de óleo com filtros originais. Manutenção preventiva essencial para a vida útil do motor.',
    image:
      'https://storage.lucasmendes.dev/site-sp/centro automotivo bosco/atualizadas/troca-de-oleo.webp',
    alt: 'Troca de Óleo',
    icon: Droplet,
  },
  {
    title: 'Injeção Eletrônica',
    text: 'Diagnóstico computadorizado e reparo completo do sistema de injeção eletrônica com equipamentos modernos.',
    image:
      'https://storage.lucasmendes.dev/site-sp/centro%20automotivo%20bosco%2Fimg%2Fscanner-automotivo-carro.webp',
    alt: 'Injeção Eletrônica',
    icon: Zap,
  },
  {
    title: 'Ar Condicionado',
    text: 'Manutenção, recarga e reparo de sistemas de climatização automotiva com gases certificados.',
    image:
      'https://storage.lucasmendes.dev/site-sp/centro automotivo bosco/atualizadas/ar-condicionado.webp',
    alt: 'Ar Condicionado',
    icon: Wind,
  },
  {
    title: 'Sistema de Freios',
    text: 'Revisão completa, troca de pastilhas, discos e fluidos. Sua segurança é nossa prioridade.',
    image:
      'https://storage.lucasmendes.dev/site-sp/centro%20automotivo%20bosco%2Fatualizadas%2Fsistema-de-freios.webp',
    alt: 'Sistema de Freios',
    icon: Disc,
  },
  {
    title: 'Sistema Elétrico',
    text: 'Diagnóstico e reparo de sistemas elétricos, bateria, alternador e instalações elétricas.',
    image:
      'https://storage.lucasmendes.dev/site-sp/centro automotivo bosco/atualizadas/revisao-completa.webp',
    alt: 'Sistema Elétrico',
    icon: Cable,
  },
  {
    title: 'Retífica de Motor',
    text: 'Serviço especializado de retífica e recuperação de motores com garantia e qualidade.',
    image:
      'https://storage.lucasmendes.dev/site-sp/centro%20automotivo%20bosco%2Fatualizadas%2Fretifica-de-motor.webp',
    alt: 'Retífica de Motor',
    icon: Cog,
  },
];

function Services() {
  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-[rgb(204,53,49)]/10 text-[rgb(204,53,49)] px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(10,33,75)] mb-6">
            Soluções Completas para seu Veículo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços automotivos com qualidade garantida, equipamentos
            modernos e profissionais experientes para cuidar do seu veículo.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(10,33,75)] to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="w-12 h-12 bg-[rgb(204,53,49)] rounded-lg flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[rgb(10,33,75)] mb-3 group-hover:text-[rgb(204,53,49)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.text}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[rgb(204,53,49)] font-semibold hover:text-[rgb(184,43,39)] transition-colors group"
                  >
                    <span>Solicitar Orçamento</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 bg-[rgb(10,33,75)] rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Não encontrou o serviço que precisa?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco! Oferecemos diversos outros serviços de mecânica geral e estamos
            prontos para atender suas necessidades.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(204,53,49)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(184,43,39)] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Fale com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
