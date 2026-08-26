import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { WHATSAPP_ACCENTED } from '../constants';

const menuLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Produtos' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const productList = [
  'Conexões Pneumáticas',
  'Acessórios Industriais',
  'Válvulas Industriais',
  'Ferramentas',
  'Mangueiras',
  'Conexões em Inox',
  'Conexões em Latão',
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[rgb(45,48,145)] via-blue-900 to-[rgb(45,48,145)] text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(248,232,48)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=lojadasconexoes%2Fimage%2089.png&version_id=null"
              alt="RA Loja das Conexões"
              className="h-16 w-auto mb-6"
            />
            <p className="text-white/80 leading-relaxed mb-8 text-base">
              A RA Loja das Conexões nasceu em 2014, fruto da parceria entre um pai e sua filha, que desde o início se dedicaram a oferecer produtos de qualidade com honestidade e compromisso.
            </p>
            <a
              href={WHATSAPP_ACCENTED}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgb(248,232,48)] text-[rgb(45,48,145)] px-6 py-3 rounded-full font-bold hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Falar Conosco <ArrowRight size={18} />
            </a>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6 text-[rgb(248,232,48)] border-b border-[rgb(248,232,48)]/30 pb-3">
              Menu
            </h4>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[rgb(248,232,48)] transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6 text-[rgb(248,232,48)] border-b border-[rgb(248,232,48)]/30 pb-3">
              Produtos
            </h4>
            <ul className="space-y-3">
              {productList.map((p) => (
                <li key={p} className="text-white/80 text-sm flex items-start gap-2">
                  <span className="text-[rgb(248,232,48)] mt-1">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6 text-[rgb(248,232,48)] border-b border-[rgb(248,232,48)]/30 pb-3">
              Contato
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="bg-[rgb(248,232,48)]/20 p-2 rounded-lg">
                  <Phone size={18} className="text-[rgb(248,232,48)] flex-shrink-0" />
                </div>
                <div>
                  <a
                    href="tel:+558132413322"
                    className="text-white hover:text-[rgb(248,232,48)] transition-colors block mb-1"
                  >
                    (81) 3241-3322
                  </a>
                  <a
                    href={WHATSAPP_ACCENTED}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[rgb(248,232,48)] transition-colors block text-sm"
                  >
                    (81) 98731-1236
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-[rgb(248,232,48)]/20 p-2 rounded-lg">
                  <Mail size={18} className="text-[rgb(248,232,48)] flex-shrink-0" />
                </div>
                <a
                  href="mailto:contato@ralojadasconexoes.com.br"
                  className="text-white/80 hover:text-[rgb(248,232,48)] transition-colors break-all text-sm"
                >
                  contato@ralojadasconexoes.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-[rgb(248,232,48)]/20 p-2 rounded-lg">
                  <MapPin size={18} className="text-[rgb(248,232,48)] flex-shrink-0" />
                </div>
                <span className="text-white/80 text-sm">
                  AV. SENADOR NILO DE SOUZA COLEHO, 2195 A – OURO PRETO / OLINDA -PE
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm mb-1">CNPJ: 19.482.577/0001-05</p>
              <p className="text-white/40 text-xs">Ouro Preto, Olinda - PE</p>
            </div>
            <div className="text-center">
              <p className="text-white/80 font-semibold mb-1">RA Loja das Conexões</p>
              <p className="text-white/60 text-sm">Copyright © 2026. Todos os direitos reservados.</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm">Soluções industriais com qualidade</p>
              <p className="text-[rgb(248,232,48)] text-xs font-semibold mt-1">Desde 2014</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
