import { Phone, Mail, MapPin } from 'lucide-react';
import {
  WHATSAPP_URL,
  PHONE_DISPLAY,
  EMAIL,
  NAV_LINKS,
  scrollToSection,
} from '../constants';

const servicesList = [
  'Argamassa para Piso',
  'Argamassa para Revestimento',
  'Gesso',
  'Cola de Cerâmica',
  'Rejunte',
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgb(0, 0, 0)', color: 'white' }}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <h3
              className="text-2xl font-bold mb-5"
              style={{ color: 'white' }}
            >
              Boa Massa
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgb(200, 200, 200)' }}
            >
              Especializados na venda de argamassas colantes e rejuntes para
              construção civil. Qualidade e confiança há mais de 10 anos.
            </p>
          </div>
          <div>
            <h4
              className="text-lg font-bold mb-5"
              style={{ color: 'rgb(255, 220, 2)' }}
            >
              Menu
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm hover:opacity-70 transition-opacity text-left"
                    style={{ color: 'rgb(200, 200, 200)' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4
              className="text-lg font-bold mb-5"
              style={{ color: 'rgb(255, 220, 2)' }}
            >
              Serviços
            </h4>
            <ul className="space-y-3">
              {servicesList.map((s) => (
                <li key={s}>
                  <span
                    className="text-sm"
                    style={{ color: 'rgb(200, 200, 200)' }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4
              className="text-lg font-bold mb-5"
              style={{ color: 'rgb(255, 220, 2)' }}
            >
              Contato
            </h4>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center px-6 py-3 rounded-lg font-semibold mb-5 transition-all hover:scale-105"
              style={{ backgroundColor: 'rgb(255, 220, 2)', color: 'rgb(0, 0, 0)' }}
            >
              WhatsApp
            </a>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  color="rgb(255, 220, 2)"
                  strokeWidth={2}
                  className="flex-shrink-0 mt-1"
                />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:opacity-70"
                  style={{ color: 'rgb(200, 200, 200)' }}
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  color="rgb(255, 220, 2)"
                  strokeWidth={2}
                  className="flex-shrink-0 mt-1"
                />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm hover:opacity-70"
                  style={{ color: 'rgb(200, 200, 200)' }}
                >
                  {EMAIL}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  color="rgb(255, 220, 2)"
                  strokeWidth={2}
                  className="flex-shrink-0 mt-1"
                />
                <p
                  className="text-sm"
                  style={{ color: 'rgb(200, 200, 200)' }}
                >
                  Distrito Industrial
                  <br />
                  João Pessoa/PB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="py-5 text-center"
        style={{ backgroundColor: 'rgb(20, 20, 20)' }}
      >
        <p
          className="text-xs lg:text-sm"
          style={{ color: 'rgb(150, 150, 150)' }}
        >
          Copyright © 2025 – Desenvolvido por Parceiro Google
        </p>
      </div>
    </footer>
  );
}
