import { Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const quickLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(34,39,69)] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/j%20n%20materiais%20de%20construcao/img/logo-sem-fundo.png"
              alt="J N Materiais de Construção"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-300 leading-relaxed mb-4">
              Desde 2009 oferecendo qualidade e excelência em materiais de
              construção para você e sua obra.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/jnmateriais2023/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[rgb(216,27,27)] p-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <Instagram width={20} height={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-[rgb(216,27,27)] transition-colors"
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
              <li className="flex items-start gap-3">
                <Phone
                  className="text-[rgb(216,27,27)] mt-1 flex-shrink-0"
                  width={20}
                  height={20}
                />
                <div>
                  <a
                    href="tel:+558499482060"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    (84) 99498-2060
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="text-[rgb(216,27,27)] mt-1 flex-shrink-0"
                  width={20}
                  height={20}
                />
                <div>
                  <a
                    href="mailto:jnc.ferreira@hotmail.com"
                    className="text-gray-300 hover:text-white transition-colors break-all"
                  >
                    jnc.ferreira@hotmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="text-[rgb(216,27,27)] mt-1 flex-shrink-0"
                  width={20}
                  height={20}
                />
                <div className="text-gray-300">
                  Rua Chico Otaviano, 138
                  <br />
                  Centro - São Miguel/RN
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Horário</h3>
            <div className="flex items-start gap-3 mb-4">
              <Clock
                className="text-[rgb(216,27,27)] mt-1 flex-shrink-0"
                width={20}
                height={20}
              />
              <div className="text-gray-300 space-y-2">
                <p>
                  Segunda a Sexta
                  <br />
                  <span className="font-semibold text-white">07:00 - 17:00</span>
                </p>
                <p>
                  Sábado
                  <br />
                  <span className="font-semibold text-white">07:00 - 17:00</span>
                </p>
                <p>
                  Domingo
                  <br />
                  <span className="font-semibold text-[rgb(216,27,27)]">
                    Fechado
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © 2026 J N Materiais de Construção. Todos os direitos reservados.
            </p>
            <p>Desenvolvido com dedicação para nossos clientes</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
