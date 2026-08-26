import { Phone, MapPin, Mail, Instagram } from 'lucide-react';

const WHATSAPP_NUMBER = '5563992199115';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/hotel-ipanema%2FLogomarca-Sem-Fundo.png"
              alt="Hotel Ipanema"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-[#bdbec2] text-sm leading-relaxed mb-5">
              Conforto e hospitalidade em Araguaína — TO. Há 12 anos atendendo viajantes com excelência no Pátio do Posto Ipanema.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/ipanemahotelaux"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-[#f68033] border border-white/10 hover:border-[#f68033] rounded-lg flex items-center justify-center text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-[#25D366] border border-white/10 hover:border-[#25D366] rounded-lg flex items-center justify-center text-white transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Quartos', href: '#quartos' },
                { label: 'Estrutura', href: '#estrutura' },
                { label: 'Sobre Nós', href: '#sobre' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#bdbec2] hover:text-[#f68033] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#f68033] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Acomodações</h4>
            <ul className="space-y-2.5">
              {['Casal com solteiro', 'Triplo solteiro', 'Suíte Premium'].map((room) => (
                <li key={room}>
                  <a
                    href="#quartos"
                    className="text-[#bdbec2] hover:text-[#f68033] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#f68033] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {room}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#f68033] mt-0.5 shrink-0" size={16} />
                <span className="text-[#bdbec2] text-sm">
                  Av Bernardo Sayão, Vila Cearence<br />Araguaína — TO, CEP 77.818-340
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#f68033] shrink-0" size={16} />
                <a href="tel:+5563992199115" className="text-[#bdbec2] hover:text-[#f68033] text-sm transition-colors duration-200">
                  (63) 9 9219-9115
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#f68033] shrink-0" size={16} />
                <a href="mailto:ipanemahotel9@gmail.com" className="text-[#bdbec2] hover:text-[#f68033] text-sm transition-colors duration-200 break-all">
                  ipanemahotel9@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#bdbec2]/60 text-xs">
            © {new Date().getFullYear()} Hotel Ipanema. Todos os direitos reservados.
          </p>
          <p className="text-[#bdbec2]/40 text-xs">
            Desenvolvido com excelência para sua melhor estadia
          </p>
        </div>
      </div>
    </footer>
  );
}
