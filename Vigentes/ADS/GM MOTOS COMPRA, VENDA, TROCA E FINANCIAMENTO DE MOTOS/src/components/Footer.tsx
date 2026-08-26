import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(233,1,16,0.1),transparent_60%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-2 max-w-md">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://storage.lucasmendes.dev/site-sp/gm-motos/img/logo-sem-fundo.webp"
                alt="GM Motos"
                className="h-20 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Referência em compra, venda, troca e financiamento de motos em Rondonópolis e região.
              Confiança, procedência e as melhores condições do mercado.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/gmmotosroo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-brand-red border border-white/10 hover:border-brand-red flex items-center justify-center text-white transition-all hover:scale-110"
              >
                <Instagram className="lucide lucide-instagram" width={18} height={18} />
              </a>
              <a
                href="https://www.facebook.com/gmmotosroo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-brand-red border border-white/10 hover:border-brand-red flex items-center justify-center text-white transition-all hover:scale-110"
              >
                <Facebook className="lucide lucide-facebook" width={18} height={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-display font-black text-white mb-5 text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-brand-red text-sm transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-brand-red group-hover:w-4 transition-all"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-black text-white mb-5 text-sm uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin
                  className="lucide lucide-map-pin text-brand-red mt-0.5 flex-shrink-0"
                  width={16}
                  height={16}
                />
                <span>Av. Wiliam Morais Filho, 413, Jd. Primavera, Rondonópolis-MT</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Phone
                  className="lucide lucide-phone text-brand-red mt-0.5 flex-shrink-0"
                  width={16}
                  height={16}
                />
                <span>(66) 9 9998-0270</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Mail
                  className="lucide lucide-mail text-brand-red mt-0.5 flex-shrink-0"
                  width={16}
                  height={16}
                />
                <span className="break-all">gmmotosroo@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Clock
                  className="lucide lucide-clock text-brand-red mt-0.5 flex-shrink-0"
                  width={16}
                  height={16}
                />
                <span>Seg a Sáb: 08:30 às 11:30 / 13:00 às 18:00</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© 2026 GM Motos. Todos os direitos reservados.</p>
          <p className="italic">Confiança para comprar, facilidade para conquistar.</p>
        </div>
      </div>
    </footer>
  );
}
