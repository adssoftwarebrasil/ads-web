import { Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { WHATSAPP_URL, INSTAGRAM_URL, scrollToSection } from '../constants';

const QUICK_LINKS: { label: string; id: string }[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Depoimentos', id: 'depoimentos' },
];

export default function Footer() {
  return (
    <footer id="contato" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Arthur%20Cortinas%2Fnilsoncortinas%2Fimage%2082.png&version_id=null"
              alt="Arthur Cortinas"
              className="h-16 w-auto mb-6 bg-white rounded-lg p-2"
            />
            <p className="text-gray-400 mb-6 leading-relaxed">Somos especialistas em Cortinas e Persianas.</p>
            <div className="flex gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[rgb(218,165,33)] rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="lucide lucide-instagram w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[rgb(218,165,33)] transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-[rgb(218,165,33)] transition-colors duration-300"
                >
                  <Phone className="lucide lucide-phone w-5 h-5 mt-1 flex-shrink-0" />
                  <span>(66) 99919-7080</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@arthurcortinas.com.br"
                  className="flex items-start gap-3 text-gray-400 hover:text-[rgb(218,165,33)] transition-colors duration-300"
                >
                  <Mail className="lucide lucide-mail w-5 h-5 mt-1 flex-shrink-0" />
                  <span>contato@arthurcortinas.com.br</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-[rgb(218,165,33)] transition-colors duration-300"
                >
                  <Instagram className="lucide lucide-instagram w-5 h-5 mt-1 flex-shrink-0" />
                  <span>@arthurcortinassinop</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Endereço</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="lucide lucide-map-pin w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>Rua José Saramago, 82</p>
                  <p>Quadra 70, Lote 5</p>
                  <p>Bairro Aquarela das Artes</p>
                  <p>Sinop/MT</p>
                  <p>CEP: 78555-723</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <Clock className="lucide lucide-clock w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">Horário de Atendimento</p>
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              2026 Arthur Cortinas. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">CNPJ: 56.157.607/0001-34</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
