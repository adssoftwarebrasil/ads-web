import { Instagram, Facebook, Phone, Mail } from 'lucide-react';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#institucional', label: 'Institucional' },
  { href: '#empreendimentos', label: 'Empreendimentos' },
  { href: '#novidades', label: 'Novidades' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(42,49,51)] text-white py-10 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/manzi/logo%2FLogo%20Manzi%20Construtora%202024%20Branca.png"
              alt="Manzi Construtora"
              className="w-36 sm:w-40 md:w-48 mb-4 sm:mb-5"
            />
            <p className="text-white text-opacity-80 text-xs sm:text-sm font-medium italic mb-4 sm:mb-5">
              CADA PROJETO, UMA HISTÓRIA DE SUCESSO
            </p>
            <p className="text-white text-opacity-70 text-xs sm:text-sm leading-relaxed">
              Construindo sonhos com excelência, qualidade e compromisso desde 2019.
            </p>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Links Rápidos</h3>
            <ul className="space-y-2 sm:space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white text-opacity-70 hover:text-opacity-100 hover:translate-x-1 inline-block transition-all duration-300 cursor-pointer text-sm sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Siga-nos</h3>
            <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="https://www.instagram.com/manziconstrutora"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="lucide lucide-instagram sm:w-5 sm:h-5" width={18} height={18} />
              </a>
              <a
                href="https://www.facebook.com/p/Manzi-Construtora-61569412624155/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="lucide lucide-facebook sm:w-5 sm:h-5" width={18} height={18} />
              </a>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center text-white text-opacity-70 text-xs sm:text-sm">
                <Phone className="lucide lucide-phone mr-2 flex-shrink-0" width={14} height={14} />
                <span>(38) 99917-1314</span>
              </div>
              <div className="flex items-center text-white text-opacity-70 text-xs sm:text-sm">
                <Mail className="lucide lucide-mail mr-2 flex-shrink-0" width={14} height={14} />
                <span className="break-all">contabilcom@yahoo.com.br</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white border-opacity-20 pt-5 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-white text-opacity-60 text-xs sm:text-sm text-center sm:text-left">
              © 2024 Manzi Construtora. Todos os direitos reservados.
            </p>
            <p className="text-white text-opacity-60 text-xs sm:text-sm text-center sm:text-right">
              CNPJ: 34.307.898/0001-67
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
