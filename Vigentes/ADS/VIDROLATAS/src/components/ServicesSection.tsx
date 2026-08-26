import { Car, Wrench, Shield, Package, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useWhatsAppModal, whatsappLink } from '../context/WhatsAppModalContext';

const services = [
  {
    icon: Car,
    title: 'Troca de Vidros Automotivos',
    description: 'Para-brisas dianteiro e traseiro, vidros de porta para veículos nacionais e importados com instalação profissional',
    image: 'https://storage.lucasmendes.dev/site-sp/vidrolatas%2Fcarro-branco-oficina-troca-de-vidro.webp',
    whatsappMessage: 'Olá! Gostaria de um orçamento para troca de vidros automotivos.',
  },
  {
    icon: Wrench,
    title: 'Reparo de Para-Brisas Trincados',
    description: 'Recuperação de trincas e lascas em para-brisas, evitando a necessidade de troca completa',
    image: 'https://storage.lucasmendes.dev/site-sp/vidrolatas%2Fhomem-troca-de-vidro.webp',
    whatsappMessage: 'Olá! Gostaria de um orçamento para reparo de para-brisas trincado.',
  },
  {
    icon: Shield,
    title: 'Aplicação de Insulfilm',
    description: 'Películas de proteção solar com diferentes níveis de transparência, conforto térmico e privacidade',
    image: 'https://storage.lucasmendes.dev/site-sp/vidrolatas%2Fcarro-cinza-garagem-troca-de-vidro.webp',
    whatsappMessage: 'Olá! Gostaria de um orçamento para aplicação de insulfilm.',
  },
  {
    icon: Package,
    title: 'Acessórios e Latarias',
    description: 'Retrovisores internos, acessórios automotivos e latarias em geral para seu veículo',
    image: 'https://storage.lucasmendes.dev/site-sp/vidrolatas%2Fvidros-automotivos-armazenados-%20loja%20.webp',
    whatsappMessage: 'Olá! Gostaria de um orçamento para acessórios automotivos.',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { openModal } = useWhatsAppModal();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const Icon = service.icon;

  return (
    <div
      ref={cardRef}
      className={`group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#012d78]/80 via-[#012d78]/20 to-transparent"></div>
        
        <div className="absolute top-4 right-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
          <Icon className="text-[#0298d2]" size={28} strokeWidth={2.5} />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-[#012d78] mb-3 group-hover:text-[#0298d2] transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed text-sm">
          {service.description}
        </p>

        <a
          href={whatsappLink(service.whatsappMessage)}
          onClick={(e) => {
            e.preventDefault();
            openModal(service.whatsappMessage);
          }}
          className="inline-flex items-center gap-2 text-[#0298d2] hover:text-[#012d78] font-semibold transition-all group/link"
        >
          Solicitar Orçamento
          <ArrowRight
            size={18}
            className="transition-transform group-hover/link:translate-x-2"
            strokeWidth={2.5}
          />
        </a>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#f8f9fa] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#0298d2]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#012d78]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div ref={sectionRef} className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-block mb-4">
            <span className="text-[#0298d2] font-semibold text-sm uppercase tracking-wider bg-[#0298d2]/10 px-4 py-2 rounded-full">
              O que fazemos
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#012d78] mb-4">
            Nossos Serviços Especializados
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções completas para todos os tipos de veículos com qualidade e garantia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Trust badges */}
        <div className={`mt-16 flex flex-wrap justify-center gap-8 md:gap-12 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#012d78] mb-1">33+</div>
            <div className="text-sm text-gray-600">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#012d78] mb-1">100%</div>
            <div className="text-sm text-gray-600">Vidros Certificados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#012d78] mb-1">1000+</div>
            <div className="text-sm text-gray-600">Veículos Atendidos</div>
          </div>
        </div>
      </div>
    </section>
  );
}