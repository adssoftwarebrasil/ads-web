import { Instagram, Clock, MapPin, Phone, Mail } from 'lucide-react';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const quickLinks: { label: string; id: string }[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Nossos Produtos', id: 'produtos' },
  { label: 'Localização', id: 'localizacao' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/hiper%20neto%2Fimg%2Flogo.webp"
              alt="Hiper Neto Supermercado"
              className="h-24 w-auto mb-6"
            />
            <p className="text-gray-400 mb-4 leading-relaxed">
              Sua escolha número um em qualidade e variedade em Campinorte desde 2018.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/hipernetosupermercado/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-[rgb(238,27,34)] transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-gray-400 hover:text-[rgb(238,27,34)] transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Horário</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-[rgb(238,27,34)] mt-1" />
                <div>
                  <p className="text-gray-300">Segunda a Sábado</p>
                  <p className="text-white font-semibold">06:00 às 20:00</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[rgb(238,27,34)] mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Av. Bernardo Sayão, 519<br />Centro - Campinorte - GO
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[rgb(238,27,34)] mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+556233473913"
                    className="text-gray-400 hover:text-[rgb(238,27,34)] transition-colors block"
                  >
                    (62) 3347-3913
                  </a>
                  <a
                    href="http://wa.me/556282034298"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[rgb(238,27,34)] transition-colors block"
                  >
                    (62) 98203-4298
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[rgb(238,27,34)] mt-1 flex-shrink-0" />
                <a
                  href="mailto:hipernetosupermercado@gmail.com"
                  className="text-gray-400 hover:text-[rgb(238,27,34)] transition-colors break-all"
                >
                  hipernetosupermercado@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Hiper Neto Supermercado. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
