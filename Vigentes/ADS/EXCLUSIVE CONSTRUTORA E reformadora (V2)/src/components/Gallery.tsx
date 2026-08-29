import React, { useEffect, useRef, useState } from 'react';
import { Camera } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://storage.lucasmendes.dev/site-sp/exclusive-construtora/escritorio.png',
    title: 'Nosso Escritório',
    category: 'Estrutura',
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/exclusive-construtora/escritorio-de-outro-angulo.png',
    title: 'Escritório - Vista Lateral',
    category: 'Estrutura',
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/exclusive-construtora/maquina-em-uma-das-obras-da-construtora.png',
    title: 'Equipamentos em Obra',
    category: 'Obras',
  },
  {
    url: 'https://storage.lucasmendes.dev/site-sp/exclusive-construtora/na-porta-de-uma-obra-dois-carros-com-logomarca-da-empresa.png',
    title: 'Nossa Frota',
    category: 'Estrutura',
  },
  {
    url: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Construção Residencial',
    category: 'Obras',
  },
  {
    url: 'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Estrutura em Concreto',
    category: 'Obras',
  },
  {
    url: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Projeto Arquitetônico',
    category: 'Projetos',
  },
  {
    url: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Casa Moderna',
    category: 'Obras',
  },
  {
    url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Acabamento Premium',
    category: 'Acabamento',
  },
];

export const Gallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-[#f0f0f0] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-3 md:mb-4">
            <div className="flex items-center gap-2 bg-[#07dde5]/10 px-4 py-2 rounded-full border border-[#07dde5]/30">
              <Camera className="text-[#07dde5]" size={20} />
              <span className="text-[#07dde5] font-bold text-xs md:text-sm tracking-wider uppercase">Nossa Galeria</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#050a1e] mb-3 md:mb-4">
            Conheça Nossos Projetos
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Veja de perto nossa estrutura, equipamentos e alguns dos projetos que realizamos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050a1e]/90 via-[#050a1e]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="inline-block px-3 py-1 bg-[#07dde5] rounded-full mb-2">
                    <span className="text-[#050a1e] font-bold text-xs">{image.category}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg md:text-xl">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-[#050a1e] to-[#0a154b] p-6 md:p-8 rounded-2xl shadow-2xl inline-block">
            <p className="text-white text-base md:text-lg mb-4 leading-relaxed">
              Quer ver seu projeto se tornar realidade?
            </p>
            <button
              onClick={() => {
                window.open('https://wa.me/5562993531722?text=Olá,%20vim%20pela%20galeria%20do%20site%20e%20gostaria%20de%20um%20orçamento.', '_blank');
              }}
              className="bg-[#07dde5] text-[#050a1e] px-8 py-3 rounded-lg font-bold hover:bg-white transition-all duration-300 transform hover:scale-105"
            >
              Solicite um Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
