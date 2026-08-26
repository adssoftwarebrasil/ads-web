import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=pet-raposo%2Floogo-pet-raposo.png&version_id=null';

const quickLinks: { label: string; id: string }[] = [
  { label: 'Início', id: 'hero' },
  { label: 'Serviços', id: 'services' },
  { label: 'Sobre', id: 'history' },
  { label: 'Contato', id: 'contact' },
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={LOGO} alt="Pet Raposo Logo" className="h-16 w-auto mb-4" />
            <p className="text-gray-400 leading-relaxed">
              Cuidando do seu pet com amor e dedicação desde 2016
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[rgb(253,118,22)]">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[rgb(253,118,22)] transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[rgb(253,118,22)]">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[rgb(253,118,22)]" />
                <a
                  href="https://wa.me/5591985220505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[rgb(253,118,22)] transition-colors duration-300"
                >
                  (91) 98522-0505
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[rgb(253,118,22)]" />
                <a
                  href="mailto:loja1@petraposo-castanhal.com"
                  className="text-gray-400 hover:text-[rgb(253,118,22)] transition-colors duration-300"
                >
                  loja1@petraposo-castanhal.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={20} className="text-[rgb(253,118,22)]" />
                <a
                  href="https://instagram.com/petraposocastanhal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[rgb(253,118,22)] transition-colors duration-300"
                >
                  @petraposocastanhal
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Facebook size={20} className="text-[rgb(253,118,22)]" />
                <a
                  href="https://www.facebook.com/p/Pet-Raposo-Castanhal-100092298881475/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[rgb(253,118,22)] transition-colors duration-300"
                >
                  Pet Raposo Castanhal
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 Pet Raposo Castanhal. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
