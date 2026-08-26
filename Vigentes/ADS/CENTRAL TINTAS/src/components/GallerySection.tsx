import { useEffect, useRef, useState } from 'react';
import { Eye, Instagram, MessageCircle, ArrowRight } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/central-tintas%2Fcaixas-pistolas-pintura.webp',
    title: 'Pistolas de Pintura',
    category: 'Ferramentas'
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/central-tintas%2Fferramentas-parede-oficina.webp',
    title: 'Ferramentas Profissionais',
    category: 'Organização'
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/central-tintas%2Floja-tintas-motos-de-entrega.webp',
    title: 'Entrega Rápida',
    category: 'Logística'
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/central-tintas%2Ftubos-selante-prateleira.webp',
    title: 'Produtos Diversos',
    category: 'Variedade'
  },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="galeria" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="text-[#ec3237] font-semibold text-sm uppercase tracking-wider mb-2 block">
            Tour Virtual
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#3f4196] mb-4">
            Conheça Nossa Estrutura
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Um ambiente organizado e preparado para oferecer o melhor atendimento e a maior variedade de produtos da região.
          </p>
        </div>

        {/* Grid de Imagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Imagem de Fundo */}
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay Escuro (Gradiente) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3f4196]/90 via-[#3f4196]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Ícone Central (Aparece no Hover) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full text-white">
                  <Eye size={32} />
                </div>
              </div>

              {/* Conteúdo de Texto (Desliza de baixo para cima) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#fef011] text-xs font-bold uppercase tracking-wider mb-1 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {image.category}
                </span>
                <h3 className="text-white font-bold text-xl leading-tight">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="animate-on-scroll opacity-0 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center relative overflow-hidden">
          {/* Elemento decorativo de fundo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3f4196]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <h3 className="text-2xl font-bold text-[#3f4196] mb-3 relative z-10">
            Quer ver mais novidades?
          </h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto relative z-10">
            Acompanhe nosso dia a dia no Instagram ou fale agora com um vendedor para verificar a disponibilidade de produtos.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <a
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#3f4196] text-[#3f4196] font-bold hover:bg-[#3f4196] hover:text-white transition-all duration-300 w-full sm:w-auto justify-center group"
            >
              <Instagram size={20} />
              Siga no Instagram
            </a>
            
            <a
              href="https://wa.me/5577999571092?text=Olá! Gostaria de saber mais sobre os produtos da loja."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ec3237] text-white font-bold hover:bg-[#d02025] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}