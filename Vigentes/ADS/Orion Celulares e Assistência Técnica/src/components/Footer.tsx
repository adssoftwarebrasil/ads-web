import { Instagram, Facebook } from 'lucide-react';
import { LOGO_URL, scrollToSection } from '../lib/constants';

const quickLinks: { label: string; id: string }[] = [
  { label: 'Produtos', id: 'produtos' },
  { label: 'Assistência Técnica', id: 'assistencia' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={LOGO_URL} alt="Órion Celulares" className="h-12 w-auto mb-4" />
            <p className="text-sm">Especialistas em Xiaomi com assistência técnica para todas as marcas em Dourados.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollToSection(link.id)} className="hover:text-[rgb(231,189,44)] transition-colors">{link.label}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/orioncelulares.oficial" target="_blank" rel="noopener noreferrer" className="hover:text-[rgb(231,189,44)] transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61555655935672&mibextid=wwXIfr&rdid=Rpf87SG5yFzeBDeD#" target="_blank" rel="noopener noreferrer" className="hover:text-[rgb(231,189,44)] transition-colors" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Horários</h3>
            <p className="text-sm">Segunda a Sexta: 8:00 - 18:00<br />Sábado: 8:00 - 12:00</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p className="mt-2">© 2026 Órion Celulares e Assistência Técnica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
