import { Instagram, Facebook, Phone, MapPin, Mail, Globe } from 'lucide-react';

const servicesLinks = [
  'Conservação e Limpeza',
  'Limpeza de Fachadas',
  'Serviços em Altura',
  'PMOC - Ar Condicionado',
  'Portaria e Zeladoria',
  'Controle de Pragas',
];

const quickLinks = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Nossos Serviços', href: '#servicos' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/geral%20limpeza%2Fimg%2Flogo-sem-fundo.webp"
              alt="Geral Conservação & Limpeza"
              className="h-20 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed mb-6">
              Especialistas em serviços terceirizados com excelência, qualidade e confiança.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/geral.limpeza"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[rgb(2,103,253)] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/geral.limp/?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[rgb(2,103,253)] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5592981671587"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[rgb(2,103,253)] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {servicesLinks.map((s) => (
                <li key={s}>
                  <a href="#servicos" className="text-gray-300 hover:text-[rgb(3,171,255)] transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-300 hover:text-[rgb(3,171,255)] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.gerallimpeza.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[rgb(3,171,255)] transition-colors flex items-center space-x-2"
                >
                  <Globe className="w-4 h-4" />
                  <span>Site Corporativo</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[rgb(3,171,255)] flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  Rua Coronel Sérgio Pessoa, 99 Sala 04<br />
                  Centro - Manaus/AM<br />
                  CEP: 69005-030
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[rgb(3,171,255)] flex-shrink-0" />
                <a href="tel:+5592981671587" className="text-gray-300 hover:text-[rgb(3,171,255)] transition-colors">
                  (92) 98167-1587
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[rgb(3,171,255)] flex-shrink-0" />
                <a
                  href="mailto:geral.limpeza@hotmail.com"
                  className="text-gray-300 hover:text-[rgb(3,171,255)] transition-colors break-all"
                >
                  geral.limpeza@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Geral Conservação &amp; Limpeza. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Desenvolvido com tecnologia e inovação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
