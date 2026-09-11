import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const menu = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const servicos = [
  'Venda de Equipamentos Elétricos',
  'Treinamento em Manutenção',
  'Consultoria Técnica',
  "Qualidade em Bombas D'água",
  'Reparação de Geradores',
  'Venda de Peças Elétricas',
  'Assistência Técnica WEG',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/eletrofrio%2Fimg%2Flogo-sem-fundo.png"
              alt="Mineiros Eletro Frio"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              Com mais de 20 anos de experiência, oferecemos atendimento diferenciado e serviços de alta qualidade em
              manutenção e revenda de motores elétricos, geradores e bombas d'água.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[rgb(28,85,163)] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/luzimargomesoli/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[rgb(28,85,163)] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Menu</h3>
            <ul className="space-y-3">
              {menu.map((m) => (
                <li key={m.id}>
                  <button onClick={() => scrollTo(m.id)} className="text-gray-400 hover:text-white transition-colors">
                    {m.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {servicos.map((s) => (
                <li key={s} className="text-gray-400">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-[rgb(16,130,201)] mt-1 flex-shrink-0" />
                <span className="ml-3 text-gray-400">
                  R. 17, 1 - Setor São João<br />Mineiros - GO, 75890-000
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-[rgb(16,130,201)] flex-shrink-0" />
                <div className="ml-3">
                  <a href="tel:+556436615151" className="text-gray-400 hover:text-white transition-colors block">
                    (64) 3661-5151
                  </a>
                  <a
                    href="http://wa.me/5564999368011"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors block"
                  >
                    (64) 99936-8011
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-[rgb(16,130,201)] flex-shrink-0" />
                <a href="mailto:eletro_frio@hotmail.com" className="ml-3 text-gray-400 hover:text-white transition-colors">
                  eletro_frio@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
              © 2026 MINEIROS ELETRO FRIO LTDA. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Assistência Técnica Autorizada WEG e Franklin
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
