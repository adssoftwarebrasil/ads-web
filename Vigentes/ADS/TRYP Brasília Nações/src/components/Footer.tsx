import { Instagram, Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://wa.me/5561324695520?text=Olá! Gostaria de receber novidades e promoções.', '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Sobre */}
          <div>
            <img 
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=tryp%2F341577424_2216720101847230_8820045510436793954_n%20-%20Copia.jpg&version_id=null"
              alt="Tryp Brasília Nações"
              className="h-16 mb-4"
            />
            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
              Experiência premium em hospitalidade no coração de Brasília. Conforto, sofisticação e excelência em cada detalhe.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Quartos', id: 'services' },
                { label: 'Eventos', id: 'services' },
                { label: 'Galeria', id: 'gallery' },
                { label: 'Contato', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
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

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-white/5 group-hover:bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <MapPin size={18} className="text-blue-400" />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">
                  SHS, Qd 4, bloco I<br />
                  Asa Sul, Brasília – DF
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-white/5 group-hover:bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone size={18} className="text-blue-400" />
                </div>
                <a href="tel:+556132469520" className="text-gray-300 hover:text-white transition-colors text-sm">
                  (61) 3246-9520
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-white/5 group-hover:bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <a href="mailto:contato@trypbrasilia.com.br" className="text-gray-300 hover:text-white transition-colors text-sm">
                  contato@trypbrasilia.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
              Newsletter
            </h4>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              Receba nossas novidades e promoções exclusivas
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                required
              />
              <button
                onClick={handleNewsletter}
                className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 text-sm"
              >
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        {/* Divider com gradiente */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <span className="text-blue-400">©</span>
            {currentYear} Tryp Brasília Nações. Todos os direitos reservados.
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

        {/* Badge final */}
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