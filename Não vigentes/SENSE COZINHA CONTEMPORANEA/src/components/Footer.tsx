import { Instagram, Facebook, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-sage-dark text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=SENSE%20COZINHA%20CONTEMPORANEA%2Fimgi_7_568389501_18389071909121202_2066482576358897888_n_1-removebg-preview.png&version_id=null"
              alt="Sense Cozinha Contemporânea"
              className="h-16 w-auto mb-4"
              loading="lazy"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Buffet contemporâneo com cardápio renovado diariamente. Culinária brasileira equilibrada e saudável.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              {[
                { label: 'Início', href: '#hero' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Nossa Cozinha', href: '#cozinha' },
                { label: 'Galeria', href: '#galeria' },
                { label: 'Localização', href: '#localizacao' },
                { label: 'Contato', href: '#contato' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-white/80 hover:text-orange-primary transition-colors text-sm hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-orange-primary" />
                <span className="text-white/80">Rua T1, 917 - Setor Bueno, Goiânia - GO</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0 text-orange-primary" />
                <a
                  href="tel:+556239267006"
                  className="text-white/80 hover:text-orange-primary transition-colors"
                >
                  (62) 3926-7006
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0 text-orange-primary" />
                <a
                  href="mailto:sensecozinha@hotmail.com"
                  className="text-white/80 hover:text-orange-primary transition-colors"
                >
                  sensecozinha@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="flex-shrink-0 mt-0.5 text-orange-primary" />
                <div className="text-white/80">
                  <div>Seg-Sex: 11h às 14:30h</div>
                  <div>Sáb-Dom: 11:30h às 15h</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
            <p className="text-white/80 text-sm mb-4 leading-relaxed">
              Siga nosso Instagram para ver o cardápio do dia!
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/sensecozinhacontemporanea"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-primary transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/sensecozinhacontemporanea"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-primary transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/556239267006"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-primary transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Sense Cozinha Contemporânea. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
