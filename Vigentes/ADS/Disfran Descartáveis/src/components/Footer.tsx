import { Clock, MessageCircle, Mail, Instagram } from 'lucide-react';

const quickLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 px-8 pb-0">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div>
          <div className="mb-4">
            <img
              src="https://storage.lucasmendes.dev/site-sp/disfran/img/Logo.JPG"
              alt="Disfran Descartáveis"
              className="h-[50px] w-auto bg-white p-1 rounded-lg"
            />
          </div>
          <p className="opacity-90 leading-relaxed">
            26 anos fornecendo soluções em embalagens descartáveis e produtos de limpeza.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-5">Links Rápidos</h3>
          <ul className="list-none flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white no-underline opacity-90 transition-all duration-300 inline-block hover:opacity-100 hover:translate-x-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-5">Contato</h3>
          <ul className="list-none flex flex-col gap-3">
            <li className="flex items-center gap-2.5 opacity-90">
              <Clock className="lucide lucide-clock" width={18} height={18} />
              <span>Seg-Sex: 8h-18h</span>
            </li>
            <li className="flex items-center gap-2.5 opacity-90">
              <Clock className="lucide lucide-clock" width={18} height={18} />
              <span>Sáb: 8h-13h</span>
            </li>
            <li className="flex items-center gap-2.5 opacity-90">
              <MessageCircle className="lucide lucide-message-circle" width={18} height={18} />
              <span>(16) 99999-1998</span>
            </li>
            <li className="flex items-center gap-2.5 opacity-90">
              <Mail className="lucide lucide-mail" width={18} height={18} />
              <span>disfran@com4.com.br</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-5">Redes Sociais</h3>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/disfran_descartaveis/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-primary hover:-translate-y-1"
            >
              <Instagram className="lucide lucide-instagram" width={24} height={24} />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5516999991998&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-primary hover:-translate-y-1"
            >
              <MessageCircle className="lucide lucide-message-circle" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-6 text-center opacity-90">
        <p>© 2025 Disfran Descartáveis - 26 anos de tradição. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
