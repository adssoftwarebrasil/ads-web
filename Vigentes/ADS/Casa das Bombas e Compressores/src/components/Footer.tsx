import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const quickLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/casadasbombasecompressores%2Flogo.webp"
              alt="Casa das Bombas e Compressores"
              className="h-16 mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              Mais de 22 anos oferecendo soluções completas em bombas e compressores para Manaus e região.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[rgb(255,163,1)] p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram width={20} height={20} className="lucide lucide-instagram " />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollToSection(l.id)}
                    className="text-gray-400 hover:text-[rgb(255,163,1)] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[rgb(255,163,1)] transition-all duration-300"></span>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 hover:text-gray-300 transition-colors">
                <MapPin
                  width={20}
                  height={20}
                  className="lucide lucide-map-pin flex-shrink-0 mt-0.5 text-[rgb(255,163,1)]"
                />
                <span>
                  Rua Exemplo, 123<br />Centro - Manaus/AM<br />CEP: 69000-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  width={20}
                  height={20}
                  className="lucide lucide-phone flex-shrink-0 text-[rgb(255,163,1)]"
                />
                <a href="tel:+5592984428836" className="text-gray-400 hover:text-[rgb(255,163,1)] transition-colors">
                  (92) 98442-8836
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  width={20}
                  height={20}
                  className="lucide lucide-mail flex-shrink-0 text-[rgb(255,163,1)]"
                />
                <a
                  href="mailto:contato@casadasbombas.com.br"
                  className="text-gray-400 hover:text-[rgb(255,163,1)] transition-colors break-words"
                >
                  contato@casadasbombas.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-center md:text-left">
              © 2026 Casa das Bombas e Compressores. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-sm text-center md:text-right">
              Assistência Técnica Autorizada desde 2002
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
