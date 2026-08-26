const LOGO =
  'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2F220923897_324038569430804_1400980047283159794_n%201-Photoroom.png';

const quickLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#contato', label: 'Contato' },
];

const services = ['Impressão', 'Material Escolar', 'Xerox', 'Recarga VEM', 'Recarga Telefônica'];

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-16 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={LOGO} alt="Papelaria Vasconcelos" className="h-16 w-auto mb-4" />
            <p className="text-gray-600 leading-relaxed">Há 26 anos levando qualidade e tradição para você.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[rgb(45,52,142)] mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-600 hover:text-[rgb(0,148,216)] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[rgb(45,52,142)] mb-4">Serviços</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="text-gray-600">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[rgb(45,52,142)] mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5581995483408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[rgb(0,148,216)] transition-colors inline-flex items-center gap-2"
                >
                  WhatsApp: (81) 99548-3408
                </a>
              </li>
              <li>
                <a
                  href="mailto:papelariavasconcelos@gmail.com"
                  className="text-gray-600 hover:text-[rgb(0,148,216)] transition-colors break-all"
                >
                  papelariavasconcelos@gmail.com
                </a>
              </li>
              <li className="text-gray-600">
                Estrada dos Remédios, 352
                <br />
                Afogados - Recife - PE
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600">
            © 2025 Papelaria Vasconcelos. Todos os direitos reservados. 26 anos de tradição em Recife.
          </p>
        </div>
      </div>
    </footer>
  );
}
