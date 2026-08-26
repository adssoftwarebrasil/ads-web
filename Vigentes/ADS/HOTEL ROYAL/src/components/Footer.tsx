import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const quickLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Quartos', id: 'quartos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Localização', id: 'localizacao' },
];

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#2D3A2F] text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/royal%20hotel%2Flogo%201.png"
              alt="Royal Hotel Logo"
              className="h-14 w-auto mb-4"
            />
            <p className="text-[#E8DCC8] leading-relaxed">
              Hospedagem de qualidade no centro de Dourados. Conforto e hospitalidade há 5 anos.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#C8AF82]">Contato</h3>
            <div className="space-y-3">
              <a
                href="tel:+5567992365009"
                className="flex items-center space-x-3 text-[#E8DCC8] hover:text-[#C8AF82] transition-colors"
              >
                <Phone width={18} height={18} />
                <span>(67) 9236-5009</span>
              </a>
              <a
                href="mailto:royalhoteldourados@gmail.com"
                className="flex items-center space-x-3 text-[#E8DCC8] hover:text-[#C8AF82] transition-colors"
              >
                <Mail width={18} height={18} />
                <span>royalhoteldourados@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3 text-[#E8DCC8]">
                <MapPin width={18} height={18} className="flex-shrink-0 mt-1" />
                <span>
                  R. Toshinobu Katayama, 576<br />
                  Dourados - MS
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#C8AF82]">Horário</h3>
            <div className="flex items-center space-x-3 text-[#E8DCC8]">
              <Clock width={18} height={18} />
              <div>
                <p className="font-semibold">Atendimento 24 horas</p>
                <p className="text-sm">Todos os dias</p>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 mt-6 text-[#C8AF82]">Redes Sociais</h3>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/royalhoteldourados"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-[#E8DCC8] hover:text-[#C8AF82] transition-colors"
              >
                <Instagram width={18} height={18} />
                <span>@royalhoteldourados</span>
              </a>
              <a
                href="https://wa.me/5567992365009"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-[#E8DCC8] hover:text-[#C8AF82] transition-colors"
              >
                <Phone width={18} height={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#C8AF82]">Links Rápidos</h3>
            <nav className="space-y-2">
              {quickLinks.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="block text-[#E8DCC8] hover:text-[#C8AF82] transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <a
                href="https://www.booking.com/hotel/br/royal-dourados.pt-br.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#E8DCC8] hover:text-[#C8AF82] transition-colors"
              >
                Reservas
              </a>
            </nav>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-[#E8DCC8]/60">
          <p>© 2025 Royal Hotel Dourados. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
