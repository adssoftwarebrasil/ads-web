import { Facebook, Instagram, MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

const WHATSAPP = 'http://wa.me/551235122848';

const quickLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

const schedule = [
  { day: 'Segunda a Sexta', hours: '08h às 18h30', closed: false },
  { day: 'Sábados', hours: '08h às 16h', closed: false },
  { day: 'Domingos', hours: 'Fechado', closed: true },
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-gradient-to-b from-[rgb(54,59,27)] to-[rgb(34,39,17)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/agro%20rusticano/img/logo-sem-fundo.webp"
              alt="Agro Rusticano"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              5 anos oferecendo o melhor em produtos agropecuários e pet com atendimento excepcional e
              preços justos.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/agrorusticano"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[rgb(186,213,51)] p-3 rounded-full transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook width={20} height={20} />
              </a>
              <a
                href="https://www.instagram.com/agrorusticano/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[rgb(186,213,51)] p-3 rounded-full transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram width={20} height={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[rgb(186,213,51)]">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-gray-300 hover:text-[rgb(186,213,51)] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[rgb(186,213,51)]">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin width={18} height={18} className="text-[rgb(186,213,51)] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  R. Miguel Nunes Bicudo, 155
                  <br />
                  Nova Esperança, Jacareí - SP
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone width={18} height={18} className="text-[rgb(186,213,51)] mt-0.5 flex-shrink-0" />
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[rgb(186,213,51)] transition-colors text-sm"
                >
                  (12) 3512-2848
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail width={18} height={18} className="text-[rgb(186,213,51)] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:agrorusticano@gmail.com"
                  className="text-gray-300 hover:text-[rgb(186,213,51)] transition-colors text-sm"
                >
                  agrorusticano@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[rgb(186,213,51)]">Horário</h3>
            <ul className="space-y-2">
              {schedule.map((s) => (
                <li key={s.day} className="flex items-start space-x-3">
                  <Clock width={18} height={18} className="text-[rgb(186,213,51)] mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-gray-300">{s.day}</p>
                    <p className={`font-semibold ${s.closed ? 'text-red-400' : 'text-white'}`}>
                      {s.hours}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Agro Rusticano. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-1">
              <span>Feito com</span>
              <Heart width={16} height={16} className="text-[rgb(186,213,51)] fill-[rgb(186,213,51)]" />
              <span>para nossos clientes</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
