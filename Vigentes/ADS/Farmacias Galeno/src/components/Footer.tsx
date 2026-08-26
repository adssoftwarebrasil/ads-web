import { Instagram, Facebook, Youtube, Music, Phone, MapPin, Heart } from 'lucide-react';

const socials = [
  { Icon: Instagram, href: 'https://www.instagram.com/galeno.farmacias/' },
  { Icon: Facebook, href: 'https://www.facebook.com/galenofarma' },
  { Icon: Youtube, href: 'https://www.youtube.com/@Podgaleno' },
  { Icon: Music, href: 'https://open.spotify.com/show/4tIWEzuwbxkH9PoRpf2xaC?si=Ks1SpbMOT8WFheS61dXtig&nd=1&dlsi=5f475482cdab4f02' },
];

const quickLinks = [
  { href: '#início', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#unidades', label: 'Unidades' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[rgb(40,84,48)] to-[rgb(40,84,48)]/95">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/farmacia%20galeno/img/logo-sem-fundo.png"
              alt="Farmácias Galeno"
              className="h-20 w-auto mb-6 rounded-lg"
            />
            <p className="text-white/80 leading-relaxed mb-6">
              38 anos cuidando da sua saúde com carinho, confiança e excelência. A primeira farmácia de manipulação do Piauí.
            </p>
            <div className="flex space-x-4">
              {socials.map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-[rgb(164,190,125)] transition-all duration-300 group"
                >
                  <Icon size={20} className="text-white group-hover:text-[rgb(40,84,48)]" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[rgb(230,217,182)] transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-[rgb(230,217,182)] group-hover:w-4 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-[rgb(164,190,125)] flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+558632218485" className="text-white/80 hover:text-[rgb(230,217,182)] transition-colors">
                    (86) 3221-8485
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[rgb(164,190,125)] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    R. São Pedro, 2235<br />Centro (Sul), Teresina - PI
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Horário de Funcionamento</h3>
            <div className="space-y-3 text-white/80">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <p className="font-semibold text-white mb-2">Segunda a Sexta</p>
                <p className="text-sm">07:00 - 19:00</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <p className="font-semibold text-white mb-2">Sábado</p>
                <p className="text-sm">07:00 - 13:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2026 Farmácias Galeno. Todos os direitos reservados.
            </p>
            <p className="text-white/60 text-sm flex items-center">
              Feito com <Heart size={16} className="text-red-400 mx-2" /> para sua saúde
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
