import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL } from '../lib/whatsapp';
import { scrollToSection } from '../utils/scroll';

const menu = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Localização', id: 'localizacao' },
  { label: 'Contato', id: 'contato' },
];

const services = [
  'Peças Agrícolas',
  'Implementos',
  'Manutenção',
  'Suporte Técnico',
  'Pós Venda',
];

export default function Footer() {
  return (
    <footer className="bg-[#1A385C] text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=novocampo%2Flogo-12-Photoroom.png&version_id=null"
              alt="Novo Campo - Peças e Implementos Agrícolas"
              className="h-12 mb-6"
            />
            <p className="text-white/80 leading-relaxed mb-6">
              Especialistas em peças e implementos agrícolas, oferecendo soluções
              confiáveis para o campo.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/novocampo.dourados"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-[#E1306C] hover:to-[#C13584] transition-all group"
                aria-label="Instagram"
              >
                <Instagram
                  width={20}
                  height={20}
                  className="lucide lucide-instagram group-hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Menu
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[#F8D617]"></span>
            </h3>
            <ul className="space-y-3">
              {menu.map((m) => (
                <li key={m.id}>
                  <button
                    onClick={() => scrollToSection(m.id)}
                    className="text-white/80 hover:text-[#F8D617] transition-colors"
                  >
                    {m.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Serviços
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[#F8D617]"></span>
            </h3>
            <ul className="space-y-3 text-white/80">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Contato
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[#F8D617]"></span>
            </h3>
            <div className="space-y-4 mb-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#1fb855] transition-all w-full justify-center group"
              >
                <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Falar no WhatsApp
              </a>
            </div>
            <div className="space-y-4 text-white/80 text-sm">
              <div className="flex items-start gap-3">
                <Phone
                  width={18}
                  height={18}
                  className="lucide lucide-phone flex-shrink-0 mt-1 text-[#F8D617]"
                />
                <button className="hover:text-[#F8D617] transition-colors text-left">
                  Ver Telefones das Unidades
                </button>
              </div>
              <div className="flex items-start gap-3">
                <Mail
                  width={18}
                  height={18}
                  className="lucide lucide-mail flex-shrink-0 mt-1 text-[#F8D617]"
                />
                <a
                  href="mailto:contato@novocampoagricolas.com.br"
                  className="hover:text-[#F8D617] transition-colors break-all"
                >
                  contato@novocampoagricolas.com.br
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  width={18}
                  height={18}
                  className="lucide lucide-map-pin flex-shrink-0 mt-1 text-[#F8D617]"
                />
                <button className="hover:text-[#F8D617] transition-colors text-left">
                  Rua Benjamin Constant, N° 69<br />Centro, Rio Brilhante - MS
                  <br />CEP: 79130-000
                </button>
              </div>
              <div className="flex items-start gap-3">
                <Instagram
                  width={18}
                  height={18}
                  className="lucide lucide-instagram flex-shrink-0 mt-1 text-[#F8D617]"
                />
                <a
                  href="https://instagram.com/novocampo.dourados"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F8D617] transition-colors"
                >
                  @novocampo.dourados
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white/60 text-sm">
            Copyright © 2025 - Novo Campo Peças e Implementos Agrícolas
          </p>
        </div>
      </div>
    </footer>
  );
}
