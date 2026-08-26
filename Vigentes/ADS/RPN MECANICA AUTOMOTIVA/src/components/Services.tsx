import { useEffect, useRef } from 'react';
import { Settings, Zap, Thermometer, Gauge, Wrench, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'Suspensão',
    description: 'Diagnóstico e reparo completo do sistema de suspensão, garantindo estabilidade, conforto e segurança em todas as condições de estrada.',
    items: ['Amortecedores', 'Molas e buchas', 'Alinhamento e balanceamento', 'Pivôs e terminais'],
    image: 'https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/galeria/oficina-mecanica-carros-em-reparo_1280x960.webp',
  },
  {
    icon: Gauge,
    title: 'Motor',
    description: 'Revisão, manutenção preventiva e corretiva de motores a gasolina, álcool e flex. Restauramos a performance original do seu veículo.',
    items: ['Revisão completa', 'Troca de correia dentada', 'Retífica de motor', 'Diagnóstico eletrônico'],
    image: 'https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/galeria/garagem-carros-reparacao-capos-abertos_1280x960.webp',
  },
  {
    icon: Wrench,
    title: 'Câmbio',
    description: 'Serviços especializados em câmbio manual e automático, garantindo trocas suaves e durabilidade ao seu sistema de transmissão.',
    items: ['Câmbio manual', 'Câmbio automático', 'CVT', 'Caixa de transferência'],
    image: 'https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/galeria/oficina-mecanica-carros-aguardando-reparos_1280x960.webp',
  },
  {
    icon: Zap,
    title: 'Elétrica',
    description: 'Rastreamos e solucionamos falhas elétricas com equipamentos de diagnóstico de última geração, evitando retrabalhos.',
    items: ['Diagnóstico por scanner', 'Sistema de injeção', 'Central eletrônica', 'Alternador e motor de partida'],
    image: 'https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/galeria/oficina-carros-fila-reparando-ar-condicionado_1280x960.webp',
  },
  {
    icon: Thermometer,
    title: 'Refrigeração',
    description: 'Manutenção do sistema de arrefecimento e ar-condicionado para manter o motor na temperatura ideal em qualquer clima.',
    items: ['Radiador e mangueiras', 'Bomba d\'água', 'Ar-condicionado automotivo', 'Fluido de arrefecimento'],
    image: 'https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/galeria/oficina-mecanica-carros-reparando-ar-condicionado_1280x960.webp',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.classList.add('observe-animate');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  const Icon = service.icon;

  return (
    <div ref={cardRef} className="card-service group overflow-hidden flex flex-col">
      <div className="relative h-44 rounded-xl overflow-hidden mb-5 flex-shrink-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover gallery-img"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <div className="w-10 h-10 bg-rpn-red rounded-xl flex items-center justify-center shadow-lg">
            <Icon size={20} className="text-white" />
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-rpn-gray text-sm leading-relaxed mb-4 flex-grow">{service.description}</p>

      <ul className="space-y-1.5">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle size={14} className="text-rpn-red flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <a
        href="http://wa.me/559182696336"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center justify-center gap-2 bg-rpn-light text-gray-800 font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-rpn-red hover:text-white transition-all duration-300"
      >
        Solicitar Orçamento
      </a>
    </div>
  );
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    el.classList.add('observe-animate');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-tag">O que fazemos</span>
          <h2 className="section-title mb-4">
            Serviços Mecânicos<br />de Alto Padrão
          </h2>
          <p className="section-subtitle">
            Da suspensão ao ar-condicionado, cobrimos todos os sistemas do seu veículo com diagnóstico preciso e mão de obra especializada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-rpn-gray text-sm mb-4">Não encontrou o que precisa?</p>
          <a
            href="http://wa.me/559182696336?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20RPN%20Mecânica."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  );
}
