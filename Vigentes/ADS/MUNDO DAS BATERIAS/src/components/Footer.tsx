import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

const quickLinks = [
  { href: '#produtos', label: 'Produtos' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Delivery' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(32,29,30)] text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/mundo%20das%20baterias%2Fimg%2Flogo.webp"
              alt="Mundo das Baterias"
              className="h-16 mb-4"
            />
            <p className="text-gray-300 mb-4">Empresa familiar com 21 anos de tradição</p>
            <p className="text-sm text-gray-400">Razão Social: J. Mangueira de Souza Ltda</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[rgb(246,234,9)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone width={18} height={18} className="text-[rgb(234,29,34)]" />
                <a
                  href="https://wa.me/5566999146648"
                  className="text-gray-300 hover:text-[rgb(246,234,9)] transition-colors"
                >
                  (66) 99914-6648
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail width={18} height={18} className="text-[rgb(234,29,34)]" />
                <a
                  href="mailto:mundodasbateriasroo@gmail.com"
                  className="text-gray-300 hover:text-[rgb(246,234,9)] transition-colors"
                >
                  mundodasbateriasroo@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Horários</h4>
              <p className="text-sm text-gray-300">Seg-Sex: 07:00 às 17:30</p>
              <p className="text-sm text-gray-300">Sábado: 07:00 às 11:00</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/mundodasbateriasroo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(234,29,34)] p-3 rounded-full hover:bg-red-700 transition-colors"
              >
                <Instagram width={24} height={24} />
              </a>
              <a
                href="#"
                className="bg-[rgb(234,29,34)] p-3 rounded-full hover:bg-red-700 transition-colors"
              >
                <Facebook width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">© 2026 Mundo das Baterias - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
