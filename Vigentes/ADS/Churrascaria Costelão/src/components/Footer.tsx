import { UtensilsCrossed, Phone, Mail, MapPin, Clock } from 'lucide-react';

const links = [
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Nossos Serviços', id: 'servicos' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Localização', id: 'localizacao' },
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-[rgb(61,61,67)] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <UtensilsCrossed className="w-8 h-8 text-[rgb(212,178,37)]" />
                <div>
                  <h3 className="font-bold text-xl">Costelão</h3>
                  <p className="text-[rgb(212,178,37)] text-xs">38 anos de tradição</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                O melhor da comida caseira e churrasco assado na hora em Foz do Iguaçu.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-[rgb(212,178,37)]">Links Rápidos</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-gray-400 hover:text-[rgb(212,178,37)] transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-[rgb(212,178,37)]">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <Phone className="w-4 h-4 text-[rgb(212,178,37)] mt-1 flex-shrink-0" />
                  <a
                    href="https://wa.me/5545999434290"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[rgb(212,178,37)] transition-colors"
                  >
                    (45) 99943-4290
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Mail className="w-4 h-4 text-[rgb(212,178,37)] mt-1 flex-shrink-0" />
                  <a
                    href="mailto:duds_07@hotmail.com"
                    className="text-gray-400 hover:text-[rgb(212,178,37)] transition-colors"
                  >
                    duds_07@hotmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-[rgb(212,178,37)] mt-1 flex-shrink-0" />
                  <span className="text-gray-400">
                    Av. JK, 3737
                    <br />
                    Vila Portes, Foz do Iguaçu - PR
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-[rgb(212,178,37)]">Horário</h4>
              <div className="flex items-start gap-2 text-sm mb-4">
                <Clock className="w-4 h-4 text-[rgb(212,178,37)] mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p className="font-semibold text-white mb-1">Segunda a Domingo</p>
                  <p>11h00 às 16h00</p>
                </div>
              </div>
              <a
                href="https://wa.me/5545999434290?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[rgb(212,86,96)] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[rgb(212,178,37)] hover:text-[rgb(61,61,67)] transition-all duration-300 mt-2"
              >
                Fazer Pedido
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2026 Churrascaria Costelão. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 text-sm text-center md:text-right">
                Tradição de 38 anos em Foz do Iguaçu
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
