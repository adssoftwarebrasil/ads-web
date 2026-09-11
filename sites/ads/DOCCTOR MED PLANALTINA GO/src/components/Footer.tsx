import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2d4a3e]">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="bg-white rounded-lg p-3 inline-block mb-4">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=docctormedplanaltina%2Fdocctormedplanaltina%2Flogomarca-sem-o-fundo.png&version_id=null"
                alt="Docctor Med Planaltina"
                className="h-12 object-contain"
              />
            </div>
            <p className="text-white text-opacity-80 leading-relaxed">
              Cuidando da saúde de Planaltina com excelência, tecnologia e preços acessíveis.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('#inicio')}
                  className="text-white text-opacity-70 hover:text-[#f37f1a] transition-colors duration-300"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#especialidades')}
                  className="text-white text-opacity-70 hover:text-[#f37f1a] transition-colors duration-300"
                >
                  Especialidades
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#exames')}
                  className="text-white text-opacity-70 hover:text-[#f37f1a] transition-colors duration-300"
                >
                  Exames
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contato')}
                  className="text-white text-opacity-70 hover:text-[#f37f1a] transition-colors duration-300"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Fale Conosco</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#f37f1a] flex-shrink-0" />
                
                  <a href="https://wa.me/5561982400076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-opacity-70 hover:text-[#f37f1a] transition-colors duration-300"
                >
                  (61) 98240-0076
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#f37f1a] flex-shrink-0" />
                <span className="text-white text-opacity-70">
                  (61) 3142-0898
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#f37f1a] flex-shrink-0" />
                
                  <a href="mailto:financeiro.dmplanaltinago@gmail.com"
                  className="text-white text-opacity-70 hover:text-[#f37f1a] transition-colors duration-300 break-all"
                >
                  financeiro.dmplanaltinago@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#f37f1a] flex-shrink-0 mt-1" />
                <span className="text-white text-opacity-70">
                  R. do Centro Cívico, SN - Planaltina - GO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1f3329] py-4">
        <div className="container-custom">
          <p className="text-white text-opacity-60 text-center text-sm">
            © 2025 Docctor Med Planaltina-GO. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}