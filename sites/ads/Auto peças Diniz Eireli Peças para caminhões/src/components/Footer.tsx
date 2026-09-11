import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const quickLinks = [
  { label: 'Início', id: 'home' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Contato', id: 'contato' },
];

const productLinks = [
  'Peças para Motor',
  'Sistema de Freios',
  'Suspensão e Molas',
  'Óleos e Filtros',
  'Sistema Elétrico',
  'Diferencial',
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/auto%20pecas%20diniz%2Fimg%2Flogo-fundo-preto.webp"
              alt="Auto Peças Diniz"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed mb-4">
              Desde 1991 fornecendo soluções completas em autopeças para
              caminhões em Medianeira e região.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/dinizautopecas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[rgb(237,23,21)] p-2.5 rounded-lg transition-all transform hover:scale-110"
              >
                <Facebook className="lucide lucide-facebook" width={20} height={20} />
              </a>
              <a
                href="https://www.instagram.com/pecasdiniz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[rgb(237,23,21)] p-2.5 rounded-lg transition-all transform hover:scale-110"
              >
                <Instagram className="lucide lucide-instagram" width={20} height={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-gray-400 hover:text-[rgb(237,23,21)] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Produtos</h3>
            <ul className="space-y-3 text-gray-400">
              {productLinks.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="lucide lucide-map-pin text-[rgb(237,23,21)] flex-shrink-0 mt-1" width={20} height={20} />
                <span className="text-gray-400">
                  Av. 24 de Outubro, 4213
                  <br />
                  Medianeira - PR, 85884-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="lucide lucide-phone text-[rgb(237,23,21)] flex-shrink-0" width={20} height={20} />
                <a
                  href="tel:+554599160175"
                  className="text-gray-400 hover:text-[rgb(237,23,21)] transition-colors"
                >
                  (45) 99916-0175
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="lucide lucide-mail text-[rgb(237,23,21)] flex-shrink-0" width={20} height={20} />
                <a
                  href="mailto:pecas@autopecasdiniz.com.br"
                  className="text-gray-400 hover:text-[rgb(237,23,21)] transition-colors"
                >
                  pecas@autopecasdiniz.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Auto Peças Diniz. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Desenvolvido com excelência para atender você.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
