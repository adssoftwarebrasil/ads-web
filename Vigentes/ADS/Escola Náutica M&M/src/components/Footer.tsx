import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Início', id: 'inicio' },
    { label: 'Cursos', id: 'cursos' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Contato', id: 'contato' },
  ];

  return (
    <footer className="bg-[#34393a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/escola%20nautica%2Fimgi_1_341829618_528338402836110_797617768216956945_n-removebg-preview.png"
              alt="Escola Náutica MM"
              className="h-20 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Formando navegadores em Foz do Iguaçu com excelência e segurança.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#0caff0] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>(45) 99920-7671</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>julianoghi23@hotmail.com</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Rua Bartolomeu de Gusmão, 723<br />Centro, Foz do Iguaçu - PR</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/escolanauticamm/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-10 hover:bg-[#0caff0] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/people/Escola-n%C3%A1utica-MM/100092123374673/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-10 hover:bg-[#0caff0] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Escola Náutica MM. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
