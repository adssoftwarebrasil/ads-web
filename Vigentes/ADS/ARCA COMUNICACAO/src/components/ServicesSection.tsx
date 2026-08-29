import { Building2, Lightbulb, MapPin, Signpost, Truck, Tag } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: 'Fachadas Modernas e Impactantes',
      description: 'ACM, Aço e materiais premium',
      image: 'https://storage.lucasmendes.dev/site-sp/arca%20comunicacao%2Fgaleria%2Ffachada-loja-luminosa.webp'
    },
    {
      icon: Lightbulb,
      title: 'Letreiros Luminosos',
      description: 'LED, Neon, Backlight',
      image: 'https://storage.lucasmendes.dev/site-sp/arca%20comunicacao%2Fgaleria%2Fluminosa-placa-hamburguer.webp'
    },
    {
      icon: MapPin,
      title: 'Totens Estratégicos e Personalizados',
      description: 'Design exclusivo e funcional',
      image: 'https://storage.lucasmendes.dev/site-sp/arca%20comunicacao%2Fgaleria%2Ftotem-vermelho-loja.webp'
    },
    {
      icon: Signpost,
      title: 'Sinalização',
      description: 'Orientação clara e design sofisticado',
      image: 'https://storage.lucasmendes.dev/site-sp/arca%20comunicacao%2Fgaleria%2Fplaca-azul-madeira.webp'
    },
    {
      icon: Truck,
      title: 'Personalização Profissional de Frotas',
      description: 'Sua marca em movimento',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=arca%20comunicacao%2Falteracoes%2Fnovas-logos%2FWhatsApp%20Image%202026-03-31%20at%2010.31.51.jpeg&version_id=null'
    },
    {
      icon: Tag,
      title: 'Letreiros',
      description: 'Soluções únicas para necessidades específicas',
      image: 'https://storage.lucasmendes.dev/site-sp/arca%20comunicacao%2Fgaleria%2Ffachada-fe-milagres.webp'
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-[rgb(254,254,254)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(11,9,48)] mb-6">
            Ambientes que <span className="text-[rgb(255,204,44)]">falam,</span><br />
            antes da primeira palavra
          </h2>
          <p className="text-lg sm:text-xl text-[rgb(30,30,30)] max-w-3xl mx-auto">
            Soluções completas para a sua marca
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href="http://wa.me/553491008921"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(11,9,48)] via-[rgb(11,9,48)]/60 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-start mb-3">
                  <div className="p-3 bg-[rgb(255,204,44)] rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-[rgb(11,9,48)]" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[rgb(254,254,254)] mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[rgb(212,212,212)] text-sm">
                  {service.description}
                </p>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-[rgb(255,204,44)] text-[rgb(11,9,48)] px-4 py-2 rounded-full text-sm font-bold shadow-md">
                  Ver mais
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-[rgb(30,30,30)] mb-6">
            Cada projeto é único e desenvolvido sob medida para as necessidades do seu negócio
          </p>
        </div>
      </div>
    </section>
  );
}