import { Instagram, Youtube, Music2 } from 'lucide-react';

const quickLinks = [
  { label: 'Sobre a Dupla', href: '#sobre' },
  { label: 'Músicas', href: '#musicas' },
  { label: 'Contato', href: '#contato' },
];

const contacts = ['(31) 99382-0980', '(31) 99193-3648', 'contato@castelliethiago.com.br'];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://i.ibb.co/RNqmtNr/image-34.png"
              alt="Castelli & Thiago"
              className="w-32 h-auto mb-4"
            />
            <p className="text-gray-400 text-sm">Uma nova história na música sertaneja</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#DAA520] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {contacts.map((contact) => (
                <li key={contact}>{contact}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/castelliethiago"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#DAA520]/20 hover:border-[#DAA520] transition-all duration-300"
              >
                <Instagram className="lucide lucide-instagram w-5 h-5 text-gray-400" />
              </a>
              <a
                href="https://youtube.com/@castelliethiago"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#DAA520]/20 hover:border-[#DAA520] transition-all duration-300"
              >
                <Youtube className="lucide lucide-youtube w-5 h-5 text-gray-400" />
              </a>
              <a
                href="https://open.spotify.com/artist/castelliethiago"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#DAA520]/20 hover:border-[#DAA520] transition-all duration-300"
              >
                <Music2 className="lucide lucide-music2 w-5 h-5 text-gray-400" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            2022 - 2024 | Castelli & Thiago - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
