import { MapPin, Phone, Clock, Instagram, Facebook, Heart } from 'lucide-react';

const quickLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[rgb(84,10,1)] to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/cutelaria%20bielliz%2Fimg%2Flogo-sem-fundo.webp"
              alt="Cutelaria Bielliz"
              className="h-16 w-auto mb-4"
            />
            <h3 className="font-bold text-xl mb-3">Cutelaria Bielliz</h3>
            <p className="text-[rgb(245,241,220)] mb-4">
              Tradição e qualidade em cutelaria artesanal. Produtos selecionados das melhores
              cutelarias gaúchas.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-[rgb(245,241,220)]">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[rgb(245,241,220)] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-[rgb(245,241,220)]">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>
                  Av. Senador Saraiva, 573
                  <br />
                  Centro, Campinas - SP
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="flex-shrink-0" />
                <a
                  href="https://wa.me/5519992079201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[rgb(245,241,220)] transition-colors"
                >
                  (19) 99207-9201
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={20} className="flex-shrink-0 mt-1" />
                <span>
                  Seg-Sex: 08h-19h
                  <br />
                  Sáb: 08h-17h
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-[rgb(245,241,220)]">Redes Sociais</h4>
            <p className="mb-4">Siga-nos para novidades, lançamentos e promoções exclusivas.</p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/bielliz.oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574936881207"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[rgb(245,241,220)] text-sm text-center md:text-left">
              © 2026 Cutelaria Bielliz. Todos os direitos reservados.
            </p>
            <p className="text-[rgb(245,241,220)] text-sm flex items-center gap-2">
              Feito com <Heart size={16} className="text-red-500 fill-red-500" /> por uma empresa
              familiar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
