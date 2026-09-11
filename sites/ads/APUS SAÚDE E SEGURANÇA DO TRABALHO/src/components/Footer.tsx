import { Instagram, Facebook, MapPin, Clock } from 'lucide-react';

const servicesLinks = [
  'Medicina do Trabalho',
  'Segurança do Trabalho',
  'Laudos e Perícias',
  'Consultoria Especializada',
];

const contacts = [
  {
    label: 'ADM',
    email: 'administrativo@apusmed.com.br',
    phone: '(81) 99406-8054',
    tel: '+5581994068054',
  },
  {
    label: 'RECEPÇÃO',
    email: 'recepcao@apusmed.com.br',
    phone: '(81) 99168-0324',
    tel: '+5581991680324',
  },
  {
    label: 'COMERCIAL',
    email: 'comercial2@apusmed.com.br',
    phone: '(81) 99248-7254',
    tel: '+5581992487254',
  },
];

export default function Footer() {
  return (
    <footer id="fale-conosco" className="bg-[rgb(28,9,31)] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/apus%2Fimg%2Flogo-sem-fundo.png"
              alt="APUS"
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Soluções completas em Saúde e Segurança do Trabalho para empresas em Recife e região
              metropolitana.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/apus.sst/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-[rgb(253,144,41)] transition-colors duration-200"
              >
                <Instagram size={20} className="lucide lucide-instagram " />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-[rgb(253,144,41)] transition-colors duration-200"
              >
                <Facebook size={20} className="lucide lucide-facebook " />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-[rgb(253,144,41)]">Serviços</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#servicos"
                    className="text-gray-300 hover:text-[rgb(253,144,41)] transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-[rgb(253,144,41)]">Fale Conosco</h3>
            <div className="space-y-6">
              {contacts.map((c) => (
                <div key={c.label}>
                  <h4 className="font-bold text-white text-sm mb-1 border-l-2 border-[rgb(253,144,41)] pl-2">
                    {c.label}
                  </h4>
                  <div className="text-gray-300 text-sm space-y-1 pl-2.5">
                    <a
                      href={`mailto:${c.email}`}
                      className="block hover:text-[rgb(253,144,41)] transition-colors"
                    >
                      {c.email}
                    </a>
                    <a
                      href={`tel:${c.tel}`}
                      className="block hover:text-[rgb(253,144,41)] transition-colors"
                    >
                      {c.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-[rgb(253,144,41)]">Localização e Horários</h3>
            <div className="flex items-start space-x-3 mb-6">
              <MapPin
                size={20}
                className="lucide lucide-map-pin flex-shrink-0 text-[rgb(253,144,41)] mt-1"
              />
              <span className="text-gray-300 text-sm leading-relaxed">
                Av Governador Agamenon Magalhães 1318, Boa Vista, Recife-PE
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <Clock
                size={20}
                className="lucide lucide-clock flex-shrink-0 text-[rgb(253,144,41)] mt-1"
              />
              <div className="text-gray-300 text-sm space-y-3">
                <div>
                  <span className="block text-white font-medium">Exames:</span>
                  <span>Seg a Sex - 07:00 às 11:30 e 13:00 às 15:00</span>
                </div>
                <div>
                  <span className="block text-white font-medium">Administrativo:</span>
                  <span className="block">Seg a Qui - 08:00 às 18:00</span>
                  <span className="block">Sex - 08:00 às 17:00</span>
                </div>
                <div className="text-xs text-gray-500 pt-1 italic">
                  *Sábados, domingos e feriados fechado.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-400 text-sm">
            © 2026 APUS - Saúde e Segurança do Trabalho. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
