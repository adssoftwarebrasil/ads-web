import { Phone, Mail, MapPin } from 'lucide-react';

const logo =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=sporthorse%2Flogo-1.webp&version_id=null';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="C Medeiros Boutique"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed mb-4">
              Com 20 anos de experiência, somos referência em produtos e acessórios de hipismo em
              Ribeirão Preto.
            </p>
            <p className="text-gray-400 text-sm">
              Atendendo cavaleiros de 4 a 60 anos com excelência e dedicação.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[rgb(0,123,0)]">Navegação</h3>
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-gray-400 hover:text-[rgb(0,123,0)] text-left transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[rgb(0,123,0)]">Contato</h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:16991729461"
                className="flex items-center gap-2 text-gray-400 hover:text-[rgb(0,123,0)] transition-colors"
              >
                <Phone size={18} />
                <span>16-99172-9461</span>
              </a>
              <a
                href="mailto:contato@sporthorse.com.br"
                className="flex items-center gap-2 text-gray-400 hover:text-[rgb(0,123,0)] transition-colors"
              >
                <Mail size={18} />
                <span className="break-all">contato@sporthorse.com.br</span>
              </a>
              <a
                href="https://wa.me/5516991729461"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[rgb(0,123,0)] hover:bg-[rgb(0,140,0)] text-white px-4 py-2 rounded-lg font-semibold transition-colors mt-2"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[rgb(0,123,0)]">Localização</h3>
            <div className="flex items-start gap-2 text-gray-400">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <div>
                <p className="leading-relaxed">
                  Av. Itatiaia, 865
                  <br />
                  Jardim Sumaré
                  <br />
                  Ribeirão Preto - SP
                  <br />
                  CEP: 14.025-240
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 C Medeiros Boutique. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Loja de Hipismo em Ribeirão Preto
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
