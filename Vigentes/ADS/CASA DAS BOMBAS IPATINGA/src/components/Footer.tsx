import { Phone, Mail, MapPin } from 'lucide-react';
import { scrollToId } from '../lib/site';

const menuItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const services = [
  'Perfuração de Poços Artesianos',
  'Manutenção de Bombas',
  'Assistência Técnica Anauger',
  'Assistência Técnica Claw',
  'Produtos para Piscina',
  'Venda de Equipamentos',
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(1,8,82)] text-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2Flogo.png"
              alt="Casa das Bombas"
              className="h-16 w-auto mb-4"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Há 15 anos oferecendo soluções completas em poços artesianos, manutenção de bombas e assistência técnica
              especializada em Ipatinga e região.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/casadasbombas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[rgb(37,155,208)] flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToId(item.id)}
                    className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-white/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[rgb(37,155,208)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white/80">
                    <a href="tel:+553138270221" className="hover:text-white transition-colors duration-300">
                      (31) 3827-0221
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[rgb(37,155,208)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white/80 break-all">
                    <a
                      href="mailto:casadasbombas@hotmail.com.br"
                      className="hover:text-white transition-colors duration-300"
                    >
                      casadasbombas@hotmail.com.br
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[rgb(37,155,208)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white/80">
                    Rua Crisântemo 04
                    <br />
                    Esperança, Ipatinga/MG
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>© 2026 Casa das Bombas. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
