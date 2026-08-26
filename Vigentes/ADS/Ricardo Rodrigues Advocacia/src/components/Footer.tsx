import { MapPin, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[rgb(47,44,34)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/ricardorodrigues/LOGOTIPO%20JPG%20PRETO.webp"
              alt="Ricardo Rodrigues Advocacia"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Excelência em advocacia e consultoria jurídica desde 2017.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#d9b33c] mb-4">Contato</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>(79) 3967-0400</p>
              <p>(79) 9.8164-1628</p>
              <p>ricardorodrigues.adv@outlook.com</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#d9b33c] mb-4">Endereços</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-[#d9b33c]" />
                <p>
                  <span className="font-semibold">Sede:</span> Rua dos Crisântemos, 62 - Inácio Barbosa,
                  Aracaju - SE
                </p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-[#d9b33c]" />
                <p>
                  <span className="font-semibold">Filial:</span> Rua José Cupertino Bispo, 290 - Centro,
                  Pirambu - SE
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Ricardo Rodrigues Advocacia e Consultoria. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/ricardorodrigues_adv/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-[#d9b33c] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://x.com/rr_advocacia_"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-[#d9b33c] transition-colors"
              aria-label="X"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.youtube.com/channel/UClUPVXt7D7vfv3jwfSWl9yw"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-[#d9b33c] transition-colors"
              aria-label="Youtube"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
