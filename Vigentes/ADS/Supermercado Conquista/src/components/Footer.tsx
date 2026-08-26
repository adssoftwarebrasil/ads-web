import { Instagram, Facebook, Mail, Phone, MapPin, Clock, Heart } from 'lucide-react';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const quickLinks = [
  { label: 'Sobre Nós', target: 'about' },
  { label: 'Produtos', target: 'products' },
  { label: 'Nossas Lojas', target: 'locations' },
  { label: 'Contato', target: 'contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <img
              src="https://storage.lucasmendes.dev/site-sp/supermercado%20conquista%2Fimg%2Flogo-sem-fundo.png"
              alt="Supermercado Conquista"
              className="h-16 w-auto"
            />
            <p className="text-gray-300 leading-relaxed">
              Completo para atender sua família com qualidade, variedade e os melhores preços de Indiara!
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/supermercadosconquista_"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[rgb(221,40,45)] p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/superconquistaindiara/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[rgb(221,40,45)] p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:casadecarneconquista@hotmail.com"
                className="bg-white/10 hover:bg-[rgb(221,40,45)] p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(255,204,0)]">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => scrollTo(link.target)}
                    className="text-gray-300 hover:text-[rgb(255,204,0)] transition-colors duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(255,204,0)]">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[rgb(255,204,0)] mt-1 flex-shrink-0" />
                <a href="tel:+556481322676" className="text-gray-300 hover:text-white transition-colors">
                  (64) 8132-2676
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[rgb(255,204,0)] mt-1 flex-shrink-0" />
                <a
                  href="mailto:casadecarneconquista@hotmail.com"
                  className="text-gray-300 hover:text-white transition-colors break-all"
                >
                  casadecarneconquista@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[rgb(255,204,0)] mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Indiara, GO
                  <br />2 Lojas
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(255,204,0)]">Horário</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-[rgb(255,204,0)] mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-semibold text-white mb-2">Segunda a Domingo</p>
                  <p className="text-2xl font-bold text-[rgb(255,204,0)]">06:00 - 21:00</p>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 mt-6">
                <p className="text-sm text-gray-300 leading-relaxed">
                  Abertos todos os dias para melhor atender você e sua família!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Supermercado Conquista. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Feito com <Heart size={16} className="text-[rgb(221,40,45)] fill-current" /> em Indiara, GO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
