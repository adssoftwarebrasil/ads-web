import { Phone, Clock, MapPin, Instagram } from 'lucide-react';

const quickLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Promoções', id: 'promocoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#021C3F] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/Avenida%20gas%2Fimg%2Flogo-sem-fundo.png"
              alt="Avenida Gás"
              className="h-24 w-auto mb-6"
            />
            <p className="text-gray-300 leading-relaxed">
              Entrega rápida de gás e água mineral em Sinop. Qualidade e
              atendimento que você merece.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#DBCC5E] mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-gray-300 hover:text-[#DBCC5E] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#DBCC5E] mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="lucide lucide-phone w-5 h-5 text-[#DBCC5E] flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="tel:+5566996186661"
                    className="hover:text-[#DBCC5E] transition-colors block"
                  >
                    (66) 99618-6661
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="lucide lucide-clock w-5 h-5 text-[#DBCC5E] flex-shrink-0 mt-1" />
                <span className="text-gray-300">Seg-Dom: 08:00 - 21:00</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="lucide lucide-map-pin w-5 h-5 text-[#DBCC5E] flex-shrink-0 mt-1" />
                <span className="text-gray-300">Jardim Imperial, Sinop - MT</span>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="lucide lucide-instagram w-5 h-5 text-[#DBCC5E] flex-shrink-0 mt-1" />
                <a
                  href="https://www.instagram.com/avenidagassinop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#DBCC5E] transition-colors"
                >
                  @avenidagassinop
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            © 2025 Avenida Gás - CNPJ 47.181.259/0001-40. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
