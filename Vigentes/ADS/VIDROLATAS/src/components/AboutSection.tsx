import { Building2, Users, Award } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useWhatsAppModal, whatsappLink } from '../context/WhatsAppModalContext';

const aboutMessage = 'Olá! Gostaria de conhecer a loja da Vidrolatas.';

export default function AboutSection() {
  const { openModal } = useWhatsAppModal();
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
    <section id="sobre" ref={sectionRef} className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#012d78] mb-6">
              Empresa Familiar com História
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                A <strong className="text-[#012d78]">Vidrolatas Para-brisas e Acessórios</strong> foi inaugurada em abril de 1992. Após superar desafios como o incêndio de 2009 e a reestruturação societária em 2017, continuamos firmes em nosso propósito de oferecer os melhores serviços automotivos.
              </p>

              <p className="text-lg">
                Sob a gestão de <strong>Vilmar de Barcelos</strong>, com o apoio de seu filho <strong>Gustavo Silveira</strong> no comercial e sua nora <strong>Cecília Santiago</strong> no administrativo, mantemos a tradição de atendimento familiar com expertise profissional.
              </p>

              <p className="text-lg">
                Somos especializados em vidros para veículos nacionais e importados, oferecendo também reparo de trincas, insulfilm e instalação de acessórios.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0298d2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-[#0298d2]" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#012d78]">33+</p>
                  <p className="text-sm text-gray-600">Anos de Mercado</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0298d2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="text-[#0298d2]" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#012d78]">1000+</p>
                  <p className="text-sm text-gray-600">Clientes Atendidos</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0298d2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="text-[#0298d2]" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#012d78]">100%</p>
                  <p className="text-sm text-gray-600">Familiar</p>
                </div>
              </div>
            </div>

            <a
              href={whatsappLink(aboutMessage)}
              onClick={(e) => {
                e.preventDefault();
                openModal(aboutMessage);
              }}
              className="inline-block mt-8 bg-[#0298d2] text-white px-8 py-4 rounded-lg hover:bg-[#66c2e8] transition-all duration-300 hover:scale-105 font-semibold"
            >
              Conheça nossa loja
            </a>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/vidrolatas%2Floja-automotiva-fachada-rua.webp"
                alt="Fachada da Vidrolatas"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#012d78]/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
