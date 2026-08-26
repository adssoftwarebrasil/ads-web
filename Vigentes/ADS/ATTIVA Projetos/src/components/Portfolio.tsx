import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  delay: number;
}

const ProjectCard = ({ image, title, delay }: ProjectCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-700 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-blue-dark/90 via-primary-blue-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
            {title}
            <ExternalLink size={20} />
          </h3>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      image: 'https://storage.lucasmendes.dev/site-sp/attiva%2Fcasa-moderna-garagem-carros.webp',
      title: 'Residência Moderna',
      delay: 0,
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/attiva%2Fcasa-carros-jardim.webp',
      title: 'Casa com Jardim',
      delay: 100,
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/attiva%2Fcasa-moderna-arvores.webp',
      title: 'Integração com Natureza',
      delay: 200,
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/attiva%2Fcarro-branco-predio.webp',
      title: 'Edifício Residencial',
      delay: 300,
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/attiva%2Fcasa-moderna-geminada.webp',
      title: 'Casas Geminadas',
      delay: 400,
    },
    {
      image: 'https://storage.lucasmendes.dev/site-sp/attiva%2Ffachada-loja-jeans.webp',
      title: 'Projeto Comercial',
      delay: 500,
    },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Vim pelo site e gostaria de solicitar um orçamento para meu projeto.');
    window.open(`https://wa.me/5562992287419?text=${message}`, '_blank');
  };

  return (
    <section id="projetos" className="py-20 bg-gradient-to-b from-background-light to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary-orange font-semibold text-sm uppercase tracking-wide mb-4">
            NOSSO PORTFÓLIO
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-blue-dark mb-6">
            Projetos que Transformam Espaços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos desenvolvidos pela nossa equipe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleWhatsAppClick}
            className="bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-orange-light transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Quer um projeto assim? Fale conosco
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
