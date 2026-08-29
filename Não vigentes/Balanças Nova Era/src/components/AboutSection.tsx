import { Award, CheckCircle, Shield, Clock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
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

  const badges = [
    { icon: Clock, text: 'Desde 1987' },
    { icon: CheckCircle, text: 'Revenda Autorizada' },
    { icon: Shield, text: 'Assistência Técnica Especializada' },
    { icon: Award, text: 'Certificado IPEM-PR' },
  ];

  const images = [
    'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxYRVuuj3u7eMTVCPQKrQ7Zkiu5UiIT5f8bM6EwTdjEhUijJa_5mhRLvgAYSP5D2CTNGY5ORsF1kbtTXi6N9EkQ4XSk1ShEuPsizYHBU48IEqNEoArs4y82HNIbwQr9Uc5KaWv6=s680-w680-h510-rw',
    'https://lh3.googleusercontent.com/p/AF1QipNXow4Josu0VeS4bLplXtPMRMrvDZS1Onv-a9R5=s680-w680-h510-rw',
    'https://lh3.googleusercontent.com/p/AF1QipOXd9_KAldxKvZqBPKhtfUUu8A7dcsbT6MERYol=s680-w680-h510-rw',
  ];

  return (
    <section ref={sectionRef} id="sobre" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <span className="text-[#EA1E26] font-bold text-sm uppercase tracking-wider mb-2 block">
              Quem Somos
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#000000] mb-6">
              Balanças Nova Era
            </h2>

            <p className="text-[#666666] text-lg leading-relaxed mb-6">
              A Balanças Nova Era foi criada para oferecer um atendimento diferenciado em soluções de pesagem. Com mais de 30 anos de experiência, atendemos estabelecimentos como mercados e padarias, unindo confiança e agilidade tanto na venda quanto na manutenção de balanças.
            </p>

            <p className="text-[#666666] text-lg leading-relaxed mb-8">
              Oferecemos desde balanças simples até os modelos mais modernos, sempre voltados para atender às reais necessidades do cliente.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className={`bg-[#F5F9FC] border border-[#CCE5F5] px-4 py-2 rounded-full flex items-center gap-2 transform transition-all hover:scale-105 hover:bg-[#E8F2F9] ${
                    isVisible ? 'animate-slide-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <badge.icon className="text-[#0162B1]" size={18} />
                  <span className="text-[#333333] font-semibold text-sm">{badge.text}</span>
                </div>
              ))}
            </div>

            <div
              className={`bg-[#E8F2F9] border-2 border-[#0162B1] rounded-xl p-6 mb-8 ${
                isVisible ? 'animate-pulse-subtle' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.6s' }}
            >
              <div className="flex items-start gap-4">
                <Award className="text-[#0162B1] flex-shrink-0" size={40} />
                <div>
                  <h3 className="text-[#0162B1] font-bold text-lg mb-2">
                    Certificação Oficial
                  </h3>
                  <p className="text-[#333333] font-semibold">
                    Autorizado pelo Instituto de Pesos e Medidas do Estado do Paraná
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contato"
              className="bg-[#EA1E26] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#B71820] transition-all transform hover:scale-105 inline-block"
            >
              Falar Conosco
            </a>
          </div>

          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="grid gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105">
                <img
                  src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=balan%C3%A7as%20nova%20era%2FWhatsApp%20Image%202025-11-17%20at%2015.53.46%20(1).jpeg&version_id=null"
                  alt="Balanças Nova Era"
                  className="w-full h-96 object-cover"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105 ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                  >
                    <img
                      src={image}
                      alt={`Balanças Nova Era ${index + 1}`}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
