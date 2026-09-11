import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

const hours: { day: string; time: string; closed?: boolean }[] = [
  { day: 'Segunda', time: '08:00 - 19:20' },
  { day: 'Ter - Sex', time: '08:00 - 20:40' },
  { day: 'Sábado', time: '08:00 - 15:20' },
  { day: 'Domingo', time: 'Fechado', closed: true },
];

export default function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src="/logo_footer.webp"
              alt="Logo Barbearia Zero19"
              width="200"
              height="112"
              loading="lazy"
              className="h-24 md:h-28 w-auto mb-6"
            />
            <p className="text-zinc-500 font-light max-w-xs">Onde o estilo encontra a tradição. Barbearia Zero19 é o padrão premium de Campinas desde 2014.</p>
          </div>
          <div>
            <h3 className="text-white font-outfit font-bold mb-6 text-lg uppercase tracking-wider">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-zinc-400 font-light">
                <MapPin className="text-premium-red w-5 h-5 flex-shrink-0 mt-1" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Barbearia+Zero19+Jardim+Aurelia+Campinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Av. Império do Sol Nascente, 752<br />Jardim Aurelia, Campinas - SP
                </a>
              </li>
              <li className="flex items-center gap-4 text-zinc-400 font-light">
                <Phone className="text-premium-red w-5 h-5 flex-shrink-0" />
                (19) 99349-9073
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-outfit font-bold mb-6 text-lg uppercase tracking-wider">Horários</h3>
            <ul className="space-y-2 text-zinc-400 font-light text-sm">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between">
                  <span>{h.day}</span>{' '}
                  <span className={h.closed ? 'text-zinc-500 text-xs uppercase text-premium-red/60' : 'text-zinc-500 text-xs'}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs font-light">
          <p>© 2026 Barbearia Zero19. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/barbeariazero19"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-premium-red transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61589863495999"
              className="bg-white/5 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-premium-red transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
