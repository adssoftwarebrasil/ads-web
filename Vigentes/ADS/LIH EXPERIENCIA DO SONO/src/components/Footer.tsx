import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const products = [
    'Acessórios de Hotel',
    'Cabeceiras Artesanais',
    'Travesseiros Tratados',
    'Poltronas de Descanso',
    'Enxovais de Luxo',
    'Camas Personalizadas'
  ];

  const contactDetails = [
    {
      icon: Phone,
      text: '(62) 98136-9983',
      href: 'tel:+5562981369983'
    },
    {
      icon: Mail,
      text: 'lih.durmabem@gmail.com',
      href: 'mailto:lih.durmabem@gmail.com'
    },
    {
      icon: MapPin,
      text: 'Rua 90 N° 352, Setor Sul, Goiânia - GO',
      href: ''
    }
  ];

  return (
    <footer className="bg-gray-900 pt-16 pb-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/logomarcaSemOfundoComAsCoresAzuleCinzaRecomendadoFundoBranco.png"
              alt="LIH Experiência do Sono"
              className="h-12 mb-4 bg-white rounded px-2 py-1"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              LIH HOPP COLCHÕES LTDA
              <br />
              Experiência do Sono de Luxo
            </p>
            <p className="text-gray-500 text-xs">
              CNPJ: 06.374.234/0001-85
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Produtos</h3>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('produtos')}
                    className="text-gray-400 hover:text-primary text-sm transition-colors duration-300"
                  >
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;
                const content = (
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">{detail.text}</span>
                  </div>
                );

                return detail.href ? (
                  <li key={index}>
                    <a href={detail.href} className="hover:text-primary transition-colors duration-300">
                      {content}
                    </a>
                  </li>
                ) : (
                  <li key={index}>{content}</li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Siga-nos</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.instagram.com/lih_experienciadosono"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Acompanhe nossas novidades e dicas para um sono perfeito
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>© 2026 LIH HOPP COLCHÕES LTDA. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
