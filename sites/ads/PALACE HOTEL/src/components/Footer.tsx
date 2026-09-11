import { Instagram, Mail, Phone, MapPin, ExternalLink, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="bg-blue-700 rounded-lg px-4 py-3 inline-flex items-center justify-center mb-5">
              <img
                src="https://storage.lucasmendes.dev/site-sp/palace-hotel%2FLogomarca-Sem-Fundo-Logomarca-Branca-precisa-de-Fundo-Azul.png"
                alt="Palace Hotel"
                className="h-12 object-contain"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-2 text-sm">
              Atlântica Hotelaria
            </p>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              Seu lar longe de casa. Tradição e hospitalidade em Altamira, Pará, desde 2004.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/palacehotelatm"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
              >
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://instagram.com/palacehotel_atm"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Acomodações', id: 'services' },
                { label: 'Auditório & Eventos', id: 'services' },
                { label: 'Galeria', id: 'gallery' },
                { label: 'Localização', id: 'location' },
                { label: 'Contato', id: 'contact' }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="group text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-300"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-white/5 group-hover:bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                  <MapPin size={18} className="text-blue-400" />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">
                  Tv. Pedro Gomes, 3093<br />
                  Centro – Altamira, PA<br />
                  CEP 68.371-970
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-white/5 group-hover:bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone size={18} className="text-blue-400" />
                </div>
                <div>
                  <a href="tel:+559335152057" className="text-gray-300 hover:text-white transition-colors text-sm block">
                    (93) 3515-2057
                  </a>
                  <a href="https://wa.me/5593991462057" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm">
                    (93) 99146-2057
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-white/5 group-hover:bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <a href="mailto:reservas@palacehotelatm.com.br" className="text-gray-300 hover:text-white transition-colors text-sm">
                  reservas@palacehotelatm.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <span className="text-blue-400">©</span>
            {currentYear} Palace Hotel – Atlântica Hotelaria. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <button className="group text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1">
              Privacidade
              <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="group text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1">
              Termos de Uso
              <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-400">Reservas disponíveis 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
