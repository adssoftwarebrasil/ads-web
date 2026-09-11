import { Instagram, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './icons';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[#29456D] text-white py-12 lg:py-16">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-10">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/vidral%2Flogo-vidral.png"
              alt="Vidral"
              className="h-[50px] w-auto mb-5 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed opacity-90">
              Soluções inteligentes e personalizadas que valorizam seu patrimônio, entregando qualidade,
              inovação e segurança em esquadrias e vidros.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-5">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-85 hover:opacity-100 hover:underline transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-5">Fale Conosco</h3>
            <ul className="space-y-4 mb-6">
              <li>
                <a
                  href="https://wa.me/556596603393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm block hover:opacity-100 transition-opacity"
                >
                  <div className="font-semibold">WhatsApp:</div>
                  <div className="opacity-85">(65) 9660-3393</div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/vidralcuiaba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm block hover:opacity-100 transition-opacity"
                >
                  <div className="font-semibold">Instagram:</div>
                  <div className="opacity-85">@vidralcuiaba</div>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/553t61Dt7QQuDGeQ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm block hover:opacity-100 transition-opacity"
                >
                  <div className="font-semibold">Endereço:</div>
                  <div className="opacity-85">Cuiabá e Várzea Grande - MT</div>
                </a>
              </li>
            </ul>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/vidralcuiaba"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 hover:scale-110 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={2} />
              </a>
              <a
                href="https://wa.me/556596603393"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 hover:scale-110 transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a
                href="https://maps.app.goo.gl/553t61Dt7QQuDGeQ8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 hover:scale-110 transition-all"
                aria-label="Google Maps"
              >
                <MapPin size={20} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white border-opacity-20 pt-6 mt-10">
          <p className="text-center text-sm opacity-80">
            © 2025 Vidral Esquadrias e Vidros. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
