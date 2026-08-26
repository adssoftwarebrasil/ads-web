import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5575999369036';

const menuItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Contato', id: 'contato' },
];

const servicesList = [
  'Manutenção Preventiva',
  'Serviços de Soldagem',
  'Inspeção Técnica',
  'Ajustes de Suspensão',
  'Troca de Peças',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/ssescapamentoeperformance%2Flogo.png"
              alt="SS Escapamentos"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed">
              Comprometimento, honestidade e transparência em cada serviço. Mais de 10 anos cuidando
              do seu veículo.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Menu</h3>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-gray-400 hover:text-[rgb(254,0,0)] transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3 text-gray-400">
              {servicesList.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[rgb(254,0,0)] mt-1 flex-shrink-0" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[rgb(254,0,0)] transition-colors duration-200"
                >
                  +55 75 99936-9036
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[rgb(254,0,0)] mt-1 flex-shrink-0" />
                <a
                  href="mailto:contato@ssescapamentoeperformance.com.br"
                  className="text-gray-400 hover:text-[rgb(254,0,0)] transition-colors duration-200 break-all"
                >
                  contato@ssescapamentoeperformance.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[rgb(254,0,0)] mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Av. Eduardo Fróes da Mota, 2359
                  <br />
                  Feira de Santana/BA
                </span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-lg hover:bg-[rgb(254,0,0)] transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-lg hover:bg-[rgb(254,0,0)] transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            Copyright © 2026 SS Escapamentos e Performance. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
