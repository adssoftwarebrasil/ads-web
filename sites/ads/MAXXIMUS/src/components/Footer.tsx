import { Instagram, MapPin } from 'lucide-react';

const FOOTER_LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=MAXXIMUS%2Flogo%20(1).png&version_id=null ';

const links = [
  { label: 'Início', target: 'inicio' },
  { label: 'Produtos', target: 'produtos' },
  { label: 'Sobre', target: 'sobre' },
  { label: 'Assistência Técnica', target: 'assistencia' },
  { label: 'Contato', target: 'contato' },
];

const produtos = [
  'Roçadeiras',
  'Motosserras',
  'Tratores',
  'Giro Zero',
  'Geradores',
  'Cortadores de Grama',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgb(19,57,94)] text-white py-16">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          <div>
            <img
              src={FOOTER_LOGO}
              alt="Maxximus Logo"
              className="h-16 mb-5 object-contain"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Soluções profissionais em jardinagem e manutenção com preço justo
              e atendimento de excelência.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.target}>
                  <button
                    onClick={() => scrollTo(l.target)}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Produtos</h3>
            <ul className="space-y-2">
              {produtos.map((p) => (
                <li key={p} className="text-white/80">
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5516997891482"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  WhatsApp Ribeirão Preto: (16) 99789-1482
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5516993268596"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  WhatsApp Araraquara: (16) 99326-8596
                </a>
              </li>
              <li>
                <a
                  href="mailto:vendas@maxximusmaquinas.com.br"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  vendas@maxximusmaquinas.com.br
                </a>
              </li>
              <li>
                <a
                  href="mailto:araraquara@maxximusmaquinas.com.br"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  araraquara@maxximusmaquinas.com.br
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.instagram.com/maxximusmaquinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300"
                >
                  <Instagram size={20} strokeWidth={2} className="lucide" />
                  <span>@maxximusmaquinas</span>
                </a>
              </li>
              <li className="text-white/80 text-sm pb-2 border-b border-white/20">
                Seg-Sex: 8h-18h | Sáb: 8h-12h
              </li>
              <li className="pt-2">
                <div className="flex items-start space-x-2 text-white/80">
                  <MapPin
                    size={20}
                    strokeWidth={2}
                    className="lucide mt-1 flex-shrink-0 text-[rgb(244,95,38)]"
                  />
                  <div>
                    <strong className="block text-white text-sm">
                      Filial Araraquara
                    </strong>
                    <span className="text-sm leading-snug">
                      Av. Padre Francisco Salles Colturato, 0473
                      <br />
                      São Geraldo - CEP 14800-000
                    </span>
                  </div>
                </div>
              </li>
              <li className="pt-2">
                <div className="flex items-start space-x-2 text-white/80">
                  <MapPin
                    size={20}
                    strokeWidth={2}
                    className="lucide mt-1 flex-shrink-0 text-[rgb(244,95,38)]"
                  />
                  <div>
                    <strong className="block text-white text-sm">
                      Matriz Ribeirão Preto
                    </strong>
                    <span className="text-sm leading-snug">
                      Av. Caramuru, 840 - Jardim Sumaré
                      <br />
                      CEP 14025-710
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Maxximus Máquinas e Equipamentos. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
