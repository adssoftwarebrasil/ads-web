import { Facebook, Instagram, Phone } from 'lucide-react';

const links = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgb(0,38,100)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div className="space-y-4">
            <img
              src="https://storage.lucasmendes.dev/site-sp/unicaexpressoficial%2Flogo-Photoroom%20(2).png"
              alt="Única Express Logo"
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-white/80 leading-relaxed">
              Soluções logísticas com excelência, conectando pessoas e empresas através de entregas rápidas e confiáveis em Goiânia e região metropolitana.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <nav className="space-y-3">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block text-white/80 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contatos</h3>
            <div className="space-y-3 text-white/80">
              <p>WhatsApp: (62) 99854-9294</p>
              <p>Fixo: (62) 3241-4042</p>
              <p>Goiânia, Goiás</p>
              <p>Região Metropolitana</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/unicalogisticagyn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.link/iu0ekd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/70">
          <p>Copyright © 2026</p>
        </div>
      </div>
    </footer>
  );
}
