import { Phone, Mail, MapPin, MessageCircle, Instagram } from 'lucide-react';

const menuItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const services = [
  'Material de Alta Qualidade',
  'Produção sob Medida',
  'Modelos Diversos',
  'Design Exclusivo',
  'Capachos Personalizados',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgb(15,15,13)] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/pjtapete%2Flogo.png"
              alt="PJ Tapetes"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white text-opacity-70 text-sm leading-relaxed">
              Mais de 20 anos transformando ambientes com tapetes personalizados
              de alta qualidade. Excelência em cada detalhe.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-white text-opacity-70 hover:text-[rgb(183,40,26)] transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="text-white text-opacity-70 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+556230951429"
                  className="flex items-center space-x-2 text-white text-opacity-70 hover:text-[rgb(183,40,26)] transition-colors text-sm"
                >
                  <Phone className="lucide lucide-phone" width={16} height={16} />
                  <span>(62) 3095-1429</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@pjtapetes.com.br"
                  className="flex items-center space-x-2 text-white text-opacity-70 hover:text-[rgb(183,40,26)] transition-colors text-sm"
                >
                  <Mail className="lucide lucide-mail" width={16} height={16} />
                  <span>contato@pjtapetes.com.br</span>
                </a>
              </li>
              <li className="flex items-start space-x-2 text-white text-opacity-70 text-sm">
                <MapPin
                  className="lucide lucide-map-pin flex-shrink-0 mt-1"
                  width={16}
                  height={16}
                />
                <span>
                  R. Castro Alves, Quadra 1, Lote 37 - Parque Anhanguera,
                  <br />
                  Goiânia - GO, 74335-050
                </span>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5562930951429"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white text-opacity-70 hover:text-[rgb(183,40,26)] transition-colors text-sm"
                >
                  <MessageCircle
                    className="lucide lucide-message-circle"
                    width={16}
                    height={16}
                  />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[rgb(89,16,21)] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white text-opacity-90">
            <p>Copyright © 2025 PJ Tapetes Personalizados</p>
            <a
              href="https://instagram.com/pjtapetes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-[rgb(183,40,26)] transition-colors mt-2 md:mt-0"
            >
              <Instagram
                className="lucide lucide-instagram"
                width={18}
                height={18}
              />
              <span>@pjtapetes</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
