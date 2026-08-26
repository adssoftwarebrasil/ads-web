import { Check, Phone, Instagram } from 'lucide-react';

const menuItems = [
  { label: 'Início', id: 'início' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'serviços' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const servicos = [
  'Venda de Pneus e Acessórios',
  'Troca de Óleo e Filtros',
  'Alinhamento',
  'Balanceamento',
  'Serviços de suspensão',
  'Sistema de Freios',
];

const features = ['Tradicional', 'Especialistas em veículos', 'Inovação constante'];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgb(3,3,4)] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO%2Flogo%2Flogo-atualizada-02.png"
              alt="Auto Center Pneu Zero"
              className="h-16 w-auto mb-6"
            />
            <p className="text-white/80 mb-6 leading-relaxed">
              Desde 1980, o Auto Center Pneu Zero se estabelece como um líder em soluções
              automotivas no Maranhão...
            </p>
            <ul className="space-y-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check
                    width={16}
                    height={16}
                    strokeWidth={2}
                    className="lucide lucide-check text-[rgb(227,17,35)] flex-shrink-0"
                  />
                  <span className="text-white/80 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Menu</h3>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-white/80 hover:text-[rgb(227,17,35)] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3 text-white/80">
              {servicos.map((servico) => (
                <li key={servico}>{servico}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4 text-white/80">
              <li>
                <a href="tel:+5599991458080" className="flex items-center gap-3 group">
                  <div className="bg-[rgb(227,17,35)] text-white p-2 rounded-full transition-transform group-hover:scale-110 flex-shrink-0">
                    <Phone width={18} height={18} strokeWidth={2} className="lucide lucide-phone " />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] font-bold text-[rgb(227,17,35)] uppercase tracking-wide">
                      Agende seu serviço
                    </span>
                    <span className="text-white font-bold text-lg group-hover:text-[rgb(227,17,35)] transition-colors">
                      (99) 99145-8080
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+559930712591" className="flex items-center gap-3 group">
                  <div className="bg-[rgb(227,17,35)] text-white p-2 rounded-full transition-transform group-hover:scale-110 flex-shrink-0">
                    <Phone width={18} height={18} strokeWidth={2} className="lucide lucide-phone " />
                  </div>
                  <span className="text-white/80 font-medium group-hover:text-[rgb(227,17,35)] transition-colors">
                    (99) 3071-2591
                  </span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="mailto:pneuzeroitz@gmail.com"
                  className="hover:text-[rgb(227,17,35)] transition-colors block"
                >
                  pneuzeroitz@gmail.com
                </a>
              </li>
              <li className="pt-2 text-sm leading-relaxed">
                BR-010, 3441, Entroncamento<br />Imperatriz - MA<br />CEP: 65.913-460
              </li>
              <li className="pt-4">
                <a
                  href="https://www.instagram.com/pneuzeromaranhao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[rgb(227,17,35)] transition-colors"
                >
                  <Instagram
                    width={24}
                    height={24}
                    strokeWidth={2}
                    className="lucide lucide-instagram "
                  />
                  <span>@pneuzeromaranhao</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-white/70">Auto Center Pneu Zero Maranhão - Copyright © 2026</p>
        </div>
      </div>
    </footer>
  );
}
