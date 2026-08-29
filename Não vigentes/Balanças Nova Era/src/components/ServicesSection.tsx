import { Wrench, Truck, Monitor, MessageCircle, Package, UserCheck, Clipboard, Award, Settings } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Wrench,
      title: 'Manutenção e Calibragem em Geral',
      description: 'Calibração e montagem em usinas de Concreto certificado pelo IPEM, com pesos rastreáveis RBC',
      image: 'https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fimgi_15_cbeda8d0-4bc2-4ba0-916f-9501ccdb591c-768x1024.jpg',
      badge: 'Certificado',
    },
    {
      icon: Truck,
      title: 'Balança Rodoviária',
      description: 'Montagem e calibração de Balança Rodoviária',
      image: 'https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fimgi_16_1257866-750-39983889.webp',
      badge: 'Industrial',
    },
    {
      icon: Monitor,
      title: 'Balanças Eletrônicas',
      description: 'Venda das mais modernas balanças eletrônicas disponíveis',
      image: 'https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fimgi_17_image-137.png',
      badge: 'Moderno',
    },
    {
      icon: MessageCircle,
      title: 'Suporte via WhatsApp',
      description: 'Atendimento facilitado por meio do WhatsApp',
      badge: 'Rápido',
    },
    {
      icon: Package,
      title: 'Peças de Reposição',
      description: 'Fornecemos peças para manutenção de balanças',
      image: 'https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fimgi_62_balanca_de_bancada_toledo_prix_3_plus_1220_1_20180625095756.webp',
    },
    {
      icon: UserCheck,
      title: 'Atendimento Técnico',
      description: 'Visitas técnicas rápidas e eficientes em sua localização',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=balan%C3%A7as%20nova%20era%2Fsuporte-tecnico-768x512.jpg&version_id=null',
    },
    {
      icon: Clipboard,
      title: 'Consultoria Especializada',
      description: 'Ajudamos você a escolher a balança ideal para seu negócio',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=balan%C3%A7as%20nova%20era%2Fconsultoria-especi-1024x481-1-768x361.jpg&version_id=null'
    },
    {
      icon: Award,
      title: 'Calibração de Balanças',
      description: 'Aferição e calibração com selo do INMETRO',
      image: 'https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fimgi_66_assistencia-tecnica-balanca-eletronica-02-300x200.jpg',
      badge: 'INMETRO',
    },
    {
      icon: Settings,
      title: 'Conserto de Balanças',
      description: 'Manutenção e conserto de todos os modelos de balanças',
      image: 'https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fimgi_23_manutencao-balancas-eletronicas-03.jpg',
    },
  ];

  return (
    <section ref={sectionRef} id="servicos" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#EA1E26] font-bold text-sm uppercase tracking-wider mb-2 block">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#000000] mb-4">
            Conheça Nossos Serviços
          </h2>
          <p className="text-[#666666] text-lg max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços para garantir que suas balanças estejam sempre funcionando perfeitamente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white border-2 border-[#E8F2F9] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#0162B1] hover:shadow-2xl group ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 0.08}s`,
                boxShadow: '0 4px 20px rgba(1,98,177,0.08)',
              }}
            >
              {service.image ? (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0162B1]/0 group-hover:bg-[#0162B1]/15 transition-colors duration-300"></div>
                  {service.badge && (
                    <span className="absolute top-3 right-3 bg-[#EA1E26] text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse-subtle">
                      {service.badge}
                    </span>
                  )}
                </div>
              ) : (
                <div className="h-32 bg-gradient-to-br from-[#F5F9FC] to-[#E8F2F9] flex items-center justify-center">
                  <service.icon className="text-[#0162B1]" size={64} strokeWidth={1.5} />
                  {service.badge && (
                    <span className="absolute top-3 right-3 bg-[#EA1E26] text-white px-3 py-1 rounded-full text-xs font-bold">
                      {service.badge}
                    </span>
                  )}
                </div>
              )}

              <div className="p-7">
                {!service.image && (
                  <service.icon className="text-[#0162B1] mb-4" size={40} />
                )}
                <h3 className="text-[#000000] font-bold text-lg mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <a
                  href="#contato"
                  className="block w-full text-center border-2 border-[#0162B1] text-[#0162B1] px-4 py-3 rounded-lg font-semibold hover:bg-[#0162B1] hover:text-white transition-all"
                >
                  Fale Conosco
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5541972037264"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#EA1E26] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#B71820] transition-all transform hover:scale-105 shadow-xl"
          >
            <Clipboard size={24} />
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
