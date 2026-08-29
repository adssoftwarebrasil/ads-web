import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { WHATSAPP_URL, EMAIL, scrollToSection } from '../lib/constants';

const menuLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const serviceItems = [
  'Modelo de produto R8 Agro',
  'Peças',
  'Manutenção',
  'Pós Venda',
];

export default function Footer() {
  return (
    <footer className="bg-[#1A385C] text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/novocampo%2Flogo-12.png"
              alt="Novo Campo"
              className="h-12 mb-6"
            />
            <p className="text-white/80 leading-relaxed mb-6">
              Especialistas em peças e implementos agrícolas, oferecendo soluções
              confiáveis para o campo.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F8D617] hover:text-[#1A385C] transition-all"
              >
                <Facebook className="lucide lucide-facebook" width={20} height={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F8D617] hover:text-[#1A385C] transition-all"
              >
                <Instagram className="lucide lucide-instagram" width={20} height={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Menu
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[#F8D617]"></span>
            </h3>
            <ul className="space-y-3">
              {menuLinks.map((m) => (
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
              {serviceItems.map((s) => (
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
                className="inline-flex items-center gap-2 bg-[#F8D617] text-[#1A385C] px-6 py-3 rounded-lg font-bold hover:bg-[#e6c615] transition-all w-full justify-center"
              >
                <Phone className="lucide lucide-phone" width={18} height={18} />
                Enviar WhatsApp
              </a>
            </div>
            <div className="space-y-4 text-white/80">
              <div className="flex items-start gap-3">
                <Phone className="lucide lucide-phone flex-shrink-0 mt-1 text-[#F8D617]" width={18} height={18} />
                <a href="tel:6792920122" className="hover:text-[#F8D617] transition-colors">
                  (67) 99292-0122
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="lucide lucide-mail flex-shrink-0 mt-1 text-[#F8D617]" width={18} height={18} />
                <a href={`mailto:${EMAIL}`} className="hover:text-[#F8D617] transition-colors break-all">
                  {EMAIL}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="lucide lucide-map-pin flex-shrink-0 mt-1 text-[#F8D617]" width={18} height={18} />
                <span>
                  Av. Weimar Gonçalves Torres, N° 5435 – Vila São Francisco –
                  Dourados/MS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white/60 text-sm">Copyright © 2025</p>
        </div>
      </div>
    </footer>
  );
}
