import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const navLinks = ['Início', 'Sobre Nós', 'Produtos', 'Avaliações', 'Contato'];

const productLinks = [
  'Tecidos para Cortinas',
  'Tapeçaria Automotiva',
  'Cortinas Motorizadas',
  'Acessórios Diversos',
  'Produtos Químicos',
];

const navIds: Record<string, string> = {
  'Início': 'inicio',
  'Sobre Nós': 'sobre',
  'Produtos': 'produtos',
  'Avaliações': 'avaliacoes',
  'Contato': 'contato',
};

export default function Footer() {
  const scrollTo = (label: string) => {
    const id = navIds[label];
    const el = id ? document.getElementById(id) : null;
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fimg%2Flogo-sem-fundo.webp"
              alt="Prime Têxtil"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              Desde 2010 oferecendo as melhores soluções em tecidos e acessórios para cortinas,
              tapeçaria automotiva e sistemas motorizados.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/primecuiaba/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              >
                <Instagram className="lucide lucide-instagram" size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100067381277156"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              >
                <Facebook className="lucide lucide-facebook" size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map((label) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(label)}
                    className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span>{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Nossos Produtos</h3>
            <ul className="space-y-3 text-gray-400">
              {productLinks.map((label) => (
                <li key={label} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin
                  className="lucide lucide-map-pin flex-shrink-0 text-emerald-400 mt-1"
                  size={20}
                />
                <div>
                  <p className="font-medium text-white">Endereço</p>
                  <p className="text-sm">Rua Luiz de Matos, 498</p>
                  <p className="text-sm">Cidade Alta, Cuiabá - MT</p>
                  <p className="text-sm">CEP: 78030-395</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Phone
                  className="lucide lucide-phone flex-shrink-0 text-emerald-400 mt-1"
                  size={20}
                />
                <div>
                  <p className="font-medium text-white">Telefone</p>
                  <p className="text-sm">(65) 9 9950-0200</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Mail
                  className="lucide lucide-mail flex-shrink-0 text-emerald-400 mt-1"
                  size={20}
                />
                <div>
                  <p className="font-medium text-white">Atendimento</p>
                  <p className="text-sm">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-sm">Sábado e Domingo: Fechado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Prime Têxtil. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
