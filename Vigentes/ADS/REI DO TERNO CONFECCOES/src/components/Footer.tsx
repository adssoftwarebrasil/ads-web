import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=rei-do-terno%2FWhatsApp_Image_2025-10-27_at_15.17.32-removebg-preview%201.png&version_id=null';

const LINKS: { label: string; target: string }[] = [
  { label: 'Início', target: 'inicio' },
  { label: 'Produtos', target: 'produtos' },
  { label: 'Galeria', target: 'galeria' },
  { label: 'Contato', target: 'contato' },
];

const PRODUTOS = ['Ternos', 'Camisas Polo', 'Sapatos', 'Esporte Fino'];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-[#2D587A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={LOGO} alt="Rei do Terno" className="h-16 mb-4" />
            <p className="text-white/80">Referência em moda masculina em Rio Preto</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {LINKS.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => scrollTo(link.target)}
                    className="text-white/80 hover:text-[#B89E5E] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Produtos</h3>
            <ul className="space-y-2">
              {PRODUTOS.map((p) => (
                <li key={p} className="text-white/80">
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-white/80">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm">R. Cel. Spínola de Castro, 2898 - Centro</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone size={16} />
                <a
                  href="https://wa.me/5517992369599"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B89E5E]"
                >
                  (17) 99236-9599
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail size={16} />
                <a href="mailto:reidoterno@hotmail.com" className="hover:text-[#B89E5E]">
                  reidoterno@hotmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/reidoternoriopreto"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B89E5E] transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/share/1D9S7iWsnH/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B89E5E] transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>Copyright © 2025 Rei do Terno | Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
