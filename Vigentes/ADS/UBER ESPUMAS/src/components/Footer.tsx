import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

const quickLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t-4 border-[#00218b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/uber%20espumas%2Fimg%2Flogo2.png"
              alt="Uber Espumas"
              className="h-16 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed">
              Especialistas em espumas sob medida em Uberlândia há mais de 30 anos. Precisão,
              qualidade e compromisso com seu negócio.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 uppercase tracking-wide">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 uppercase tracking-wide">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <MapPin
                  className="lucide lucide-map-pin text-[#00218b] flex-shrink-0 mt-1"
                  width={20}
                  height={20}
                />
                <span className="text-sm">
                  Av. João Pessoa nº 825, Bairro Martins
                  <br />
                  Uberlândia-MG, Brasil
                </span>
              </li>
              <li className="flex gap-3">
                <Phone
                  className="lucide lucide-phone text-[#00218b] flex-shrink-0"
                  width={20}
                  height={20}
                />
                <a href="tel:+553432257936" className="text-sm hover:text-white transition-colors">
                  (34) 3225-7936
                </a>
              </li>
              <li className="flex gap-3">
                <Phone
                  className="lucide lucide-phone text-[#00218b] flex-shrink-0"
                  width={20}
                  height={20}
                />
                <a href="tel:+5534991421598" className="text-sm hover:text-white transition-colors">
                  (34) 99142-1598
                </a>
              </li>
              <li className="flex gap-3">
                <Mail
                  className="lucide lucide-mail text-[#00218b] flex-shrink-0"
                  width={20}
                  height={20}
                />
                <a
                  href="mailto:contato@uberespumas.com.br"
                  className="text-sm hover:text-white transition-colors"
                >
                  contato@uberespumas.com.br
                </a>
              </li>
              <li className="flex gap-3">
                <Clock
                  className="lucide lucide-clock text-[#00218b] flex-shrink-0 mt-1"
                  width={20}
                  height={20}
                />
                <span className="text-sm">
                  Segunda a Sexta: 08:00 - 18:00
                  <br />
                  Sábado: 08:00 - 12:00
                  <br />
                  Domingo: Fechado
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 uppercase tracking-wide">
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/uberespumas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#00218b] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="lucide lucide-instagram " width={20} height={20} />
              </a>
              <a
                href="https://www.facebook.com/share/15XxJVrYBL/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#00218b] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="lucide lucide-facebook " width={20} height={20} />
              </a>
              <a
                href="https://wa.me/5534991421598"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#25D366] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="lucide lucide-message-circle " width={20} height={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Uber Espumas. Todos os direitos reservados.
          </p>
          <div className="text-sm space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
