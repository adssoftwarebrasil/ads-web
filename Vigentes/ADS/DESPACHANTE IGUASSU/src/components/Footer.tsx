import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

const quickLinks = [
  { label: 'Início', id: 'home' },
  { label: 'Serviços', id: 'services' },
  { label: 'Sobre', id: 'about' },
  { label: 'Depoimentos', id: 'testimonials' },
  { label: 'Contato', id: 'contact' },
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#021D46] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/despachante%20iguassu%2Fimg%2Flogo-sem-fundo.webp"
              alt="Despachante Iguassu"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Atendimento ágil, seguro e transparente em serviços documentais veiculares.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#B7AF92]">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#B7AF92]">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="text-[#B7AF92] mt-1 flex-shrink-0" size={18} />
                <a
                  href="tel:+5545999661849"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  (45) 99966-1849
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="text-[#B7AF92] mt-1 flex-shrink-0" size={18} />
                <a
                  href="mailto:iguassudespachante@gmail.com"
                  className="text-white/80 hover:text-white transition-colors text-sm break-all"
                >
                  iguassudespachante@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#B7AF92]">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/iguassudespachante/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl hover:bg-[#FA1213] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/despachanteiguassu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl hover:bg-[#FA1213] transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2026 Despachante Iguassu. Todos os direitos reservados.
            </p>
            <p className="text-white/60 text-sm text-center md:text-right">Foz do Iguaçu - PR</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
