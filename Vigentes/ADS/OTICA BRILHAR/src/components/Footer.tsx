import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './Icons';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Promoções', id: 'promocoes' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Lojas', id: 'lojas' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/logo-sem-fundo.webp"
              alt="Ótica Brilhar"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Cuidando da sua visão com qualidade, confiança e estilo há mais de 16 anos em Rondonópolis – MT.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/oticabrilhar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[rgb(197,46,52)] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/oticabrilhar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[rgb(197,46,52)] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="http://wa.me/556684469577"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[rgb(13,111,69)] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Navegação</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Loja Matriz</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin
                  className="lucide lucide-map-pin mt-0.5 text-[rgb(197,46,52)] flex-shrink-0"
                  width={14}
                  height={14}
                />
                <span>R. Dom Pedro II, 1225 - Centro, Rondonópolis – MT</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock
                  className="lucide lucide-clock mt-0.5 text-[rgb(197,46,52)] flex-shrink-0"
                  width={14}
                  height={14}
                />
                <span>
                  Seg–Sex: 07:30–18:00<br />Sáb: 07:30–12:00
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone
                  className="lucide lucide-phone mt-0.5 text-[rgb(197,46,52)] flex-shrink-0"
                  width={14}
                  height={14}
                />
                <span>(66) 3423-7556</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Loja Filial</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin
                  className="lucide lucide-map-pin mt-0.5 text-[rgb(13,111,69)] flex-shrink-0"
                  width={14}
                  height={14}
                />
                <span>R. Pres. Castelo Branco, 3399 - Vila Operaria, Rondonópolis – MT</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock
                  className="lucide lucide-clock mt-0.5 text-[rgb(13,111,69)] flex-shrink-0"
                  width={14}
                  height={14}
                />
                <span>
                  Seg–Sex: 08:00–18:30<br />Sáb: 08:00–12:30
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Mail
                  className="lucide lucide-mail mt-0.5 text-[rgb(13,111,69)] flex-shrink-0"
                  width={14}
                  height={14}
                />
                <span>oticabrilhar@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>© 2026 Ótica Brilhar. Todos os direitos reservados.</span>
          <span>Rondonópolis – Mato Grosso, Brasil</span>
        </div>
      </div>
    </footer>
  );
}
