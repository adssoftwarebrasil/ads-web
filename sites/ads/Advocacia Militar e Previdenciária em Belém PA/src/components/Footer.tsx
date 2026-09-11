import { Scale, MapPin, Phone, Mail, Clock } from 'lucide-react';

const BRAND = 'rgb(172, 0, 0)';

const links = [
  { label: 'Áreas de Atuação', target: 'areas' },
  { label: 'Sobre', target: 'sobre' },
  { label: 'Contato', target: 'contato' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: BRAND }}
        ></div>
      </div>
      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4 cursor-pointer group">
                <Scale
                  width={32}
                  height={32}
                  className="lucide lucide-scale group-hover:scale-110 transition-transform"
                  style={{ color: BRAND }}
                />
                <span className="text-white font-bold text-lg">Brazão Advocacia</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Consultoria jurídica especializada desde 2016, defendendo seus direitos com
                experiência e dedicação.
              </p>
              <div className="flex items-center gap-2 text-xs" style={{ color: BRAND }}>
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: BRAND }}
                ></div>
                <span>Atendimento Online e Presencial</span>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 text-lg">Links Rápidos</h3>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.target}>
                    <button
                      onClick={() => scrollTo(l.target)}
                      className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                    >
                      <div
                        className="w-1 h-1 rounded-full bg-gray-500 group-hover:w-2 group-hover:h-2 transition-all"
                        style={{ backgroundColor: BRAND }}
                      ></div>
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 text-lg">Contato</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3 group cursor-pointer hover:text-white transition-colors">
                  <MapPin
                    width={16}
                    height={16}
                    className="lucide lucide-map-pin flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                    style={{ color: BRAND }}
                  />
                  <span>
                    Travessa Vileta, 1963
                    <br />
                    Marco, Belém/PA
                    <br />
                    CEP: 66095-346
                  </span>
                </li>
                <li className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                  <Phone
                    width={16}
                    height={16}
                    className="lucide lucide-phone group-hover:scale-110 transition-transform"
                    style={{ color: BRAND }}
                  />
                  <span>(91) 99342-4086</span>
                </li>
                <li className="flex items-start gap-3 group cursor-pointer hover:text-white transition-colors">
                  <Mail
                    width={16}
                    height={16}
                    className="lucide lucide-mail flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                    style={{ color: BRAND }}
                  />
                  <span className="break-words">brazaoadvocaciaeconsultoria@gmail.com</span>
                </li>
                <li className="flex items-center gap-3 group hover:text-white transition-colors">
                  <Clock
                    width={16}
                    height={16}
                    className="lucide lucide-clock group-hover:scale-110 transition-transform"
                    style={{ color: BRAND }}
                  />
                  <span>Segunda a Sexta: 8:00 às 18:00h</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 text-lg">Redes Sociais</h3>
              <p className="text-sm text-gray-400 mb-4">
                Siga-nos nas redes sociais e fique por dentro das novidades
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/brazaoadvocaciaeconsultoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-opacity-20 transition-all duration-300 hover:scale-110 hover:rotate-6"
                  style={{ color: 'white' }}
                >
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/1GbW7qJshr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-opacity-20 transition-all duration-300 hover:scale-110 hover:rotate-6"
                  style={{ color: 'white' }}
                >
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>© 2024 Brazão Advocacia e Consultoria. Todos os direitos reservados.</p>
              <div className="flex items-center gap-2">
                <span>OAB/PA</span>
                <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                <span>Desenvolvido com dedicação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-1"
        style={{ background: 'linear-gradient(90deg, transparent, rgb(172, 0, 0), transparent)' }}
      ></div>
    </footer>
  );
}
