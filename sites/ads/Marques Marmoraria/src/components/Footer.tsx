import { MapPin, Phone, Instagram } from 'lucide-react';

const services = [
  'Bancadas de Cozinha',
  'Pias e Lavatórios',
  'Escadas',
  'Ilhas Gourmet',
  'Fachadas e Pisos',
  'Pedras Importadas',
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/logo-semfundo-marques.png"
              alt="Marques Marmoraria"
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Especialistas em mármores, granitos e pedras naturais. Transformando espaços em obras de arte desde o primeiro corte.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Serviços</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              {services.map((service) => (
                <li key={service}>
                  <a href="#servicos" className="hover:text-gold-300 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-white/50 text-sm">
                <MapPin className="lucide lucide-map-pin text-gold-400 mt-0.5 flex-shrink-0" width={14} height={14} />
                Av. 12 c/ Rua 101, Qd. 110 Lt. 09 — Itapuã, Aparecida de Goiânia - GO
              </li>
              <li className="flex items-center gap-2.5 text-white/50 text-sm">
                <Phone className="lucide lucide-phone text-gold-400 flex-shrink-0" width={14} height={14} />
                <a
                  href="https://wa.me/5562992861117"
                  className="hover:text-gold-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +55 62 99286-1117
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/50 text-sm">
                <Instagram className="lucide lucide-instagram text-gold-400 flex-shrink-0" width={14} height={14} />
                <a
                  href="https://www.instagram.com/marquesmarmoraria23/"
                  className="hover:text-gold-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @marquesmarmoraria23
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">© 2026 Marques Marmoraria. Todos os direitos reservados.</p>
          <p className="text-white/20 text-xs">Aparecida de Goiânia, GO — CEP: 74940-200</p>
        </div>
      </div>
    </footer>
  );
}
