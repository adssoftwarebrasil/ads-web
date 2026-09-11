import { Car, ArrowLeftRight, FileText, Calendar, Accessibility, Truck, ShieldCheck, Headset } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string;
  badge?: string;
  isHighlight?: boolean;
}

const ServiceCard = ({ icon, title, description, image, badge, isHighlight }: ServiceCardProps) => {
  return (
    <div
      className={`bg-white border-2 border-blue-very-light rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-primary transition-all group ${
        isHighlight ? 'lg:col-span-2 border-accent' : ''
      }`}
    >
      {badge && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-accent-vibrant to-accent text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
          {badge}
        </div>
      )}

      <div className={`${isHighlight ? 'lg:flex' : ''}`}>
        <div className={`bg-blue-off-white p-8 flex items-center justify-center ${isHighlight ? 'lg:w-2/5' : ''}`}>
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-contain group-hover:scale-105 transition-transform"
            />
          ) : (
            <div className="text-primary">{icon}</div>
          )}
        </div>

        <div className={`p-7 ${isHighlight ? 'lg:w-3/5' : ''}`}>
          <h3 className={`font-bold text-secondary mb-3 ${isHighlight ? 'text-2xl' : 'text-xl'}`}>
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-5">
            {description}
          </p>
          <a
            href="https://wa.me/556699854973"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border-2 border-[#25D366] text-[#25D366] py-3 px-6 rounded-lg font-semibold hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center gap-2 group-hover:scale-105"
          >
            WhatsApp
          </a>
          {isHighlight && (
            <button className="w-full mt-3 bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-light transition-colors">
              Saiba Mais
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Car size={64} />,
      title: 'Primeiro Emplacamento',
      description: 'Facilidade e rapidez no emplacamento de veículos novos',
      image: 'https://storage.lucasmendes.dev/site-sp/despachante%20transitar%2Fimgi_3_01-GP-1-qrxuhofrwbls43pr76c02bpo8ioezkiczo2a0c6am8.png',

    },
    {
      icon: <ArrowLeftRight size={64} />,
      title: 'Transferência de Propriedade',
      description: 'Realize a transferência de seu veículo de forma segura e sem complicações',
      image: 'https://storage.lucasmendes.dev/site-sp/despachante%20transitar%2Fimgi_6_02-GP-1.png',

    },
    {
      icon: <FileText size={64} />,
      title: 'Segunda Via CRV',
      description: 'Obtenha a segunda via do CRV de forma ágil e descomplicada',
      image: 'https://storage.lucasmendes.dev/site-sp/despachante%20transitar%2Fimgi_7_03-GP-1-qrxuhvyhezw2ozetz9l0m9tczlncp5c7opa5ujv58g.png'
    },
    {
      icon: <Calendar size={64} />,
      title: 'Licenciamento Anual',
      description: 'Garanta o licenciamento anual do seu veículo com total tranquilidade',
      image: 'https://storage.lucasmendes.dev/site-sp/despachante%20transitar%2Fimgi_9_04-GP-1-qrxuhv0n85usddg74r6e1s1we7rzhg8hckmod9wjeo.png',

    },
    {
      icon: <Accessibility size={80} />,
      title: 'Isenção de IPVA para PCD',
      description: 'Auxiliamos no processo de isenção de IPVA para pessoas com deficiência. Nossa equipe especializada cuida de toda a documentação e acompanha o processo do início ao fim.',
      image: 'https://storage.lucasmendes.dev/site-sp/despachante%20transitar%2Fimgi_11_05-GP-1-qrxuhpdm35n2fpoe1oqmmth4twjs79m3bsprhm4wg0.png',

      isHighlight: true
    },
    {
      icon: <Truck size={64} />,
      title: 'Cadastro ANTT',
      description: 'Realize o cadastro ANTT com a segurança de uma consultoria especializada',
      image: 'https://storage.lucasmendes.dev/site-sp/despachante%20transitar%2Fimgi_13_06-GP-1-qrxuhs74nnqxejkal7yicarim25vucxac6o7xg0pxc.png',
    },
    {
      icon: <ShieldCheck size={64} />,
      title: 'Licenças AET',
      description: 'Obtenha a Licença AET necessária para transporte de cargas especiais',
      image: 'https://storage.lucasmendes.dev/site-sp/despachante%20transitar%2Fimgi_15_07-GP-1-qrxuht4yuhs7q5ixfqd4wsiz7g192210obbpepzbr4.png',
    }
  ];

  return (
    <section id="servicos" className="bg-white py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Nossos Serviços
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-secondary mb-4">
            Serviços de Documentação Veicular
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Facilite sua Vida no Trânsito – Oferecemos uma ampla gama de serviços para garantir que seu veículo esteja sempre em dia com a documentação necessária
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/556699959486"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl"
          >
            <Headset size={28} />
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
