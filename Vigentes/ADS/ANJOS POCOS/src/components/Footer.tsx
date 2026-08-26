import { Instagram, Facebook, Droplets, Phone, Mail, MapPin } from 'lucide-react';
import { WhatsAppIcon, WHATSAPP_URL } from './icons';

const INSTAGRAM_URL = 'https://www.instagram.com/anjos_pocos_artesianos/';
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61559605798615';

const servicos = [
  'Poços Semiartesianos',
  'Poços Artesianos Profundos',
  'Irrigação',
  'Loteamentos',
  'Empresas de Grande Porte',
  'Manutenção de Poços',
];

const links = [
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://storage.lucasmendes.dev/site-sp/anjos%20pocos%20artesianos/img/logo-sem-fundo.webp"
                alt="Anjos Poços Artesianos"
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-blue-100 leading-relaxed mb-6">
              28 anos de experiência em perfuração e manutenção de poços
              artesianos. Qualidade tem nome.
            </p>
            <div className="flex gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Droplets className="w-5 h-5 text-blue-400" />
              Serviços
            </h3>
            <ul className="space-y-3">
              {servicos.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="tel:+556635311026"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    (66) 3531-1026
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="mailto:jd.servicos@hotmail.com.br"
                    className="text-blue-100 hover:text-white transition-colors break-all"
                  >
                    jd.servicos@hotmail.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div className="text-blue-100">
                  R. Jesus e os Apóstolos, 232
                  <br />
                  Jardim Portinari
                  <br />
                  Sinop - MT, 78555-800
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-center md:text-left">
              © 2026 Anjos Poços Artesianos. Todos os direitos reservados.
            </p>
            <p className="text-blue-200 text-center md:text-right">
              Desenvolvido com qualidade e dedicação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
