import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { navItems, scrollToSection } from '../lib/scroll';

const footerProducts = [
  'Coxins e Calços',
  'Compressores de Ar',
  'Sistema de Suspensão',
  'Sistema de Direção',
  'Sistema de Freios',
  'Outros Componentes',
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(1,51,153)] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/marajodi%2FLOGO%20MARAJO%20VETORIZADA.pdf%20(Logotipo)%20(3)%20(1).png"
              alt="Marajó Diesel"
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/80 leading-relaxed text-sm">
              Há mais de 10 anos fornecendo autopeças de qualidade para caminhões e
              ônibus em Palmas-TO. Sua parceira de confiança em peças automotivas.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.target)}
                    className="text-white/80 hover:text-[rgb(255,116,16)] transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Produtos</h3>
            <ul className="space-y-2">
              {footerProducts.map((product) => (
                <li key={product}>
                  <span className="text-white/80 text-sm">{product}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[rgb(255,116,16)] flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-white/80">(63) 3214-1766</p>
                  <p className="text-white/80"></p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[rgb(255,116,16)] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contato@marajodiesel.com.br"
                  className="text-white/80 hover:text-[rgb(255,116,16)] transition-colors text-sm"
                >
                  contato@marajodiesel.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[rgb(255,116,16)] flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm">
                  ARSE-SE 65 RODOVIA MARGINAL TO 050 CEP 77022-094
                  <br />
                  Palmas - TO
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            © 2026 Marajó Diesel. Todos os direitos reservados.
          </p>
          <a
            href=": https://www.instagram.com/autopecasmarajodiesel?igsh=ZGU3Y2JxOGFrOWxw"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[rgb(255,116,16)] flex items-center justify-center transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
