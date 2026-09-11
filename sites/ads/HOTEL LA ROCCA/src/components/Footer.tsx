import { MessageCircle } from 'lucide-react';

const quickLinks = [
  { href: '#home', label: 'Hotel La Rocca' },
  { href: '#quartos', label: 'Quartos' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/hotellarocca%2Flogo.webp"
                alt="Hotel La Rocca"
                className="h-20 mb-6 object-contain"
              />
              <p className="text-gray-400 text-lg leading-relaxed">
                Tradição e conforto desde 1992
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 text-white">Links Rápidos</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[rgb(190,0,3)] transition-colors text-base"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 text-white">Contato</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="text-base">R. 8-A, 27 - St. Aeroporto</li>
                <li className="text-base">Goiânia - GO, 74075-240</li>
                <li>
                  <a
                    href="tel:+5562983080229"
                    className="hover:text-[rgb(190,0,3)] transition-colors text-base"
                  >
                    (62) 98308-0229
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+556232255216"
                    className="hover:text-[rgb(190,0,3)] transition-colors text-base"
                  >
                    (62) 3225-5216
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contato@hotellarocca.com.br"
                    className="hover:text-[rgb(190,0,3)] transition-colors text-base"
                  >
                    contato@hotellarocca.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-10 text-center">
            <a
              href="https://reservas.hotellarocca.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[rgb(190,0,3)] hover:bg-[rgb(160,0,3)] text-white font-bold px-10 py-4 rounded-xl transition-all transform hover:scale-105 mb-8 text-lg shadow-lg hover:shadow-xl"
            >
              <MessageCircle
                size={24}
                className="lucide lucide-message-circle "
              />
              Faça Sua Reserva Agora
            </a>
            <p className="text-gray-400 text-base">
              Copyright © 2026, Hotel La Rocca. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
