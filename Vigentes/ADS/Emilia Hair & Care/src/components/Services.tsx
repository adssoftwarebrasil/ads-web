import { Scissors, Sparkles, Wind, Droplets, Heart, Gem, type LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  desc: string;
  img: string;
  Icon: LucideIcon;
  iconName: string;
  badge?: string;
}

const services: Service[] = [
  {
    title: 'Corte Feminino & Masculino',
    desc: 'Cortes personalizados que realçam seus traços únicos. Nossa especialista avalia seu estilo de vida e formato facial para criar o corte perfeito para você.',
    img: 'https://storage.lucasmendes.dev/site-sp/emilia%20hair%20e%20care/galeria/cabeleireira-cortando-cabelo-com-tesoura-e-pente_1440x1920.webp',
    Icon: Scissors,
    iconName: 'scissors',
    badge: 'Mais Procurado',
  },
  {
    title: 'Mechas, Reflexos & Morena Iluminada',
    desc: 'Técnicas exclusivas de coloração que trazem luminosidade e dimensão aos fios, valorizando sua cor natural com resultados deslumbrantes.',
    img: 'https://storage.lucasmendes.dev/site-sp/emilia%20hair%20e%20care/galeria/cabelo-loiro-comprido-ondulado-cadeira-salao-beleza_1440x1920.webp',
    Icon: Sparkles,
    iconName: 'sparkles',
    badge: 'Destaque',
  },
  {
    title: 'Alisamento, Selagem & Botox Capilar',
    desc: 'Procedimentos que disciplinam, hidratam e rejuvenescem os fios, eliminando frizz e proporcionando cabelos lisos e saudáveis por mais tempo.',
    img: '/img/alisamento.webp',
    Icon: Wind,
    iconName: 'wind',
  },
  {
    title: 'Tratamento & Terapia Capilar',
    desc: 'Reconstrução profunda dos fios com produtos das melhores marcas: Wella, Schwarzkopf, Keune, Lança e MaisonVisage. Nutrição, hidratação e reconstrução.',
    img: 'https://storage.lucasmendes.dev/site-sp/emilia%20hair%20e%20care/galeria/mulher-lavando-cabelo-pia-branco-sal-o_2268x4032.webp',
    Icon: Droplets,
    iconName: 'droplets',
  },
  {
    title: 'Estética Facial & Corporal',
    desc: 'Tratamentos completos de autocuidado para face e corpo. Uma experiência de bem-estar que vai além da beleza, cuidando de você de dentro para fora.',
    img: 'https://storage.lucasmendes.dev/site-sp/emilia%20hair%20e%20care/galeria/mulher-recebendo-tratamento-facial-em-spa_2268x4032.webp',
    Icon: Heart,
    iconName: 'heart',
  },
  {
    title: 'Manicure & Pedicure',
    desc: 'Cuidado completo para suas mãos e pés com acabamento impecável. Unhas sempre bem cuidadas com técnica e atenção aos detalhes.',
    img: '/img/manicure.webp',
    Icon: Gem,
    iconName: 'gem',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold"></div>
            <span className="text-gold font-sans text-xs font-medium uppercase tracking-widest">O Que Fazemos</span>
            <div className="h-px w-10 bg-gold"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-stone font-light mb-4">
            Nossos <span className="italic text-gold">Serviços</span>
          </h2>
          <p className="font-sans text-stone-light text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Oferecemos uma experiência completa de beleza e bem-estar, com técnicas modernas e produtos das melhores
            marcas do mercado.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl overflow-hidden border border-cream hover:border-gold/40 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              <div className="h-72 overflow-hidden relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-stone/80 via-stone/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {service.badge && (
                <span className="absolute top-4 right-4 bg-gold text-white font-sans text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
                  {service.badge}
                </span>
              )}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cream rounded-full flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                    <service.Icon
                      className={`lucide lucide-${service.iconName} text-gold group-hover:text-white transition-colors duration-300`}
                      width={20}
                      height={20}
                    />
                  </div>
                  <h3 className="font-serif text-xl text-stone font-medium leading-tight">{service.title}</h3>
                </div>
                <p className="font-sans text-stone-light text-sm leading-relaxed mt-auto">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href="http://wa.me/556599811065"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-sans font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-sm uppercase tracking-wide"
          >
            Agendar um Serviço
          </a>
        </div>
      </div>
    </section>
  );
}
