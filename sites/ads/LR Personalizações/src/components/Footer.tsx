import { Instagram, MapPin, Phone, MessageCircle, Clock, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgb(0,33,78)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="https://storage.lucasmendes.dev/site-sp/lr%20personalizacoes%2Fimg%2Flogo.jpg"
                alt="LR Personalizações"
                className="h-12 w-auto rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">LR PERSONALIZAÇÕES</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Há 20 anos personalizando embalagens e valorizando marcas em Goiânia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/lrpersonalizacoesoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(203,13,13)] p-2 rounded-full hover:bg-[rgb(180,11,11)] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram width={20} height={20} className="lucide lucide-instagram " />
              </a>
              <a
                href="https://www.tiktok.com/@lrpersonalizacoes"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(203,13,13)] p-2 rounded-full hover:bg-[rgb(180,11,11)] transition-all duration-300 hover:scale-110"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
              <a
                href="https://wa.me/5562985597671"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(203,13,13)] p-2 rounded-full hover:bg-[rgb(180,11,11)] transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle width={20} height={20} className="lucide lucide-message-circle " />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-[rgb(203,13,13)]">Navegação</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-[rgb(203,13,13)]">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin
                  width={20}
                  height={20}
                  className="lucide lucide-map-pin flex-shrink-0 mt-1 text-[rgb(203,13,13)]"
                />
                <span className="text-gray-300">
                  R. Sete, 847 - Quadra K1, Lote 18<br />Vila Pedroso, Goiânia - GO
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone
                  width={20}
                  height={20}
                  className="lucide lucide-phone flex-shrink-0 text-[rgb(203,13,13)]"
                />
                <span className="text-gray-300">(62) 3206-5937</span>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle
                  width={20}
                  height={20}
                  className="lucide lucide-message-circle flex-shrink-0 text-[rgb(203,13,13)]"
                />
                <span className="text-gray-300">(62) 98559-7671</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-[rgb(203,13,13)]">Horário</h4>
            <div className="flex items-start space-x-2 mb-4">
              <Clock
                width={20}
                height={20}
                className="lucide lucide-clock flex-shrink-0 mt-1 text-[rgb(203,13,13)]"
              />
              <div className="text-gray-300">
                <p className="mb-2">Segunda a Quinta:<br />08:00 - 12:00 | 13:00 - 18:00</p>
                <p>Sexta:<br />08:00 - 12:00 | 13:00 - 17:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 LR Personalizações. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Feito com
              <Heart
                width={16}
                height={16}
                className="lucide lucide-heart mx-1 text-[rgb(203,13,13)] fill-current"
              />
              para nossos clientes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
