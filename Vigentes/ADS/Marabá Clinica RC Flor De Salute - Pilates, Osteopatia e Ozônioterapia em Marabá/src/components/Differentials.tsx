import { useEffect, useRef, useState } from 'react';
import { MapPin, Car, Accessibility, Users, Home } from 'lucide-react';

const Differentials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const differentials = [
    {
      icon: MapPin,
      title: 'Localização Privilegiada',
      description:
        'Fácil acesso na Av. Manaus, 413 - Bairro Belo Horizonte, Marabá-PA',
    },
    {
      icon: Car,
      title: 'Estacionamento Exclusivo',
      description:
        'Amplo estacionamento privativo para total comodidade dos nossos clientes',
    },
    {
      icon: Accessibility,
      title: 'Acessibilidade Total',
      description:
        'Todos os ambientes preparados para receber pessoas com mobilidade reduzida',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description:
        'Profissionais altamente qualificados e dedicados ao seu bem-estar',
    },
    {
      icon: Home,
      title: 'Ambiente Acolhedor',
      description:
        'Espaço interno arejado, aconchegante e preparado para sua melhor experiência',
    },
  ];

  return (
    <section
      id="diferenciais"
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-[#F5EEEB] to-white overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-15 w-full">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`text-[28px] md:text-[40px] font-bold text-[#78645C] mb-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Por Que Escolher a RC Flor De Salute?
          </h2>
          <div
            className={`w-[60px] h-[3px] bg-gradient-to-r from-[#FFB5B8] to-flor-green mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          ></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full mb-12 md:mb-16">
          {/* Coluna esquerda - Lista de diferenciais */}
          <div className="space-y-6">
            {differentials.map((item, index) => (
              <div
                key={index}
                className={`flex gap-4 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-[56px] h-[56px] rounded-full flex items-center justify-center shadow-md bg-gradient-to-br from-flor-green to-[#4a6b5e]">
                  <item.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-[#78645C] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#78645C]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Coluna direita - Imagem principal */}
          <div
            className={`transition-all duration-700 delay-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/flordesalute%2Fbebe-exame-medico.webp"
                  alt="Tratamento de osteopatia infantil"
                  className="w-full h-[450px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#78645C]/20 to-transparent" />
              </div>

              
            </div>
          </div>
        </div>

        {/* Grid de imagens adicionais */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-700 delay-900 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Imagem 1 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white">
            <img
              src="https://storage.lucasmendes.dev/site-sp/flordesalute%2Fagulhas-acupuntura-pescoco.webp"
              alt="Acupuntura no pescoço"
              className="w-full h-[200px] object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#78645C]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-sm font-semibold">Acupuntura</span>
            </div>
          </div>

          {/* Imagem 2 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white">
            
            <img
              src="https://storage.lucasmendes.dev/site-sp/flordesalute%2Fagulhamento-seco-panturrilha.webp"
              alt="Agulhamento seco"
              className="w-full h-[200px] object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#78645C]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-sm font-semibold">Agulhamento Seco</span>
            </div>
          </div>

          {/* Imagem 3 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white">
            <img
              src="https://storage.lucasmendes.dev/site-sp/flordesalute%2Ffisioterapia-infantil-crianca.webp"
              alt="Fisioterapia infantil"
              className="w-full h-[200px] object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#78645C]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-sm font-semibold">Fisioterapia Infantil</span>
            </div>
          </div>

          {/* Imagem 4 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white">
            <img
              src="https://storage.lucasmendes.dev/site-sp/flordesalute%2Fbebe-consulta-medica.webp"
              alt="Consulta pediátrica"
              className="w-full h-[200px] object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#78645C]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-sm font-semibold">Atendimento Infantil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;