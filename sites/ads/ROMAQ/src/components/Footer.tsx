import { MapPin, Phone, Instagram, Clock } from 'lucide-react';

const quickLinks: { label: string; id: string }[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

const servicesList: string[] = [
  'Locação de Empilhadeiras',
  'Venda de Empilhadeiras',
  'Peças Originais',
  'Pneus Industriais',
  'Manutenção',
  'Transpaletes',
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[rgb(66,66,66)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/romaq%2Fimg%2FRomaqui%20Logo%20-%20fundo%20escuro.webp"
              alt="Romaq Empilhadeiras"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 leading-relaxed">
              Soluções completas em locação e venda de empilhadeiras, peças, pneus e paleteiras.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[rgb(240,186,25)] mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-[rgb(240,186,25)] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[rgb(240,186,25)] mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              {servicesList.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[rgb(240,186,25)] mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin
                  className="lucide lucide-map-pin text-[rgb(240,186,25)] flex-shrink-0 mt-1"
                  width={18}
                  height={18}
                />
                <span className="text-gray-300 text-sm">
                  Av. João Leão, 6531<br />Uberlândia - MG
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="lucide lucide-phone text-[rgb(240,186,25)] flex-shrink-0"
                  width={18}
                  height={18}
                />
                <a
                  href="tel:+553432321300"
                  className="text-gray-300 hover:text-[rgb(240,186,25)] transition-colors text-sm"
                >
                  (34) 3232-1300
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram
                  className="lucide lucide-instagram text-[rgb(240,186,25)] flex-shrink-0"
                  width={18}
                  height={18}
                />
                <a
                  href="https://www.instagram.com/romaqempilhadeiras/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[rgb(240,186,25)] transition-colors text-sm"
                >
                  @romaqempilhadeiras
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  className="lucide lucide-clock text-[rgb(240,186,25)] flex-shrink-0 mt-1"
                  width={18}
                  height={18}
                />
                <span className="text-gray-300 text-sm">
                  Seg - Sex<br />08:00 - 18:00h
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2026 Romaq Empilhadeiras. Todos os direitos reservados.</p>
          <p className="text-gray-500 text-xs mt-2">Uberlândia - MG | Atendimento em raio de 600km</p>
        </div>
      </div>
    </footer>
  );
}
