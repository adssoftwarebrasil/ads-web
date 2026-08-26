import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const quickLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const servicesList = [
  'Contabilidade Empresarial',
  'Gestão de MEI',
  'Área da Saúde',
  'Planejamento Tributário',
  'Abertura de Empresas',
  'Arquitetos e Designers',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgb(54,55,58)] border-t-4 border-[rgb(202,162,106)]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/exatidao%20contabilidade/img/logo-se-fundo.png"
              alt="Exatidão Contabilidade"
              className="h-12 mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Desde 1968, transformando números em estratégias de sucesso. Contabilidade com tradição, tecnologia e
              compromisso com o crescimento do seu negócio.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/exatidao_contabilidade_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[rgb(202,162,106)] transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/exatidaocontabil/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[rgb(202,162,106)] transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/556232113304"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[rgb(202,162,106)] transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-gray-300 hover:text-[rgb(202,162,106)] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              {servicesList.map((s) => (
                <li key={s}>
                  <span className="text-gray-300 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <div className="flex flex-col gap-2">
                  <a href="tel:+556232113304" className="text-gray-300 hover:text-[rgb(202,162,106)] transition-colors">
                    (62) 3211-3304
                  </a>
                  <a
                    href="tel:+5562984122170"
                    className="text-gray-300 hover:text-[rgb(202,162,106)] transition-colors"
                  >
                    (62) 9 8412-2170
                  </a>
                </div>
              </li>
              <li>
                <a
                  href="mailto:admexatidao@hotmail.com"
                  className="text-gray-300 hover:text-[rgb(202,162,106)] transition-colors break-all"
                >
                  admexatidao@hotmail.com
                </a>
              </li>
              <li className="text-gray-300">
                AV T-2, 2145 - Setor Bueno
                <br />
                Goiânia - GO
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2026 Exatidão Contabilidade. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
