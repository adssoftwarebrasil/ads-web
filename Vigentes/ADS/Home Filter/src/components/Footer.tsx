import { MessageCircle, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const navItems = [
  { href: '#início', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#serviços', label: 'Serviços' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#contato', label: 'Contato' },
];

const modelos = ['Soft Baby & Fit', 'Soft Slim & Star', 'Linha Knox Industrial', 'Climatizadores RT Plus'];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/homefilt%2Flogo-6.png"
              alt="HOME FILTER"
              className="h-12 w-auto mb-5"
            />
            <p className="text-sm leading-relaxed">
              Especialistas em saúde através da água. Revenda autorizada Soft Everest em Goiânia e região.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Navegação</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-blue-400 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Principais Modelos</h4>
            <ul className="space-y-2 text-xs">
              {modelos.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Fale Conosco</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:6284455153"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="lucide lucide-message-circle" width={16} height={16} /> (62) 8445-5153
              </a>
              <a
                href="mailto:homefilter2024@gmail.com"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail className="lucide lucide-mail" width={16} height={16} /> homefiltros2024@gmail.com
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="lucide lucide-map-pin mt-1 flex-shrink-0" width={16} height={16} />
                <span className="text-xs">Jd. Guanabara, Goiânia - GO</span>
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="lucide lucide-instagram" width={18} height={18} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="lucide lucide-facebook" width={18} height={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
          <p>© 2026 Home Filter - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
