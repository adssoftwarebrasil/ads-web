import { Calendar, Instagram } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function OurKitchen() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const experiences = [
    {
      title: 'Buffet Contemporâneo',
      description: 'Pratos quentes e frios preparados diariamente com ingredientes frescos e técnicas sofisticadas',
      image: 'https://storage.lucasmendes.dev/site-sp/SENSE%20COZINHA%20CONTEMPORANEA%2Fimgi_14_582447306_18392999746121202_6625305172609683004_n_ultra.webp',
    },
    {
      title: 'Sucos Naturais',
      description: 'Frutas frescas da estação em combinações refrescantes e nutritivas',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=SENSE%20COZINHA%20CONTEMPORANEA%2Fimgi_42_502962096_24143367891913988_4361395987114428656_n.jpg&version_id=null',
    },
    {
      title: 'Drinks & Bebidas',
      description: 'Refrigerantes, águas aromatizadas e drinks especiais para acompanhar sua refeição',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=SENSE%20COZINHA%20CONTEMPORANEA%2Fimgi_35_561654524_18386811613121202_2349387330104992208_n.jpg&version_id=null',
    },
    {
      title: 'Sobremesas Artesanais',
      description: 'Doces preparados com carinho para finalizar sua experiência',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=SENSE%20COZINHA%20CONTEMPORANEA%2Fimgi_23_572138983_18390493672121202_4866777865641895090_n.jpg&version_id=null',
    },
  ];

  return (
    <section ref={sectionRef} id="cozinha" className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sage uppercase tracking-widest text-sm font-medium">
            Nossa Experiência
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-gray mt-2 mb-4 leading-tight">
            Nossa Cozinha
          </h2>
          <p className="text-warm-gray/70 text-lg max-w-3xl mx-auto">
            Todos os dias uma nova experiência gastronômica te espera
          </p>
        </div>

        <div className="mb-12 bg-gradient-to-r from-orange-primary to-orange-light rounded-2xl p-8 text-white text-center shadow-xl">
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Nosso buffet é renovado diariamente com pratos criativos e sazonais. A cada visita, você descobre novos sabores da culinária contemporânea brasileira com influências mediterrâneas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {experiences.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-warm-gray mb-3">{item.title}</h3>
                <p className="text-warm-gray/70 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-sage/20 rounded-2xl p-8 border-2 border-sage/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center animate-pulse">
                <Calendar className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-warm-gray mb-1">Cardápio Renovado Diariamente</h3>
                <p className="text-warm-gray/70">Acompanhe nosso Instagram para ver os pratos do dia</p>
              </div>
            </div>
            <a
              href="https://instagram.com/sensecozinhacontemporanea"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-orange-primary text-white rounded-full hover:bg-orange-dark transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
            >
              <Instagram size={20} />
              Ver Instagram
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
