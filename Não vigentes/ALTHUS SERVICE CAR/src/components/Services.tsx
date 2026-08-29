import WhatsappIcon from './WhatsappIcon';

interface Service {
  title: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
}

const services: Service[] = [
  {
    title: 'Revisão Completa',
    description: 'Diagnóstico completo e revisão preventiva do seu veículo com tecnologia avançada.',
    image: 'https://storage.lucasmendes.dev/site-sp/althus%20service%20car/img/revisao.webp',
    alt: 'Revisão Completa',
    badge: '',
  },
  {
    title: 'Motor',
    description: 'Reparo e manutenção de motores a gasolina, flex e diesel com peças de qualidade.',
    image: 'https://storage.lucasmendes.dev/site-sp/althus%20service%20car/img/motor-reparo.webp',
    alt: 'Motor',
    badge: '',
  },
  {
    title: 'Troca de Óleo',
    description: 'Troca de óleo rápida e eficiente com os melhores lubrificantes do mercado.',
    image: 'https://storage.lucasmendes.dev/site-sp/althus%20service%20car/img/troca-de-oleo.webp',
    alt: 'Troca de Óleo',
    badge: '',
  },
  {
    title: 'Transmissão',
    description: 'Câmbio, correia dentada, diferencial e todos os componentes do sistema de transmissão.',
    image: 'https://storage.lucasmendes.dev/site-sp/althus%20service%20car/img/correia-dentada-reparo.webp',
    alt: 'Transmissão',
    badge: '',
  },
  {
    title: 'Injeção Eletrônica',
    description: 'Limpeza de bicos injetores, diagnóstico e ajuste do sistema de injeção e ignição.',
    image:
      'https://storage.lucasmendes.dev/site-sp/althus%20service%20car/img/mecanico-limpando-bicos-injetores-com-luvas-azuis_738x599.webp',
    alt: 'Injeção Eletrônica',
    badge: '',
  },
  {
    title: 'Arrefecimento',
    description: 'Manutenção do sistema de arrefecimento: radiador, termostato e fluidos.',
    image:
      'https://storage.lucasmendes.dev/site-sp/althus%20service%20car/img/adicao-liquido-arrefecimento.webp',
    alt: 'Arrefecimento',
    badge: '',
  },
  {
    title: 'Suspensão e Direção',
    description: 'Reparo completo de suspensão, direção hidráulica, amortecedores e alinhamento.',
    image:
      'https://storage.lucasmendes.dev/site-sp/althus%20service%20car/img/carro-preto-elevado-mecanica-capo-aberto_382x510.webp',
    alt: 'Suspensão e Direção',
    badge: 'Segurança',
  },
  {
    title: 'Freios e ABS',
    description: 'Manutenção completa do sistema de freios, pastilhas, discos e ABS.',
    image:
      'https://storage.lucasmendes.dev/site-sp/althus%20service%20car/img/oficina-carro-preto-elevador-vermelho-reparo_1600x1200.webp',
    alt: 'Freios e ABS',
    badge: 'Segurança Ativa',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 scrolled-hidden">
          <span className="text-[rgb(240,26,40)] text-sm font-bold uppercase tracking-widest mb-3 block">
            O Que Fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Serviços Completos para <span className="text-[rgb(240,26,40)]">Seu Veículo</span>
          </h2>
          <p className="text-white/55 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Da manutenção preventiva ao reparo especializado, cuidamos do seu carro com qualidade e
            transparência em cada etapa.
          </p>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-16 bg-[rgb(240,26,40)] rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-[rgb(240,26,40)]/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[rgb(240,26,40)]/10 scrolled-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/20 to-transparent"></div>
                <span className="absolute top-3 right-3 bg-[rgb(240,26,40)]/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                  {service.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[rgb(240,26,40)] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{service.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[rgb(240,26,40)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/551636240220?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Althus%20Service%20Car."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1fa854] text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-900/30 hover:-translate-y-0.5"
          >
            <WhatsappIcon size={20} />
            Solicitar Orçamento Agora
          </a>
        </div>
      </div>
    </section>
  );
}
