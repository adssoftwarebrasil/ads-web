import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { INSTAGRAM_URL, LOGO_URL } from '../constants';

const MENU: { label: string; target: string }[] = [
  { label: 'Início', target: 'inicio' },
  { label: 'Sobre', target: 'sobre' },
  { label: 'Serviços', target: 'servicos' },
  { label: 'Vantagens', target: 'vantagens' },
  { label: 'Depoimentos', target: 'depoimentos' },
  { label: 'Contato', target: 'contato' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-6" style={{ backgroundColor: 'rgb(3, 40, 110)' }}>
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={LOGO_URL} alt="JD Baterias" className="h-12 mb-4" />
            <p className="text-white opacity-80 mb-4 leading-relaxed">
              Especializados em baterias automotivas com compromisso total com qualidade e satisfação.
            </p>
            <p className="text-white opacity-60 text-sm">CNPJ: 60.821.882/0001-88</p>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Menu</h3>
            <nav className="flex flex-col gap-3">
              {MENU.map((item) => (
                <button
                  key={item.target}
                  onClick={() => scrollTo(item.target)}
                  className="text-white opacity-80 hover:opacity-100 transition-all duration-300 text-left"
                  style={{ color: 'white' }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-white opacity-80 flex-shrink-0 mt-1" />
                <span className="text-white opacity-80">(84) 99928-5519</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-white opacity-80 flex-shrink-0 mt-1" />
                <span className="text-white opacity-80">jdbaterias@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-white opacity-80 flex-shrink-0 mt-1" />
                <span className="text-white opacity-80">Avenida Coronel Estevam, 3613, Nossa Senhora de Nazaré, Natal - RN</span>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <Instagram size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t text-center" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <p className="text-white opacity-60 text-sm">© 2025 JD Baterias - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
