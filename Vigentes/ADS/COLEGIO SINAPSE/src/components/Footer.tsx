import { Instagram, Phone, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Sobre o Colégio', id: 'sobre' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Níveis de Ensino', id: 'ensino' },
  { label: 'Resultados', id: 'resultados' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[rgb(95,0,102)] to-[rgb(171,24,66)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/colegio%20sinapse%2Fimg%2Flogo.webp"
              alt="Colégio Sinapse"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-200 mb-4 leading-relaxed">
              Transformando sonhos em aprovações desde 2020. O melhor ensino de Goiânia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/colegiosinapsegoiania/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="http://wa.me/5562999690082"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Ensino</h3>
            <ul className="space-y-2 text-gray-200">
              <li>Ensino Fundamental II</li>
              <li>6º ao 9º ano</li>
              <li className="mt-4">Ensino Médio</li>
              <li>1ª, 2ª e 3ª série</li>
              <li className="mt-4">Preparatório</li>
              <li>ENEM e Vestibulares</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-gray-300" />
                <p className="ml-2 text-gray-200">
                  R. 52, 629 - Jardim Goiás
                  <br />
                  Goiânia - GO, 74810-200
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 flex-shrink-0 text-gray-300" />
                <a
                  href="http://wa.me/5562999690082"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-gray-200 hover:text-white"
                >
                  (62) 99969-0082
                </a>
              </div>
              <div className="flex items-center">
                <Instagram className="w-5 h-5 flex-shrink-0 text-gray-300" />
                <a
                  href="https://www.instagram.com/colegiosinapsegoiania/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-gray-200 hover:text-white"
                >
                  @colegiosinapsegoiania
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white border-opacity-20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-200 text-sm mb-4 md:mb-0">
            © 2026 Colégio Sinapse Sucesso LTDA - CNPJ: 39.263.982/0001-40
          </p>
        </div>
      </div>
    </footer>
  );
}
