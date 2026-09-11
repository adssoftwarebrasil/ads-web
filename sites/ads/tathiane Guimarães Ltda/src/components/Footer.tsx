import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';

const links = [
  { label: 'Início', target: 'inicio' },
  { label: 'Sobre Nós', target: 'sobre' },
  { label: 'Serviços', target: 'servicos' },
  { label: 'Depoimentos', target: 'depoimentos' },
  { label: 'Contato', target: 'contato' },
];

const servicos = [
  'Implantes Dentários',
  'Facetas e Lentes de Porcelana',
  'Clareamento Dental',
  'Odontopediatria',
  'Estética Facial',
  'Lentes de Zircônia',
  'Alinhadores Estéticos',
  'Soluções digitais',
  'Cirurgia Guiada',
];

export default function Footer() {
  const scrollTo = (target: string) => {
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/tathiane%20guimaraes%2Fatualizadas%2Ffooter-back-ground.webp")',
      }}
    >
      <div className="absolute inset-0 bg-gray-900/90 from-gray-900 to-black bg-gradient-to-br opacity-95"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/tathiane%20guimaraes%2Fatualizadas%2Flogo-atualizada-sem-fundo.webp"
              alt="Tathiane Guimarães"
              className="h-20 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Clínica multidisciplinar especializada em oferecer cuidados integrados para sua saúde
              bucal, corporal e mental.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/equipetathiguimaraes/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/tathiane.guimaraes/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => scrollTo(link.target)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Serviços</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {servicos.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  Av. Amazonas, 311 - São José
                  <br />
                  Divinópolis - MG
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-400">
                  <div>(37) 99156-4540</div>
                  <div>(37) 98853-9277</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-400">
                  <div>Seg-Sex: 8h às 19h</div>
                  <div>Sáb: 9h às 13h</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-400 text-center sm:text-left">
              © 2026 Clínica Equipe Tathiane Guimarães. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
